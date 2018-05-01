<?php 
	//关联数组
	$info=array(
		"name"=>"zs",
		"age"=>18,
		"sex"=>"nv"
	);

	$str='{"name":"zs","age":18,"sex":"nv"}';


	//在各种语言中JSON字符串 欧可以很轻松的转换成对应语言可以使用 使用


	//json_encode(); 编码 把php对象 数组 转成json字符串
	//json_decode(); 解码  json字符串 转成 php对象  
	
	//php的对象 关联数组---》json字符串
	// echo gettype($info);
	// echo '<br>';
	$info=json_encode($info);
	// echo gettype($info);
	// echo $info;


	echo gettype($str); 
	echo '<br>';
	$str=json_decode($str);
	echo gettype($str);
	echo '<br>';
	//php对象 str
	echo $str->sex;








?>