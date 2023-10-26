<?php

/**
 * Plugin Name:       WP Query Push
 * Plugin URI:        https://wpquerypush.com
 * Description:       WP Query Push enables flexible, push-based analytics. Schedule SQL queries to be periodically pushed, or push one-off/adhoc queries, to an external service (ie, HTTP/S).
 * Version:           0.7.1
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

if ( !defined( 'ABSPATH' ) ) {
    exit;
}

define( 'WPQUERYPUSH_NAME', 'WP Query Push' );
define( 'WPQUERYPUSH_VERSION', '0.7.1' );
define( 'WPQUERYPUSH_SETUP', true );
define( 'WPQUERYPUSH_PLUGIN_BASE', plugin_basename( __FILE__ ) );
define( 'WPQUERYPUSH_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'WPQUERYPUSH_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
define( 'WPQUERYPUSH_TEXTDOMAIN', 'wp-query-push' );

require_once( 'rest-api/rest-api.php' );
require_once( 'includes/class-wp-query-push.php');
require( 'vendor/yahnis-elsts/plugin-update-checker/plugin-update-checker.php' );
use YahnisElsts\PluginUpdateChecker\v5\PucFactory;

add_action( 'admin_menu', 'add_plugin_menu_page' );
add_action( 'admin_enqueue_scripts', 'enqueue_admin_scripts' );
add_action( 'wpquerypush_cron_hook', 'wpquerypush_cron_exec', 10, 2 );
add_action( 'plugins_loaded', 'my_update_checker' );

add_filter( 'auto_update_plugin', 'auto_update_specific_plugins', 10, 2 );

function add_plugin_menu_page() {
    add_menu_page( 'WP Query Push', 'WP Query Push', 'manage_options', 'wp-query-push', 'render_plugin_content', 'dashicons-database-view' );
}

register_activation_hook(__FILE__, 'wpquerypush_activate');
register_deactivation_hook(__FILE__, 'wpquerypush_deactivate');
register_uninstall_hook(__FILE__, 'wpquerypush_uninstall');


function wpquerypush_activate() {
    WP_Query_Push::instance()->activate_plugin();
}

function wpquerypush_deactivate() {
    WP_Query_Push::instance()->deactivate_plugin();
}

function wpquerypush_uninstall() {
    WP_Query_Push::instance()->uninstall();
}

function enqueue_admin_scripts() {
    if ( is_admin() && ( isset( $_GET['page'] ) && $_GET['page'] === 'wp-query-push' ) ) {
        $metadata = include_once plugin_dir_path( __FILE__ ) . 'build/index.asset.php';
        wp_enqueue_script( 'wpquerypush', plugin_dir_url( __FILE__ ) . 'build/index.js', $metadata['dependencies'], $metadata['version'], true );
        wp_enqueue_style( 'wpquerypush', plugin_dir_url( __FILE__ ) . 'build/index.css', array(), $metadata['version'], 'all' );
        wp_localize_script( 'wpquerypush', 'wpWQP', [ 'nonce' => wp_create_nonce( 'wp_rest' ) ] );
    }
}

function wpquerypush_cron_exec( $query, $connection_id ) {
    WP_Query_Push::instance()->process_task( $query, $connection_id );
}

function render_plugin_content() {
    include_once plugin_dir_path( __FILE__ ) . 'templates/app.php';
}

function my_update_checker() {
    if (is_admin() && !( wp_doing_cron() )) {
        $myUpdateChecker = PucFactory::buildUpdateChecker(
            'https://raw.githubusercontent.com/zdmc23/wp-query-push/main/plugin.json',
            __FILE__,
            'wp-query-push'
        );
    }
}

function auto_update_specific_plugins($update, $item) {
    // Enable auto-update for *THIS* plugin only
    if ($item->slug == 'wp-query-push' ) {
        return true;
    } else {
        return $update;
    }
}
