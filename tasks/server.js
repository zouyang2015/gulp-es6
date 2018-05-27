// 服务器构建脚本
import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server'; // 启动一个脚本作为服务器
import args from './util/args';

gulp.task('server', (cb) => {
  if(!args.watch) return cb()

  // 创建服务器
  var server = liveserver.new(['--harmony', 'server/bin/www'])
  // 启动服务器
  server.start()
  // 监听server下的js和ejs,做改变时怎么进行热更新(处理前端资源文件）
  gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'], function (file) {
    // notify:通知服务器，文件已经发生改变
    server.notify.apply(server, [file])
  })
  // 服务器的路由，接口发生变化，这时要server重启才能生效，还监听需要重启的服务的这些文件
  gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
    server.start.bind(server)()
  });
})