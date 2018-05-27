// 对命令行参数进行处理
import yargs from 'yargs'

const args = yargs

.option('production', {
    boolean: true,
    default: false,
    describe: 'production参数,类型是boolean,默认为false'
})
.option('watch', {
    boolean: true,
    default: false,
    describe: 'watch参数，是否需要自动编译'
})
.option('verbose', {
    boolean: true,
    default: false,
    describe: 'verbose参数, 是否详细输出日志'
})
.option('sourcemaps', {
    describe: '强制生成sourcemaps'
})
.option('port', {
    string: true,
    default: 8080,
    describe: '设置端口'
})
.argv

export default args