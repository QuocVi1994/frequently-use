/**
 * Created by Administrator on 2017/4/5.
 */

$.fn.changeColor = function (color){
    // jQuery的插件都是依赖于jQuery文件的，就是还是要使用原来jQuery中的那些方法

    // 在插件当中，this表示jQuery对象
    this.css("backgroundColor",color);
}