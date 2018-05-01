
$.fn.waterFall=function(obj){

	var  data={gap:20}; //默认值
	// 用户传递参数使用用户的数据，没有传递参数使用默认值
	data=$.extend(data,obj); 


	//获取所有的图片 ，进行定位

	//$(this) 就是 .items 盒子

	var items=$(this).children('.item'); //获取所有的item

	var w=items.width(); //获取item的宽度

	var count=Math.floor($(this).width()/(w+data.gap)); //算出列数

	var column=[]; //用于记录每一列的高度	


	//遍历 所有的item　逐个进行定位
	items.each(function(index, e) {

		if(index<count){ //如果是第一行 单独处理
			$(e).css({
				top:0, //top：0；
				left:(w+data.gap)*index
			})			
			column[index]=$(e).height(); //更新每一列的列高

		}else{ //其他图片逐个进行定位布局
			//找到最小的列 王往里面追加
			
			var minHeight=column[0];
			var minKey=0;
			for(var i=0;i<column.length;i++){
				if(minHeight>column[i]){
					minHeight=column[i]; //记录最小列列高
					minKey=i; //记录最小列的索引
				}
			}
			
			//追加
			$(e).css({
				left: minKey*(w+data.gap), //最小列索引*(宽度+边距)
				top: minHeight
			})

			//追加之后要更新列高
			column[minKey]+=$(e).height()+data.gap;	
		}


	});

	//找到最高点列高  设置给.items

	var maxHeight=column[0];
	for(var i=0;i<column.length;i++){
		if(maxHeight<column[i]){
			maxHeight=column[i];
		}
	}

	$(this).height(maxHeight);

}