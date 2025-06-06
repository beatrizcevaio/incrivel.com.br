<?php

class ApiSitemap
{
  public function __construct()
  {
    $this->init();
  }

  public function init()
  {
    add_filter('rest_api_init', [$this, 'register_routes']);
  }

  /**
   * Register sitemap routes for WP API v2
   *
   */
  public function register_routes()
  {
    register_rest_route('wp/v2', '/sitemap', array(
      array(
        'methods'  => WP_REST_Server::READABLE,
        'callback' => array($this, 'get_sitemap_urls'),
        'permission_callback' => '__return_true',
      )
    ));
  }

  /**
   * Get options pages
   *
   * @return array All registered options pages
   */
  public function get_sitemap_urls($request)
  {
    $websiteUrl = get_option('futurebrand_website_url');

    $postTypes = [
      'page' => '',
      // 'post' => '/blog',
      // 'ambassadors' => '/embaixadores',
      'culture' => '/cultura',
      'gastronomy' => '/gastronomia',
      'guide' => '/guia',
      'plant' => '/plant-based',
      'products' => '/produtos',
      // 'tv' => '/series-e-programas',
    ];

    $urls = [];

    $query = new WP_Query([
      'post_type' => array_keys($postTypes),
      'posts_per_page' => -1,
      'post_status' => 'publish',
    ]);

    if (!count($query->posts)) {
      return rest_ensure_response([]);
    }

    foreach ($query->posts as $post) {
      $url = $websiteUrl . $postTypes[$post->post_type] . '/' . $post->post_name;
      $priority = 0.7;

      if ($post->post_name === 'homepage') {
        $url = $websiteUrl . '/';
        $priority = 1;
      }

      $urls[] = [
        'url' => $url,
        'lastmod' => get_the_modified_date('Y-m-d', $post),
        'priority' => $priority,
      ];
    }
    return rest_ensure_response($urls);
  }
}

new ApiSitemap();
