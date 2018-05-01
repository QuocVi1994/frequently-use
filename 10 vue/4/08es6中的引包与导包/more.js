// es6导出多个东东是分别export xxx;

export function err(msg) {
	console.error(msg);
};

export function log(msg) {
	console.log(msg);
};

// 导出基本数据类型，先得通过一个变量定义，然后导出这个变量，这样这个基础数据就有名称了
var a = 123;
export { a };

export var b  = 456;
