// 使用命令gulp时，会自动执行default参数，现在设置让其自动执行build命令
import gulp from 'gulp'

gulp.task('default',['build'])
