/**
 * Created by Administrator on 2017/1/13.
 */
/**
 * 封装了一个兼容版本的获取当前对象内嵌属性的函数
 * @param obj
 * @param attr
 * @returns {*}
 */
function getStyle(obj, attr) {
    // 能力检测 ，就是要看当前的浏览器是否支持此对象的属性和方法
    if (obj.currentStyle) {  //IE浏览器支持的属性
        return obj.currentStyle[attr];
    } else { // 谷歌和火狐  IE9+
        return window.getComputedStyle(obj, false)[attr];
    }
}

function animate(obj, json, fn) {
    clearInterval(obj.timerId);
    obj.timerId = setInterval(function () {
        // 获取对象的当前位置
        var flag = true;
        for (var key in json) { // 通过for-in遍历json获取到对应的属性和属性值
            var leader = parseInt(getStyle(obj, key)) || 0; //用key来获取原来的值
            console.log(leader);
            var target = json[key];//这是要移动到的目标位置
            var step = (target - leader) / 10;  //63.15  0.9  0  1
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            obj.style[key] = leader + 'px';
            if (leader != target) {
                flag = false;//如果有一个属性还没有到达目标位置的话，就让flag为false
            }
        }
        if (flag) {  // 当所有的属性都到达了目标位置的时候，才能够清空定时器
            clearInterval(obj.timerId);
            if (fn) { // 如果有函数传进来，则进行调用
                fn();
            }
        }

    }, 15)

}