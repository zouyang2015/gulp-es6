// 每次将源文件copy到目标目录时，再次copy需要将上次copy的文件清除
import gulp from 'gulp';
import del from 'del';
import args from './util/args';

gulp.task('clean',()=>{
  return del(['server/public','server/views'])
})
