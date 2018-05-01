/**
 * Created by j on 2017/6/13.
 */
(function (angular) {
    //路由表配置模块
    var app=angular.module('movieApp.route',[]);
    app.config(function ($routeProvider) {
        //配置路由

        $routeProvider
            //电影列表路由
            //:page 表示page可以变化
            //page？表示当前参数可以为空
            ///movie/top250/1
            ///movie/top250
            //movie/search/1?q=''
            //#/movie/in_theaters/3
            .when('/movie/:type/:page?',{
                //找当前目录下的template
                templateUrl:"./template/movieListTemplate.html",
                controller:'movieListCtrl'
            })
            //电影详细信息
            .when('/moviedetail/:id',{
                templateUrl:"./template/movieDetaillTemplate.html",
                controller:'movieDetailCtrl'

            })
            .otherwise({
                redirectTo:'/movie/in_theaters'
            })
    })
})(angular);