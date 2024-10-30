<?php

/**
 * Fired during plugin activation
 *
 * @link       https://caseyak.com/wordpress
 * @since      1.0.0
 *
 * @package    Caseyak
 * @subpackage Caseyak/includes
 */

/**
 * Fired during plugin activation.
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @since      1.0.0
 * @package    Caseyak
 * @subpackage Caseyak/includes
 * @author     CaseYak <kenny@caseyak.com>
 */
class Caseyak_Activator {

	/**
	 * Short Description. (use period)
	 *
	 * Long Description.
	 *
	 * @since    1.0.0
	 */
	public static function activate() {
        self::createTable();
	}

    static function createTable() {
        global $wpdb;

        $caseyakTable = $wpdb->prefix . 'caseyak';
        
        if($wpdb->get_var($wpdb->prepare("SHOW TABLES LIKE %s",$caseyakTable)) != $caseyakTable) {
            $charset_collate = $wpdb->get_charset_collate();
            $sql = "CREATE TABLE $caseyakTable (
                        ID mediumint(11) NOT NULL AUTO_INCREMENT,
                        firmID VARCHAR(255) NOT NULL,
                        yakToken VARCHAR(255) NOT NULL,
                        subscriptionID VARCHAR(255) NOT NULL,
                        yakLanguage text NOT NULL,
                        slidePosition text NOT NULL,
                        expanded BOOLEAN NOT NULL,
                        yakEnabled BOOLEAN NOT NULL,
                        yakContainerID VARCHAR(255) NOT NULL,
                        updated VARCHAR(255) NOT NULL,
                        PRIMARY KEY  (ID)
                    ) $charset_collate;";
            require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
            dbDelta( $sql );
        } else {
            // Table exists and plugin is being reactivated
        }
    }
}
