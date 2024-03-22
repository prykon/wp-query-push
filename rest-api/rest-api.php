<?php
if ( !defined( 'ABSPATH' ) ) { exit; } // Exit if accessed directly.

class WP_Query_Push_Endpoints
{
    public static function nonce_check( WP_REST_Request $request ) {
        $nonce = $request->get_header('X-WP-Nonce');
        if ( isset( $nonce ) && wp_verify_nonce( sanitize_text_field( wp_unslash( $nonce ) ), 'wp_rest' ) ) {
            return true;
        }
        return new WP_Error( 'rest_forbidden', 'Unauthorized', [ 'status' => 401 ] );
    }

    public function can_access_api( WP_REST_Request $request ) {
        $nonce = $request->get_header('X-WP-Nonce');
        if ( isset( $nonce ) && wp_verify_nonce( sanitize_text_field( wp_unslash( $nonce ) ), 'wp_rest' ) ) {
            return true;
        }

        $api_key_header = $request->get_header('x-api-key');
        if ( isset( $api_key_header ) ) {
            $api_key = sanitize_text_field( wp_unslash( $api_key_header ) );
            $key_is_valid = $this->check_api_key_validity( $api_key );
            if ( $key_is_valid ) {
                return true;
            }
        }
        return new WP_Error( 'rest_forbidden', 'Unauthorized', [ 'status' => 401 ] );
     }

    public function add_api_routes() {
        $namespace = 'wp-query-push/v1';

        register_rest_route(
            $namespace, '/send', [
                'methods' => 'POST',
                'callback' => [ $this , 'handle_send' ],
                'permission_callback' => [ $this, 'nonce_check' ],
            ]
        );

        register_rest_route(
            $namespace, '/connections', [
                'methods' => 'POST',
                'callback' => [ $this , 'handle_post_connection' ],
                'permission_callback' => [ $this, 'nonce_check' ],
            ]
        );

        register_rest_route(
            $namespace, '/connections/(?P<id>\d+)', [
                'methods' => 'PUT',
                'callback' => [ $this , 'handle_put_connection' ],
                'permission_callback' => [ $this, 'nonce_check' ],
            ]
        );

        register_rest_route(
            $namespace, '/connections/(?P<id>\d+)', [
                'methods' => 'DELETE',
                'callback' => [ $this , 'handle_delete_connection' ],
                'permission_callback' => [ $this, 'nonce_check' ],
            ]
        );

        register_rest_route(
            $namespace, '/schedules', [
                'methods' => 'POST',
                'callback' => [ $this, 'handle_post_scheduled_task' ],
                'permission_callback' => [ $this, 'nonce_check' ],
            ]
        );

        register_rest_route(
            $namespace, '/logs', [
                'methods' => 'GET',
                'callback' => [ $this, 'handle_get_logs' ],
                'permission_callback' => [ $this, 'nonce_check' ],
            ]
        );

        register_rest_route(
            $namespace, '/queries', [
                'methods' => 'GET',
                'callback' => [ $this, 'handle_get_queries' ],
                'permission_callback' => [ $this, 'nonce_check' ],
            ]
        );

        register_rest_route(
            $namespace, '/queries', [
                'methods' => 'PUT',
                'callback' => [ $this, 'handle_put_query' ],
                'permission_callback' => [ $this, 'nonce_check' ],
            ]
        );

        register_rest_route(
            $namespace, '/queries', [
                'methods' => 'POST',
                'callback' => [ $this, 'handle_query' ],
                'permission_callback' => [ $this, 'can_access_api' ],
            ]
        );

        register_rest_route(
            $namespace, '/queries/(?P<id>\d+)', [
                'methods' => 'DELETE',
                'callback' => [ $this, 'handle_delete_query' ],
                'permission_callback' => [ $this, 'nonce_check' ],
            ]
        );

        register_rest_route(
            $namespace, '/connections', [
                'methods' => 'GET',
                'callback' => [ $this, 'handle_get_connections' ],
                'permission_callback' => [ $this, 'nonce_check' ],
            ]
        );

        register_rest_route(
            $namespace, '/intervals', [
                'methods' => 'GET',
                'callback' => [ $this, 'handle_get_intervals' ],
                'permission_callback' => [ $this, 'nonce_check' ],
            ]
        );

        register_rest_route(
            $namespace, '/tables', [
                'methods' => 'GET',
                'callback' => [ $this, 'handle_show_tables' ],
                'permission_callback' => [ $this, 'nonce_check' ],
            ]
        );

        register_rest_route(
            $namespace, '/create-new-api-key', [
                'methods' => 'POST',
                'callback' => [ $this , 'create_new_api_key' ],
                'permission_callback' => [ $this, 'nonce_check' ],
            ]
        );

        register_rest_route(
            $namespace, '/get-api-hints', [
                'methods' => 'GET',
                'callback' => [ $this , 'get_api_hints' ],
                'permission_callback' => [ $this, 'nonce_check' ],
            ]
        );

        register_rest_route(
            $namespace, '/delete-api-key-from-hint', [
                'methods' => 'POST',
                'callback' => [ $this , 'delete_api_key_from_hint' ],
                'permission_callback' => [ $this, 'nonce_check' ],
            ]
        );

    }

