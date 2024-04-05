# 数据算法与结构

[数据结构可视化动态图](https://visualgo.net/zh)

## 数据结构分类

1. 数组(列表) https://juejin.cn/post/7353877562303594533
2. 栈
3. 队列
4. 链表
5. 集合
6. 字典和散列表
7. 树
8. 图
9. 排序和搜索算法

## 算法思想的分类

1. 递归
2. 回溯
3. 贪⼼
4. 动态规划

## 算法复杂度

### O(1) 常数的

算法的执行时间不随输入规模的增加而增加，它是一种常数时间复杂度。这意味着无论输入的大小如何，算法的执行时间都保持恒定。

```js
function increment(num){
  return ++num
}
```

### O(n) 线性的

算法的执行时间与输入规模成正比，即线性复杂度。

```js
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const arr = [1, 2, 3, 4, 5];
const index = linearSearch(arr, 3); // O(n)
```

### O(n^2) 二次的

算法的执行时间与输入规模的平方成正比。

```js
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

const arr = [5, 3, 8, 2, 1];
bubbleSort(arr); // O(n^2)
```

>时间复杂度 O(n) 的代码只有一层循环，而 O(n^2) 的代码有双层嵌套循环。如果有三层遍历数组的嵌套循环，那就是 O(n^3)。





