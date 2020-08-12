// 栈的介绍
// 1.栈是一种特殊的列表
// 2.栈是一种高效的数据结构，因为数据只能在栈顶删除或增加，操作很快
// 3.栈内元素只能通过列表的一端访问，这一端称为栈顶（反之栈底）
// 4.栈被称为一种后入先出的数据结构（LIFO，last-in-first-out）
// 5.插入新元素称作进栈、入栈、压栈，从一个栈删除元素称作出栈或者退栈

// 创建一个 栈 的构造函数
function Stack() {
  this.dataStore = [] // 保存栈内元素
  this.top = 0 // 标记可以插入新元素的位置，栈内压入元素，该变量变大，弹出元素，变量变小
  this.push = push //入栈操作
  this.pop = pop // 出栈操作
  this.peek = peek // 返回栈顶元素
  this.clear = clear // 清空栈
  this.length = length // 栈的长度
}

// 向栈中压入元素 同时让指针top+1 一定注意++
function push(element) {
  this.dataStore[this.top++] = element
}

// 出栈操作 同时将top-1
function pop() {
  let newData = this.dataStore[--this.top]
  this.dataStore.splice(-1, 1)
  return newData
}

// 返回栈顶元素，变量top值减1 返回不删除
function peek() {
  return this.dataStore[this.top - 1]
}

// 返回栈内元素的元素个数
function length() {
  return this.top
}

// 清空一个栈
function clear() {
  this.top = 0
  this.dataStore = []
}

