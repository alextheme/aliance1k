exports.head = `
<!DOCTYPE html>
<html lang="en">
<head>
\t<meta charset="UTF-8">
\t<meta name="viewport" content="width=device-width, initial-scale=1.0">
\t<link rel="stylesheet" href="style/style.css">
\t<title>Ключи и Коды</title>
</head>
`;

exports.startBody = `
<body>
\t<section class="header">
\t\t<nav class="nav">
\t\t\t<ul class="nav_list">
\t\t\t\t<li class="nav_item"><span class="nav_item_text">Ключи и Коды</span></li>
\t\t\t</ul>
\t\t</nav>
\t\t<form class="form_sorting" action="">
\t\t\t<label class="input_wrapper">
\t\t\t\t<input type="text" class="input_search js-input_search">
\t\t\t</label>
\t\t\t<button class="btn_clear">Clear</button>
\t\t</form>
\t</section>

\t<ol class="object_list js-list">
`;

exports.scripts = `
\t<script src="style/jQuery.min.js"></script>
\t<script src="style/button.js"></script>
\t<script src="style/search.js"></script>
`;

exports.endBody = `</ol></body></html>`;
