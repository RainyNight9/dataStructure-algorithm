// 队列的介绍
// 1.队列只能在队尾插入元素，在队首删除元素
// 2.队列是一种 先进先出的数据结构（FIFO，first-in-first-out）
// 3.插入新元素 叫做 入队，删除操作 叫做出队
// 4.有一些特殊情况，再删除元素不需要遵守先进先出的约定，比如急诊。这种应用我们需要优先队列的数据结构来模拟

function Queue() {
  this.dataStore = []
  this.enqueue = enqueue // 向队尾增加一个元素
  this.dequeue = dequeue // 删除队首元素
  this.front = front // 读取队首元素
  this.back = back // 读取队尾元素
  this.size = size
  this.print = print // 显示队列中的所有元素
  this.empty = empty // 判断队列是否为空
}

// 添加
function enqueue(element) {
  this.dataStore.push(element)
}

// 移除
function dequeue() {
  this.dataStore.shift()
}

// 返回第一个
function front() {
  return this.dataStore[0]
}

// 返回最后一个
function back() {
  return this.dataStore[this.dataStore.length - 1]
}

function size() {
  return this.dataStore.length
}

function print() {
  console.log(this.dataStore.toString())
}

// 是否空队列
function empty() {
  return this.dataStore.length === 0
}

