<?php

	header('Content-Type: application/json; charset=utf-8');

	$arr = array(341232, 564512, 876567, 321653);

	// echo $arr[array_rand($arr)];

	// $mobile = $_POST['mobile'];


	$code = $arr[array_rand($arr)];


	// $result = array(
	// 	'code'=>10000,
	// 	'msg'=>'验证码已发送',
	// 	'result'=>$code
	// );

	// echo json_encode($result);

	echo 'hello';

	sleep(3);
?>