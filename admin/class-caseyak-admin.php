<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://caseyak.com/wordpress
 * @since      1.0.0
 *
 * @package    Caseyak
 * @subpackage Caseyak/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Caseyak
 * @subpackage Caseyak/admin
 * @author     CaseYak <kenny@caseyak.com>
 */
class Caseyak_Admin {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/caseyak-admin.css', array(), $this->version, 'all' );
		wp_enqueue_style( 'Bulma', plugin_dir_url( __FILE__ ) . 'css/bulma.min.css', array(), $this->version, 'all' );
	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		wp_enqueue_script( $this->plugin_name . '-admin-scripts', plugin_dir_url( __FILE__ ) . 'js/caseyak-admin.js', array(), $this->version, false );

	}

    public function addAdminPage() {
    	$icon = plugin_dir_url( __FILE__ ) . '/images/cy_icon.png';
        add_menu_page( 
        	'CaseYak', 
        	'CaseYak', 
        	'manage_options', 
        	'caseyak', 
        	array( $this, 'adminTemplate' ), 
        	$icon,
        	10
        );
    }

	/**
	 * Get the latest plugin entry installation details.
	 *
	 * @since    1.0.0
	 */
    public static function getInstance() {
   		global $wpdb;
   		$caseyakTable = $wpdb->prefix . 'caseyak';
   		$result = $wpdb->get_results("SELECT * FROM $caseyakTable ORDER BY updated DESC");
   		if (count($result) > 0) {
   			return $result[0];
   		}
   		return null;
    }


	/**
	 * Insert CY data into local WP DB.
	 *
	 * @since    1.0.0
	 * @param    array    $data      The data to store.
	 */
    public static function inserData($data) {
	    global $wpdb;

	    $caseyakTable = $wpdb->prefix . 'caseyak';
	    $wpdb->insert($caseyakTable, $data);
    }

    	/**
	 * Get the subscriptionID.
	 *
	 * @since    1.0.0
	 * @return   bool      True if set. False if anything else.
	 */
    function isActive() {
    	$instance = self::getInstance();
    	if (isset($instance) == false) { return false; }
    	$subscriptionID = $instance->subscriptionID;
    	if (isset($subscriptionID)) {
    		return true;
    	} else {
    		return false;
    	}
    }

    function processFormSubmit() {
    	if ( isset($_POST['action']) && $_POST['action'] == 'yak_form_response' && isset($_POST['yak_nonce']) &&  wp_verify_nonce( sanitize_text_field( wp_unslash ( $_POST['yak_nonce'] ) ), 'yak_nonce') ) {

    		// insert new settings into DB
    		global $wpdb;
        	$caseyakTable = $wpdb->prefix . 'caseyak';
        	$instanceID = self::getInstance()->ID;
        	$slidePosition = 'right';
        	if (isset($_POST['slide-position']) && $_POST['slide-position'] == 'left') {
        		$slidePosition = 'left';
        	}
        	$expanded = 0;
        	$containerID = '';
        	if (isset($_POST['cy-container-id']) && $_POST['cy-container-id'] != '') {
        		$expanded = 1;
        		$containerID = sanitize_text_field($_POST['cy-container-id']);
        	}
        	$enabled = 1;
        	if (isset($_POST['cy-enabled'])) {
        		if ($_POST['cy-enabled'] == 'off') {
        			$enabled = 0;
        		} else {
        			$enabled = 1;
        		}
        	} else {
        		$enabled = 0;
        	}

        	$wpdb->update($caseyakTable, 
        		array(
        			'slidePosition' => $slidePosition,
        			'expanded' => $expanded,
        			'yakContainerID' => $containerID,
        			'yakEnabled' => $enabled,
        			'updated' => time()
        		), 
        		array('ID' => $instanceID ));

        	// // redirect
    		wp_redirect( admin_url( '/admin.php?page=' . $this->plugin_name ) );
    		exit;
    	} elseif (isset($_POST['action']) && $_POST['action'] == 'yak_form_response_manual' && isset($_POST['yak_nonce']) &&  wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['yak_nonce'] ) ), 'yak_nonce') && isset( $_POST["manual-subID"] ) && substr( sanitize_text_field( $_POST["manual-subID"] ) ,0,3) == "sub") {
			$manualSubID = sanitize_text_field( $_POST["manual-subID"] ); 

			$body = array(
				'subscriptionID' => $manualSubID
			);
			$jsonBody = json_encode($body, JSON_UNESCAPED_SLASHES);
		    $args = array(
				'body'        => $jsonBody,
				'timeout'     => '5',
				'redirection' => '5',
				'httpversion' => '1.0',
				'blocking'    => true,
				'headers'     => array (
			        'Content-Type' => 'application/json',
			        'Accept' => 'application/json'
		    	),
				'cookies'     => array(),
			);
			// execute!
			$request = wp_remote_post( 'https://www.pakalapp.com/api/v1/kesu_flimr_nubs_config', $args );
			$json = json_decode( wp_remote_retrieve_body( $request ), true );
			$httpcode = wp_remote_retrieve_response_code ( $request );
			if( $httpcode == 200) {
				$yakToken = $json['auth_token'];
				$slidePosition = $json['slide_position'];
				$firmID = $json['firm_id'];
				$isActive = 1;
				// save in DB!
				$yakJSON = array(
	                'firmID'            => $firmID,
	                'yakToken'          => $yakToken,
	                'subscriptionID'    => $manualSubID,
	                'yakLanguage'       => 'english',
	                'slidePosition'     => $slidePosition,
	                'expanded'          => false,
	                'yakEnabled'        => true,
	                'yakContainerID'    => '',
	                'updated'           => time()
	            );
	            
				self::inserData($yakJSON);
			}
    		wp_redirect( admin_url( '/admin.php?page=' . $this->plugin_name ) );
    		exit;
    	} else {
			wp_die( 'Invalid nonce specified', 'Error' ,
					array(
						'response' 	=> 403,
						'back_link' => 'admin.php?page=' . $this->plugin_name
					)
			);
    	}
    }

    function adminTemplate() {
    	$isActive = $this->isActive();

    	if ($isActive) {
    		$instance = self::getInstance();
    		$subscriptionID = $instance->subscriptionID;
    		$lastChanged = date('m/d/Y', $instance->updated);
        	require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/partials/caseyak-admin-display.php';
    	} else {
    		$vertical_icon = plugin_dir_url( __FILE__ ) . '/images/cy.png';
    		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/partials/caseyak-admin-new.php';
    	}
    }
}
