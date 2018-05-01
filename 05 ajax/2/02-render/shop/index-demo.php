<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>静态网站</title>
	<style type="text/css">
	html,body,div,ul,img{padding:0;margin:0;}
	header{background: lightgreen;height: 50px;text-align: center;line-height: 50px;font:bold 24px/50px Arial;}
	nav{background: lightblue;height: 30px;line-height: 30px;padding-left: 180px;}
	section{background: lightyellow;min-height: 600px;}
	footer{background: lightgray;height: 50px;text-align: center;line-height: 50px;}
	#container{width:1010px;height:auto;margin:auto;background: #E2F9AA;padding-bottom: 10px;}
	ul li{list-style: none;width: 190px;height: 200px;float: left;background: lightyellow;margin-left: 10px;margin-top: 10px;}
	ul li img{width:190px;height: 170px;display: block;cursor: pointer;}
	ul li div{background: #7DBD50;width: 185px;height: 30px;line-height: 30px;padding-left: 5px;}
	</style>
</head>
<body>
	<header>蔬菜水果网上超市</header>
	<nav>
		<a href="/dynamicweb/index.php">水果</a>
		<a href="/dynamicweb/index.php">蔬菜</a>
		<a href="/dynamicweb/index.php">干果</a>
	</nav>
	<section>
		<?php 
		//连接数据库
		//获取数据
		//$arr = //从数据库取出数据
		//这里的数据实际上来自数据库

		$arr[0] = array('href' => 'detail/detail1-demo.php?flag=banana','path' => 'img/banana1.jpg','name' => '香蕉');
		$arr[1] = array('href' => 'detail/detail1-demo.php?flag=apple','path' => 'img/apple1.jpg','name' => '苹果');
		$arr[2] = array('href' => 'detail/detail1-demo.php?flag=orange','path' => 'img/orange1.jpg','name' => '橘子');
		$arr[3] = array('href' => 'detail/detail1-demo.php?flag=pineapple','path' => 'img/pineapple1.jpg','name' => '菠萝');
		$arr[4] = array('href' => 'detail/detail1-demo.php?flag=mango','path' => 'img/mango1.jpg','name' => '芒果');
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
		$arr[17] = array('href' => '#','path' => 'img/coconut1.jpg','name' => '椰子');
		$arr[18] = array('href' => '#','path' => 'img/apricot1.jpg','name' => '杏');
		$arr[19] = array('href' => '#','path' => 'img/cherry1.jpg','name' => '樱桃');
		?>
		<div id="container">
			<ul>
				<?php for($i = 0;$i < sizeof($arr);$i++) {$item = $arr[$i];?>
				<li>
					<a href="<?php echo $item['href'] ?>">
						<img src='<?php echo $item['path'] ?>'>
						<div><?php echo $item['name'] ?></div>
					</a>
				</li>
				<?php } ?> 
			</ul>
			<div style="clear: both;"></div>
		</div>
	</section>
	<footer>版权所有</footer>
</body>
</html>