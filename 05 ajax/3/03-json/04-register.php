<?php
	
	$names=array('zs','ls','ww','zl');
	$name=$_GET['name'];

	$data;

	if(in_array($name, $names)){
		$data=array(
			"status"=>"100",
			"msg"=>"用户名以存在！"
			);
	}else{
		$data=array(
			"status"=>"200",
			"msg"=>"恭喜，用户名可以使用！"
			);
	}

	echo  json_encode($data);

?>