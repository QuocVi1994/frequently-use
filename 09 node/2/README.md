# 包管理

- 通过使用npm来进行基本的包管理

## 初始化管理

- 对于每个项目来说都会有自己的依赖文件这时候就需要从开始就通过npm初始化
<br>
> `npm init 或者npm init -y` 通过初始化会创建出package.json文件 （不要有中文）

## package.json内容说明
 
+ 描述你的当前的包的一些相关的信息
+ 属性解释
   - name 包名
   - version 版本号
   - description 包的描述
   - main 入口文件
   - keywords 关键词
   - author 作者
   - repository 代码库地址
   - bugs 提交地址
   - license 许可证
   - devDependencies (developer dependencies) 开发环境包依赖
   - dependencies 生产环境包依赖
+ dependencies 
   -  一个完整的版本号组表示为： [主要版本号，次要版本号，补丁版本号]
   -  \> +版本号   下载大于某个版本号，npm会下最新版
   -  < +版本号   下载小于某个版本号，npm会下小于这个版本号最新版
   -  <= 小于等于 一定会下你写的这个版本，除非没有你写的这个版本
   -  \>= 大于等于  下载最新版
   -   *、" "、X  任意 npm会给你下最新版
   -   ^ +版本号  不跃迁版本下载，^2.1.0 npm会下载大版本不变，去下载2.x.x版本里的最近版
   -   ~ +版本号  会去下约等于这个版本的最新版，在大版本不变的情
-  [参考文献 package.json全字段解析](http://blog.csdn.net/woxueliuyun/article/details/39294375)
-  [参考2](http://blog.csdn.net/kaosini/article/details/50353375)
-  [官方文档](https://docs.npmjs.com/)

## 下载包

- 本地下载 `npm install jquery ` 或者 `npm i jquery`
- `npm install jquery --save ` 或 `npm install -S jquery` 或 `npm i -S jquery` 本地下载并保存到package.json中的dependencies
- `npm install jquery --save-dev` 或 `npm install -D jquery` 或 `npm i -D jquery` 本地下载并保存到package.json中的devDependencies 
-  ` npm install  `  将package.json中devDependencies和dependencies 都进行下载
-  ` npm install -production` 只下载devpendencies中的文件
- `npm install angular@1.5.8`  根据不同版本下载包
- `npm install -g nrm` 全局进行下载 

## 查看包
- `npm info jquery` 查看包的详细信息
- ` npm docs jquery` 打开包homepage 地址

## 查看更多包的相关信息
- [参考文献 npm的命令](https://docs.npmjs.com/)

## npm 和bower的相同点

- 相同
    + 都是用来下载包
    + 命令基本相同 bower install jquery   和 npm install jquery
- 不同
    + npm 下载地址 https://registry.npmjs.org/
      bower下载 https://github.com/
    + 不同的关键是bower可以指定下载路径

```
//通过创建.bowerrc 添加
{
"directory":"js/common" //你的文件路径
}

```

# 模块系统

- 什么是模块
<br>
  `一个js文件就是一个模块 也可以叫做包 `
- 模块作用域
<br>
  `在一个模块内变量、函数、对象都属于这个模块，对外是封闭的。`

## 全局模块

- global 类似于window

- 特殊的全局属性- __dirname 和 __filename 
## 模块使用
- require
    <br>
  `require("路径")` //路径现阶段使用相对路径
- exports
    <br>
  `是module.exports的一个别名、引用，exports能做的module.exports都可以完成。`
- module.exports 
    <br>
  `最终曝露出去的对象，想曝露出去对象、属性、方法就挂载到module.exports`

## require参数解析
> `require('./add');`和`require('./add.js');`是一样的 但千万别写成`require('add');`或者 `require('add.js');` 
<br>
<br>
> `require('fs')` 这种写法表示使用node核心模块 或者是使用node_modules中的模块

- 标识符中可以不包含扩展名
  + Node会按照`.js、.node、.json`的次序补足扩展名，依次尝试
  
  __注意点，.js可以不写，.json要写，为了节省系统资源__
  ```
  不包含扩展名的时候，Node.js会按照
    路径.js     以后自己在加载js文件模块的时候，就省略掉.js后缀就可以了
    路径.node   后缀为node的文件是c/c++写的一些扩展模块
    路径.json   如果是加载json文件模块，最好加上后缀.json，能稍微的提高一点加载的速度
      .json文件最终Node.js也是通过fs读文件的形式读取出来的，然后通过JSON.parse()转换成一个对象

    Node.js会通过同步阻塞的方式看这个路径是否存在
    依次尝试，直到找到为止，
    如果找不到，报错
  ```

## path模块
- 处理我们文件路径的，一般是配置file system用
		
- join
<br>
` path.join() ` 拼接我们的路径