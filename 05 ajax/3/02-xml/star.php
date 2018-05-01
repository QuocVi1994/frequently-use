<?php 
	//告诉浏览器 返回的数据当做xml来处理
	header('content-type:text/xml;charset=utf-8');
	//请此页面后
	
	// 获取star.xml文件里面的数据
	
	$data=file_get_contents('star.xml');  

	echo $data;

?>