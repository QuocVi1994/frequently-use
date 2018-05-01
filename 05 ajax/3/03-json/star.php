<?php 
	//获取json文件中的数据 返回给客户端
	
	$data=file_get_contents('star.json');

	echo $data;
?>