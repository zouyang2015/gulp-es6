// Decorator -修饰器，用来修改类的行为
// 修饰器是一个函数，修改行为，修改类的行为（扩展类的功能）

{
  let readonly = function (target, name, descriptor) {
    descriptor.writable = false
    return descriptor
  }

  class Test{
    @readonly
    time() {
      return '2017-03-11'
    }
  }

  let test = new Test()

  // test.time = function() {
  //   console.log('aaa')  // 报错 Cannot assign to read only property 'time' of object '#<Test>'
  // }
  console.log(test.time())
}

{
  let typename = function (target, name, descriptor) {
    target.myname = 'hello'
  }

  @typename
  class Test {

  }

  console.log('', Test.myname)
}

{
  // 第三方库修饰器的JS库： core-decorators; npm install core-decorators
}

{
  let log=(type) => {
    return function (target, name, descriptor) {
      let src_method = descriptor.value
      descriptor.value = (...arg) => {
        src_method.apply(target, arg)
        console.log(`log ${type}`)
      }
    }
  }

  class AD {
    @log('show')
    show() {
      console.info('ad is show')
    }
    @log('click')
    click() {
      console.log('ad is click')
    }
  }

  let ad = new AD()
  ad.show()
  ad.click()
}