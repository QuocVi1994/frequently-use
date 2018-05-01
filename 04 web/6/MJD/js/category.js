window.onload=function(){
    //左侧滑动
    swipeLeft();

    //右侧滑动
    swipeRight()
}
/*左侧滑动：
* 需求：
* 1、点击 导航
*    被点击的li标签 样式改变
*    被点击的li标签 滑动到页面的顶部
*
* 2、触屏操作导航
*    2-1触屏开始
*       记录其实位置
*    2-2触屏移动
*       记录移动位置
*       让ul跟随鼠标移动
*    2-3触屏结束
*       判断ul的移动是否越界，如果越界吸附回去
*
* */
function swipeLeft(){
    var leftBox=document.querySelector('.body-left');
    var ul=leftBox.querySelector('ul');
    var lis=ul.querySelectorAll('li');

    var currentY=0;//记录ul当前的位移
    //-------------------0-临界值-------------------
    //定位临界值
    var maxTop=0;
    var minTop=leftBox.offsetHeight-ul.offsetHeight;
    //滑动临界值
    var maxSwipe=maxTop+120;
    var minSwipe=minTop-120;
    //----------------0-封装复用代码-----------------
    //添加过渡
    var addTransition=function(){
        ul.style.webkitTransition='transform 0.2s';
        ul.style.transition='transform 0.2s';
    }
    //删除过渡
    var removeTransition=function(){
        ul.style.webkitTransition='none';
        ul.style.transition='none';
    }
    //ul位移
    var setTranslateY=function(translateY){
        ul.style.webkitTransform='translateY('+translateY+'px)';
        ul.style.transform='translateY('+translateY+'px)';
    }
    //-----------------1-点击导航--------------------
    itcast.tap(leftBox,function(e){
        //1-1被点击的li标签 样式改变
        console.log(e.target.parentNode); //e.target触发事件最小的元素
        var target= e.target.parentNode;//获取被点击的li标签
        //排他
        for(var i=0;i<lis.length;i++){
            lis[i].classList.remove('current');
            lis[i].index=i; //自定义索引值
        }
        //显示自己
        target.classList.add('current');
        //1-2被点击的li标签 滑动到页面的顶部 ul位移
        /*
        *  0  0
        *  1  -50
        *  2  -100
        *  3  -150  -50*index
        * */
        //位移的距离=-50*index;
        var y=-50*target.index;
        //数据监测
        if(y>maxTop){
            y=maxTop;
        }

        if(y<minTop){
            y=minTop;
        }
        //添加过渡
        addTransition();
        //ul位移
        setTranslateY(y);

        currentY=y; //记录当前ul的位移

    });

    //---------2-触屏移动 切换导航--------------------
    var startY=0;
    var moveY=0;
    var distanceY=0;
    leftBox.addEventListener('touchstart',function(e){
        startY= e.targetTouches[0].clientY;//记录起始位置
    });

    leftBox.addEventListener('touchmove',function(e){
        moveY= e.targetTouches[0].clientY;//记录移动位置
        distanceY=moveY-startY;//计算距离差
        //让ul跟随鼠标移动  ul移动的距离=之前的位移+distanceY;
        var y=currentY+distanceY;
        //数据检测
        if(y>maxSwipe){
            y=maxSwipe;
        }
        if(y<minSwipe){
            y=minSwipe;
        }
        removeTransition();//删除过渡
        setTranslateY(y);//ul位移
    });

    leftBox.addEventListener('touchend',function(){
        //滑动结束后也要记录当前ul位移
        currentY=currentY+distanceY;
        //判断是否超过定位的临界值  minTop maxTop
        //如果越界 需要吸附回去
        //边界检测
        if(currentY>maxTop){
            currentY=maxTop;
            addTransition(); //添加过渡
            setTranslateY(currentY); //ul位移
        }
        if(currentY<minTop){
            currentY=minTop;
            addTransition(); //添加过渡
            setTranslateY(currentY); //ul位移
        }

        //数据重置
        startY=0;
        moveY=0;
        distanceY=0;
    })

}

function swipeRight(){
    var leftBox=document.querySelector('.body-right');
    var ul=leftBox.querySelector('.right-in');

    var currentY=0;//记录ul当前的位移
    //-------------------0-临界值-------------------
    //定位临界值
    var maxTop=0;
    var minTop=leftBox.offsetHeight-ul.offsetHeight;
    //滑动临界值
    var maxSwipe=maxTop+120;
    var minSwipe=minTop-120;
    //----------------0-封装复用代码-----------------
    //添加过渡
    var addTransition=function(){
        ul.style.webkitTransition='transform 0.2s';
        ul.style.transition='transform 0.2s';
    }
    //删除过渡
    var removeTransition=function(){
        ul.style.webkitTransition='none';
        ul.style.transition='none';
    }
    //ul位移
    var setTranslateY=function(translateY){
        ul.style.webkitTransform='translateY('+translateY+'px)';
        ul.style.transform='translateY('+translateY+'px)';
    }


    //---------2-触屏移动 切换导航--------------------
    var startY=0;
    var moveY=0;
    var distanceY=0;
    leftBox.addEventListener('touchstart',function(e){
        startY= e.targetTouches[0].clientY;//记录起始位置
    });

    leftBox.addEventListener('touchmove',function(e){
        moveY= e.targetTouches[0].clientY;//记录移动位置
        distanceY=moveY-startY;//计算距离差
        //让ul跟随鼠标移动  ul移动的距离=之前的位移+distanceY;
        var y=currentY+distanceY;
        //数据检测
        if(y>maxSwipe){
            y=maxSwipe;
        }
        if(y<minSwipe){
            y=minSwipe;
        }
        removeTransition();//删除过渡
        setTranslateY(y);//ul位移
    });

    leftBox.addEventListener('touchend',function(){
        //滑动结束后也要记录当前ul位移
        currentY=currentY+distanceY;
        //判断是否超过定位的临界值  minTop maxTop
        //如果越界 需要吸附回去
        //边界检测
        if(currentY>maxTop){
            currentY=maxTop;
            addTransition(); //添加过渡
            setTranslateY(currentY); //ul位移
        }
        if(currentY<minTop){
            currentY=minTop;
            addTransition(); //添加过渡
            setTranslateY(currentY); //ul位移
        }

        //数据重置
        startY=0;
        moveY=0;
        distanceY=0;
    })

}