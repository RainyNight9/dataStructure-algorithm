// 检索算法
// 1.在列表中查找分为数据有两种方式，顺序查找和二分查找
// 2.顺序查找适用于元素随机排列
// 3.二分查找用于已排列好的元素
// 4.从第一个元素开始对列表元素进行查找，直到找到想要的结果，被称为线性查找，属于暴利查找
// 5.二分查找，每猜一个数字会有三种结果，猜大了猜小了猜对了

// 顺序查找
function SeqSearch(arr, data) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === data) {
      return i
    }
  }
  return -1
}

function findMax(arr) {
  let max = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max
}

function findMin(arr) {
  let min = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    }
  }
  return min
}

function swap(arr, index1, index2) {
  let temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}

// 自组织方法
function SeqSearch2(arr, data) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === data && i > (arr.length * 0.2)) {
      swap(arr, i, i - 1)
      return true
    }
  }
  return -1
}

// 二分查找
function bindSearch(arr, data) {
  let upperBound = arr.length - 1
  let lowerBound = 0
  while (lowerBound <= upperBound) {
    let mid = Math.floor((upperBound + lowerBound) / 2)
    if (arr[mid] < data) {
      lowerBound = mid + 1
    } else if (arr[mid] > data) {
      upperBound = mid - 1
    } else {
      return mid
    }
  }
  return -1
}