// 处理模板脚本
import gulp from 'gulp'
import gulpif from 'gulp-if'
import livereload from 'gulp-livereload'
import args from './util/args'

gulp.task('pages', () => {
  return gulp.src('app/**/*.ejs')  // 打开app下所有ejs文件
    .pipe(gulp.dest('server'))  // copy到server目录下
    .pipe(gulpif(args.watch, livereload()))  // 监听热更新
})