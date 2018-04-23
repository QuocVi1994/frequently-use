// �ж�һ��ʵ�������� �Ƿ�������ԭ�Ͷ�������
function hasPrototypeProperty(obj, pro) {
    //  hasOwnProperty   in
    if (!obj.hasOwnProperty(pro) && (pro in obj)) {
        return true;
    }
    return false;
}

// js��ȡurl�Ĳ���
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]); return null;
}

function returnNoSpace(str) {
    return str.replace(/\s+/g, ' ');
}



// 兼容性滚动条
document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
var arr = [
    { isb: false, name: "aaa" },
    { isb: true, name: "bbb" },
    { isb: false, name: "ccc" }
];

/*
filter:	检测数值元素，并返回符合条件所有元素的数组。
params:function(item 每一项  index 索引 thisArr 数组本身)
return:返回 function里的每一项的返回值为ture的新数组
*/
// var arr1=arr.filter(function(item,index,thisArr){
//     return item.isb;
// })

/*
every 检测数值元素的每个元素是否都符合条件
array.every(function(currentValue,index,arr), thisValue)
thisValue:可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。
如果省略了 thisValue ，"this" 的值为 "undefined"
*/
// var index=0;
// var arr1=arr.every(function(item,index){
//     index++;
//     console.log(index);
//     return item.isb;
// })

/*
map:方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
array.map(function(currentValue,index,arr), thisValue)
*/
// var arr1=arr.map(function(item,index){
//     return item.name+ " === ";
// });

// push 往屁股添加一个值 返回数组的长度 4= arr.push(d)  arr= [a, b, c, d]
// pop   从屁股移除一个值 返回被删除的值 c= arr.pop()   arr= [b, c]
// unshift 从头部添加一个值 返回数组的长度 4= arr.unshift(0) arr= [0, a, b, c]
// shift 从头部删除一个值 返回被删除的值  a= arr.shift() arr= [b, c]

function colorLog(str) {
    console.log('%c' + str, 'background-image:-webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );color:transparent;-webkit-background-clip: text;font-size:5em;');
}

function whatScreen() {

  var width = document.querySelector("html").offsetWidth;
  var title = document.querySelector("title");
  if (width <= 768) {
    title.innerHTML = "极小屏幕-" + width;
  } else if (width > 768 && width <= 992) {
    title.innerHTML = "小屏幕-" + width;
  } else if (width > 992 && width <= 1200) {
    title.innerHTML = "普通屏幕-" + width;
  } else if (width > 1200) {
    title.innerHTML = "大屏幕-" + width;
  }
}


// 将超出行数的部分 变成 ...
.line-2{
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
}


// 分页逻辑
// (QueryObj.page-1)*QueryObj.pageSize+i+1)