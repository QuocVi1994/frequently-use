var path = require('path');
var htmlWP = require('html-webpack-plugin');

module.exports = {
	// 配置项目中要打包的入口文件
	entry: './src/js/main.js',
	// 配置打包后的输入路径及文件名
	output: {
		path: path.resolve(__dirname, './dist/'),  // 绝对路径
		filename: 'build.js'  // 打包后文件名字
	},
	// 专门用来配置插件的
	plugins: [
		new htmlWP({
			template: './src/index.html', // 模版文件路径
			filename: 'index.html', // 输出的文件名，这个文件最终输出到上面output配置的path路径中
			inject: 'body'
		})
	],
	// 专门用来配置不同类型文件模块的加载规则与方式
	module: {
		rules: [
			// 配置css文件模块的加载
			{
				test: /\.css$/,   // 正则指定文件匹配规则，这里匹配css文件
				use: [               // 指定css文件由哪些loader处理，这里反人类是倒序配置
					'style-loader',
					'css-loader'
				]
			}
		]
	}
};
