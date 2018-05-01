<?php
	
	// var_dump($_POST); 
	//$_POST 只能获取post方式传递的数据
	//获取上传的文件需要用$_FILES;
 // array
 //  'upfile' => 
 //    array
 //      'name' => string 'test.gif' (length=8)
 //      'type' => string 'image/gif' (length=9)
 //      'tmp_name' => string 'C:\wamp\tmp\php4B39.tmp' (length=23)
 //      'error' => int 0
 //      'size' => int 1236842
 //      
	var_dump($_FILES);
	// echo $_FILES['upfile']['name'];
	// 
	// echo $_FILES['upfile']['tmp_name'];

	//服务器的保护机制：
	//用户可向服务器上传文件， 如果在处理程序执行完成时，这个文件没有被程序转移位置，视为此文件无效，此时服务器会自动删除此文件；
	// 100kb  1M 
	//转移上传的文件：
	
	move_uploaded_file($_FILES['upfile']['tmp_name'], '07test.gif');	

	echo '<img src="07test.gif"/>';

?>
