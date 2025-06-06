<?php

define('JAM_STACK_BUILD_MINUTES', 2);

add_filter('jamstack_deployments_webhook_request_args', function ($values) {
  $values['headers'] = [
    'Content-Type'  => 'application/json',
  ];

  return $values;
}, 10, 3);

function save_deployment_time()
{
  $deployment_time = get_option('jamstack_deployment_time');

  if (!$deployment_time) {
    add_option('jamstack_deployment_time', time());
  } else {
    update_option('jamstack_deployment_time', time());
  }
}
add_action('jamstack_deployments_after_fire_webhook', 'save_deployment_time');

function get_last_jamstack_deployment_in_minutes()
{
  $deployment_time = get_option('jamstack_deployment_time');

  if (!$deployment_time) {
    return false;
  }

  $nowtime = time();
  $difference = $nowtime - $deployment_time;

  return $difference / 60;
}

function change_deploy_button_styles()
{
  echo '
    <style type="text/css">
      .wp-jamstack-deployments-button:not(.active) { display: none !important; }
      .wp-admin #wpadminbar .wp-jamstack-deployments-button > a {
        padding-left: 20px !important;
        padding-right: 20px !important;
        background: #333 !important;
        color: #fff !important;
        text-transform: uppercase !important;
        font-size: 11px;
        letter-spacing: 1px;
        line-height: 32px;
        transition: all 300ms ease;
      }
      .wp-admin #wpadminbar .wp-jamstack-deployments-button > a:not(.is-building):hover {
        background: #005838 !important;
        color: #fff !important;
      }
      .wp-admin #wpadminbar .wp-jamstack-deployments-button > a.is-building {
        cursor: default;
      }
      .wp-admin #wpadminbar .wp-jamstack-deployments-button > a.is-building:hover {
        background: #444 !important;
        color: #fff !important;
      }
    </style>
  ';
}

add_action('admin_enqueue_scripts', 'change_deploy_button_styles', 11);

function change_deploy_button_scripts()
{
  $last_jamstack_deployment_minutes = get_last_jamstack_deployment_in_minutes();

  echo '
    <script type="text/javascript">
      var IS_LAST_JAMSTACK_DEPLOYMENT_BUILDED = ' . ($last_jamstack_deployment_minutes > JAM_STACK_BUILD_MINUTES ? 'true' : 'false') . ';

      jQuery(document).ready(function($) {
        function run() {
          var $btnDeploy = $(".wp-jamstack-deployments-button a");

          if (!$btnDeploy.length) {
            return false;
          }

          if (IS_LAST_JAMSTACK_DEPLOYMENT_BUILDED) {
            $btnDeploy.html("Publicar site <svg aria-hidden=\'true\' focusable=\'false\' data-icon=\'upload\' role=\'img\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 512 512\' width=\'12\' height=\'12\'><path fill=\'currentColor\' d=\'M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z\'></path></svg>");
            $btnDeploy.on("click", function() {
              setTimeout(function() {
                window.location.reload();
              }, 1000 * 2)
            })
          } else {
            $btnDeploy.text("Publicando site, aguarde...").attr("title", "Isso pode levar alguns minutos...");

            $(".wp-jamstack-deployments-button").off("click");
            $btnDeploy.off("click").addClass("is-building").attr("href", "javascript:;");
          }

          $(".wp-jamstack-deployments-button").addClass("active");
        }

        run();
      });
    </script>';
}

add_action('admin_print_footer_scripts', 'change_deploy_button_scripts', 11);
