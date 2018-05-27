import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util'; // 函数的集合
import args from './util/args';

gulp.task('browser',(cb)=>{
  if(!args.watch) return cb();
  gulp.watch('app/**/*.js',['scripts']); // 当js发生变化时要启用script来构建脚本
  gulp.watch('app/**/*.ejs',['pages']);
  gulp.watch('app/**/*.css',['css']);
});
