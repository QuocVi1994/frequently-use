
// 1、left值 = 固定的宽度 * 当前列的索引值
// 2、top值 = 当前最低列的高度
// 3、列里，每添加一个元素，对应列的高度要发生更新

$.fn.waterFall = function (options) {

	// 默认值
	var defaults = {
		gap: 20
	}

	// 参数扩展
	defaults = $.extend(defaults, options);

	// $(this); 调用访方法的DOM元素

	// 初始化参数
	var _this = $(this), // 缓存this
		items = _this.children(), // 所有需要定位处理的子元素
		width = items.width(), // 获得子元素的宽度
		height = '',
		count = Math.floor(_this.width() / width), // 向下取整，得到列数
		colums = [], // 存储列高的一个数组
		gap = defaults.gap; // 间距

	// 遍历循环
	items.each(function (key, val) {
		// console.log(key);
		// console.log(val);
		height = $(val).height(); // 每个元素的高度

		if(key < count) { // 第一行
			colums[key] = height; // 存储第一行每列的高度

			// 确定第一行的坐标值
			$(val).css({
				top: 0,
				left: (width + gap) * key
			});
		} else { // 其它行
			// 计算列高数组里最小值及最小值的下标
			var min_val = colums[0];
			var min_key = 0;
			for(var i=0; i<colums.length; i++) {
				if(colums[i] < min_val) {
					min_val = colums[i];
					min_key = i;
				}
			}

			// 更新最小列
			colums[min_key] += height + gap;

			// 设置其它行的坐标值
			$(val).css({
				top: min_val + gap,
				left: (width + gap) * min_key
			});
		}

	});

	// 计算最大值
	var max_val = colums[0];
	for(var j=0; j<colums.length; j++) {
		if(colums[j] > max_val) {
			max_val = colums[j];
		}
	}

	// 设置高度
	_this.height(max_val);
	
}
