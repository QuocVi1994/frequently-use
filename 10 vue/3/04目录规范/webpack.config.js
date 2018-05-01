var path = require('path');

module.exports = {
	// 配置项目中要打包的入口文件
	entry: './src/main.js',
	// 配置打包后的输入路径及文件名
	output: {
		path: path.resolve(__dirname, './dist/'),  // 绝对路径
		filename: 'build.js'  // 打包后文件名字
	}
};
