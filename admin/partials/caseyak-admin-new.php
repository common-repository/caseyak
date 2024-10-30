<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly
/**
 * Sign up area for new uers
 *
 * This file is used to markup the admin-facing aspects of the plugin.
 *
 * @link       https://caseyak.com/wordpress
 * @since      1.0.0
 *
 * @package    Caseyak
 * @subpackage Caseyak/admin/partials
 */

if (isset($customer)) { ?>
    <h1>Thanks for your order!</h1>
<?php } else { 
    if (isset($error)) { ?>
<div class="notification is-danger is-light" style="margin:2em;">
  Oops, we ecountered an error ?>
</div>
    <?php }
?>
<section style="max-width: 650px;text-align: center;">
  <div class="product">
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-center" style="margin:auto">
            <figure class="image is-48x48" >
              <img src="<?php echo  esc_url( $vertical_icon ) ?>" alt="CaseYak Image">
            </figure>
          </div>
        </div>
        <div class="content">
            <div class="description">
              <h3>CaseYak WordPress Plugin</h3>
              <div style="width: 90%;margin:auto;margin-bottom:8px;">
                  <ul class="is-size-7" style="list-style:circle;text-align: left;">
                        <li>Add CaseYak's AI CaseValue Calculator to your WordPress installation with no code required</li>
                        <li>Automate lead intake. Receive case values before you take a case</li>
                        <li>Customize appearance, styling and more</li>
                        <li>Supports Spanish</li>
                        <li>Cancel any time</li>
                  </ul>
              </div>
              <div class="is-size-6"><span class="is-size-7">Available for a monthly fee (plus tax).</span><div class="is-size-7">Subject to terms & conditions</div></div>
            </div>
            <br>
            <form action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>" method="post">
                <input type="hidden" name="action" value="yak_stripe_response">
                <input type="hidden" name="yak_nonce" value="<?php echo esc_attr( wp_create_nonce( 'yak_nonce' ) ); ?>" />
                <button class='button is-primary' type="button" id="manual-here" onclick="manualClicked()">Enter Subscription ID</button>
            </form>           
            <div class="is-size-7" style="margin-top:12px">
              Not a subscriber? Click <a target="_blank" href="https://caseyak.com/wordpress?ref=wp">here</a> to sign up and receive a subscriber ID.
            </div>
            <form style="display:none" id="manual-form" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>" method="post" onsubmit="event.preventDefault(); checkSubId()">
                <input type="hidden" name="action" value="yak_form_response_manual">
                <input type="hidden" name="yak_nonce" value="<?php echo esc_attr( wp_create_nonce( 'yak_nonce' ) ); ?>" />
                <input type="text" name="manual-subID" id="manual-subID">
                <button class='button is-link is-light is-small' type="submit" id="checkout-button-manual">Enter</button>
                <div class="is-size-7 is-error" style="color:red" id="sub-error"></div>
                <br><span class="is-size-7">Questions? Contact us! kenny@caseyak.com</span>
            </form> 
        </div>
      </div>
    </div>
  </div>
</section>
<?php }

