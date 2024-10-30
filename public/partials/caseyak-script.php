<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly
    if($expanded && $container && $container != '') { ?>
        <script caseyak-container-id="<?php echo esc_attr($container) ?>" yak-token="<?php echo esc_attr( $token ) ?>" src='<?php echo esc_url( $mvaScript ) ?>' expanded='true'></script>
   <?php } else { ?>
        <script yak-token="<?php echo esc_attr($token) ?>" src='<?php echo esc_url( $mvaScript ) ?>' slide-position="<?php echo esc_attr( $slidePosition) ?>"></script> 
    <?php }
?>
