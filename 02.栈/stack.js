// 创建一个 栈 的构造函数
function Stack() {
  this.dataStore = [] // 保存栈内元素
  this.top = 0 // 标记可以插入新元素的位置，栈内压入元素，该变量变大，弹出元素，变量变小
  this.push = push // 入栈操作
  this.pop = pop // 出栈操作
  this.peek = peek // 返回栈顶元素
  this.clear = clear // 清空栈
  this.length = length // 栈的长度
  this.isEmpty = isEmpty
  this.print = print
}

// 向栈中压入元素 同时让指针top+1 一定注意++
function push(element) {
  // this.dataStore[this.top++] = element
  this.dataStore.push(element)
}

// 出栈操作 同时将top-1
function pop() {
  // let newData = this.dataStore[--this.top]
  // this.dataStore.splice(-1, 1)
  // return newData
  return this.dataStore.pop()
}

// 返回栈顶元素，变量top值减1 返回不删除
function peek() {
  // return this.dataStore[this.top - 1]
  return this.dataStore[this.dataStore.length-1]
}

// 返回栈内元素的元素个数
function length() {
  // return this.top
  return this.dataStore.length
}

// 清空一个栈
function clear() {
  this.top = 0
  this.dataStore = []
}

function isEmpty() {
  // return this.top === 0
  return this.dataStore.length === 0
}

function print() {
  console.log(this.dataStore.toString())
}



// 换成 ES6 

// class Stack{
//   constructor(){
//     this.dataStore = [] // 公用的...
//     ...
//   }
//   push(element){
//     ...
//   }
//   ... 
// }



// 用ES6 的限定作用域 Symbol 实现类
// let _dataStore = Symbol() // 声明 Symbol 类型的变量

// class Stack {
//   constructor() {
//     this[_dataStore] = [] // 创建了一个假的私有属性
//     ...
//   }
//   ...
// }



// 用 ES6 的 WeakMap 实现类, 可以确保属性 是私有的
// `WeakMap`结构与`Map`结构类似，也是用于生成键值对的集合，其中键是对象，值可以是任意数据类型

// const dataStore = new WeakMap() // 是在 类 以外声明的，谁都可以改动，加个闭包

// class Stack {
//   constructor() {
//     dataStore.set(this, []) // 以this（Stack类自己的引用）为键，把代表栈的数组存入
//     ...
//   }
//   push () {
//     let d = dataStore.get(this) // 以this 为键，从 dataStore 中取值
//     ...
//   }
// }


// 加个闭包
// let Stack = (function () {
//   const dataStore = new WeakMap()
//   class Stack {
//     constructor() {
//       dataStore.set(this, []) // 以this（Stack类自己的引用）为键，把代表栈的数组存入
//       ...
//     }
//     push () {
//       let d = dataStore.get(this) // 以this 为键，从 dataStore 中取值
//       ...
//     }
//   }
//   return Stack
// })()
