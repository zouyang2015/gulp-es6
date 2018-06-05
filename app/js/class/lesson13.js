// Proxy代理-连接用户和中间最真实对象的一个层
// Reflect反射-反射的是object
{
  let obj = {
    time: '2017-03-11',
    name: 'net',
    _r: 123
  }

  let monitor = new Proxy(obj, {
    // 拦截对象属性的读取
    get(target, key) {
      return target[key].replace('2017', '2018')
    },
    // 拦截对象设置属性
    set(target, key, value) {
      return key === 'name' ? target[key] = value : target[key]
    },
    // 拦截key in object操作
    has(target, key) {
      return key === 'name' ? target[key] : false
    },
    // 拦截删除
    deleteProperty(target, key) {
      if (key.indexOf('_') > -1) {
        delete target[key]
        return true
      } else {
        return target[key]
      }
    },
    // 拦截Object.keys,Object.getOwnPropertySymbols, Object.getOwnPropertyNames
    ownKeys(target) {
      return Object.keys(target).filter(item => item !== 'time')
    }
  })

  console.log(monitor.name, monitor.time)  // net 2018-03-11

  monitor.time = '2018'
  monitor.name = 'zou'
  console.log(monitor.name, monitor.time)  // zou 2018-03-11

  console.log('has', 'name' in monitor, 'time' in monitor)  //has true false

  // delete monitor.time
  // delete monitor._r
  // console.log(monitor) // Proxy {time: "2017-03-11", name: "zou"}

  console.log('ownKeys', Object.keys(monitor))  // ["name", "_r"]
  console.log('ownKeys', Object.getOwnPropertyNames(monitor))  // ["name", "_r"]
}

{
  let obj = {
    time: '2017-03-11',
    name: 'net',
    _r: 123
  }

  // 直接使用Reflect
  console.log('Reflect get', Reflect.get(obj, 'time')) // 2017-03-11
  Reflect.set(obj, 'name', 'zou')
  console.log('Reflect get', Reflect.get(obj, 'name'))  // zou
  console.log('has', Reflect.has(obj, 'name')) // true
}

// Proxy,Reflect适用场景
{
  function validator(target, validator) {
    return new Proxy(target, {
      _validator: validator,
      set(target, key, value, proxy) {
        if(target.hasOwnProperty(key)) {
          let va = this._validator[key]
          if(!!va(value)) {
            return Reflect.set(target, key, value, proxy)
          } else {
            throw Error(`不能设置${key}`)
          }
        } else {
          throw Error(`${key} 不存在`)
        }
      }
    })
  }

  const personValidators = {
    name(val) {
      return typeof val === 'string'
    },
    age(val) {
      return typeof val === 'number' && val > 18
    }
  }

  class Person {
    constructor(name , age) {
      this.name = name
      this.age = age
      return validator(this, personValidators)
    }
  }

  const person = new Person('lilei', 30)
  console.log('person', person)  // Proxy {name: "lilei", age: 30}

  person.name = 48  // 报错  不能设置name
  // person.name = 'zou'
  // person.age = 12 // 报错  不能设置age
  console.log(person.name, person.age)
}