    public static function run_query( $query ) {
        global $wpdb;
        return $wpdb->get_results( $query );
    }

    private function run_query_json( $query ) {
        $rs = $this->run_query( $query );
        return wp_send_json( $rs, 200 );
    }

    public static function add_new_query( $query, $connection_id ) {
        global $wpdb;
        $table_name =  $wpdb->prefix . WP_Query_Push::instance()->TABLE_NAME_QUERIES;
        $result = $wpdb->insert(
            $table_name,
            array(
                'query' => $query,
                'id_connection' => $connection_id,
            )
        );

        if ( $result ) {
            return $wpdb->insert_id;
        } else {
            return false;
        }
    }

    private function select_star( $table_name ) {
        global $wpdb;
        $query = "SELECT * FROM " . $wpdb->prefix . $table_name;
        return $this->run_query_json( $query );
    }

    public function handle_get_logs( WP_REST_Request $request ) {
        global $wpdb;
        $table_name = $wpdb->prefix . WP_Query_Push::instance()->TABLE_NAME_LOGS;
        $query = "SELECT * FROM $table_name ORDER BY id DESC";
        return $this->run_query_json( $query );
    }

    public function handle_get_connections( WP_REST_Request $request ) {
        return $this->select_star( WP_Query_Push::instance()->TABLE_NAME_CONNECTIONS );
    }

    public function handle_get_scheduled_tasks( WP_REST_Request $request ) {
        return $this->select_star( WP_Query_Push::instance()->TABLE_NAME_SCHEDULED_TASKS );
    }

    public function handle_get_queries() {
        global $wpdb;
        $queries_table = $wpdb->prefix . WP_Query_Push::instance()->TABLE_NAME_QUERIES;
        $connections_table = $wpdb->prefix . WP_Query_Push::instance()->TABLE_NAME_CONNECTIONS;
        $query = "SELECT q.id, q.query, c.name as connection_name
                    FROM $queries_table q
                    INNER JOIN $connections_table c
                    ON q.id_connection = c.id";
        return $this->run_query_json( $query );
    }

    public function handle_put_query( WP_REST_Request $request ) {
        $id = $request->get_param( 'id' );
        $query = $request->get_param( 'query' );
        if ( empty( $id ) || empty( $query ) ) {
            return wp_send_json( [ 'error' => 'Bad Request' ], 400 );
        }
        // parse and validate request
        $body = $request->get_body();
        $data = json_decode( $body, true );
        $query_id = $data['id'];
        $query = $data['query'];
        // validate request
        if ( empty( $query_id ) ) {
            return wp_send_json( [ 'error' => 'Bad Request' ], 400 );
        }
        global $wpdb;
        $table_name = $wpdb->prefix . WP_Query_push::instance()->TABLE_NAME_QUERIES;
        $wpdb->update(
            $table_name,
            [ 'query' => $query ],
            [ 'id' => $query_id ],
            [ '%s' ],
            [ '%d' ]
        );
        return wp_send_json( null, 204 );
    }

    public function handle_show_tables( WP_REST_Request $request ) {
        $query = "SHOW TABLES;";
        return $this->run_query_json( $query );
    }

    public function handle_get_intervals( WP_REST_Request $request ) {
        $intervals = wp_get_schedules();
        return wp_send_json( $intervals, 200 );
    }

