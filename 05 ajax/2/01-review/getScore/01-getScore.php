<?php 
	header('content-type:text/html;charset=utf-8');
	// 用一个数组来存在一个班的成绩
	
	$info=array(
		"110"=>array(
			"name"=>"进哥哥",
			"chinese"=>59,
			"math"=>61,
			"english"=>149,
			"other"=>2
			),
		"111"=>array(
			"name"=>"老王",
			"chinese"=>99,
			"math"=>1,
			"english"=>109,
			"other"=>3
			),
		"112"=>array(
			"name"=>"小王",
			"chinese"=>149,
			"math"=>9,
			"english"=>150,
			"other"=>100
			),
		"113"=>array(
			"name"=>"小陈",
			"chinese"=>123,
			"math"=>19,
			"english"=>1,
			"other"=>1
			)
	);

	//如果获取是all  返回所有的成绩 
	//如果是学号 返回一个人的成绩
	// 获取学号：
	$code=$_POST['code'];

	$html='';  //用于拼接成绩

	if($code=='all'){ //返回所有的成绩
		foreach ($info as $key => $value) {
			$html.='<ul>';
			$html.='<li>姓名：'.$value['name'].'</li>';
			$html.='<li>语文：'.$value['chinese'].'</li>';
			$html.='<li>数学：'.$value['math'].'</li>';
			$html.='<li>英语：'.$value['english'].'</li>';
			$html.='<li>综合：'.$value['other'].'</li>';
			$html.='</ul>';
		}		
	}else{ //如果是当学号只获取对应学号的成绩
			$result=$info[$code];
			$html.='<ul>';
			$html.='<li>姓名：'.$result['name'].'</li>';
			$html.='<li>语文：'.$result['chinese'].'</li>';
			$html.='<li>数学：'.$result['math'].'</li>';
			$html.='<li>英语：'.$result['english'].'</li>';
			$html.='<li>综合：'.$result['other'].'</li>';
			$html.='</ul>';
	}

	echo $html;
?>