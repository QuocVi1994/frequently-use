<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		*{
			margin: 0;
			padding: 0;
			list-style: none;
		}

		ul{
			width: 1000px;
			margin:100px auto;
		}

		li{
			float: left;
			width: 80px;
			height: 50px;
			background-color: green;
			color:#fff;
			line-height: 50px;
			text-align:center;
			margin-right:20px;
		}
	</style>
</head>
		<?php 
			$navs=array('首页','服装城','美妆','京东超市','全球购','电器');		
		?>
<body>
	<ul>
		<?php for($i=0;$i<count($navs);$i++) { ?>

			<li><?php echo $navs[$i]?></li>

		<?php } ?>
	</ul>
</body>
</html>