    public function handle_post_scheduled_task( WP_REST_Request $request ) {
        // parse request
        $body = $request->get_body();
        $data = json_decode($body, true);
        $query = $data['query'];
        $start_dt = $data['start_dt'];
        $interval = $data['interval'];
        $connection_id = (int)$data['connection'];
        // validate request
        if (
            empty( $query ) ||
            empty( $interval ) ||
            empty( $connection_id )
        ) {
            return wp_send_json( [ 'error' => 'Bad Request' ], 400 );
        }
        if ( empty( $start_dt ) ) {
            $start_dt = time();
        } else {
            $start_dt = strtotime( $start_dt );
        }

        $new_query_id = $this->add_new_query( $query, $connection_id );
        if ( !$new_query_id ) {
            return False;
        }

        // schedule cronjob
        wp_schedule_event( $start_dt, $interval, 'wpquerypush_cron_hook', [ $connection_id, $new_query_id ] );
        // return response
        return wp_send_json( [], 200 );
    }

    public function handle_post_connection( WP_REST_Request $request ) {
        // parse request
        $body = $request->get_body();
        $data = json_decode( $body, true );
        $name = $data['name'];
        $type = $data['type'];
        $request_data = $data['requestData'];
        $url = $request_data['url'];

        if ( empty( $name ) || empty( $type ) || empty( $url ) ) {
            return wp_send_json([ "error" => "Bad Request" ], 400);
        }

        global $wpdb;
        $table_name = $wpdb->prefix . WP_Query_Push::instance()->TABLE_NAME_CONNECTIONS;
        // create table on-demand if it does not exist
        WP_Query_Push::instance()->create_table_connections();
        // insert connection
        $wpdb->insert(
            $table_name,
            [
            'name' => $name,
            'type' => $type,
            'config' => json_encode( $request_data ),
            ],
            [ "%s", "%s", "%s" ]
        );
        return wp_send_json( [ 'id' => $wpdb->insert_id ], 200 );
    }

    public function handle_put_connection( WP_REST_Request $request ) {
        $id = $request->get_param( 'id' );
        if ( empty( $id ) ) {
            return wp_send_json( [ 'error' => 'Bad Request' ], 400 );
        }
        // parse and validate request
        $body = $request->get_body();
        $data = json_decode( $body, true );
        $name = $data['name'];
        $type = $data['type'];
        $request_data = $data['requestData'];
        $url = $request_data['url'];
        // validate request
        if ( empty( $name ) || empty( $type ) || empty( $url ) ) {
            return wp_send_json( [ 'error' => 'Bad Request' ], 400 );
        }
        global $wpdb;
        $table_name = $wpdb->prefix . WP_Query_Push::instance()->TABLE_NAME_CONNECTIONS;
        $wpdb->update(
            $table_name,
            [
                'name' => $name,
                'type' => $type,
                'config' => json_encode( $request_data ),
            ],
            [ 'id' => $id ],
            [ "%s", "%s", "%s" ],
            [ "%d" ]
        );
        return wp_send_json( null, 204 );
    }

    public function handle_delete_connection( WP_REST_Request $request ) {
        $id = $request->get_param( 'id' );
        if ( empty( $id ) ) {
            return wp_send_json( [ 'error' => 'Bad Request' ], 400 );
        }
        global $wpdb;
        $table_name = $wpdb->prefix . WP_Query_Push::instance()->TABLE_NAME_CONNECTIONS;
        $wpdb->delete(
            $table_name,
            [ 'id' => $id ],
            [ "%d" ]
        );
        return wp_send_json( null, 204 );
    }

    public function handle_delete_query( WP_REST_Request $request ) {
        $id = $request->get_param( 'id' );
        if ( empty( $id ) ) {
            return wp_send_json( [ 'error' => 'Bad Request' ], 400 );
        }
        global $wpdb;
        $table_name = $wpdb->prefix . WP_Query_Push::instance()->TABLE_NAME_QUERIES;
        $wpdb->delete(
            $table_name,
            [ 'id' => $id ],
            [ "%d" ]
        );
        return wp_send_json( null, 204 );
    }
    public function handle_update_query( WP_REST_Request $request ) {
        $body = $request->get_body();
        $data = json_decode( $body, true );
        $id = $data['id'];
        $query = $data['query'];

        if ( empty( $query ) || empty( $id ) ) {
            return wp_send_json([ "error" => "Bad Request" ], 400);
        }

        global $wpdb;
        $table_name = $wpdb->prefix . WP_Query_Push::instance()->TABLE_NAME_QUERIES;
        $wpdb->update( $table_name, [ 'query' => $query ], [ 'id' => $id ] );
        return true;
    }

