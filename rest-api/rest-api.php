<?php
if ( !defined( 'ABSPATH' ) ) { exit; } // Exit if accessed directly.

class WP_Query_Push_Endpoints
{
    public static function can_access_api( WP_REST_Request $request ) {
        if ( is_user_logged_in() ) {
            return current_user_can( 'manage_options' );
        }

        $api_key = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; // @todo: softcode this
        if (isset( $request['x-api-key'] ) && $request['x-api-key'] === $api_key ) {
            return true;
        }

        return new WP_Error( 'rest_forbidden', 'Unauthorized', [ 'status' => 401 ] );
     }

    public function add_api_routes() {
        $namespace = 'wp-query-push/v1';

        register_rest_route(
            $namespace, '/query', [
                'methods' => 'POST',
                'callback' => [ $this , 'handle_query' ],
                'permission_callback' => [ $this, 'can_access_api' ],
            ]
        );

        register_rest_route(
            $namespace, '/send', [
                'methods' => 'POST',
                'callback' => [ $this , 'handle_send' ],
                'permission_callback' => function() {
                    return current_user_can( 'manage_options' );
                },
            ]
        );

        register_rest_route(
            $namespace, '/connections', [
                'methods' => 'POST',
                'callback' => [ $this , 'handle_post_connection' ],
                'permission_callback' => function() {
                    return current_user_can( 'manage_options' );
                },
            ]
        );

        register_rest_route(
            $namespace, '/connections/(?P<id>\d+)', [
                'methods' => 'PUT',
                'callback' => [ $this , 'handle_put_connection' ],
                'permission_callback' => function() {
                    return current_user_can( 'manage_options' );
                },
            ]
        );

        register_rest_route(
            $namespace, '/connections/(?P<id>\d+)', [
                'methods' => 'DELETE',
                'callback' => [ $this , 'handle_delete_connection' ],
                'permission_callback' => function() {
                    return current_user_can( 'manage_options' );
                },
            ]
        );

        register_rest_route(
            $namespace, '/schedules', [
                'methods' => 'POST',
                'callback' => [ $this, 'handle_post_scheduled_task' ],
                'permission_callback' => function() {
                    return current_user_can( 'manage_options' );
                },
            ]
        );

        register_rest_route(
            $namespace, '/save-query', [
                'methods' => 'POST',
                'callback' => [ $this, 'handle_post_save_query' ],
                'permission_callback' => function() {
                    return current_user_can( 'manage_options' );
                },
            ]
        );

        register_rest_route(
            $namespace, '/logs', [
                'methods' => 'GET',
                'callback' => [ $this, 'handle_get_logs' ],
                'permission_callback' => function() {
                    return current_user_can( 'manage_options' );
                },
            ]
        );

        register_rest_route(
            $namespace, '/connections', [
                'methods' => 'GET',
                'callback' => [ $this, 'handle_get_connections' ],
                'permission_callback' => function() {
                    return current_user_can( 'manage_options' );
                },
            ]
        );

        register_rest_route(
            $namespace, '/intervals', [
                'methods' => 'GET',
                'callback' => [ $this, 'handle_get_intervals' ],
                'permission_callback' => function() {
                    return current_user_can( 'manage_options' );
                },
            ]
        );

        register_rest_route(
            $namespace, '/tables', [
                'methods' => 'GET',
                'callback' => [ $this, 'handle_show_tables' ],
                'permission_callback' => function() {
                    return current_user_can( 'manage_options' );
                },
            ]
        );

    private function run_query( $query ) {
        global $wpdb;
        return $wpdb->get_results( $query );
    }

    private function run_query_json( $query ) {
        $rs = $this->run_query( $query );
        return wp_send_json( $rs, 200 );
    }

    private function select_star( $table_name ) {
        global $wpdb;
        $query = "SELECT * FROM " . $wpdb->prefix . $table_name;
        return $this->run_query_json( $query );
    }

    public function handle_get_logs( WP_REST_Request $request ) {
        return $this->select_star( $this->TABLE_NAME_LOGS );
    }

    public function handle_get_connections( WP_REST_Request $request ) {
        return $this->select_star( $this->TABLE_NAME_CONNECTIONS );
    }

    public function handle_get_scheduled_tasks( WP_REST_Request $request ) {
        return $this->select_star( $this->TABLE_NAME_SCHEDULED_TASKS );
    }

    public function handle_get_queries( WP_REST_Request $request ) {
        return $this->select_star( $this->TABLE_NAME_QUERIES );
    }

    public function handle_show_tables( WP_REST_Request $request ) {
        //wp_schedule_event(time(), 'every_minute', 'wpquerypush_cron_hook', array( rand(5, 515) ));
        $query = "SHOW TABLES";
        return $this->run_query_json( $query );
    }

    public function handle_get_intervals( WP_REST_Request $request ) {
        $intervals = wp_get_schedules();
        return wp_send_json( $intervals, 200 );
    }

    public function handle_post_scheduled_task( WP_REST_Request $request ) {
        /*
        {
            "query": "SELECT * FROM wp_options;",
            "start_dt": "2023-03-04T20:28",
            "interval": "daily",
            "connection": "2"
        }
        */
        // parse request
        $body = $request->get_body();
        $data = json_decode($body, true);
        $query = $data['query'];
        $start_ts = $data['start_ts'];
        $interval = $data['interval'];
        $connection_id = $data['connection'];
        // validate request
        if (
            empty( $query ) ||
            empty($interval) ||
            empty($connection_id)
        ) {
            return wp_send_json( [ 'error' => 'Bad Request' ], 400 );
        }
        if ( empty($start_ts) ) {
            $start_ts = time();
        } else {
            $start_ts = strtotime($start_ts);
        }
        /*
        // insert into db
        global $wpdb;
        $table_name = $wpdb->prefix . $this->TABLE_NAME_SCHEDULED_TASKS;
        $wpdb->insert(
            $table_name,
            array(
                "name" => $name,
                "start_ts" => $start_ts,
                "interval_key" => $interval,
                "connection_id" => $connection_id,
                "query" => $query
            ),
            array( "%s", "%s", "%s", "%d", "%d", "%s")
        );
        $id = $wpdb->insert_id;
        */
        // schedule cronjob
        wp_schedule_event( $start_ts, $interval, 'wpquerypush_cron_hook', [ $connection_id, $query ] );
        // return response
        return wp_send_json( [], 200 );
    }

    public function handle_post_connection( WP_REST_Request $request ) {
        /*
        {
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
        */

        $body = $request->get_body();
        $data = json_decode( $body, true );
        $name = $data['name'];
        $type = $data['type'];
        $requestData = $data['requestData'];
        $url = $requestData['url'];

        if ( empty( $name ) || empty( $type ) || empty( $url ) ) {
            return wp_send_json([ "error" => "Bad Request" ], 400);
        }

        global $wpdb;
        $table_name = $wpdb->prefix . $this->TABLE_NAME_CONNECTIONS;
        $wpdb->insert(
            $table_name,
            [
            'name' => $name,
            'type' => $type,
            'config' => json_encode($requestData),
            ],
            [ "%s", "%s", "%s" ]
        );
        return wp_send_json( [ 'id' => $wpdb->insert_id ], 200 );
    }

    public function handle_put_connection( WP_REST_Request $request ) {
        $id = $request->get_param( 'id' );
        if ( empty($id) ) {
            return wp_send_json( [ 'error' => 'Bad Request' ], 400 );
        }
        // parse and validate request
        $body = $request->get_body();
        $data = json_decode( $body, true );
        $name = $data['name'];
        $type = $data['type'];
        $requestData = $data['requestData'];
        $url = $requestData['url'];
        // validate request
        if ( empty( $name ) || empty( $type ) || empty( $url ) ) {
            return wp_send_json( [ 'error' => 'Bad Request' ], 400 );
        }
        global $wpdb;
        $table_name = $wpdb->prefix . $this->TABLE_NAME_CONNECTIONS;
        $wpdb->update(
            $table_name,
            [
                'name' => $name,
                'type' => $type,
                'config' => json_encode($requestData),
            ],
            [ 'id' => $id ],
            [ "%s", "%s", "%s" ],
            [ "%d" ]
        );
        return wp_send_json(null, 204);
    }

    public function handle_delete_connection( WP_REST_Request $request ) {
        $id = $request->get_param( 'id' );
        if ( empty( $id ) ) {
            return wp_send_json( [ 'error' => 'Bad Request' ], 400 );
        }
        global $wpdb;
        $table_name = $wpdb->prefix . $this->TABLE_NAME_CONNECTIONS;
        $wpdb->delete(
            $table_name,
            [ 'id' => $id ],
            [ "%d" ]
        );
        return wp_send_json( null, 204 );
    }

    public function handle_send( WP_REST_Request $request ) {
        // parse and validate request
        $body = $request->get_body();
        $data = json_decode( $body, true );
        $query = $data['query'];
        $connection_id = $data['connection'];
        // validate request
        if ( empty( $query ) || empty($connection_id) ) {
            return wp_send_json([ "error" => "Bad Request" ], 400);
        }
        // process task (manual)
        $res = $this->process_task($connection_id, $query);
        $responseData = $res['responseData'];
        $errors = $res['errors'];
        $status = $res['status'];
        /*
        if ( empty ( $responseData ) ) {
            $responseData = $errors;
        }
        */
        return wp_send_json( [], 200 );
    }

    public function handle_post_interval( WP_REST_Request $request ) {
        // TODO: parse and validate request data
        $key = 'every_five_seconds';
        $interval = 5;
        $display = 'Every Five Seconds';
        $schedules = wp_get_schedules();
        $schedules[$key] = [
        'interval' => $interval,
        'display'  => esc_html__( $display )
        ];
        return wp_send_json( [ 'id' => $key ], 200 );
    }

    public function parse_request_query( WP_REST_Request $request ) {
        $body = $request->get_body();
        $data = json_decode($body, true);
        $query = $data['statement'];
        return $query;
    }

    public function handle_post_save_query( WP_REST_Request $request ) {
        try {
            $query = $this->parse_request_query($request);
            if ( empty( $query ) ) {
                return wp_send_json( [ 'error' => 'Bad Request' ], 400 );
            }

            global $wpdb;
            $table_name = $wpdb->prefix . $this->TABLE_NAME_QUERIES;
            $wpdb->insert(
                $table_name,
                [ 'query' => $query ],
                [ "%s" ] );
            return wp_send_json( [ 'id' => $wpdb->insert_id ], 200 );
        } catch ( Exception $e ) {
            return wp_send_json( [ 'error' => 'Server Error' ], 500 );
        }
    }

    public function handle_query( WP_REST_Request $request ) {
        // return $this->run_query_json("SELECT * FROM wp_dt_activity_log");
        try {
            $query = $this->parse_request_query($request);
            if ( empty( $query ) ) {
                return wp_send_json( [ 'error' => 'Bad Request' ], 400 );
            }
            /*
            // parse and validate query (only SELECTs permitted)
            $parser = new \PhpMyAdmin\SqlParser\Parser( $query );
            foreach ( $parser->statements as $statement ) {
                $flags = \PhpMyAdmin\SqlParser\Utils\Query::getFlags($statement);
                $querytype = $flags["querytype"];
                if ($querytype != "SELECT" ) {
                    return wp_send_json([ "error" => "Invalid Query (only SELECT statements are permitted)" ], 400);
                }
            }
            */
            // return query results
            return $this->run_query_json( $query );
        } catch ( Exception $e ) {
            return wp_send_json( [ 'error' => 'Server Error' ], 500 );
        }
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