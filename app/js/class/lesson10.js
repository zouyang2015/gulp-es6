// 数据结构
// set(集合,并且数据是唯一的), WeakSet, Map, WeakMap
// 作用: 去重
// 'add', 'delete', 'clear', 'has'
// key,value是相同值,可以使用数组的遍历方法
{
  // 向set里增加元素要用add这个方法
  let list = new Set()
  // Set添加元素是用add
  list.add(5)
  list.add(7)
  console.log(list.size) // 2 list的长度
}

{
  let arr = [1,2,3,4,5]
  let list = new Set(arr)
  console.log(list.size)  // 5
}

{
  let list = new Set()
  list.add(1)
  list.add(2)
  list.add(1) // 没有成功添加进入
  console.log(list)  // Set(2) {1, 2}
}

{
  // 去重-但不做数据类型的转换
  let arr = [1,2,3,1,'2']
  let list = new Set(arr)
  console.log(list)  // Set(4) {1, 2, 3, "2"}
}

{
  // 'add', 'delete', 'clear', 'has'
  let arr = ['add', 'delete', 'clear', 'has']
  let list = new Set(arr)
  console.log('has', list.has('add')) // has true
  console.log('delete', list.delete('add'), list) // delete true Set(3) {"delete", "clear", "has"}
  list.clear('list')
  console.log(list) // Set(0) {}
}

{
  // 遍历
  let arr = ['add', 'delete', 'clear', 'has']
  let list = new Set(arr)

  // add
  // delete
  // clear
  // has
  for(let key of list.keys()) {
    console.log(key)
  }

  // add
  // delete
  // clear
  // has
  for(let value of list.values()) {
    console.log(value)
  }
  for(let value of list) {
    console.log(value)
  }

  // add add
  // delete delete
  // clear clear
  // has has
  for(let [value, key] of list.entries()) {
    console.log(value, key)
  }

  list.forEach((item) => {
    console.log(item)
  })
}

{
  // weakList
  // 接收的key值是对象
  // 没有size属行，不能用clear
  // 不能遍历
  // 不检测地址是否被垃圾回收掉了
  // 'add', 'delete', 'has'
  // 不能遍历
  let weakList = new WeakSet()
  let arg = {}
  weakList.add(arg)
  // weakList.add(2) // 出错，不能是非对象数据类型的
  console.log(weakList) // WeakSet {Object {}}
}
{
  // Map (key, value)
  // Map里的Key可以是任意数据类型
  let map = new Map()
  let arr = ['123']
  // Map添加元素是用set
  map.set(arr, 456)
  console.log(map)  // Map(1) {["123"] => 456}
  // 用get获取数据
  console.log(map.get(arr))  // 456
}

{
  // Map第2种定义方式
  let map = new Map([['a',123], ['b', 456]])
  console.log(map)  // Map(2) {"a" => 123, "b" => 456}
  console.log(map.size) // 2
  // delete
  console.log(map.delete('a'), map) // true Map(1) {"b" => 456}
  // clear
  // 遍历同set
}

{
  // weakMap
  // 接收的key值是对象
  // 没有size属行，不能用clear
  // 不能遍历
  let weakmap = new WeakMap()
}