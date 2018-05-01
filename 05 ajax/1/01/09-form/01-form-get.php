<?php
	header('content-type:text/html;charset=utf-8');
	// echo 'hello get!';
	//如果用户请求此处理程序，为了判断用户名密码是否正确
	//1-获取用户传递过来的 用户名和密码  
	//2-进行判断
	//3-返回判断结果

	//获取前端表单提交的数据,一个get方式提交的数据 
	//可以用$_GET获取  get方式提交的数据
	//echo $_GET;
	// print_r($_GET);

	$name= $_GET['username'];
	$pwd=$_GET['pwd'];


	//判断
	if($name=="baby"&&$pwd=='123456'){
		echo '登录成功';
	}else{
		echo '用户名或者密码错误';
	}
?>