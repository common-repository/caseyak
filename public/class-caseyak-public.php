<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://caseyak.com/wordpress
 * @since      1.0.0
 *
 * @package    Caseyak
 * @subpackage Caseyak/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Caseyak
 * @subpackage Caseyak/public
 * @author     CaseYak <kenny@caseyak.com>
 */
class Caseyak_Public {

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
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/caseyak-public.css', array(), $this->version, 'all' );

	}

	/**
	 * Adds the public CaseYak script to the body
	 *
	 * @since    1.0.0
	 */
	public function addScript() {
		$file = plugin_dir_path( dirname( __FILE__ ) ) . 'public/partials/caseyak-script.php';
		$mvaScript = plugin_dir_url( __FILE__ ) . 'js/mva.js';
		if (file_exists($file)) {
			// get instance settings
			$instance = Caseyak_Admin::getInstance();
			$token = $instance->yakToken;;
			$expanded = $instance->expanded;
			$slidePosition = $instance->slidePosition;
			$container = $instance->yakContainerID;
			if ($instance->yakEnabled) {
				require_once $file;
			}
		}
	}

}
