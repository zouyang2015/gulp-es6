// 数组扩展
{
  let arr = Array.of(3, 4, 7, 9, 11)
  console.log('arr=', arr)  // arr= (5) [3, 4, 7, 9, 11]

  let empty = Array.of()
  console.log('empty=', empty)  // empty= []
}

{
  let p = document.querySelectorAll('p')
  let pr = Array.from(p)
  p.forEach((item) => {
    console.log(item.textContent)
  })
  pr.forEach((item) => {
    console.log(item.textContent)
  })

  console.log(Array.from([1, 3, 5], item => item * 2)) // 有map的作用
}

{
  console.log('fill', [1, 'a', undefined].fill(7))

  console.log('fill,pos', ['a', 'b', 'c', 'd', 'e', 'f'].fill(7, 1, 3))
  console.log('fill,pos2', ['a', 'b', 'c', 'd', 'e', 'f'].fill(7, 1))
}

{
  console.log(['1', 'c', 'ks'].keys(), ['1', 'c', 'ks'].values())

  for (let index of ['1', 'c', 'ks'].keys()) {
    console.log('keys', index)
  }

  for (let value of ['1', 'c', 'ks'].values()) {
    console.log('value', value)
  }

  for (let [index, value] of ['1', 'c', 'ks'].entries()) {
    console.log('value', index, value)
  }
}

{
  // 从哪替换，从哪读，从哪结束
  console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4))
}

{
  // 只找第一个符合的
  console.log([1, 2, 3, 4, 5, 6].find(item => item > 3))
  console.log([1, 2, 3, 4, 5, 6].findIndex(item => item > 3))
}

{
  console.log('number', [1,2,NaN].includes(1))
  console.log('number', [1,2,NaN].includes(NaN))
}