<?php



use \Exception as Exception;
use \DateTime as DateTime;

//if (! class_exists('\WPQueryPush\WP_Query_Push' ) )
class WP_Query_Push
{
    private static $instance = null;

    protected function __construct() {
    }

    private function __clone() {
    }
    //private function __wakeup() {}

    public static function instance() {
        if (null == self::$instance) {
            self::$instance = new WP_Query_Push();
        }
        return self::$instance;
        /*
        static $instance = null;
        if (null === $instance) {
        $instance = new WP_Query_Push();
        }
        return $instance;
        */
    }

    private $TABLE_NAME_QUERIES = "wpquerypush_queries";
    private $TABLE_NAME_SCHEDULED_TASKS = "wpquerypush_scheduled_tasks";
    private $TABLE_NAME_CONNECTIONS = "wpquerypush_connections";
    private $TABLE_NAME_LOGS = "wpquerypush_logs";

    //private $CRON_HOOK_NAME = "wpquerypush_cron_exec";

    public function wp_query_push_add_cron_interval($schedules) {
        $schedules['five_seconds'] = array(
        'interval' => 5,
        'display'  => esc_html__('Every Five Seconds'), );
        return $schedules;
    }

    private function get_connection($connection_id) {
        global $wpdb;
        $table_name = $wpdb->prefix . $this->TABLE_NAME_CONNECTIONS;
        $sql = "SELECT * FROM $table_name WHERE id = $connection_id";
        $connection = $wpdb->get_row($sql);
        return $connection;
    }

    private function insert_log($connection_id, $query, $response) {
        global $wpdb;
        $current_user_id = get_current_user_id();
        $table_name = $wpdb->prefix . $this->TABLE_NAME_LOGS;
        $wpdb->insert(
            $table_name,
            array(
                "query" => $query,
                "connection_id" => $connection_id,
                "user" => $current_user_id,
                "response" => $response['responseData'],
                "status" => $response['status']
            ),
            array( "%s", "%d", "%s", "%s", "%s")
        );
        //return wp_send_json([ "id" => $wpdb->insert_id ], 200);
    }

    public function process_task($connection_id, $query) {
        $connection = $this->get_connection($connection_id);
        $requestData = json_decode($connection->config);
        // prep the request
        $url = $requestData->url;
        $headers = $requestData->headers;
        // map headers into curl format
        $mapped_headers = [];
        foreach ($headers as $object) {
            foreach ($object as $key => $value) {
                $mapped_headers[] = "$key: $value";
            }
        }

        $rs = $this->run_query($query);
        $data = json_encode($rs);
        // configure curl
        $ch = curl_init($url);
        //$ts = date_format(date_create('@'. time()), 'c');
        date_default_timezone_set('UTC');
        $ts = date(DateTime::ATOM);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $mapped_headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $responseData = curl_exec($ch);
        $errors = curl_error($ch);
        $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        $response = array(
            "responseData" => $responseData,
            "errors" => $errors,
            "status" => $status,
        );

        $log_id = $this->insert_log($connection_id, $query, $response);
        return $response;
    }

    public function activate_plugin() {
        if ( is_multisite() ) {
            $blog_ids = $this->get_blog_ids();
            foreach ( $blog_ids as $key => $blog_id ) {
                switch_to_blog( $blog_id );
                $this->create_table_connections();
                $this->create_table_logs();
                update_option( 'wpquerypush_db_version', '0.1.0');
                restore_current_blog();
            }
            return;
        }
        $this->create_table_connections();
        $this->create_table_logs();
        update_option( 'wpquerypush_db_version', '0.1.0');
        return;
    }

    public function get_blog_ids() {
        global $wpdb;
        $blog_ids = $wpdb->get_col( "SELECT blog_id FROM {$wpdb->blogs}; " );
        return $blog_ids;
    }

    public function deactivate_plugin() {
    }

    public function delete_cron_jobs() {
        $timestamp = wp_next_scheduled( 'wpquerypush_cron_hook' );
        wp_unschedule_event( $timestamp, 'wpquerypush_cron_hook' );
        remove_action( 'wpquerypush_cron_hook', 'wpquerypush_cron_exec', 10, 2 );
    }

    public function uninstall() {
        if ( is_multisite() ) {
            $blog_ids = $this->get_blog_ids();
            foreach( $blog_ids as $blog_id ) {
                switch_to_blog( $blog_id );
                $this->drop_table_connections();
                $this->drop_table_logs();
                $this->delete_cron_jobs();
                delete_option( 'wpquerypush_db_version' );
                restore_current_blog( $blog_id );
            }
            return;
        }
        $this->drop_table_connections();
        $this->drop_table_logs();
        $this->delete_cron_jobs();
        delete_option( 'wpquerypush_db_version' );
        return;
    }

    private function create_table($sql) {
        include_once ABSPATH . 'wp-admin/includes/upgrade.php';
        dbDelta($sql);
    }

    private function create_table_logs() {
        global $wpdb;
        $table_name = $wpdb->prefix . $this->TABLE_NAME_LOGS;
        $wpdb_collate = $wpdb->collate;
        $sql = "CREATE TABLE {$table_name} (
	    id INT NOT NULL AUTO_INCREMENT,
            ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            user TEXT,
            connection_id INT,
            query TEXT,
            request LONGTEXT,
            response LONGTEXT,
            status VARCHAR(3),
	    PRIMARY KEY (id)
	)
	COLLATE {$wpdb_collate}";
        $this->create_table($sql);
    }

    private function create_table_connections() {
        global $wpdb;
        $table_name = $wpdb->prefix . $this->TABLE_NAME_CONNECTIONS;
        $wpdb_collate = $wpdb->collate;
        $sql = "CREATE TABLE {$table_name} (
            id INT NOT NULL AUTO_INCREMENT,
            name VARCHAR(255),
            type VARCHAR(100),
            config JSON,
            PRIMARY KEY (id)
        )
        COLLATE {$wpdb_collate}";
        $this->create_table($sql);
    }

    private function drop_table( $table_name ) {
        global $wpdb;
        $sql = "DROP TABLE IF EXISTS $table_name;";
        $wpdb->query($sql);
    }

    private function drop_table_logs() {
        global $wpdb;
        $this->drop_table($wpdb->prefix . $this->TABLE_NAME_LOGS);
    }

    private function drop_table_connections() {
        global $wpdb;
        $this->drop_table($wpdb->prefix . $this->TABLE_NAME_CONNECTIONS);
    }
}
