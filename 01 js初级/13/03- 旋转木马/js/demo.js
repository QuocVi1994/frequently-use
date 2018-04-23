/**
 * Created by Administrator on 2017/3/28.
 */
window.onload = function(){
    var config = [
        {
            "width": 400,
            "top": 20,
            "left": 50,
            "opacity": 0.2,
            "zIndex": 2
        },//0
        {
            "width": 600,
            "top": 70,
            "left": 0,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 800,
            "top": 120,
            "left": 200,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            "width": 600,
            "top": 70,
            "left": 600,
            "opacity": 0.8,
            "zIndex": 3
        },//3
        {
            "width": 400,
            "top": 20,
            "left": 750,
            "opacity": 0.2,
            "zIndex": 2
        }//4
    ];//其实就是一个配置单 规定了每张图片的大小位置层级透明度
    //1. 获得要操作的对象
    var wrap = document.getElementById("wrap");
    var slide = document.getElementById("slide");
    var arrow = document.getElementById("arrow");
    var arrLeft = document.getElementById("arrLeft");
    var arrRight = document.getElementById("arrRight");
    var lis = slide.getElementsByTagName("li");
    var flag = true;
    // 2. 让每个li标签各就各位
    assign();

    function assign(){
        for(var i = 0; i < config.length; i++) {
            animate(lis[i],config[i],function (){
                   flag = true;
            });
        }
    }

    // 3. 鼠标移入大盒子，要显示左右按钮
    wrap.onmouseover = function (){
           animate(arrow,{
               opacity:1
           })
    };
    //4. 鼠标离开之后，要隐藏左右按钮
    wrap.onmouseout = function (){
           animate(arrow,{
               opacity  :0
           })
    }

    // 5. 给右侧按钮注册事件
    arrRight.onclick = function (){
        if(flag){
            flag = false;
            // 单击右侧按钮，让第五张图片走到第一张图片的位置,依次类推，实际 上就是让第一个li标签的样式来控制 第5个li标签
            config.push(config.shift());// 将数组中的第一项剪切下来，追加到数组的最后面
            assign();// 根据新生成的数组，重新生成每个li标签的样式
        }

    }

    // 6. 给左侧按钮注册事件
    arrLeft.onclick = function (){
        if(flag){
            flag = false;
            config.unshift(config.pop());
            assign();
        }
    }

    // 7. 加节流阀  就是给每个按钮加一个判断条件
    //animate(lis[0],config[0]);
    //animate(lis[1],config[1]);
    //animate(lis[2],config[2]);
    //animate(lis[3],config[3]);
    //animate(lis[4],config[4]);
    //animate(box,{
    //    "width": 400,
    //    "top": 20,
    //    "left": 50,
    //    "opacity": 0.2,
    //    "zIndex": 2
    //});
}