<?php
	
	// 字符型、整型、浮点型、布尔型、数组、对象、NULL
	// 单引号&双引号区别
	// 索引数组、关联数组（了解即可）
	

	//字符串

	$str1="bed before moon";

	$str2='like ice on floor';


	// echo $str2;

	// echo '$str1';

	// echo "$str1"; //bed before moon

	//注意 如果双引号中是一个变量名，则会输出变量的值；



	//数值类型
	$age=18;

	$pi=3.1415926;

	// echo $age+$pi;


	//布尔类型 
	// $flag=true;  //1 
	$flag=false;    //空字符串 

	// echo $flag;

	//数组 
	//var  arr=[1,2,3,4,5,6];  arr.length;


	$arr = array(1,2,3,4,5,'abc');

	//获取数组中的元素
	// echo $arr[0]; 
	// //获取数组的长度 count();
	// echo count($arr);
	// echo $arr;
	// print_r($arr);
	// var_dump($arr);
	/*
		var obj={
			name:'zs',
			age:18
		}
	 */
		//关联数组

		$info=array(
			"name"=>"zs",
			"age"=>18,
			"sex"=>"wan"
			);



		//获取关联数组值

		echo $info["sex"];

		// echo $info;  
		//echo 通常只用于输出简单类型是数据
		//如果输出复杂类型的数据
		// print_r();用于输出复杂类型的数据
		// var_dump(); 用于输出数据的详细信息

		var_dump($info);

?>