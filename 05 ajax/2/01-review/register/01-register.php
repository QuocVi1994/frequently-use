<?php
	header('content-type:text/html;charset=utf-8');

	$name=$_GET['username'];

	echo $name;

	//判断次用户名是否存在

	$names=array('zs','ls','lgd','zl','tq');
	//in_array(a,b) ; 判断数据a是否在数组b中包含

	if(in_array($name, $names)){
		echo '这个名字太受欢迎了，赶快换一个吧！';
	}else{
		echo '恭喜，用户名可用';
	}


?>