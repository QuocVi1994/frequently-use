/**
 * 先定义两个有关于localStorage存储和取值的方法，
 * 因为localStorage存取的都是字符串，我们需要转换。
 * */

const  GOODS_BUY = 'goodsBuy';

// 把获取到对象字符串解析为js对象返回
function getStorage() {
	var objStr = localStorage.getItem(GOODS_BUY); 
	
	// objStr这个值可能是null，为了保证获取到的一定是对象，所以判断一下
	if(objStr) {
		return JSON.parse(objStr);
	}else {
		return {};
	}
}

// 先把对象转化为JSON字符串，然后存储
function setStorage(obj) {
	var objStr = JSON.stringify(obj);
	localStorage.setItem(GOODS_BUY, objStr);
}

// 定义存储数据的对象，这个对象的值会先从localStorage中获取
var data = getStorage();

/**
 * 定义存储商品购买数量与获取的方法
 * */
/**
 * 用于传入商品id与购买的数量，
 * 我们先存储到data中，然后把data持久化存储。
 * */
export function goodsBuySet(id, numbers) {
	data[id] = numbers;
	setStorage(data);
}

/**
 * 用于获取指定商品id的购买数量
 * */
export function goodsBuyGet(id) {
	return data[id];
}

/**
 * 用于获取全部商品的购买数量
 * */
export function goodsBuyGetAll(id) {
	return data;
}

// 获取所有商品累加起来的数量
export function goodsBuyTotal() {
	var sum = 0;
	
	// 获取对象所有的value值，依次遍历累加起来
	Object.values(data).forEach(val=>{
		sum += val;
	});
	
	return sum;
}

