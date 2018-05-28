// 函数扩展
{
  // 错 (x, y = 'world', c) 除非C有默认值
  function test(x, y = 'world') {
    console.log('default', x, y)
  }

  test('hello') // default hello world
  test('hello', 'kill')  // default hello kill
}

{
  // 作用域
  let x = 'test'

  function test2(x, y = x) {
    console.log('作用域', x, y)
  }

  test2('kill')  // 作用域 kill kill
}

{
  function test3(...arg) {
    console.log(arg)
    for (let v of arg) {
      console.log('rest', v)
    }
  }

  test3(1, 2, 3, 4, 'a')
}

{
  console.log(...[1, 2, 4])  // 1 2 4
  console.log('a', ...[1, 2, 4])  // a 1 2 4

  let ary1 = [1, 2, 3]
  let ary2 = [4, 5, 6]
  console.log(...ary1, ...ary2)  // 1 2 3 4 5 6
  console.log([...ary1, ...ary2])  // [1, 2, 3, 4, 5, 6]
}

{
  let arrow = v => v * 2
  console.log(arrow(3))  // 6
}

{
  // 伪调用
  function tail(x) {
    console.log('tail', x)
  }
  function fx(x) {
    return tail(x)
  }
  fx(123)  // tail 123
}