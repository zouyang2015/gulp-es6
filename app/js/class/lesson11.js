// Map、Set与Array的对比
// 能使用Map,不使用数组，如果考虑存储的唯一性考虑set, 放弃使用obj做存储，数组也要放弃
{
  // 数据结构横向对比，增，查，改，删
  let map = new Map()
  let array = []
  // 增
  map.set('t', 1)
  array.push({t:1})
  console.info('map-array', map, array)  // Map(1) {"t" => 1} [Object]
  // 查
  let map_exist = map.has('t')
  let array_exist = array.find(item => item.t)
  console.info('map-array', map_exist, array_exist)  // true Object {t: 1}
  // 改
  map.set('t', 2)
  array.forEach(item => item.t?item.t=2:'')
  console.info('map-array', map, array) // Map(1) {"t" => 2} [Object]
  // 删除
  map.delete('t')
  let index = array.findIndex(item => item.t)
  array.splice(index,1)
  console.info('map-array', map, array) // Map(0) {} []
}

{
  // set
  let set = new Set()
  let array = []
  // 增
  set.add({t: 1})
  array.push({t:1})
  console.info('set-array', set, array) // Set(1) {Object {t: 1}} [Object]
  // 查
  let set_exist = set.has({t:1})  // *
  let array_exist = array.find(item => item.t)
  console.info('map-array', set_exist, array_exist)
  // 改
  set.forEach(item => item.t?item.t=2:'')
  array.forEach(item => item.t?item.t=2:'')
  console.info('map-array', set, array) // Set(1) {Object {t: 2}} [Object]
  // 删除
  set.forEach(item => item.t?set.delete(item):'')
  let index = array.findIndex(item => item.t)
  array.splice(index,1)
  console.info('map-array', set, array) // Set(0) {} []
}

// Map与Set与Object做对比
{
  let item = {t:1}
  let map = new Map()
  let set = new Set()
  let obj = {}

  // 增
  map.set('t', 1)
  set.add(item)
  obj['t'] = 1
  console.log(map, set, obj)

  // 查
  console.info({  // {map: true, set: true, obj: true}
    map: map.has('t'),
    set: set.has(item),
    obj:'t' in obj
  })

  // 改
  map.set('t', 2)
  item.t = 2
  obj['t'] = 2
  console.log(map, set, obj) // Map(1) {"t" => 2} Set(1) {Object {t: 2}} Object {t: 2}

  // 删除
  map.delete('t')
  set.delete(item)
  delete obj['t']
  console.log(map, set, obj) // Map(0) {} Set(0) {} Object {}
}