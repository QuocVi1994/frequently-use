	<?php 
	

	$name=$_POST['name'];
	//如果用户名不为空的话 认为是注册成功
	$info;
	if($name!=''){
		$info=array(
			"status"=>"200",
			"text"=>"注册成功！"
			);
	}else{
		$info=array(
			"status"=>"100",
			"text"=>"用户名已存在！"
			);
	}
	sleep(4);
	//php的关联数组-json字符串
	echo json_encode($info);


?>