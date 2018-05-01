//这个gulpfile用来写gulp的配置文件
//引用gulp
const gulp = require('gulp');
//自动添加前缀
const autoprefixer = require('gulp-autoprefixer');
//压缩css
const cleanCSS = require('gulp-clean-css');
//图片压缩
const imagemin = require('gulp-imagemin');
//es6 转换es5
const babel = require("gulp-babel");
//压缩js
const uglify = require('gulp-uglify');

//压缩html
const htmlmin = require('gulp-htmlmin');

gulp.task('htmlmin', function() {
    //base表示你原来是什么路径 出来就是什么路径
    return gulp.src('src/*.html',{base:'./'})
        .pipe(htmlmin({
            //去掉所有的空格
            collapseWhitespace: true,
            //压缩js
            minifyJS:true,
            //html注释去除
            removeComments:true
        }))
        .pipe(gulp.dest('dist'));
});

//es6 转换es5
gulp.task("babel", function () {
     gulp.src("src/js/*.js",{base:'./'})
        .pipe(babel({
            //除了下载babel 还需要下载对应的转换工具
            "presets": ["es2015"]
        }))
        .pipe(uglify())
        .pipe(gulp.dest("dist"));
});
gulp.task('default',['cssautoprefixer','imagemin','babel','htmlmin'],function () {

});
//图片压缩
gulp.task('imagemin', () =>
    gulp.src('src/images/*',{base:'./'})
        .pipe(imagemin())
        .pipe(gulp.dest('dist'))
);

//自动添加前缀 压缩css
gulp.task('cssautoprefixer',() => {
    //找到css路径
    gulp.src('./src/css/*.css',{base:'./'})
        //通过autoprefixer添加前缀
        .pipe(autoprefixer())
        //压缩css文件
        .pipe(cleanCSS({compatibility: 'ie8'}))
        //项目最后生成的文件
        .pipe(gulp.dest('dist'))
});

gulp.task('default2', function() {
    console.log('测试gulp');
});