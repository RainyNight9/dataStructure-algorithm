// 希尔排序
// 1.它会首先比较较远的元素而非相邻的元素。
// 2.让元素尽快回到正确的位置。
// 3.通过定义一个间隔序列来表示在排序过程中进行比较的元素间隔

function SArr() {
  this.dataStore = [10, 8, 3, 2, 5, 9, 7, 35, 47, 50]
  this.shellSort = shellSort
  this.gags = [5, 3, 1]
}

function shellSort() {
  for (let g = 0; g < this.gags.length; g++) {
    for (let i = this.gags[g]; i < this.dataStore.length; i++) {
      let temp = this.dataStore[i]
      let j
      for (j = i; (j >= this.gags[g]) && (this.dataStore[j - this.gags[g]] > temp); j -= this.gags[g]) {
        this.dataStore[j] = this.dataStore[j - this.gags[g]]
      }
      this.dataStore[j] = temp
    }
    console.log('diaohuanhou', this.dataStore)
  }
}