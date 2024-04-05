// 列表介绍:
// 1.列表是一组有序的数据
// 2.每个列表中的数据项称为元素
// 3.元素的数量受内存控制（即：元素不是很多）
// 4.不包含任何元素的列表称为空列表

// 创建 List 构造函数
function List() {
  this.listSize = 0 // 列表元素个数
  this.pos = 0 // 列表当前位置
  this.dataStore = [] // 初始化一个空数组用来保存列表元素
  this.clear = clear // 清空列表中的所有元素
  this.find = find // 查找元素
  this.toString = toString // 返回列表字符串形式
  this.insert = insert // 在现有元素后插入新元素
  this.append = append // 在列表元素末尾增加新元素
  this.remove = remove // 从列表中删除元素
  this.front = front // 从列表的当前位置移动到第一元素
  this.end = end // 从列表的当前位置移动到最后一个位置
  this.prev = prev // 将当前位置前移一个位置
  this.next = next // 将当前位置后移一个位置
  this.length = length // 列表包含元素的个数
  this.currPos = currPos // 返回列表当前位置方法
  this.moveTo = moveTo // 将当前位置移动到指定位置
  this.getElement = getElement // 显示当前的元素
  this.contains = contains // 是否包含该元素
}

function append(element) {
  this.dataStore[this.listSize++] = element
}

function find(element) {
  // 此处的++应置于之前 以便返回正确的索引
  for (let i = 0; i < this.dataStore.length; ++i) { // ++i 和 i++ 区别
    if (this.dataStore[i] == element) return i
  }
  return -1
}

function remove(element) {
  const foundAt = this.find(element)
  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1) // splice 和 slice 区别，各自使用方法
    --this.listSize
    console.log(this.dataStore, this.listSize)
    return
  }
  return false
}

function length() {
  // 列表自己维护的一个变量
  return this.listSize
}

function toString() {
  return this.dataStore
}

function insert(element, afterElemnt) {
  const insertPos = this.find(afterElemnt)
  if (insertPos > -1) {
    this.dataStore.splice(insertPos + 1, 0, element)
    ++this.listSize
    return true
  }
  return false
}

function clear() {
  delete this.dataStore
  this.dataStore = [] // 创建一个空数组 this.dataStore.length = 0 会你报错 this.dataStore是 undefined 的length 不存在
  this.listSize = this.pos = 0
}

function contains(element) {
  for (let i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element) {
      return true
    }
  }
  return false
}

// 遍历列表
function front() {
  this.pos = 0
}

function end() {
  this.pos = this.listSize - 1
}

function prev() {
  if (this.pos > 0) --this.pos
}

function next() {
  if (this.pos < this.listSize) ++this.pos
}

function currPos() {
  return this.pos
}

function moveTo(position) {
  this.pos = position
}

function getElement() {
  return this.dataStore[this.pos]
}
