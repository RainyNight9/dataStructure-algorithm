// 集合介绍
// 1.集合是一种包含不同元素的数据结构
// 2.集合的成员是无序的
// 3.集合中不允许相同成员存在
// 4.集合的元素称为成员
// 5.不包含任何成员的集合叫做空集
// 6.包含一切可能的成员的集合叫做全集
// 7.如果一个集合中的所有成员都属于另外一个集合，则称为该集合的子集
// 8.将两个集合成员合并，得到一个新的集合称为并集
// 9.两个集合中共同存在的成员组成一个新的集合称为交集
// 10.属于一个集合不属于另一个集合的组成的新集合称为补集

function Set() {
  this.dataStore = []
  this.add = add
  this.remove = remove
  this.show = show
  this.union = union
  this.contains = contains
  this.intersect = intersect
  this.difference = difference
  this.size = size
  this.subset = subset
}

function add(data) {
  if (this.dataStore.indexOf(data) < 0) {
    this.dataStore.push(data)
  } else {
    return false
  }
}

function remove(data) {
  const pos = this.dataStore.indexOf(data)
  if (pos > -1) {
    this.dataStore.splice(pos, 1)
  } else {
    return false
  }
}

function show() {
  return this.dataStore
}

// 并集
function union(set) {
  let temSet = new Set()
  for (let i = 0; i < this.dataStore.length; i++) {
    temSet.add(this.dataStore[i])
  }
  for (let i = 0; i < set.dataStore.length; i++) {
    if (!temSet.contains(set.dataStore[i])) {
      temSet.dataStore.push(set.dataStore[i])
    }
  }
  return temSet
}

function contains(data) {
  if (this.dataStore.indexOf(data) > -1) return true
  return false
}

// 交集
function intersect(set) {
  let temSet = new Set()
  for (let i = 0; i < this.dataStore.length; i++) {
    if (set.contains(this.dataStore[i])) {
      temSet.add(this.dataStore[i])
    }
  }
  return temSet
}

// 补集
function difference(set) {
  let temSet = new Set()
  for (let i = 0; i < this.dataStore.length; i++) {
    if (!set.contains(this.dataStore[i])) {
      temSet.add(this.dataStore[i])
    }
  }
  return temSet
}

function size() {
  return this.dataStore.length
}

// 子集
function subset(set) {
  if (set.size() > this.size()) return false
  for (let i = 0; i < set.dataStore.length; i++) {
    if (!this.contains(set.dataStore[i])) return false
  }
  return true
}