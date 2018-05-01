<?php
	
	header('Content-Type: application/json; charset=utf-8');
	// 服务端验证
	// echo '注册成功';

	// 真正的逻辑里要将数据插入到数据库
	// echo json_encode($_GET);

	// if() 服务端也验证

	// echo json_encode($_POST);

	// 可以接收到数据，继续联接数据库，存进去
	// 我们省略这一步

	if($_POST['name'] != '') {
		// echo '注册成功';

		// 定义一个丰富的返回信息
		$arr = array(
			'code'=>10000,
			'msg'=>'注册成功',
			'result'=> 'http://www.baidu.com'
		);

		// 转成一个JSON返回
		echo json_encode($arr);
	}


	sleep(5);
	
?>