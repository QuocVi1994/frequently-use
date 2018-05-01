<?php
	header('content-type:text/html;charset=utf-8');
	/*
	
		function say(name){
			console.log('你好！+name);
		}

		say('zs');

	 */
	/*
		默认参数  备胎  
	 */
	function say($name='xiaoming'){
		echo '你好！,'.$name;
	}

	// say('lgd');
	// say();
	say('baby');

?>