    public function handle_send( WP_REST_Request $request ) {
        // parse and validate request
        $body = $request->get_body();
        $data = json_decode( $body, true );
        $query = $data['query'];
        $connection_id = $data['connection'];
        // validate request
        if ( empty( $query ) || empty( $connection_id ) ) {
            return wp_send_json([ "error" => "Bad Request" ], 400);
        }
        // process task (manual)
        $res = WP_Query_Push::instance()->process_task( $connection_id, $query );
        $response_data = $res['response_data'];
        $errors = $res['errors'];
        $status = $res['status'];
        /*
        if ( empty ( $response_data ) ) {
            $response_data = $errors;
        }
        */
        return wp_send_json( [], 200 );
    }

    public function parse_request_query( WP_REST_Request $request ) {
        // parse request
        $body = $request->get_body();
        $data = json_decode($body, true);
        $query = $data['statement'];
        return $query;
    }

    public function handle_query( WP_REST_Request $request ) {
        try {
            $query = $this->parse_request_query( $request );
            if ( empty( $query ) ) {
                return wp_send_json( [ 'error' => 'Bad Request' ], 400 );
            }
            return $this->run_query_json( $query );
        } catch ( Exception $e ) {
            return wp_send_json( [ 'error' => 'Server Error' ], 500 );
        }
    }

    private function get_api_keys() {
        $api_keys = get_option( 'wpquerypush_api_keys' );
        if ( $api_keys ) {
            return $api_keys;
        }
        return false;
    }

    private function get_api_keys_hashes() {
        $api_keys = get_option( 'wpquerypush_api_keys' );
        $api_hash = [];
        foreach( $api_keys as $key => $value ) {
            $api_hash[] = $value['api_hash'];
        }
        return $api_hash;
    }

    public function get_api_hints() {
        $api_keys = $this->get_api_keys();
        $api_hints = [];
        foreach( $api_keys as $key => $value ) {
            $api_hints[] = $value['api_hint'];
        }
        return $api_hints;
    }

    private function check_api_key_validity( $api_key ) {
        $all_api_keys_hashes = $this->get_api_keys_hashes();
        foreach ( $all_api_keys_hashes as $saved_hash ) {
            if ( wp_check_password( $api_key, $saved_hash ) ) {
                return true;
            }
        }
        return false;
    }

    private function generate_api_key() {
        $random_bytes = random_bytes( 32 );
        $api_key = bin2hex( $random_bytes );
        return $api_key;
    }

    public function create_new_api_key( WP_REST_Request $request ) {
        $new_api_key = $this->generate_api_key();
        $existing_api_keys = get_option( 'wpquerypush_api_keys' );
        if ( empty( $existing_api_keys ) ) {
            $existing_api_keys = [];
        }

        $new_api_option = array( 
            'api_hash' => wp_hash_password( $new_api_key ),
            'api_hint' => substr( $new_api_key, -7 )
        );

        array_push( $existing_api_keys, $new_api_option );
        update_option( 'wpquerypush_api_keys', $existing_api_keys, false );
        return $new_api_key;
    }

    public function delete_api_key_from_hint( WP_REST_Request $request ) {
        $params = $request->get_params();
        if ( !isset( $params['hint'] ) || empty( $params['hint'] ) ) {
            return wp_send_json( [ 'error' => 'Bad Request' ], 400 );
        }
        $api_hint = sanitize_text_field( wp_unslash( $params['hint'] ) );

        $api_keys = $this->get_api_keys();
        foreach ($api_keys as $key => $value) {
            if ( isset( $value['api_hint'] ) && $value['api_hint'] === $api_hint ) {
                unset( $api_keys[$key] );
            }
        }
        update_option( 'wpquerypush_api_keys', $api_keys, false );
        return $api_hint;
    }

    private static $_instance = null;
    public static function instance() {
        if ( is_null( self::$_instance ) ) {
            self::$_instance = new self();
        }
        return self::$_instance;
    } // End instance()


    public function __construct() {
        add_action( 'rest_api_init', [ $this, 'add_api_routes' ] );
    }
}

WP_Query_Push_Endpoints::instance();
