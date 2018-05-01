<?php
	header('content-type:text/html;charset=utf-8');
	// echo 'hello post!';
	//获取前端表单传递给后台的数据
	//以post方式向后台传递的数据  用$_POST获取传递到后台的数据

	// var_dump($_POST);


	$name=$_POST['username'];
	$pwd=$_POST['pwd'];

	// echo $name.'--'.$pwd;

	if($name=='baby'&&$pwd=="123456"){
		echo '登录成功！';
	}else{
		echo '用户名或者密码错误！';
	}
?>