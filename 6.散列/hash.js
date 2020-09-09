// 散列介绍（比较难理解）
// 1.散列是一种存储技术
// 2.散列后的数据可以快速插入取用
// 3.在散列表上插入、删除、取用数据非常快，但是查找数据却效率低下
// 4.数组长度是预先设定的，可以随时增加，所有元素根据和该元素对应的键，保存数组特定位置
// 5.即使使用高效的散列函数，仍然存在两个键值相同的情况，这种现象称为碰撞
// 6.数组的长度应该是一个质数，所有的策略都基于碰撞
// 7.开链法：两个键相同保存位置一样。开辟第二个数组，也称第二个数组为链
// 8.线性探测法属于开放寻址散列，查找散列位置，如果当前位置没有，继续寻找下一个位置。存储数据较大较合适。数组大小>=1.5*数据（开链法），数组大小>=2*数据（线性探测法）

function Hash() {
  this.table = new Array(137)
  this.simple = simple
  this.better = better // 质数
  this.build = build // 开链法
  this.put = put
  this.put2 = put2 // 开链法
  this.put3 = put3 // 线性探测法
  this.get = get
  this.get3 = get3 // 线性探测法
  this.showDistro = showDistro
  this.showDistro2 = showDistro2
}

// 开辟数组，开链法
function build() {
  for (let i = 0; i < this.table.length; i++) {
    this.table[i] = new Array()
  }
}

function simple(data) {
  let total = 0
  for (let i = 0; i < data.length; i++) {
    total += data.charCodeAt(i)
  }
  return total % this.table.length
}

function better(data) {
  let H = 31 // 质数
  let total = 0
  for (let i = 0; i < data.length; i++) {
    total += H * total + data.charCodeAt(i)
  }
  if (total < 0) {
    total += this.data.length - 1
  }
  return total % this.table.length
}

function put(data) {
  // let pos = this.simple(data)
  let pos = this.better(data) // 质数
  this.table[pos] = data
}

// 开链法
function put2(data) {
  let pos = this.simple(data)
  let index = 0
  if (this.table[pos][index] == undefined) {
    this.table[pos][index] = data
    index++
  } else {
    while (this.table[pos][index] != undefined) {
      ++index
    }
    this.table[pos][index] = data
  }
}

// 线性探测法
function put3(data) {
  let pos = this.simple(data)
  if (this.table[pos] == undefined) {
    this.table[pos] = data
  } else {
    while (this.table[pos] != undefined) {
      pos++
    }
    this.table[pos] = data
  }
}

function get() {
  return this.table[this.simple(data)]
}

// 线性探测法
function get3(key) {
  let hash = this.simple(key)
  console.info(hash)
  for (let i = hash; i < this.table.length; i++) {
    if (this.table[i] == key) return i
  }
  return undefined
}

function showDistro() {
  let n = 0
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i] != undefined) {
      console.log(`${i}---->${this.table[i]}`)
    }
  }
}

// 开链法
function showDistro2() {
  let n = 0
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i][0] != undefined) {
      console.log(`${i}---->${this.table[i]}`)
    }
  }
}