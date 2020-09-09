// 高级算法
// 1.动态规划被认为是一种与递归相反的技术
// 2.递归从顶部开始分解出多个小问题，合并成一个解决方案
// 3.动态规划是从底部分解很多小问题解决掉，组成解决方案
// 4.贪心算法 是一种寻找“优质解”为手段达成整体解决方案的算法
// 5.局部最优解    全局最优解
// 6.斐波那契数列 黄金分割数列 0、1、1、2、3、5、8、13、21、34....
// 7.实现原理 F(0)=0,F(1)=1,F(n)=F(n-1)+F(n-2)(n>=2, n<N*)


// 递归实现
function recurFib(n) {
  if (n < 2) {
    return n
  } else {
    return recurFib(n - 1) + recurFib(n - 2)
  }
}

// 动态规划
function dynFib(n) {
  let val = []
  for (let i = 0; i <= n; i++) {
    val[i] = 0
  }
  if (n === 0) {
    return 0
  } else if (n === 1 || n === 2) {
    return 1
  } else {
    val[1] = 1
    val[2] = 1
    for (let i = 3; i <= n; i++) {
      val[i] = val[i - 1] + val[i - 2]
    }
    console.log(val)
    return val[n]
  }
}

// 动态规划非数组
function iterFib(n) {
  if (n > 0) {
    let last = 1
    let nestLast = 1
    let result = 1
    for (let i = 2; i < n; i++) {
      result = last + nestLast
      nestLast = last
      last = result
    }
    return result
  } else {
    return 0
  }
}

// 贪心算法 找零问题： 50块，10块，5块，1块
function makeChange(orginRmb, coins) {
  let remianRmb = 0
  if (orginRmb % 50 < orginRmb) {
    coins[3] = parseInt(orginRmb % 50, 10)
    remianRmb = orginRmb % 50
    orginRmb = remianRmb
  }
  if (orginRmb % 10 < orginRmb) {
    coins[2] = parseInt(orginRmb % 10, 10)
    remianRmb = orginRmb % 10
    orginRmb = remianRmb
  }
  if (orginRmb % 5 < orginRmb) {
    coins[1] = parseInt(orginRmb % 5, 10)
    remianRmb = orginRmb % 5
    orginRmb = remianRmb
  }
  coins[0] = remianRmb % 1
}