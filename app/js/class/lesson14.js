// Iterator, for...of
// 操作数据集合，让不同的数据有相同的读取方式，比如for...of只能读取数组，不能读对象，怎么样让对象也支持这个方法
{
  let arr = ['hello', 'world']
  let map = arr[Symbol.iterator]()
  console.log(map.next()) // Object {value: "hello", done: false}
  console.log(map.next()) // Object {value: "world", done: false}
  console.log(map.next()) // Object {value: undefined, done: true}
}

{
  let arr = ['hello', 'world']
  let obj = {
    a: 1,
    b: 2
  }
  for(let key in arr) {
    console.log(key)  // 0, 1
  }
  for(let value of arr) {  // hello, world
    console.log(value)
  }
  for(let key in obj) { // a, b
    console.log(key)
  }
  // for(let value of obj) {  // 出错，不能用of循环
  //   console.log(value)
  // }
}

{
  let obj = {
    start: [1,3,2],
    end: [7,9,8],
    [Symbol.iterator]() {
      let self = this
      let index = 0
      let arr = self.start.concat(self.end)
      let len = arr.length
      return {
        next() {
          if(index < len) {
            return {
              value: arr[index++],
              done: false
            }
          }else {
            return {
              value: arr[index++],
              done:true
            }
          }
        }
      }
    }
  }

  for(let key of obj) {
    console.log(key)  // 1, 3, 2, 7, 9, 8
  }

}