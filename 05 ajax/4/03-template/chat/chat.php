<?php
	
	$messages=array(
		'我约',
		'你走开！',
		'我要开车',
		'上车！'
		);

	sleep(1);
	echo $messages[array_rand($messages)];

?>