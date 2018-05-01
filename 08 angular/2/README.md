# 模块
###需要记住的知识点　
- 模块的创建　多模块的使用　寻找模块　
- 控制器防止压缩　多控制器的使用
- 全局angular方法了解
-  表单验证
## 创建模块
```
 angular.module('myApp',[]);
```
### 相同模块名
- 即便是相同的模块创建出来以后也是不同的模块
```
  //创建一个模块
    var app=angular.module('myApp',[]);
    var app2=angular.module('myApp',[]);
    console.log(app === app2); // false
```
### 寻找模块
- 寻找模块, 通过模块名字找到对应的模块(在自执行函数中寻找对应的模块)
```angular2html
   //创建一个模块
    //var app=angular.module('myApp',[]); 
    //寻找模块, 通过模块名字找到对应的模块(在自执行函数中寻找对应的模块)
    var app3=angular.module('myApp'); 
    console.log(app === app3); //true
```
### 常用模块使用
- 在公司使用中一般会有主模块和多个子模块配套使用
```
    var app=angular.module('myApp',['myApp2']);
    app.controller('myCtrl1',function ($scope) {
        $scope.text='myAppmyCtrl'
    });
//    //子模块
    var app2=angular.module('myApp2',[]);
    app2.controller('myCtrl2',function ($scope) {
        console.log('myApp2myCtrl2被调用了');
        $scope.text='myApp2myCtrl'
    })
```
### 不常用的模块使用
- 通过bootstrap方式来使用多个模块
``` 
 var app=angular.module('myApp',[]);
    app.controller('myCtrl',function ($scope) {
        $scope.text='myAppmyCtrl'
    });
    var app2=angular.module('myApp2',[]);
    app2.controller('myCtrl2',function ($scope) {
        $scope.text='myApp2myCtrl2'
    });
    //ngApp可以被多次使用
    //bootstrap用来手动注册ngApp
    //了解
    angular.bootstrap(document.getElementById('my'),['myApp']);
    angular.bootstrap(document.getElementById('my2'),['myApp2'])
```
# 控制器
### 多个控制器使用
1. ngController只能放在ngApp中使用
2. 会有多个controller一起使用，controller的使用采用就近原则来使用controller
3. $scope会有一个类似继承的关系,每一个主模块的页面中都会有一个$roorScope(主作用域)，所有的控制器都会创建自己的scope（子作用域）
4. $scope中没有的变量会去上一级scope寻找直到$rootScope终止
```
 app.controller('myCtrl',function ($scope) {
       $scope.text='hellomyCtrl'
    });
    app.controller('myCtrl2',function ($scope) {
        $scope.text='hellomyCtrl2 嵌套'
    })
```

### 控制器防止压缩
- 下面这种方式使用angular在js压缩过程中会报错，爆出参数找不到
```
 var app=angular.module('myApp',[]);
    app.controller('myCtrl',function ($scope) {
       $scope.text='hellomyCtrl'
    });
```
- 防止压缩
1. 在使用function时先添加中括号，然后再把function添加到中括号中
2. 在中括号前面添加依赖注入参数，参数以字符串的形式出现
3. 最后将依赖注入的参数写到function
- 防止压缩时需要注意参数的名字需要见名知意，在function中的顺序需要按照数组中的参数顺序使用
```
   var app=angular.module('myApp',[]);
    app.controller('myCtrl',['$scope','$log',function ($scope,$log) {
        $scope.text='防止压缩的controller'
        $log.log('$log')
    }])
```

### 防止压缩2

- 通过使用$inject来将需要依赖注入的服务,在外部添加进来，同时也能做到防止压缩
```
  var app=angular.module('myApp',[]);
    var myCtrl2=function (a) {
        a.text='外部引用的ctrl,$inject_a'
    };
    //$inject用来注入服务，可以用来防止压缩
    myCtrl2.$inject=['$scope']
   app.controller('myCtrl',myCtrl2)
```
# Angular全局方法
- $$的方法或者属性尽量不要使用
- bootstrap 用来手动添加ngApp
- module 用来创建模块
- version 查看版本
- 凡属于is开头的都是用来做判断 返回布尔值
- toJson 将对象转换成Json字符串
- fromJson 将Json字符串 转换成json对象
-  merge（obj1,obj2） 用来将后面obj2对象合并到obj1中
- copy(obj1,obj3) 深拷贝obj1到obj3中
- uppercase  lowercase 转换大小写
- element（精简版）element返回的是jqLite 缺少了很多东西(在angular做页面时候有些地方angular做不到的情况下才用 jqLite或者jquery使用)
# 表单验证
- angular 中有自己的表单验证方式
##  使用angular表单验证步骤 
1. 给你的表单form添加name，同时会在$scope上面添加验证信息
2. 给你表单中所有的表单元素添加name ng-model

## 需要用到的验证属性
- required 用来标识表单是否为空
- ng-maxlength最大字符串
- ng-minlength 最小字符串
- novalidate="false" 禁用required 
- touched 表示已经获取过焦点
- untouched 表示没有获取过焦点 
- pristine 没有使用过
- dirty 已经使用过 
- valid 已经通过验证
- invalid 未通过验证 
- error 未通过的错误信息