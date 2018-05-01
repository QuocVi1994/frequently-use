/**
 * Created by Administrator on 2017/3/18.
 */
/**
 * 定义了一个兼容性的获取标签对象间文本内容的函数
 * @param ele
 * @returns {*}
 */
function getText(ele){
    // 能力检测： 就是要看当前的浏览器是否支持此对象的属性或是方法
    if(typeof ele.innerText=="string"){
        return ele.innerText;//将获取的文本内容返回
    }else {
        return ele.textContent;
    }
}

/**
 * 封装了一个兼容版本的设置标签间内容的函数
 * @param ele
 * @param value
 */
function setText(ele,value){
    // 能力检测：就是要看当前的浏览器是否支持此对象的属性或是方法
    if(typeof ele.innerText=="string"){
        ele.innerText = value;
    }else { // textContent
        ele.textContent = value;
    }
}