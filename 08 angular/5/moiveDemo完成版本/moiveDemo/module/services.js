/**
 * Created by j on 2017/6/13.
 */
(function (angular) {
    //服务模块
    var movie_services=angular.module('movieApp.service',[]);
    movie_services.service('httpHelp',function () {
        //通过这个服务获取到jsonp的数据
        this.getJSONP= function (url,callback,data) {
            //拼接data
            var strData='';
            for(key in data){
                strData+=key+'='+data[key]+'&';
            }
            //添加一个随机名字
            var name='jsonp'+Math.random().toString().substring(2);

            //1. 创建全局jsonp方法 被script标签调用
            window[name]=function (data) {
                //console.log(data);
                //将发送过来的数据通过回调函数传递出去
                callback(data);
                //最后获取到数据将当前的script删除
                document.head.removeChild(script)
                window[name]=undefined;
            };
            //2 .创建script标签
            var script=document.createElement('script');
            //3 .将src属性添加到script标签上
            script.src=url+'?'+strData+'apikey=00fa6c0654689a0202ef4412fd39ce06&callback='+name;
            //4 .将script标签添加到head
            document.head.appendChild(script);
        }
    })
})(angular);