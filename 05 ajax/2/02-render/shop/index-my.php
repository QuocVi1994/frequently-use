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
		.header,.footer{
			height: 100px;
			background-color: greenyellow;
			text-align: center;
			line-height: 100px;
			font-size: 30px;
		}

		.container{
			width: 80%;
			margin:0 auto;
		}

		.nav{
			background-color: #daa520;
		}

		.con{
			min-height: 100px;
			background-color: pink;
		}
		ul{
			overflow: hidden;
		}
		li{
			float: left;
			padding:15px;
			width: 25%;
			box-sizing:border-box;
			text-align: center;

		}

		li img{
			width: 100%;
		}
		.footer{	
			font-size: 16px;
		}
	</style>
</head>
<body>
	<?php 
		//连接数据库
		//获取数据
		//$arr = //从数据库取出数据
		//这里的数据实际上来自数据库

		$arr[0] = array('href' => 'detail/detail1.php?flag=banana','path' => 'img/banana1.jpg','name' => '香蕉');
		$arr[1] = array('href' => 'detail/detail1.php?flag=apple','path' => 'img/apple1.jpg','name' => '苹果');
		$arr[2] = array('href' => 'detail/detail1.php?flag=orange','path' => 'img/orange1.jpg','name' => '橘子');
		$arr[3] = array('href' => 'detail/detail1.php?flag=pineapple','path' => 'img/pineapple1.jpg','name' => '菠萝');
		$arr[4] = array('href' => 'detail/detail1.php?flag=mango','path' => 'img/mango1.jpg','name' => '芒果');
		$arr[5] = array('href' => '#','path' => 'img/grape1.jpg','name' => '葡萄');
		$arr[6] = array('href' => '#','path' => 'img/pomelo1.jpg','name' => '柚子');
		$arr[7] = array('href' => '#','path' => 'img/pawpaw1.jpg','name' => '木瓜');
		$arr[8] = array('href' => '#','path' => 'img/kivi1.jpg','name' => '猕猴桃');
		$arr[9] = array('href' => '#','path' => 'img/persimmon1.jpg','name' => '柿子');
		$arr[10] = array('href' => '#','path' => 'img/lemon1.jpg','name' => '柠檬');
		$arr[11] = array('href' => '#','path' => 'img/pomegranate1.jpg','name' => '石榴');
		$arr[12] = array('href' => '#','path' => 'img/pear1.jpg','name' => '梨');
		$arr[13] = array('href' => '#','path' => 'img/strawberry1.jpg','name' => '草莓');
		$arr[14] = array('href' => '#','path' => 'img/blueberry1.jpg','name' => '蓝莓');
		$arr[15] = array('href' => '#','path' => 'img/waxberry1.jpg','name' => '杨莓');
		$arr[16] = array('href' => '#','path' => 'img/peach1.jpg','name' => '桃');
		// $arr[17] = array('href' => '#','path' => 'img/coconut1.jpg','name' => '椰子');
		// $arr[18] = array('href' => '#','path' => 'img/apricot1.jpg','name' => '杏');
		// $arr[19] = array('href' => '#','path' => 'img/cherry1.jpg','name' => '樱桃');
		?>	
	<div class="header">
		<h2>传智网上水果超市</h2>
	</div>
	<div class="container">
		<div class="nav">
			<a href="#">水果</a>
			<a href="#">蔬菜</a>
			<a href="#">干果</a>
		</div>
		<div class="con">
			<ul>
				<?php  for($i=0;$i<count($arr);$i++) { ?>
					<li>
						<img src="<?php echo $arr[$i]['path']  ?>" >
						<a href="<?php echo $arr[$i]['href'] ?>"><?php echo $arr[$i]['name'] ?></a>
					</li>
				<?php } ?>				
			</ul>
		</div>
	</div>
	<div class="footer">传智播客·版权所有</div>
</body>
</html>