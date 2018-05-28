// 类
{
  // 基本定义和生成实例
  class Parent {
    constructor(name='mk') {
      this.name = name
    }
  }
  let v_parent = new Parent('v')
  console.log('基本定义和生成实例', v_parent)
}

{
  // 继承
  class Parent {
    constructor(name='mk') {
      this.name = name
    }
  }
  class Child extends Parent {

  }
  console.log('继承', new Child())
}

{
  // 继承,子类修改父类的参数
  class Parent {
    constructor(name='mk', age = 20) {
      this.name = name
      this.age = age
    }
  }
  class Child extends Parent {
    constructor(name = 'child', age = 18) {
      super(name, age) // 只能放在构造函数第一行
      this.type = 'child'  // 在继承关系中，用super后，自己的定义内容一定要放到super之后
    }
  }
  console.log('继承', new Child())
}

{
  // getter,setter
  class Parent {
    constructor(name='mk', age = 20) {
      this.name = name
      this.age = age
    }

    get longName () {  // 这里是属性，不是函数
      return 'zou' + this.name
    }

    set longName (value) {
      this.name = value
    }
  }

  let v = new Parent()
  console.log('getter', v.longName)
  v.longName = 'yang'
  console.log('getter', v.longName)
}

{
  // 静态方法
  class Parent {
    constructor(name='mk', age = 20) {
      this.name = name
      this.age = age
    }

    static tell() {  // 这时候是个方法, 只能通过类去调用，不能通过类的实例去调用
      console.log('tell')
    }
  }

  Parent.tell()
}

{
  // 静态属性
  class Parent {
    constructor(name='mk', age = 20) {
      this.name = name
      this.age = age
    }
  }

  Parent.type = 'test'  // 静态属性
  console.log('静态属性', Parent.type)
}