# $scope

- $scope是用来连接 View和Model的一个桥梁
 
## $scope.$watch
- 用来监视$scope中变化的数据
- 如果是引用类型的数据，需要在function后面添加 `true`

```
  //$watch只能用来监视在$scope中的数据
        $scope.$watch('text',function (newVal,oldVal) {
            console.log('newVal：'+newVal);
            console.log('oldVal：'+oldVal);
        })
    //如果是对象需要在方法的后面添加true，用来深度监视数据
    $scope.$watch('person',function (newVal,oldVal) {
        console.log('newVal：');
        console.log(newVal);
        console.log('oldVal：');
        console.log(oldVal);
    },true)
```

## $scope.$apply

- $scope没有办法监视异步数据变化，通过$scope.$apply来通知$scope将数据发生改变并且将数据更新到页面上

```
 setInterval(function () {
            $scope.date=new Date();
            console.log($scope.date);
            //$apply用来告诉angular开始更新数据
            $scope.$apply();

            //双向数据绑定通过$watch 监视数据变化，最后在监视完成数据有发生改变的情况下
            //会去调用$scope.$apply()，重新更新$scope
        },1000);
```

## $scope.$broadcast

- 由父级控制器向子控制器发送数据

```
   $scope.$broadcast('sonmsg',{'msg':'要不要生活费？'})
```
## $scope.$emit

- 由子级控制器向父控制器发送数据

```
   $scope.$emit('fasthermsg',{'msg':'要20000000'})
```
## $scope.$on

- 用来接收$broadcast和$emit 中的数据

```
 $scope.$on('sonmsg',function (scope,msg) {
            console.log(scope);
            console.log(msg);
        });
```

# Api

- API（Application Programming Interface,应用程序编程接口）是一些预先定义的函数，目的是提供应用程序与开发人员基于某软件或硬件得以访问一组例程的能力，而又无需访问源码，或理解内部工作机制的细节。

## JSApi

- 就是以js为主方法的集合,同时配套的称为api文档
- [百度API](http://lbsyun.baidu.com/index.php?title=jspopular)

## WebApi

- 通过发送网络请求的Api接口

# SPA 应用

- 单页Web应用（single page web application，SPA），就是只有一张Web页面的应用

> 好处
 1. 只有一张Web页面
 2. 不会造成整个页面刷新
 3. 请求的数据变小
 4. 用户在第一次加载的时候速度会慢一点，后面的请求会变快
 
> 缺点：
 缺点是百度的搜索引擎做seo优化会变差
 
## angular单页面使用步骤 
 
```
1.angular spa 先引用angularjs和angular routejs
2 在模块中引用ngRoute
3 创建路由表
4 在你需要做路由切换的位置使用ng-view
```