const openGraph = `
  <!-- Open Graph -->
  <meta property="og:url" content="https://alextheme.github.io/aliance1k"/>
  <meta property="og:type" content="website"/>
  <meta property="og:site_name" content="aliance1k"/>
  <meta property="og:title" content="Key & Code"/>
  <meta property="og:description" content="List of key numbers and codes in the box"/>
  <meta property="og:image" content="style/keys_codes.png"/>
  <meta property="og:image" content="style/keys_codes.png"/>
  <meta property="vk:image" content="style/keys_codes.png"/>
  <meta property="fb:image" content="style/keys_codes.png"/>
  <meta property="twitter:image" content="style/keys_codes.png"/>
  <meta property="og:image:width" content="203"/>
  <meta property="og:image:height" content="262"/>
`;

exports.head = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style/style.css">
  ${openGraph}
  <title>Ключи и Коды</title>
</head>
`;

exports.startBody = `
<body>
  <section class="header">
    <nav class="nav">
      <ul class="nav_list">
        <li class="nav_item"><span class="nav_item_text">Ключи и Коды</span></li>
      </ul>
    </nav>
    <form class="form_sorting" action="">
      <label class="input_wrapper">
        <input type="text" class="input_search js-input_search">
      </label>
      <button class="btn_clear">Clear</button>
    </form>
  </section>

  <ol class="object_list js-list">
`;

exports.scripts = `
  <script src="style/jQuery.min.js"></script>
  <script src="style/button.js"></script>
  <script src="style/search.js"></script>
`;

exports.endBody = `</ol></body></html>`;
