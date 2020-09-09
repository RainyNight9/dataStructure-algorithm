// 插入排序
// 1.类似于人们按数字或字母顺序对数据进行排序，后面的要为前面的腾位置

function IArr() {
  this.dataStore = [10, 3, 6, 2, 4, 8, 5]
  this.insertSort = insertSort
}

function insertSort() {
  let temp, inner
  for (let outer = 1; outer < this.dataStore.length; ++outer) {
    temp = this.dataStore[outer]
    inner = outer
    while (inner > 0 && (this.dataStore[inner - 1] >= temp)) {
      this.dataStore[inner] = this.dataStore[inner - 1]
      console.log('内部数据', this.dataStore)
      inner--
    }
    this.dataStore[inner] = temp
    console.log('数据', this.dataStore)
  }
}