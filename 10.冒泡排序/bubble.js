// 冒泡排序
// 1.它是最慢的排序算法之一，数据值会像气泡一样从数组的一端漂浮到另一端


function BArr() {
  this.dataStore = [10, 8, 3, 2, 9, 4, 5, 7]
  this.swap = swap // 交换
  this.bubbleSort = bubbleSort
}

function swap(arr, index1, index2) {
  let temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}

function bubbleSort() {
  let data = this.dataStore
  let len = data.length
  for (let outer = len; outer >= 2; --outer) {
    for (let inner = 0; inner <= outer - 1; inner++) {
      if (data[inner] > data[inner + 1]) {
        this.swap(this.dataStore, inner, inner + 1)
      }
    }
  }
}