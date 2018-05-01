<?php
	header('content-type:text/html;charset=utf-8'); //设置编码

	$str1="up head look moon";

	$str2='down head missing home';

	// js  var str3=str1+str2;

	$str3=$str1.','.$str2;

	// echo $str3;

	$name='baby';
	$age='19';
	$sex='nv';

	echo '大家好，我叫'.$name.',今年'.$age.',性别'.$sex;

	?>