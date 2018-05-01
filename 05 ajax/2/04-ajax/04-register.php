<?php
	//模拟数据的数据
	$names=array('zs','ls','gd','tq','xiaoming');

	$name=$_GET['name'];

	//判断
	if(in_array($name, $names)){
		echo '用户名已存在！';
	}else{
		echo '恭喜，用户名可用！';
	}
?>