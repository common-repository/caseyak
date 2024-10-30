<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly
/**
 * Provide a admin area view for the plugin
 *
 * This file is used to markup the admin-facing aspects of the plugin.
 *
 * @link       https://caseyak.com/wordpress
 * @since      1.0.0
 *
 * @package    Caseyak
 * @subpackage Caseyak/admin/partials
 */
?>
<div class="columns">
    <div class="column is-four-fifths">
        <div class="section" style="padding-bottom: 5px !important;">
            <div class="" style="margin-bottom: 10px;">
                <span class="icon-text">
                  <span class="is-size-3 has-text-weight-bold">CaseYak Plugin Settings</span>
                </span>
            </div>
            <div>
                <span class="is-size-6 has-text-weight-semibold">Subscription </span><span class="tag is-success is-light">Active</span>
            </div>
        </div>
        <section class="section" style="padding-top: 10px !important;">
            <div class="box is-size-7">
                Set your CaseYak plugin settings here. The following options are available:
                <div style="margin:10px;">
                    <ul style="list-type:circle">
                        <li><strong>Slide Position:</strong> Tells the plugin to slide out from the bottom left or right side of your home screen.</li>
                        <li><strong>Container ID:</strong> Tells the plugin to embed itself in a standalone element with this ID. Useful for standalone pages.</li>
                        <li><strong>Enabled:</strong> Quickly disables or enables the plugin without uninstalling via WordPress.</li>
                    </ul>
                    <div class="notification is-primary is-light" style="padding:8px;margin-top: 8px;">
                        Looking for more customization options? Email us! <strong>kenny@caseyak.com</strong>
                    </div>
                </div>
            </div>
            <form action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>" method="post" id="yak-form">
                <input type="hidden" name="action" value="yak_form_response">
                <input type="hidden" name="yak_nonce" value="<?php echo esc_attr( wp_create_nonce( 'yak_nonce' ) ); ?>" />
                <div class="field" style="margin-top:20px">
                  <label class="label" style="margin-bottom: 0px;">Slide Position</label>
                  <p class="is-size-7" style="margin-bottom:5px">Tells the CaseYak plugin to slide out from the bottom left or right side of the page.</p>
                <div class="control is-size-7">
                  <label class="radio is-size-7" style="margin-bottom: 0px;">
                    <input type="radio" value="left" name="slide-position" <?php echo $instance->slidePosition == 'left' ? "checked" : "" ?>>
                    Left
                  </label>
                  <label class="radio is-size-7" style="margin-bottom: 0px;">
                    <input type="radio" value="right" name="slide-position" <?php echo $instance->slidePosition == 'right' ? "checked" : "" ?>>
                    Right
                  </label>
                </div>
                </div>
                <div class="field " style="margin-top:20px">
                  <label class="label" style="margin-bottom: 0px;">Container ID</label>
                  <p class="is-size-7" style="margin-bottom:5px">For use when embedding the CaseYak plugin on a standalone page. If set, CaseYak will load its form into HTML element with this ID on a given page.</p>
                  <div class="control">
                    <input value="<?php echo esc_attr($instance->yakContainerID) ?>" name="cy-container-id" id="cy-container-id" class="input is-size-7" type="text" placeholder="my-container-id" style="max-width:400px">
                  </div>
                </div>
                <div class="field" style="margin-top:20px">
                    <div>
                        <label style="margin-bottom: 0px;margin-right:30px;display:inline-block" class="label">Plugin Status</label>
                        <div style="display:inline-block"  class="control is-size-7" >
                            <input id="cy-enabled" type="checkbox" name="cy-enabled" class="switch is-primary" <?php echo $instance->yakEnabled == 1 ? "checked" : "" ?>>
                            <label class="is-size-7" for="cy-enabled">Enabled?</label>
                        </div>
                    </div>
                  
                    <p class="is-size-7" style="margin-top:10px">
                        <span class="tag is-warning is-light">Warning</span>
                        Disabling will disable the CaseYak plugin on your WordPress site but keep your subscription active and retain all your plugin settings.
                    </p>
                </div>
                <div class="field is-grouped" style="margin-top:30px;">
                    <div class="control">
                      <button class="button is-primary" id='yak-submit'>Save</button>
                    </div>
                </div>
            </form>
            <div class="" style="margin:2em">
                <article class="message is-info">
                  <div class="message-body">
                   <p>Interested in receiving MVA leads in your area? Try the CaseYak Lead Gen Program today! <a href="https://caseyak.com/firms" target="_blank">https://caseyak.com/firms</a></p>
                  </div>
                </article>
            </div>
        </section>
    </div>
</div>
