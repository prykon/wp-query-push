<?php

namespace WPQueryPush;

use \Exception as Exception;
use \DateTime as DateTime;

//if (! class_exists('\WPQueryPush\Plugin' ) )
class Plugin
{
    private static $instance = null;

    protected function __construct()
    {
    }
    private function __clone()
    {
    }
    //private function __wakeup() {}

    public static function instance()
    {
        if (null == self::$instance) {
            self::$instance = new Plugin();
        }
        return self::$instance;
        /*
        static $instance = null;
        if (null === $instance) {
        $instance = new Plugin();
        }
        return $instance;
        */
    }

    private $TABLE_NAME_QUERIES = "wpquerypush_queries";
    private $TABLE_NAME_SCHEDULED_TASKS = "wpquerypush_scheduled_tasks";
    private $TABLE_NAME_CONNECTIONS = "wpquerypush_connections";
    private $TABLE_NAME_LOGS = "wpquerypush_logs";

    //private $CRON_HOOK_NAME = "wpquerypush_cron_exec";

    public function wpQueryPushAddCronInterval($schedules)
    {
        $schedules['five_seconds'] = array(
        'interval' => 5,
        'display'  => esc_html__('Every Five Seconds'), );
        return $schedules;
    }

    public function processTask( $query, $connection_id )
    {
        // run the query
        $rs = $this->runQuery( $query );
        do_action( 'qm/debug', 'SEND w/ RS: ' . $rs );
        $data = json_encode( $rs );
        do_action( 'qm/debug', 'SEND w/ ID: ' . $connection_id );
        do_action( 'qm/debug', 'SEND w/ QUERY: ' . $query );
        do_action( 'qm/debug', 'SEND w/ DATA: ' . $data );
        // TODO: lookup the connection
        $url = "https://immigrants-scotia-girls-collecting.trycloudflare.com";
        $headers = array(
            "Content-Type: application/json",
            "Authorization: Bearer 123",
        );
        $ch = curl_init($url);
        //$ts = date_format(date_create('@'. time()), 'c');
        date_default_timezone_set('UTC');
        $ts = date(DateTime::ATOM);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        curl_setopt(
            $ch,
            CURLOPT_HTTPHEADER,
            $headers
        );
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $responseData = curl_exec($ch);
        $errors = curl_error($ch);
        $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        return array(
            "responseData" => $responseData,
            "errors" => $errors,
            "status" => $status,
        );
    }

    /*
    private function renderPluginPage() {
        require_once $WPQUERYPUSH_PLUGIN_BASE . 'templates/app.php';
    }
    */

    /*
    private function initMenu()
    {
        $slug          = "wpquerypush";
        $menu_position = 50;
        $capability    = 'manage_options';
        $logo_icon     = $WPQUERYPUSH_PLUGIN_BASE . 'assets/images/wp-react-kit-logo.png';

        add_menu_page(
            esc_attr__( 'WP Query Push', 'wpquerypush' ),
            esc_attr__( 'WP Query Push', 'wpquerypush' ),
            $capability,
            $slug,
            [ $this, 'render_plugin_page' ],
            $logo_icon,
            $menu_position
        );
            add_menu_page(
                'WP Query Push',
                'WP Query Push',
                'manage_options',
                'wpquerypush',
        [ $this, 'render_plugin_page' ],
                'dashicons-database',
                999999999
            );
    }
     */

    public function activate()
    {
        //add_action( 'wpquerypush_cron_hook', array( $this, 'zzCronExec' ), 10, 1 );
        //add_action( 'wpquerypush_cron_hook', array( get_called_class(), 'zzCronExec' ), 10, 1 );
        // schedule any cronjobs
        // TODO: this will be user specified
        wp_schedule_event(time(), 'every_minute', 'wpquerypush_cron_hook', [ 123 ]);
        wp_schedule_event(time(), 'every_minute', 'wpquerypush_cron_hook', array( 456 ));
        // create any tables
        $this->createTableQueries();
        $this->createTableScheduledTasks();
        $this->createTableConnections();
        $this->createTableLogs();
        // update any options
        update_option("wpquerypush_db_version", "0.1.0");
    }

    public function deactivate()
    {
        // unschedule any cronjobs
        $timestamp = wp_next_scheduled('wpquerypush_cron_hook');
        wp_unschedule_event($timestamp, 'wpquerypush_cron_hook');
        // drop any tables
        // TODO: move to uninstall
        $this->dropTableQueries();
        $this->dropTableScheduledTasks();
        $this->dropTableConnections();
        $this->dropTableLogs();
    }

    public function uninstall()
    {
        // remove any cronjobs
        //remove_action( 'wpquerypush_cron_hook', 'NEEDS TO BE SAME', 10 );
        // drop any tables
        $this->dropTableQueries();
        $this->dropTableScheduledTasks();
        $this->dropTableConnections();
        $this->dropTableLogs();
        // delete any options
        delete_option("wpquerypush_db_version");
    }

    private function createTable($sql)
    {
        include_once ABSPATH . 'wp-admin/includes/upgrade.php';
        dbDelta($sql);
    }

