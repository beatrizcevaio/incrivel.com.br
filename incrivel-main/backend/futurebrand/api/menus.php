<?php

class ApiMenus
{
  public function __construct()
  {
    $this->init();
  }

  public function init()
  {
    add_action('rest_api_init', function () {
      register_rest_route('wp/v2', '/menus', array(
        'methods' => WP_REST_Server::READABLE,
        'callback' => array($this, 'get_menus')
      ));
    });
  }

  /**
   * Format Menus for WP API v2.
   */
  public function get_menus()
  {
    $get_menus = wp_get_nav_menus();
    $menus = array();

    foreach ($get_menus as $menu) {
      $items = wp_get_nav_menu_items($menu->term_id);
      $menu_items = array();

      foreach ($items as $item) {
        $url = ($item->type !== "custom")
          ? $this->clean_url($item->url)
          : $item->url;

        $fields = get_fields($item);

        $has_parent = $item->menu_item_parent;

        $item_block = array(
          "id" => $item->ID,
          "title" => $item->title,
          "url" => $url,
          "acf" => $fields,
          "children" => []
        );

        if ($has_parent) {
          foreach ($menu_items as $key => $menu_item) {
            if ($menu_item['id'] === (int) $has_parent) {
              $menu_items[$key]['children'][] = $item_block;
            }
          }
        } else {
          $menu_items[] = $item_block;
        }
      }

      $menus[$menu->slug] = $menu_items;
    }

    return rest_ensure_response($menus);
  }

  public function clean_url($url)
  {
    $site_url = get_bloginfo('url');

    return str_replace($site_url, '', $url);
  }
}

new ApiMenus();
