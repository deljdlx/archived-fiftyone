<?php


namespace FiftyOne\Configuration;

class Router extends \Phi\Router
{


	public function __construct() {



		$this->get('`(.*)`', function($url) {


			echo '<pre id="' . __FILE__ . '-' . __LINE__ . '" style="border: solid 1px rgb(255,0,0); background-color:rgb(255,255,255)">';
			echo '<div style="background-color:rgba(100,100,100,1); color: rgba(255,255,255,1)">' . __FILE__ . '@' . __LINE__ . '</div>';
			print_r($url);
			echo '</pre>';

		});


	}




}

