<?php
	
	$arr=array(1,2,3,4,5,6);

	for($i=0;$i<count($arr);$i++){
		// echo $arr[$i].'---';
	}


	//遍历关联数组
	//js中遍历对象 for(var key in obj){}

	$info=array(
		"name"=>"ls",
		"gender"=>"nan",
		"age"=>"18",
		"hobby"=>"code"
		);


	foreach ($info as $key => $value) {
		echo  $key.'---->'.$value.'<br>';
	}

?>