    private function createTableLogs()
    {
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

        $this->createTable($sql);
    }

    private function createTableScheduledTasks()
    {
        global $wpdb;
        $table_name = $wpdb->prefix . $this->TABLE_NAME_SCHEDULED_TASKS;
        $wpdb_collate = $wpdb->collate;
        $sql = "CREATE TABLE {$table_name} (
			id INT NOT NULL AUTO_INCREMENT,
			name VARCHAR(255),
            start_ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            interval_name VARCHAR(255),
            interval_secs INT,
            connection_id INT,
            query TEXT,
			PRIMARY KEY (id)
		)
		COLLATE {$wpdb_collate}";

        $this->createTable($sql);
    }

    private function createTableConnections()
    {
        global $wpdb;
        $table_name = $wpdb->prefix . $this->TABLE_NAME_CONNECTIONS;
        $wpdb_collate = $wpdb->collate;
        $sql = "CREATE TABLE {$table_name} (
			id INT NOT NULL AUTO_INCREMENT,
			name VARCHAR(255),
            type TINYINT,
            config JSON,
			PRIMARY KEY (id)
		)
		COLLATE {$wpdb_collate}";

        $this->createTable($sql);
    }

    private function createTableQueries()
    {
        global $wpdb;
        $table_name = $wpdb->prefix . $this->TABLE_NAME_QUERIES;
        $wpdb_collate = $wpdb->collate;
        $sql = "CREATE TABLE {$table_name} (
			id INT NOT NULL AUTO_INCREMENT,
			query TEXT,
			PRIMARY KEY (id)
		)
		COLLATE {$wpdb_collate}";

        $this->createTable($sql);
    }

    private function dropTable($table_name)
    {
        global $wpdb;
        $sql = "DROP TABLE IF EXISTS $table_name;";
        $wpdb->query($sql);
    }

    private function dropTableLogs()
    {
        global $wpdb;
        $this->dropTable($wpdb->prefix . $this->TABLE_NAME_LOGS);
    }

    private function dropTableScheduledTasks()
    {
        global $wpdb;
        $this->dropTable($wpdb->prefix . $this->TABLE_NAME_SCHEDULED_TASKS);
    }

    private function dropTableConnections()
    {
        global $wpdb;
        $this->dropTable($wpdb->prefix . $this->TABLE_NAME_CONNECTIONS);
    }

    private function dropTableQueries()
    {
        global $wpdb;
        $this->dropTable($wpdb->prefix . $this->TABLE_NAME_QUERIES);
    }

    private function runQuery($query)
    {
        global $wpdb;
        return $wpdb->get_results($query);
    }

    private function runQueryJSON($query)
    {
        $rs = $this->runQuery($query);
        return wp_send_json($rs, 200);
    }

    private function selectStar($table_name)
    {
        global $wpdb;
        $query = "SELECT * FROM " . $wpdb->prefix . $table_name;
        return $this->runQueryJSON($query);
    }

    public function handleGetLogs($request)
    {
        return $this->selectStar($this->TABLE_NAME_LOGS);
    }

    public function handleGetConnections($request)
    {
        return $this->selectStar($this->TABLE_NAME_CONNECTIONS);
    }

    public function handleGetScheduledTasks($request)
    {
        return $this->selectStar($this->TABLE_NAME_SCHEDULED_TASKS);
    }

    public function handleGetQueries($request)
    {
        return $this->selectStar($this->TABLE_NAME_QUERIES);
    }

    public function handleShowTables($request)
    {
        //wp_schedule_event(time(), 'every_minute', 'wpquerypush_cron_hook', array( rand(5, 515) ));
        $query = "SHOW TABLES";
        return $this->runQueryJSON($query);
    }

    public function handleGetintervals($request)
    {
        $intervals = wp_get_schedules();
        return wp_send_json($intervals, 200);
    }

    public function handlePostScheduledTask($request)
    {
        /*
        {
            "schedule": {
                "connection": "2",
                "interval": "daily",
                "name": "D.T v1",
                "start_dt": "2023-03-04T20:28",
                "query": "SELECT * FROM wp_options;"
            }
        }
        */
        // parse request
        $body = $request->get_body();
        $data = json_decode($body, true);
        $name = $data["name"];
        $start_ts = $data["start_ts"];
        $interval_name = $data["interval_name"];
        $interval_secs = $data["interval_secs"];
        $connection_id = $data["connection_id"];
        $query = $data["query"];
        // validate request
        if ( 
            empty($name) ||
            empty($interval_name) ||
            empty($interval_secs) ||
            empty($connection_id) ||
            empty($query)
        ) {
            return wp_send_json([ "error" => "Bad Request" ], 400);
        }
        if ( empty( $start_ts ) ) {
            $start_ts = time();
        } else {
            $start_ts = strtotime($start_ts);
        }
        // insert into db
        global $wpdb;
        $table_name = $wpdb->prefix . $this->TABLE_NAME_SCHEDULED_TASKS;
        $wpdb->insert(
            $table_name,
            array(
                "name" => $name,
                "start_ts" => $start_ts,
                "interval_name" => $interval_name,
                "interval_secs" => $interval_secs,
                "connection_id" => $connection_id,
                "query" => $query
            ),
            array( "%s", "%s", "%s", "%d", "%d", "%s")
        );
        $id = $wpdb->insert_id;
        // schedule cronjob
        // TODO: use interval_name
        wp_schedule_event($start_ts, 'every_minute', 'wpquerypush_cron_hook', array( $id ) );
        // return response
        return wp_send_json([ "id" => $id ], 200);
    }

    public function handlePostConnection($request)
    {
        /*
        {
            "connection": {
                "name": "FB",
                "type": "http",
                "requestData": {
                    "url": "https://wearing-lesser-isle-psychiatry.trycloudflare.com",
                    "headers": [
                        {
                            "key": "Content-Type",
                            "value": "application/json"
                        },
                        {
                            "key": "Authorization",
                            "value": "Bearer 123xyz"
                        }
                    ]
                }
            }
        }
        */
        // parse and validate request
        $body = $request->get_body();
        $data = json_decode($body, true);
        $name = $data["name"];
        $type = $data["type"];
        $requestData = $data["requestData"];
        $url = $requestData["url"];
        // validate request
        if ( 
            empty($name) ||
            empty($type) ||
            empty($url)
        ) {
            return wp_send_json([ "error" => "Bad Request" ], 400);
        }
        // insert into db
        global $wpdb;
        $table_name = $wpdb->prefix . $this->TABLE_NAME_CONNECTIONS;
        $wpdb->insert(
            $table_name,
            array(
            "name" => $name,
            "type" => $type,
            ),
            array( "%s", "%s")
         );
        //"config" => json_encode($requestData),
        return wp_send_json([ "id" => $wpdb->insert_id ], 200);
    }

    public function handleSend($request)
    {
        // parse and validate request
        $body = $request->get_body();
        $data = json_decode($body, true);
        $query = $data["query"];
        $connection_id = $data["connection"];
        // validate request
        if ( 
            empty($query) ||
            empty($connection_id)
        ) {
            return wp_send_json([ "error" => "Bad Request" ], 400);
        }
        // process task (manual)
        $res = $this->processTask($query, $connection_id);
        $responseData = $res["responseData"];
        $errors = $res["errors"];
        $status = $res["status"];
        /*
        if ( empty ( $responseData ) ) {
            $responseData = $errors;
        }
        */
        // insert log into db
        global $wpdb;
        $current_user_id = get_current_user_id();
        $table_name = $wpdb->prefix . $this->TABLE_NAME_LOGS;
        $wpdb->insert(
            $table_name,
            array( 
                "query" => $query,
                "connection_id" => $connection_id,
                "user" => $current_user_id,
                "response" => $responseData,
                "status" => $status
            ),
            array( "%d", "%s", "%s", "%d", "%s", "%s")
        );
        return wp_send_json([ "id" => $wpdb->insert_id ], 200);
    }

    public function handlePostInterval($request)
    {
        // TODO: parse and validate request data
        $key = "every_five_seconds";
        $interval = 5;
        $display = "Every Five Seconds";
        $schedules = wp_get_schedules();
        $schedules[$key] = array(
        "interval" => $interval,
        "display"  => esc_html__($display)
        );
        //return $schedules;
        return wp_send_json([ "id" => $key ], 200);
    }

    public function parseRequestQuery($request)
    {
        $body = $request->get_body();
        $data = json_decode($body, true);
        $query = $data["statement"];
        return $query;
    }

    public function handlePostSaveQuery($request)
    {
        try {
            $query = $this->parseRequestQuery($request);
            if (empty($query) ) {
                return wp_send_json([ "error" => "Bad Request" ], 400);
            }
            // insert query into db
            global $wpdb;
            $table_name = $wpdb->prefix . $this->TABLE_NAME_QUERIES;
            $wpdb->insert(
                $table_name,
                array(
                    "query" => $query
                ),
                array( "%s" )
            );
            return wp_send_json([ "id" => $wpdb->insert_id ], 200);
        } catch (Exception $e) {
            return wp_send_json([ "error" => "Server Error" ], 500);
        }
    }

    public function handleQuery($request)
    {
            //return $this->runQueryJSON("SELECT * FROM wp_dt_activity_log");
        try {
            $query = $this->parseRequestQuery($request);
            if (empty($query) ) {
                return wp_send_json([ "error" => "Bad Request" ], 400);
            }
            /*
            // parse and validate query (only SELECTs permitted)
            $parser = new \PhpMyAdmin\SqlParser\Parser($query);
            foreach ( $parser->statements as $statement ) {
                $flags = \PhpMyAdmin\SqlParser\Utils\Query::getFlags($statement);
                $querytype = $flags["querytype"];
                if ($querytype != "SELECT" ) {
                    return wp_send_json([ "error" => "Invalid Query (only SELECT statements are permitted)" ], 400);
                }
            }
            */
            // return query results
            return $this->runQueryJSON($query);
        } catch (Exception $e) {
            return wp_send_json([ "error" => "Server Error" ], 500);
        }
    }
}
