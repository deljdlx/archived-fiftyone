<?php
namespace FiftyOne;

require(__DIR__.'/vendor/autoload.php');


registerNamespace('FiftyOne', __DIR__.'/source');




if(isset($_SERVER['REQUEST_URI'])) {
	$routeur=new \FiftyOne\Configuration\Router();
	$routeur->run();
}


//$application=new Application(__DIR__);