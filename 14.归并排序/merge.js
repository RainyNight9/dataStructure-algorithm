// 归并排序
// 1.把一系列 排好序 的 子序列 合并成一个大的完整有序序列

// 该方法比较难懂
function mergeSort(arr) {
  if (arr.length < 2) return
  let step = 1
  let left, right
  while (step < arr.length) {
    left = 0
    right = step
    while (right + step <= arr.length) {
      mergeArr(arr, left, left + step, right, right + step)
      left = right + step
      right = left + step
    }
    if (right < arr.length) {
      mergeArr(arr, left, left + step, right, arr.length)
    }
    step *= 2
  }
}

function mergeArr(arr, startLeft, stopLeft, startRight, stopRight) {
  let rightArr = new Array(stopRight - startRight + 1)
  let leftArr = new Array(stopLeft - startLeft + 1)
  let k = startRight
  for (let i = 0; i < rightArr.length - 1; i++) {
    rightArr[i] = arr[k]
    ++k
  }
  k = startLeft
  for (let i = 0; i < leftArr.length - 1; i++) {
    leftArr[i] = arr[k]
    ++k
  }
  rightArr[rightArr.length - 1] = Infinity // Infinity 属性用于存放表示正无穷大的数值
  leftArr[leftArr.length - 1] = Infinity // Infinity 属性用于存放表示正无穷大的数值
  let m = 0
  let n = 0
  for (let k = startLeft; k < stopRight; k++) {
    if (leftArr[m] < rightArr[n]) {
      arr[k] = leftArr[m]
      m++
    } else {
      arr[k] = rightArr[n]
      n++
    }
  }
}