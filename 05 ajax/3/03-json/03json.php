<?php 

	$info=array(
		"name"=>"xiaoming",
		"age"=>"18",
		"sex"=>"wan"
		);

	//关联数组--》json字符串
	$info=json_encode($info);

	echo $info;


?>