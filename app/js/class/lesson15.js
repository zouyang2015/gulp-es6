// Generator
// 基本概念：异步编程的一种解决方案
// next函数的用法
// yield*的语法：遇到就不会向下执行了，再执行需要调用next函数
{
  // 基本定义Generator函数
  let tell = function* () {
    console.log('start')
    yield 'a'
    yield 'b'
    return 'c'
  }

  let k = tell()  // 执行tell时遇到第一个yield时停下来。
  console.log(k.next())  // Object {value: "a", done: false}
  console.log(k.next())  // Object {value: "b", done: false}
  console.log(k.next())  // Object {value: "c", done: true}
  console.log(k.next())  // Object {value: undefined, done: true}
}

{
  let obj = {}
  obj[Symbol.iterator] = function* () {
    yield 1
    yield 2
    yield 3
  }
  for(let value of obj) {
    console.log('value', value)  // 1, 2, 3
  }
}

{
  // 优势-状态机
  let state = function* () {
    while (1) {
      yield 'A'
      yield 'B'
      yield 'C'
    }
  }
  let status = state()
  console.log(status.next())  // Object {value: "A", done: false}
  console.log(status.next())  // Object {value: "B", done: false}
  console.log(status.next())  // Object {value: "C", done: false}
  console.log(status.next())  // Object {value: "A", done: false}
  console.log(status.next())  // Object {value: "B", done: false}
  console.log(status.next())  // Object {value: "C", done: false}
}

{
  // console.log(11)
  // let state = async function () {
  //   while (1) {
  //     await 'A'
  //     await 'B'
  //     await 'C'
  //   }
  // }
  // console.log(22)
  // let status = state()
  // console.log(status.next())  // Object {value: "A", done: false}
  // console.log(status.next())  // Object {value: "B", done: false}
  // console.log(status.next())  // Object {value: "C", done: false}
  // console.log(status.next())  // Object {value: "A", done: false}
  // console.log(status.next())  // Object {value: "B", done: false}
  // console.log(status.next())  // Object {value: "C", done: false}
  // console.log(33)
}

{
  // 抽奖剩余次数的限制
  let draw = function (count) {
    // 具体抽奖逻辑
    console.info(`剩余${count}次`)
  }
  let residue = function* (count) {
    while (count > 0) {
      count--
      yield draw(count)
    }
  }

  let star = residue(5)
  let btn = document.createElement('button')
  btn.id = 'start'
  btn.textContent = '抽奖'
  document.body.appendChild(btn)
  document.querySelector('#start').addEventListener('click', function () {
    star.next()
  }, false)
}

{
  // ajax长轮询
  let ajax = function* () {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(1)
        resolve({code: 0})
      }, 200)
    })
  }

  let pull = function () {
    let generator = ajax()
    let step = generator.next()
    console.log('step', step)
    step.value.then((d) => {
      console.log('d', d)
      if(d.code !== 0) {
        setTimeout(() => {
          console.log('wait')
          pull()
        }, 1000)
      } else {
        console.log(d)
      }
    })
  }

  pull()
}