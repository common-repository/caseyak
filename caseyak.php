<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://caseyak.com
 * @since             1.0.0
 * @package           Caseyak
 *
 * @wordpress-plugin
 * Plugin Name:       CaseYak
 * Plugin URI:        https://caseyak.com/wordpress
 * Description:       The CaseYak AI Case Value Calculator.
 * Version:           1.0.0
 * Author:            CaseYak
 * Author URI:        https://caseyak.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       caseyak
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'CASEYAK_VERSION', '1.0.0' );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-caseyak-activator.php
 */
function cywp_activate_caseyak() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-caseyak-activator.php';
	Caseyak_Activator::activate();
}

register_activation_hook( __FILE__, 'cywp_activate_caseyak' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-caseyak.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function cywp_run_caseyak() {

	$plugin = new Caseyak();
	$plugin->run();

}
cywp_run_caseyak();
