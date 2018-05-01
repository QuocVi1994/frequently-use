
$.fn.waterFall=function(option){
	//如果用户名没有传参数 取默认参数
	var myGap=$.extend({gap:20},option); //有则覆盖

	//开始瀑布布局
	// $(this);  指得是.items 

	var items=$(this).children('.item'); //获取所有的item
	var itemWidth=items.width(); //获取的数组中第一个元素的宽度
	var count=Math.floor($(this).width()/(itemWidth+myGap.gap));
	var column=[];//定义一个数组，存储5个列高度， 方面后面获取最小列高


	// 布局开始
	// 拿到页面中所有itme进行定位　
	// 　1-1 第一个单独处理 left: （宽度+间距）*列的索引值  top:0
	// 　1-2 其他图片的定位
		//  top:当前最小的列高+间距   left:当前最小列的索引*（宽度+间距）

	items.each(function(index,e){ //index 当前遍历元素索引值  e 当前遍历的item
		//1-第一行 index<列数
		if(index<count){
			$(e).css({
			'left':index*(itemWidth+myGap.gap),
			'top':0 });

			//立即更新列高
			column[index]=$(e).height(); //把当前元素的高度存放到对应列高中
			console.log(column);
		}else{ //其他图片的定位
			//2-1 通过比较获取最小列的裂高和索引值
			var minHeight=column[0];
			var minKey=0;
			for(var i=0;i<column.length;i++){
				if(minHeight>column[i]){
					minHeight=column[i];
					minKey=i;
				}
			}

			//获取最小列高后 进行定位
			$(e).css({
				left:minKey*(itemWidth+myGap.gap),
				top:minHeight+myGap.gap
			});

			// 立即更新列高
			column[minKey]+=$(e).height()+myGap.gap;
		}
	});

	//获取最大列高  赋值给 items
	var maxHeight=column[0];
	for(var i=0;i<column.length;i++){
		if(maxHeight<column[i]){
			maxHeight=column[i];
		}
	}
	console.log(maxHeight);
	//把最大值赋值给items
	$(this).height(maxHeight);
}