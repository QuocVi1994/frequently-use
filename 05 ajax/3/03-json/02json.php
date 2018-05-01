<?php 
	
	$msg=$_GET['msg'];

	// echo $msg; //{"name":"baby","age":27,"sex":"女","hobby":"春哥"}

	$msg=json_decode($msg); //将json字符串 转成php对象

	echo $msg->name;  //把js对象 传递到php中 以php对象的方式进行使用


?>