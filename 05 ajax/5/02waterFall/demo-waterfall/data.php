<?php

	header('Content-Type:application/json; charset=utf-8');

	// 读取json数据
	// 正常工作中是从数据库里取的
	$data = file_get_contents('./data.json');

	// 转换成PHP数组
	$data = json_decode($data);

	// 根据页码计算offset
	$page = $_POST['page'];

	// 每页10条
	// 1	0-9
	// 2	10-19
	// 3	20-29
	// 4	30-39

	// (page - 1) * 10 计算得到每一页的第1条数据


	// 每页的数据计算每页数据的"起点""
	$offset = ($page - 1) * 10;

	// 从数组取出一部分数据

	// 截取10条数据
	$result = array_slice($data, $offset, 10);

	// 翻页
	$page++;

	// 放到数级组里
	$arr = array (
		'page'=> $page,
		'items'=>$result
	);

	echo json_encode($arr);

	// echo json_encode(array('page'=>$page, 'items'=>$result));

	sleep(1);

?>