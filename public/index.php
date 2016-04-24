<!doctype html>

<html>

<head>

	<link rel="stylesheet" href="vendor/font-awesome-4.5.0/css/font-awesome.min.css"/>



	<script src="vendor/jquery-2.2.3.min.js"></script>


	<link rel="stylesheet" href="vendor/bootstrap-3.3.6-dist/css/bootstrap.min.css"/>
	<script src="vendor/bootstrap-3.3.6-dist/js/bootstrap.min.js"></script>






	<link rel="stylesheet" href="vendor/bootstrap-material-design/dist/css/bootstrap-material-design.min.css"/>
	<script src="vendor/bootstrap-material-design/dist/js/material.min.js"></script>




	<link rel="stylesheet" href="vendor/codemirror-5.14.2/lib/codemirror.css"/>
	<link rel="stylesheet" href="vendor/codemirror-5.14.2/theme/monokai.css"/>
	<script src="vendor/codemirror-5.14.2/lib/codemirror.js"></script>
	<script src="vendor/codemirror-5.14.2/mode/xml/xml.js"></script>

	<link rel="stylesheet" href="vendor/summernote/dist/summernote.css"/>
	<script src="vendor/summernote/dist/summernote.min.js"></script>


	<link rel="stylesheet" href="vendor/jquery-ui-bootstrap/css/custom-theme/jquery-ui-1.10.0.custom.css"/>
	<script src="vendor/jquery-ui-bootstrap/js/jquery-ui-1.9.2.custom.min.js"></script>







	<script src="source/class/FiftyOne/FiftyOne.js"></script>
	<script src="source/class/FiftyOne/Configuration.js"></script>
	<script src="source/class/FiftyOne/Module/Editor/Editor.js"></script>
	<script src="source/class/FiftyOne/Module/Editor/Component.js"></script>




	<link rel="stylesheet" href="source/css/main.css"/>
	<script src="vendor/khi/bootstrap.js"></script>
	<script src="vendor/khi/source/Application.js"></script>
	<script src="vendor/khi/source/Router.js"></script>
	<script src="vendor/khi/source/RouterRule.js"></script>
	<script src="vendor/khi/source/ModuleLoader.js"></script>


</head>
<body>



<header>
<nav class="head">
head<br/>head</br>head
</nav>
</header>

<main>

	<div class="leftPanel">
		<ul>
			<li>Statistiques générales</li>
			<li>Crawl</li>
			<li>Analyse contenus</li>
			<li>Analyse linking</li>
			<li>Synthèse</li>
			<li>Recommendations</li>
			<li>Raw data</li>
		</ul>

	</div>

	<div class="rightPanel">

		<?php

		include('../source/template/panel/edition/main.php');

		?>

	</div>
</main>


<footer class="page-footer">
	footer
</footer>




</body>






<script>




/*
	var router=new Khi.Router();
	var rule=router.addRule('test', function(requestObject) {
		return true;
	}, function(requestObject) {


		console.debug('hello world');
		console.debug(requestObject);
	});
	console.debug(rule);
	rule.execute(router.getRequest());
*/


	//router.run();









</script>



</html>