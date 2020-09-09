// 字典介绍
// 1.字典以一种 键值对 的形式存储 （key-->value）
// 2.JS 的 Object 类就是 以字典的形式设计的

function Dictionary() {
  this.dataStore = new Array()
  this.add = add
  this.find = find
  this.count = count
  this.clear = clear
  this.remove = remove
  this.showAll = showAll
}

function add(key, value) {
  this.dataStore[key] = value
}

function find(key) {
  return this.dataStore[key]
}

function count() {
  return Object.keys(this.dataStore).length
}

function clear() {
  let dataKeys = Object.keys(this.dataStore)
  for (let keys in dataKeys) {
    delete this.dataStore[dataKeys[keys]]
  }
}

function remove(key) {
  delete this.dataStore[key]
}

function showAll() {
  // let dataKeys = Object.keys(this.dataStore)
  let dataKeys = Object.keys(this.dataStore).sort()
  for (let keys in dataKeys) {
    console.log(dataKeys[keys] + '-->' + this.dataStore[dataKeys[keys]])
  }
}