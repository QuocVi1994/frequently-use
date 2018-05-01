<?php 
	// echo 'hello  formData';
	// var_dump($_FILES['file']);

	move_uploaded_file($_FILES['file']['tmp_name'],'./test.gif');

	echo '<img src="test.gif"/>';
?>