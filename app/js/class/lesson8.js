// 对象扩展
{
  // 简介表示法
  let o = 1
  let k = 2
  let es5 = {
    o: o,
    k: k
  }
  console.log(es5) // Object {o: 1, k: 2}

  let es6 = {
    o,
    k
  }
  console.log(es6) // Object {o: 1, k: 2}

  let es5_method = {
    hello: function () {
      console.log('hello')
    }
  }
  let es6_method = {
    hello() {
      console.log('hello')
    }
  }
  console.log(es5_method.hello(), es6_method.hello())
}

{
  // 属性表达式
  let a = 'b'
  let es5_obj = {
    a: 'c'
  }
  let es6_obj = {
    [a]: 'c'
  }
  console.log(es5_obj, es6_obj)
}

{
  // 新增API
  console.log('', Object.is('abc', 'abc'))  // is等同于===
  console.log('', Object.is([], []))
  console.log('', Object.is(NaN, NaN), NaN === NaN)

  console.log(Object.assign({a: 'a'}, {b: 'b'})) // 浅copy Object {a: "a", b: "b"}

  let test = {k: 123, o: 456}
  for (let [key, value] of Object.entries(test)) {   // k 123  // o 456
    console.log(key, value)
  }
}

{
  // 扩展运算符
  // let {a, b, ...c} = {a: 'test', b: 'kiss', c: 'ddd', d: 'ccc'}
  // console.log(c)
}

