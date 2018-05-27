// 构建脚本，对JS做处理
import gulp from 'gulp'
import gulpif from 'gulp-if'  // 对gulp的if语句做判断
import concat from 'gulp-concat'  // 文件拼接
import webpack from 'webpack' // 打包工具
import gulpWebpack from 'webpack-stream' // 对webpack以流的方式处理
import named from 'vinyl-named' // 对文件重新名命名
import livereload from 'gulp-livereload' // 热更新
import plumber from 'gulp-plumber' // 处理文件信息流-可以处理错误
import rename from 'gulp-rename' // 对文件重命名
import uglify from 'gulp-uglify' // JS压缩
import {log, colors} from 'gulp-util' // 命令行输出时的显示的包
import args from './util/args'

// 创建gulp任务: task是gulp标准任务，scripts是任务名称
gulp.task('scripts', () => {
  return gulp.src(['app/js/index.js'])   // 打开这个文件
  // 处理错误
    .pipe(plumber({
      errorHandler: function () {

      }
    }))
  // 对文件重新名命名
    .pipe(named())
  // 对文件进行编译
    .pipe(gulpWebpack({
      module: {
        loaders: [{
          test: /\.js$/,
          loaders: 'babel-loader'
        }]
      }
    }), null, (err, stats) => { // 处理错误
      log(`Finished '${colors.cyan('scripts')}`, stats.toString({
        chunks: false
      }))
    })
  // 处理完的文件存存放路径
    .pipe(gulp.dest('server/public/js'))
  // 处理编译压缩的过程
    .pipe(rename({
      basename: 'cp', // 重复制了一份
      extname: '.min.js'
    }))
    .pipe(uglify({  // 配置怎么压缩
      compress:{properties:false},
      output:{'quote_keys': true}
    }))
    // 真正存到某处
    .pipe(gulp.dest('server/public/js'))
    // 自动刷新,判断命令行里有watch参数，如果有就执行后边
    .pipe(gulpif(args.watch, livereload()))
})