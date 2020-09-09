// 选择排序
// 1.从数组的开头开始，将第一个元素和其他元素比较，最小的元素会被放到数组的第一个位置，再从第二个位置继续


function SArr() {
  this.dataStore = [1, 8, 3, 2, 9, 5, 4, 7]
  this.swap = swap
  this.selectSort = selectSort
}

function swap(arr, index1, index2) {
  let temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}

function selectSort() {
  let min
  for (let outer = 0; outer < this.dataStore.length - 2; ++outer) {
    min = outer
    for (let inner = outer + 1; inner <= this.dataStore.length - 1; ++inner) {
      if (this.dataStore[inner] < this.dataStore[min]) {
        min = inner
      }
    }
    this.swap(this.dataStore, outer, min)
    console.log(this.dataStore, outer, min)
  }
}