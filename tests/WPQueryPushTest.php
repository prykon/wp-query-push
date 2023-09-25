<?php declare(strict_types=1);

use PHPUnit\Framework\TestCase;
use Mockery;
use \WP_Mock\Exception as Exception;

/*
require_once 'vendor/autoload.php';
require __DIR__ . "/../includes/class-wp-query-push.php";
if( !class_exists( 'WP_Http' ) )
    include_once( ABSPATH . WPINC. '/class-http.php' );
*/

final class WPQueryPushTest extends \WP_Mock\Tools\TestCase
//final class WPQueryPushTest extends WP_UnitTestCase
{
	public function setUp(): void {
		\WP_Mock::setUp();
	}

	public function tearDown(): void {
		\WP_Mock::tearDown();
	}

  public function test_parse_request_query(): void
  {
/*
    global $wpdb;
    $wpdb = Mockery::mock( '\WPDB' );
*/
    $headers = array(
      "Content-Type" => "application/json"
    );
    $data = array(
      "statement" => "SELECT * FROM wp_options",
    );
    $url = 'http://0.0.0.0:8080/';
    //$request = $this->getMockBuilder( 'ArrayAccess' )
    //  ->setMockClassName( 'WP_REST_Request' )
/*
    $request = $this->getMockBuilder( 'WP_REST_Request' )
      ->setMethods( [ 'get_body' => array ( json_encode ( $data ) ) ] )
      ->getMock();
*/
    $request = Mockery::mock( '\WP_REST_Request' );
    //$request = new WP_Rest_Request();
    //$request['get_body'] = json_encode( $data );
    //$request->set_body( json_encode( $data ) );
/*
    $request = new WP_Http;
    $request['url'] = $url;
    $request['method'] = "POST";
    $request['headers'] = $headers;
    $request['body'] = json_encode( $data );
    //$result = $request->request( $url, array( 'method' => 'POST', 'body' => $body) );
*/
    //$plugin = new WPQueryPush();
    //$query = $plugin->parse_request_query( $request );
    //$query = $plugin->parse_request_query( $request );
    $query = \WP_Query_Push::instance()->parseRequestQuery( $request );
    $this->assertSame( "SELECT * FROM wp_options", $query );
  }
}
