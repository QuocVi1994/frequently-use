# 自定义指令

- 在之间都是使用以ng-开头的官方指令，angular内部可以通过自定义指令来创建属于你的指令

## 模板

>template里面是使用字符串形式的模板

```
 app.directive('myHello',function () {
        //所有的自定义指令内容都是从返回值开始的
        return {
            //模板
            template:'<h1>hello directive</h1>'
        }
    })
```

> 如果模板的内容过于复杂,所以使用templateUrl来完成模板的使用，
1. 使用templateUrl模板放置的是模板的路径（放置id）
2. 如果是路径的形式出现，那么在对应的路径文件中需要有一个空的html页面存放你的模板

```
//一个空模版 里面不能含有 body head html标签
<div class="panel" ng-class="{'panel-primary':type=='primary','panel-success':type=='success'}">
    <div class="panel-heading">
        <h3 class="panel-title">{{title}}</h3>
    </div>
    <div class="panel-body">
        <div  ng-transclude></div>
    </div>
</div>
```

## 去壳

> 因为在使用自定义指令的同时会将当前指令的外壳标签一并渲染，所以在某一些情况下需要去除指令外壳采用replace:true

## 指令的使用形式

> 使用指令一共有四种方式 

- attribute 属性

```
    <!--以属性的形式-->
        <div my-hello>

        </div  >
```

- element 标签

```
        <!--标签的形式-->
         <my-hello></my-hello>
```

- class 类名

```
        <!--以类的形式-->
        <div class=" my-hello">
```

- comment 注释 注释的方式写的指令需要配合replace:true一起使用

```
        <!--注释的方式使用-->
        <!-- directive:my-hello  -->
```

## 由外部传递内容到指令中来

### transclude传递内容

1. 在自定义属性中添加 `transclude:true`
2. 在你的模板中又需要从外部替换内容的标签上 添加属性 `ng-transclude` ，加上ng-transclude属性以后，改标签中的内容将有外部内容替换
3.　在使用该指令时　在指令标签的中间添加上的内容将会替换ng-transclude所在位置的标签内容
４.　注意多次使用ng-transclude只是进行原有内容的复制

### scope传递内容

1．在属性中scope以对象的形式出现
2. 如果外部有需要传递内容进来需要在scope中添加对应的属性 
3. scope有三中参数 true、{}、false不会创建独立作用域
4. （true和{}）用来创建独立作用于域 ，区别true还会附带继承父作用域，{}不会继承
5.  false不会创建独立作用域

#### scope 参数传递有3个符号

- @ 用来传递字符串
- = 传递变量 并且有双向数据绑定功能
- & 传递方法

## link

- 在angular中鼓励使用dom操作的位置
- link后面的fuction 中的三个参数

1. scope  能够访问到当前的作用域
2. ele 获取到当前自定义指令中的jqLite对象
3. atts 获取到当前自定义指令中的所有属性

```
 app.directive('myLink',function () {
        //angular中不鼓励在除了link之外的地方操作dom元素
        //link 用来在angular中操作dom
        return {
            link:function (scope,ele,atts) {
                //scope 能够访问到当前的作用域
               // console.log(scope);
                //ele 获取到当前自定义指令中的jqLite对象
               // console.log(ele[0]);
                console.log(atts);
            }
        }
    })
```

# 过滤器

- 金钱过滤器

```
<p>金钱过滤器:{{1000|currency}}</p>
```

- 时间过滤器

```
<p>{{1497080646471|date:'yyyy-MM-dd HH:mm:ss Z'}}</p>
```

- json过滤器

```
<pre>{{ {
    "id":"1220562",
    "alt":"https:\/\/book.douban.com\/book\/1220562",
    "rating":{"max":10, "average":"7.0", "numRaters":282, "min":0},
    "author":[{"name":"片山恭一"}, {"name":"豫人"}],
    "alt_title":"",
    "image":"https://img3.doubanio.com\/spic\/s1747553.jpg",
    "title":"满月之夜白鲸现",
    "mobile_link":"https:\/\/m.douban.com\/book\/subject\/1220562\/",
    "summary":"那一年，是听莫扎特、钓鲈鱼和家庭破裂的一年。说到家庭破裂，母亲怪自己当初没有找到好男人，父亲则认为当时是被狐狸精迷住了眼，失常的是母亲，但出问题的是父亲……。",
    "attrs":{
       "publisher":["青岛出版社"],
        "pubdate":["2005-01-01"],
        "author":["片山恭一", "豫人"],
        "price":["18.00元"],
        "title":["满月之夜白鲸现"],
        "binding":["平装(无盘)"],
        "translator":["豫人"],
        "pages":["180"]
    },
    "tags":[
        {"count":106, "name":"片山恭一"},
        {"count":50, "name":"日本"},
        {"count":42, "name":"日本文学"},
        {"count":30, "name":"满月之夜白鲸现"},
        {"count":28, "name":"小说"},
        {"count":10, "name":"爱情"},
        {"count":7, "name":"純愛"},
        {"count":6, "name":"外国文学"}
    ]
} | json:5}}</pre>
```

- limitTo

```
<!--3表示显示个数，2表示起始位置-->
<p>{{[1,2,3,4,5,6,7]|limitTo:3:2}}</p>
```

- number过滤器

```
<!--number过滤器-->
<p>{{1000.126|number:2}}</p>
```

# TodoMVC（CRUD 增删查改）

> www.todomvc.com
