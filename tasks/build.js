// 真正的入口命令
import gulp from 'gulp'
import gulpSequence from 'gulp-sequence' // 处理包的顺序和关联关系

// gulpSequence里的内容是有顺序的，css,pages可以交换，[]内的2个是要在前边的4个执行完后，才去执行的，这2个自身也有顺序问题, server一定放最后去执行
gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','server']))
