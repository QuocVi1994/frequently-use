<?php 
	
	// 准备聊天内容
	$messages=array(
		"我不约",
		"你在干嘛？",
		"我要去洗澡",
		"你电话多少？",
		"你猜？",
		"不想理你了..."
		);

	//js  math.random
	//array_rand 随机返回数组的一个下标
	echo $messages[array_rand($messages)];

	sleep(1);
?>