<?php

class ApiSearch
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
   * Register search routes for WP API v2
   *
   */
  public function register_routes()
  {
    register_rest_route('wp/v2', '/search', array(
      array(
        'methods'  => WP_REST_Server::READABLE,
        'callback' => array($this, 'getSearchResults'),
        'permission_callback' => '__return_true',
      )
    ));
  }

  /**
   * Format search for WP API v2.
   */
  public function getSearchResults($data)
  {
    $results = [];

    $args = array(
      'post_type' => ($data['type'] !== '' ? $data['type'] : array('culture', 'gastronomy', 'guide', 'plant', 'products', 'tv')),
      'posts_per_page' => ($data['per_page'] ?: 8),
      'paged' => ($_REQUEST['page'] ? $_REQUEST['page'] : 1),
      's' => ($data['keyword'] ?: ''),
      'post__not_in' => ($data['exclude'] ?: ''),
    );

    $query = new WP_Query( $args );
    $max_pages = $query->max_num_pages;
    $total = $query->found_posts;

    while($query->have_posts())
    {
      $query->the_post();
      $featured_media_id = get_post_thumbnail_id();
      array_push($results, array(
        'id' => get_the_ID(),
        'type' => get_post_type(get_the_ID()),
        'slug' => get_post_field('post_name', get_post()),
        'title' => get_the_title(),
        'link' => get_the_permalink(),
        'featured_media' => $this->format_featured_media($featured_media_id),
        'taxterms' => get_the_category($post->ID),
        'excerpt' => get_the_excerpt(get_the_ID()),
        'acf' => get_fields(),
      ));
    }

    $data = new WP_REST_Response($results, 200);

    $data->header( 'x-wp-total', $total );
    $data->header( 'x-wp-totalpages', $max_pages );

    return $data;
  }

  /**
   * Format featured media in search results posts for WP API v2
   */
  public function format_featured_media($id)
  {
    $featured_media = [];

    if (!empty($id)) {
      $featured_media = wp_get_attachment_image_src($id, 'full');
      $featured_media_thumbnail = wp_get_attachment_image_src($id, 'thumbnail');
      $featured_media_data = wp_get_attachment_metadata($id);
      $featured_media = [
        'id' => $id,
        'width' => $featured_media[1],
        'height' => $featured_media[2],
        'url' => $featured_media[0],
        'filesize' => $featured_media_data['filesize'],
        'sizes' => [
          'thumbnail' => $featured_media_thumbnail[0],
          'thumbnail-width' => $featured_media_thumbnail[1],
          'thumbnail-height' => $featured_media_thumbnail[2],
        ]
      ];
    }

    return $featured_media;
  }
}

new ApiSearch();
