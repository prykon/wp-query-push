<?php

/*
 * Plugin Name:       WP Query Push
 * Plugin URI:        https://wpquerypush.com
 * Description:       WP Query Push enables flexible, push-based analytics. Schedule SQL queries to be periodically pushed, or push one-off/adhoc queries, to an external service (ie, HTTP/S).
 * Version:           0.5.1
 * Requires at least: 5.2
 * Requires PHP:      7.4
 * Author:            zdmc23
 * Author URI:        https://wpquerypush.com/about
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Update URI:        https://wpquerypush.com/plugin
 * Text Domain:       wp-query-push
 * Domain Path:       /languages
 */

if (!defined('ABSPATH')) {
    exit;
}

define('WPQUERYPUSH_NAME', 'WP Query Push');
define('WPQUERYPUSH_VERSION', '0.5.1');
define('WPQUERYPUSH_SETUP', true);
define('WPQUERYPUSH_PLUGIN_BASE', plugin_basename(__FILE__));
define('WPQUERYPUSH_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('WPQUERYPUSH_PLUGIN_URL', plugin_dir_url(__FILE__));
define('WPQUERYPUSH_TEXTDOMAIN', 'wp-query-push');

#require plugin_dir_path( __FILE__ ) . 'vendor/autoload.php';

require_once plugin_dir_path(__FILE__) . 'includes/class-wp-query-push.php';

require plugin_dir_path(__FILE__) . 'vendor/yahnis-elsts/plugin-update-checker/plugin-update-checker.php';
use YahnisElsts\PluginUpdateChecker\v5\PucFactory;

function wpquerypush_activate()
{
    \WPQueryPush\Plugin::instance()->activate_plugin();
}
register_activation_hook(__FILE__, 'wpquerypush_activate');

function wpquerypush_deactivate()
{
    \WPQueryPush\Plugin::instance()->deactivate_plugin();
}
register_deactivation_hook(__FILE__, 'wpquerypush_deactivate');

function wpquerypush_uninstall()
{
    \WPQueryPush\Plugin::instance()->uninstall();
}
register_uninstall_hook(__FILE__, 'wpquerypush_uninstall');

/*
function wpquerypush_add_cron_interval( $schedules )
{
  return \WPQueryPush\Plugin::instance()->wpQueryPushAddCronInterval( $schedules );
}
add_filter( 'cron_schedules', 'wpquerypush_add_cron_interval' );
*/

function wpquerypush_cron_exec($query, $connection_id)
{
    \WPQueryPush\Plugin::instance()->processTask($query, $connection_id);
}
add_action('wpquerypush_cron_hook', 'wpquerypush_cron_exec', 10, 2);

function register_rest_routes()
{
    $base_route = 'wpquerypush/v1';
    register_rest_route($base_route, '/query', array(
    'methods' => 'POST',
    'callback' => function ($request) {
        return \WPQueryPush\Plugin::instance()->handleQuery($request);
    },
    'permission_callback' => function () {
        return current_user_can('manage_options');
    }
    ));
    register_rest_route($base_route, '/send', array(
    'methods' => 'POST',
    'callback' => function ($request) {
        return \WPQueryPush\Plugin::instance()->handleSend($request);
    },
    'permission_callback' => function () {
        return current_user_can('manage_options');
    }
    ));
    register_rest_route($base_route, '/connections', array(
    'methods' => 'POST',
    'callback' => function ($request) {
        return \WPQueryPush\Plugin::instance()->handlePostConnection($request);
    },
    'permission_callback' => function () {
        return current_user_can('manage_options');
    }
    ));
    register_rest_route($base_route, '/connections/(?P<id>\d+)', array(
    'methods' => 'PUT',
    'callback' => function ($request) {
        return \WPQueryPush\Plugin::instance()->handlePutConnection($request);
    },
    'permission_callback' => function () {
        return current_user_can('manage_options');
    }
    ));
    register_rest_route($base_route, '/connections/(?P<id>\d+)', array(
    'methods' => 'DELETE',
    'callback' => function ($request) {
        return \WPQueryPush\Plugin::instance()->handleDeleteConnection($request);
    },
    'permission_callback' => function () {
        return current_user_can('manage_options');
    }
    ));
    register_rest_route($base_route, '/schedules', array(
    'methods' => 'POST',
    'callback' => function ($request) {
        return \WPQueryPush\Plugin::instance()->handlePostScheduledTask($request);
    },
    'permission_callback' => function () {
        return current_user_can('manage_options');
    }
    ));
    register_rest_route($base_route, '/save-query', array(
    'methods' => 'POST',
    'callback' => function ($request) {
        return \WPQueryPush\Plugin::instance()->handlePostSaveQuery($request);
    },
    'permission_callback' => function () {
        return current_user_can('manage_options');
    }
    ));
    register_rest_route($base_route, '/logs', array(
    'methods' => 'GET',
    'callback' => function ($request) {
        return \WPQueryPush\Plugin::instance()->handleGetLogs($request);
    },
    'permission_callback' => function () {
        return current_user_can('manage_options');
    }
    ));
    register_rest_route($base_route, '/connections', array(
    'methods' => 'GET',
    'callback' => function ($request) {
        return \WPQueryPush\Plugin::instance()->handleGetConnections($request);
    },
    'permission_callback' => function () {
        return current_user_can('manage_options');
    }
    ));
    register_rest_route($base_route, '/intervals', array(
    'methods' => 'GET',
    'callback' => function ($request) {
        return \WPQueryPush\Plugin::instance()->handleGetIntervals($request);
    },
    'permission_callback' => function () {
        return current_user_can('manage_options');
    }
    ));
    register_rest_route($base_route, '/tables', array(
    'methods' => 'GET',
    'callback' => function ($request) {
        return \WPQueryPush\Plugin::instance()->handleShowTables($request);
    },
    'permission_callback' => function () {
        return current_user_can('manage_options');
    }
    ));
}
add_action('rest_api_init', 'register_rest_routes');


function add_plugin_menu_page()
{
    add_menu_page(
        'WP Query Push',
        'WP Query Push',
        'manage_options',
        'wpquerypush',
        'render_plugin_content',
        'dashicons-database-view'
    );
}
add_action('admin_menu', 'add_plugin_menu_page');
function render_plugin_content()
{
    require_once plugin_dir_path(__FILE__) . 'templates/app.php';
    /*
    $metadata = require_once plugin_dir_path( __FILE__ ) . 'build/index.asset.php';
    do_action( 'qm/debug', $metadata );
        //$metadata['dependencies'],
    wp_enqueue_script(
        'zzreactscript',
        plugin_dir_url( __FILE__ ) . 'build/index.js',
        ['wp-element'],
        $metadata['version'],
        true
    );
     */
}

function enqueue_admin_scripts()
{
    /*
    if (
        ! is_admin() ||
        ! isset( $_GET['page'] ) ||
        sanitize_text_field( wp_unslash( $_GET['page'] ) ) !== 'wpquerypush'
    ) {
    */
    if ( is_admin() && ( isset( $_GET['page'] ) && $_GET['page'] === 'wpquerypush' ) ) {
        $metadata = require_once plugin_dir_path(__FILE__) . 'build/index.asset.php';
        wp_enqueue_script(
            'wpquerypush',
            plugin_dir_url(__FILE__) . 'build/index.js',
            $metadata['dependencies'], //['wp-element'],
            $metadata['version'],
            true
        );
        wp_enqueue_style(
            'wpquerypush',
            plugin_dir_url(__FILE__) . 'build/index.css',
            array(),
            $metadata['version'],
            'all'
        );
        wp_localize_script(
            'wpquerypush',
            'wpWQP',
            array(
                'nonce' => wp_create_nonce('wp_rest'),
            )
        );
    }
}
add_action('admin_enqueue_scripts', 'enqueue_admin_scripts');

add_action('plugins_loaded', function () {
    if ( is_admin() && !( wp_doing_cron() )) {
        $myUpdateChecker = PucFactory::buildUpdateChecker(
            'https://raw.githubusercontent.com/zdmc23/wp-query-push/main/plugin.json',
            __FILE__,
            'wp-query-push'
        );
    }
});

function auto_update_specific_plugins($update, $item)
{
    // enable auto-update for *THIS* plugin only
    if ( $item->slug == 'wp-query-push' ) {
        return true;
    } else {
        return $update;
    }
}
add_filter('auto_update_plugin', 'auto_update_specific_plugins', 10, 2);
