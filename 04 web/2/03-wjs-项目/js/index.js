window.onload=function(){
    /*轮播图*/
    banner();

    //初始化提示工具
    $('.bao').tooltip();
    $('.guang').tooltip();

    //设置ul的宽度
    setWidth();
}

/*轮播图*/
function banner(){
    var picBox=document.querySelector('.carousel');

    //给大盒子绑定touch事件
    //定义变量存数据
    var startX=0;
    var moveX=0;
    var distanceX=0;

    picBox.addEventListener('touchstart',function(e){
        startX= e.targetTouches[0].clientX; //获取起始坐标值
    })

    picBox.addEventListener('touchmove',function(e){
       moveX= e.targetTouches[0].clientX;    //获取移动后的坐标值
       distanceX=moveX-startX; //算出距离差
    })

    //触屏结束后判断用户的操作方式
    picBox.addEventListener('touchend',function(){
        if(distanceX>0){
            // 右侧滑动  上一张
            console.log('right');
            $('.carousel').carousel('prev');
        }

        if(distanceX<0){
            //左侧滑动  下一张
            console.log('left');
            $('.carousel').carousel('next');
        }

        //数据重置
        startX=0;
        moveX=0;
        distanceX=0;
    })
}

function setWidth(){
    var w=0;
    $('.wjs-tabs li').each(function(index,e){
        w+=$(e).outerWidth(true);
        //wdith();
        //innerWidth();
        //outerWidth();
        //outerWidth(true);
    })

    $('.wjs-tabs').width(w); //将累加的宽度设置给ul
}