<?php 
	
	//请求过来后 随机返回一个验证码
	
	$codes=array('123321','666666','daa520','000544','044944');


	$code=  $codes[array_rand($codes)];  //随机获取一个验证码


	$info=array(
		"status"=>"200",
		"code"=>$code
		);


	sleep(7);

	echo json_encode($info); // 发送的客户端是josn字符串
	
?>