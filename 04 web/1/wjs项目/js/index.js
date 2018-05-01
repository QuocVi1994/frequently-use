
window.onload=function(){
  //触屏轮图片的方法
  banner();

  //动态设置wjs-tabs的宽度
  setWidth();

  //初始化提示工具
  $('.bao').tooltip();
  $('.bei').tooltip();
}

//触屏轮图片的方法
function banner(){
  var box=document.querySelector('.carousel');

  //定变量 存储触屏 数据
  var startX=0;
  var moveX=0;
  var distanceX=0;
  //绑定触屏事件
  box.addEventListener('touchstart',function(e){
    // 记录触屏开始的数据
    startX= e.targetTouches[0].clientX;
  })

  box.addEventListener('touchmove',function(e){
    // 记录触屏移动的数据
    moveX= e.targetTouches[0].clientX;
    //算出距离差
    distanceX=moveX-startX;
  })

  box.addEventListener('touchend',function(e){
    //触屏结束判断用户操作方式
    if(distanceX>0){
      //上一张
      console.log('上一张');
      //调用框架提供的方法
      $('.carousel').carousel('prev');
    }

    if(distanceX<0){
      //下一张
      console.log('下一张');
      //调用框架提供的方法
      $('.carousel').carousel('next');
    }

    startX=0;
    moveX=0;
    distanceX=0;

  })
}

//动态设置wjs-tabs的宽度
function setWidth(){
  var w=0;
  $('.wjs-tabs li').each(function(index,e){
    w+=$(e).outerWidth();
  });
  console.log(w);
  //设置宽度
  $('.wjs-tabs').width(w);
};
