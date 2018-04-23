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

//与获取文本或是设置文本相关的对象
var Txt = {
    getText:function (ele){
        if(typeof ele.innerText=="string"){
            return ele.innerText;//将获取的文本内容返回
        }else {
            return ele.textContent;
        }
    },
    setText:function (ele,value){
        // 能力检测：就是要看当前的浏览器是否支持此对象的属性或是方法
        if(typeof ele.innerText=="string"){
            ele.innerText = value;
        }else { // textContent
            ele.textContent = value;
        }
    }
}

//与获取标签相关的对象
var Tag = {
    getNextElement:function (ele){
        // 能力判断： 就是要看当前的浏览器是否支持此对象的属性或是方法
        if(ele&&ele.nextElementSibling){
            return  ele.nextElementSibling;
        }else { //IE8浏览器的方式
            ele = ele.nextSibling;
            while(ele&&ele.nodeType!=1){
                ele=ele.nextSibling;
            }
            return  ele;
        }
    },
    getPrevElement:function (ele){
        // 能力检测
        if(ele&&ele.previousElementSibling){
            return ele.previousElementSibling;
        }else {
            ele = ele.previousSibling;
            while(ele&&ele.nodeType!=1){
                ele = ele.previousSibling;
            }
            return ele;
        }
    },
    getFirstElement:function (ele){
        // 能力检测
        if(!ele){
            return; //跳出函数，return后面的代码都不会执行
        }
        if(ele.firstElementChild){
            return ele.firstElementChild;
        }else {
            ele = ele.firstChild;
            while(ele&&ele.nodeType!=1){
                ele=  ele.nextSibling;
            }
            return ele;
        }
    },
    getLastElement:function (ele){
        // 能力检测
        if(!ele){
            return; // 直接跳出函数
        }
        if(ele.lastElementChild){
            return ele.lastElementChild;
        }else {
            ele = ele.lastChild;
            while(ele&&ele.nodeType!=1){
                ele=  ele.previousSibling;
            }
            return ele;
        }
    }
}


/**
 * 封装了一个兼容版本的获取下一个标签对象的函数
 * @param ele
 * @returns {*}
 */
function getNextElement(ele){
    // 能力判断： 就是要看当前的浏览器是否支持此对象的属性或是方法
    if(ele&&ele.nextElementSibling){
        return  ele.nextElementSibling;
    }else { //IE8浏览器的方式
        ele = ele.nextSibling;
        while(ele&&ele.nodeType!=1){
            ele=ele.nextSibling;
        }
        return  ele;
    }
}
/**
 * 封装了一个兼容版本的获取上一个标签节点的函数
 * @param ele
 * @returns {*}
 */
function getPrevElement(ele){
    // 能力检测
    if(ele&&ele.previousElementSibling){
        return ele.previousElementSibling;
    }else {
        ele = ele.previousSibling;
        while(ele&&ele.nodeType!=1){
            ele = ele.previousSibling;
        }
        return ele;
    }
}

/**
 * 封装了一个兼容的获取第一个子标签节点的函数
 * @param ele
 * @returns {*}
 */
function getFirstElement(ele){
    // 能力检测
    if(!ele){
        return; //跳出函数，return后面的代码都不会执行
    }
    if(ele.firstElementChild){
        return ele.firstElementChild;
    }else {
        ele = ele.firstChild;
        while(ele&&ele.nodeType!=1){
            ele=  ele.nextSibling;
        }
        return ele;
    }
}
/**
 * 封装了一个兼容版本的获取最后一个子标签节点的函数
 * @param ele
 * @returns {*}
 */
function getLastElement(ele){
    // 能力检测
    if(!ele){
        return; // 直接跳出函数
    }
    if(ele.lastElementChild){
        return ele.lastElementChild;
    }else {
        ele = ele.lastChild;
        while(ele&&ele.nodeType!=1){
            ele=  ele.previousSibling;
        }
        return ele;
    }
}

function $$(id){
  return  document.getElementById(id);
}



function moveAll(source,target){
    var source = $$(source);
    var target = $$(target);
    var options = source.children;
    for(var i=0;i<options.length;i++){
        target.appendChild(options[i]);
        i--;
    }
}

function moveSel(source,target){
    var source = $$(source);
    var target = $$(target);
    var options = source.children;
    for(var i = 0; i < options.length; i++) {
        if(options[i].selected){
            target.appendChild(options[i]);
            i--;
        }
    }
}

/**
 * 封装了一个兼容性的获取页面卷去的头部或是左侧的函数
 * @returns {{scrollTop: (Number|number), scrollLeft: (Number|number)}}
 */
function scroll(){
    return {
        scrollTop:window.pageYOffset || document.body.scrollTop ||document.documentElement.scrollTop|| 0,
        scrollLeft:window.pageXOffset || document.body.scrollLeft ||document.documentElement.scrollLeft|| 0
    };
}
/**
 * 封装了一个兼容版本的获取浏览器的可视区的宽度或高度的函数
 * @returns {{clientWidth: (Number|number), clientHeight: (Number|number)}}
 */
function client(){
    return {
        clientWidth:window.innerWidth ||document.documentElement.clientWidth || document.body.clientWidth ||0,
        clientHeight:window.innerHeight ||document.documentElement.clientHeight || document.body.clientHeight ||0
    };
}

/**
 * 封装了一个兼容版本的获取页面坐标的函数
 * @param e
 * @returns {{x: (Number|*), y: (Number|*)}}
 */
function page(e){
    return {
        x:e.pageX || e.clientX + document.documentElement.scrollLeft,
        y:e.pageY || e.clientY + document.documentElement.scrollTop
    };
}

/**
 * 封装了一个兼容版本的注册事件的函数
 * @param obj
 * @param type
 * @param listener
 */
function addEventListener(obj,type,listener){
    // 能力检测
    if(obj&&obj.addEventListener){
        obj.addEventListener(type,listener,false);
    }else if(obj&&obj.attachEvent){
        obj.attachEvent("on"+type,listener);
    }else {
        obj["on"+type] = listener;
    }
}

/**
 * 封装了一个兼容性的移除事件的函数
 * @param obj
 * @param type
 * @param listener
 */
function removeEventListener(obj,type,listener){
    // 能力检测
    if(obj&&obj.removeEventListener){
        obj.removeEventListener(type,listener,false);
    }else if(obj&&obj.detachEvent){
        obj.detachEvent("on"+type,listener);
    }else {
        obj["on"+type] = null;
    }
}

/**
 * 封装了一个兼容性的阻止 事件冒泡的函数
 * @param e
 */
function stopPropagation(e){
    // 进行能力检测
    if(e&& e.stopPropagation){
        e.stopPropagation();
    }else {
        e.cancelBubble = true;
    }
}