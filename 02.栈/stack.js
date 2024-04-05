// 栈的介绍
// 1.栈是一种特殊的列表 栈顶 栈底
// 2.栈是一种高效的数据结构，因为数据只能在栈顶删除或增加，操作很快
// 3.栈内元素只能通过列表的一端访问，这一端称为栈顶（反之栈底）
// 4.栈被称为一种后入先出的数据结构（LIFO，last-in-first-out）
// 5.插入新元素称作进栈、入栈、压栈，从一个栈删除元素称作出栈或者退栈
// 6.例子：类似一摞书或者 一摞盘子

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



// 用ES6 的限定作用域Symbol 实现类
// let _dataStore = Symbol() // 声明Symbol 类型的变量

// class Stack {
//   constructor() {
//     this[_dataStore] = [] // 创建了一个假的私有属性
//     ...
//   }
//   ...
// }



// 用ES6 的 WeakMap 实现类, 可以确保属性 是私有的
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


// 学习使用栈的最著名的三个算法示例：10进制转2进制，任意进制转换，平衡圆括号
// 233 == 11101001
// 2x(10x10) + 3x(10) + 3x(1)
// function divideBy2(decNumber){
//   var remStack = new Stack(),
//       rem,
//       binaryString = '';
//   while (decNumber > 0){
//       rem = Math.floor(decNumber % 2);
//       remStack.push(rem);
//       decNumber = Math.floor(decNumber / 2);
//   }
//   while (!remStack.isEmpty()){
//       binaryString += remStack.pop().toString();
//   }
//   return binaryString;
// }

// console.log(divideBy2(233));
// console.log(divideBy2(10));
// console.log(divideBy2(1000));



// 10进制转其他任意进制
// function baseConverter(decNumber, base){
//   var remStack = new Stack(),
//       rem,
//       baseString = '',
//       digits = '0123456789ABCDEF';
//   while (decNumber > 0){
//       rem = Math.floor(decNumber % base);
//       remStack.push(rem);
//       decNumber = Math.floor(decNumber / base);
//   }
//   while (!remStack.isEmpty()){
//       baseString += digits[remStack.pop()];
//   }
//   return baseString;
// }

// console.log(baseConverter(100345, 2));
// console.log(baseConverter(100345, 8));
// console.log(baseConverter(100345, 16));

