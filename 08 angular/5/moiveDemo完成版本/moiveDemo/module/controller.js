/**
 * Created by j on 2017/6/13.
 */
(function (angular) {
    var app=angular.module('movieApp.controller',[]);
    //电影列表控制器
    app.controller('movieListCtrl',function ($scope,$routeParams,$location,httpHelp) {
        //页面参数
        //总页数
        $scope.maxPage=0;
        //向上翻页
        $scope.upPage=function () {

            //如果大于1就减1页
            if($scope.page>1){
                $scope.page-=1;
                $location.path('/movie/'+$routeParams.type+'/'+$scope.page);
            }

        };
        //向下翻页
        $scope.downPage=function () {
            if($scope.page<$scope.maxPage){
                $scope.page+=1;
                //通过path设置路径
                $location.path('/movie/in_theaters/'+$scope.page)
            }

        };
        //分页的设置
        //通过添加start和count来设置分页

        //当前页数            3
        $scope.page=parseInt($routeParams.page||'1');
        var url='https://api.douban.com/v2/movie/'+$routeParams.type;
        $scope.movieData={title:'正在加载请稍后'};
        //$scope.isShow=true
        httpHelp
            .getJSONP(
                url,
                function (data) {
                    //统计总页数
                    $scope.maxPage=Math.ceil(data.total/4);
                    $scope.movieData=data;
                    //异步操作需要将数据同步到$scope
                   // $scope.isShow=false
                    //分页 数据获取
                    $scope.$apply();
                },
                {start:($scope.page-1)*4,count:4,q:$routeParams.q})
    })

    //电影详细信息控制器
    app.controller('movieDetailCtrl',function ($scope,$routeParams,httpHelp) {
        //电影详细页面的url
        //https://api.douban.com/v2/movie/subject/27039657
        var url='https://api.douban.com/v2/movie/subject/'+$routeParams.id;
        httpHelp
            .getJSONP(
                url,
                function (data) {
                    //统计总页数
                    $scope.movieDetail=data;
                    $scope.$apply();
                })
    })

    //电影搜索
    app.controller('searchCtrl',function ($scope,$location) {
        //搜索电影
        $scope.searchMoive=function () {
            if($scope.searchText){
                ///movie/:type/:page?
                // movie/search?q='
                //更新url参数
                $location.path('/movie/search/').search("q",$scope.searchText)
            }
        }
    })
}) (angular);