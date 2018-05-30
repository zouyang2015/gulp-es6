// Symbol: 定义一个独一无二的值
{
  let a1 = Symbol()
  let a2 = Symbol()
  console.log(a1 === a2)  // false

  let a3 = Symbol.for('a3')  // 如果有key值，会先查找全局有没有a3,如果有，会调a3的值，如果没有就生成和上边一样的唯一值
  let a4 = Symbol.for('a3')
  console.log(a3 === a4)  // true
}

{
  let a1 = Symbol.for('abc')
  let obj = {
    [a1]: '123',
    'abc': 345,
    'c': 456
  }
  console.log(obj)

  // 用Symbol定义的key,使用let of,key value都取不到
  // let of abc 345
  // let of c 456
  for(let [key, value] of Object.entries(obj)) {
    console.log('let of', key, value)
  }

  // Object.getOwnPropertySymbols(obj)的结果是一个数组
  Object.getOwnPropertySymbols(obj).forEach((item) => {
    console.log(obj[item])  // 123
  })

  // Reflect可以遍历出对像上所有Symbol,和非Symbol类型的数据，结果形成一个数组，就可以用数组的方法得到内容
  // abc 345
  // c 456
  // Symbol(abc) "123"
  Reflect.ownKeys(obj).forEach((item) => {
    console.log(item, obj[item])
  })
}
