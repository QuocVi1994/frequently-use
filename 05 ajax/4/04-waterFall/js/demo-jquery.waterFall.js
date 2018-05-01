
	$.fn.waterFall=function(option){

		// 默认间距为15
		var data=$.extend({
			gap:15
		},option);

		// 初始化
		_this=$(this);

		console.log($(this));

		var items=_this.children();

		console.log(items);

		var width=items.width();

		console.log(width);

		var height=0;

		// 得到列数
		var count=Math.floor(_this.width()/(width+data.gap));

		console.log(_this.width());
		console.log(count);
		console.log(width);

		// 存放每一列当前的高度
		var column=[];

		items.each(function(index,e){

			height=$(e).height();

			if(index<count){

				// 设置裂膏
				column[index]=height;

				$(e).css({ 
						left:(width+data.gap)*index,
						top:0
					});
			}
			else{
				// 先要找到最小的列
				var minColumn=column[0];
				var minKey=0;
				for(var i=0;i<column.length;i++){
					if(minColumn>column[i]){
						minColumn=column[i];
						minKey=i;
					}
				}

				$(e).css({
					left:(width+data.gap)*minKey,
					top:column[minKey]					
				})
				column[minKey]+=$(e).height();
			}
		})

		var maxHeight=column[0];
		
		for(var i=0;i<column.length;i++){
			if(maxHeight<column[i]){
				maxHeight=column[i];						
			}
		}

		_this.height(maxHeight+50);




	}