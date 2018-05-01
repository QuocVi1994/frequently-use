<?php
	$info=array(
		"110"=>array(
			"name"=>"张三",
			"chinese"=>100,
			"math"=>120,
			"english"=>145,
			"summary"=>100
			),
		"111"=>array(
			"name"=>"李四",
			"chinese"=>100,
			"math"=>120,
			"english"=>145,
			"summary"=>100
			),

		"112"=>array(
			"name"=>"王五",
			"chinese"=>100,
			"math"=>120,
			"english"=>145,
			"summary"=>100
			),
		"113"=>array(
			"name"=>"春哥",
			"chinese"=>100,
			"math"=>120,
			"english"=>145,
			"summary"=>100
			),
		);


	//那要用户要请求 数据的学号：
	
	$code=$_GET['code'];

	$html='';
	if($code=='all'){  //如果输入all 返回所有人的 数据
		foreach ($info as $key => $value) {
			$html.="<ul>";
			$html.="<li>姓名：".$value['name']."</li>";
			$html.="<li>语文：".$value['chinese']."</li>";
			$html.="<li>数学：".$value['math']."</li>";
			$html.="<li>英语：".$value['english']."</li>";
			$html.="<li>综合：".$value['summary']."</li>";
			$html.="</ul>";
		}	
	}else{
		$result=$info[$code];  //如果是单个学号则返回 学号对应的数据
		$html.="<ul>";
		$html.="<li>姓名：".$result['name']."</li>";
		$html.="<li>语文：".$result['chinese']."</li>";
		$html.="<li>数学：".$result['math']."</li>";
		$html.="<li>英语：".$result['english']."</li>";
		$html.="<li>综合：".$result['summary']."</li>";
		$html.="</ul>";
	}

	// sleep(4);
	echo $html;	
?>
