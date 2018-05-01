var path = require('path');
var htmlWP = require('html-webpack-plugin');

module.exports = {
	
	// 打包main.js，打包后的文件输出到dist目录中，起名为build.js
	entry: './src/js/main.js',
	output: {
		path: path.resolve(__dirname, './dist/'),
		filename: 'build.js'
	},
	
	// 插件配置，这里让构建好的js自动插入到index.html中的body元素
	plugins: [
		new htmlWP({
			template: './src/index.html',
			filename: 'index.html',
			inject: 'body'
		})
	],
	
	// 配置不同类型文件模块的加载
	module: {
		rules: [
			// 配置css文件模块，让css-loader那css文件打包到js中，再用style-loader让样式生效
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'	
				]
			},
			// 配置less文件模块
			{
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader',
					'less-loader'
				]
			},
			// 配置sass文件模块
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			// 配置模版文件模块
			{
				test: /\.(tpl|html|template)$/,
				use: [
					'html-loader'
				]
			}
		]
	}
};
