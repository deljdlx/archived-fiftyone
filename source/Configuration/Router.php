<?php


namespace FiftyOne\Configuration;

class Router extends \Phi\Router
{


	public function __construct() {




		$this->get('`/module/(.*?)/(.*?)$|(?:\?.*)`', function($moduleName, $method) {

			$className='\FiftyOne\Module\\'.$moduleName;
			$module=new $className();

			$returnValue=call_user_func_array(array(
				$module,
				$method
			), array());

			if(!is_scalar($returnValue)) {
				echo json_encode($returnValue);
			}
			else {
				echo $returnValue;
			}
			return true;

		}, array(
			'Content-type'=>'application/json'
		));




		$this->get('`(.*)`', function($url) {
			include(__DIR__.'/../template/index.tpl.php');
			echo '<pre id="' . __FILE__ . '-' . __LINE__ . '" style="border: solid 1px rgb(255,0,0); background-color:rgb(255,255,255)">';
			echo '<div style="background-color:rgba(100,100,100,1); color: rgba(255,255,255,1)">' . __FILE__ . '@' . __LINE__ . '</div>';
			print_r($url);
			echo '</pre>';
		});


	}




}

