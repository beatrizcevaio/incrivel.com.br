<?php

function translate_publish_post_status($translation, $text)
{
  switch ($text) {
    case "Publish":
      return "Salvar";
    case "Update":
      return "Salvar";
    case "Privately Published":
      return "Salvo em privado";
    case "Save & Publish":
      return "Salvar";
    case "Preview Changes":
      return "Visualizar alterações salvas";
    case "Preview":
      return "Visualizar alterações salvas";
    case "Page updated.":
      return "Conteúdo salvo - Por favor, publique o site para que as alterações sejam visíveis.";
    case "Post updated.":
      return "Conteúdo salvo - Por favor, publique o site para que as alterações sejam visíveis.";
    case "Page published.":
      return "Conteúdo salvo - Por favor, publique o site para que as alterações sejam visíveis.";
    case "Post published.":
      return "Conteúdo salvo - Por favor, publique o site para que as alterações sejam visíveis.";
    default:
      return $translation;
  }
}
add_filter("gettext", "translate_publish_post_status", 10, 2);

function change_publish_button_text()
{
  if (wp_script_is('wp-i18n')) :
?>
    <script>
      wp.i18n.setLocaleData({
        'Publish': ['Salvar'],
        'Publish:': ['Salvar: '],
        'Publishing': ['Salvando'],
        'Publishing…': ['Salvando...'],
        'Update': ['Salvar'],
      });
    </script>
<?php
  endif;
}

add_action('admin_print_footer_scripts', 'change_publish_button_text', 11);
