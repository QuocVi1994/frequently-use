<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		.box{
			width: 300px;
			height: 300px;
			background-color: red;
		}
	</style>
	<script>
		alert('222');
	</script>
</head>
<body>
	<div class="box">ccc</div>
	<?php 		
	//我们的php代码必须放在代码块中，在代码块外面的内容会直接忽略，
	//最后会把代码块外面的内容原样输出给浏览器
		echo 2+3;
	?>
</body>
</html>