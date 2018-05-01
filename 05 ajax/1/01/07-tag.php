<?php
	header('content-type:text/html;charset=utf-8');

	$str1='<a href="http://www.baidu.com">百度一下，你就知道！</a>';
	$str2='<img src="lz.png"/>';

	echo $str1;
	echo $str2;

	//我们的php代码必须放在代码块中，在代码块外面的内容会直接忽略，最后会把代码块外面的内容原样输出给浏览器
?>

	echo '呵呵呵';