// 快速排序
// 1.在列表中选择一个元素作为基准值，排序围绕这个基准值进行，将列表中小于基准值的放入数组左边，大于放右边


function quickSort(list) {
  if (list.length < 2) return list
  let pivot = list[0]
  let left = []
  let right = []
  for (let i = 1; i < list.length; i++) {
    if (list[i] < pivot) {
      left.push(list[i])
    } else {
      right.push(list[i])
    }
  }
  return quickSort(left).concat(pivot, quickSort(right))
}