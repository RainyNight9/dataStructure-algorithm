# 数组

JavaScript 数组用于在单一变量中存储多个值。

1. 使用数组文本是创建 JavaScript 数组最简单的方法。(`推荐`)

```js
var array-name = [item1, item2, ...];

var cars = ["Saab", "Volvo", "BMW"];
```

2. 使用 JavaScript 关键词 new 创建数组。(`不推荐`)

```JavaScript
var cars = new Array("Saab", "Volvo", "BMW");
```

## 数组的方法

### push 向数组末尾添加一个或多个元素，并返回新的长度

```js
const arr = [1, 2, 3];
arr.push(4);
// 现在 arr 为 [1, 2, 3, 4]
```

### unshift 向数组的开头添加一个或多个元素，并返回新的长度

```js
const arr = [2, 3];
arr.unshift(1);
// 现在 arr 为 [1, 2, 3]
```

### pop 移除并返回数组的最后一个元素

```js
const arr = [1, 2, 3];
const poppedElement = arr.pop(); // poppedElement = 3
// 现在 arr 为 [1, 2]
```

### shift 移除并返回数组的第一个元素

```js
const arr = [1, 2, 3];
const shiftedElement = arr.shift(); // shiftedElement = 1
// 现在 arr 为 [2, 3]
```

### splice 从数组中添加/删除元素

```js
const arr = [1, 2, 3, 4, 5];
arr.splice(2, 1); // 从索引2开始删除1个元素
// 现在 arr 为 [1, 2, 4, 5]
```

### slice 返回数组的一部分，不修改原数组

```js
const arr = [1, 2, 3, 4, 5];
const slicedArr = arr.slice(2, 4); // 从索引2到索引4（不包括）的元素
// slicedArr 为 [3, 4], arr 仍为 [1, 2, 3, 4, 5]
```

### concat 将两个或多个数组合并成一个新数组

```js
const arr1 = [1, 2];
const arr2 = [3, 4];
const mergedArr = arr1.concat(arr2);
// mergedArr 为 [1, 2, 3, 4]
```

### every 检测数组中的所有元素是否都符合指定条件

```js
const arr = [1, 2, 3, 4, 5];

// 检查数组中的所有元素是否都大于0
const allGreaterThanZero = arr.every(element => element > 0);
// allGreaterThanZero 为 true，因为所有元素都大于0

// 检查数组中的所有元素是否都是偶数
const allEvenNumbers = arr.every(element => element % 2 === 0);
// allEvenNumbers 为 false，因为数组中有一个奇数（1）
```

### some 测试数组的至少一个元素是否通过了指定函数的测试

```js
const arr = [1, 2, 3];
const hasEven = arr.some(item => item % 2 === 0);
// hasEven 为 true
```

### forEach 遍历数组的每个元素并执行提供的函数

```js
const arr = [1, 2, 3];
arr.forEach(item => {
    console.log(item);
});
// 输出: 1
// 输出: 2
// 输出: 3
```

### map 遍历数组的每个元素并返回一个新数组，新数组的元素由回调函数的返回值组成

```js
const arr = [1, 2, 3];
const doubledArr = arr.map(item => item * 2);
// doubledArr 为 [2, 4, 6]
```

### filter 筛选出数组中满足条件的元素，并将这些元素放入一个新数组中返回

```js
const arr = [1, 2, 3, 4, 5];

// 筛选出数组中的所有偶数
const evenNumbers = arr.filter(element => element % 2 === 0);
// evenNumbers 为 [2, 4]

// 筛选出数组中大于2的元素
const greaterThanTwo = arr.filter(element => element > 2);
// greaterThanTwo 为 [3, 4, 5]
```

### reduce 将数组中的元素通过指定的函数进行累积计算，最终返回一个值

```js
const arr = [1, 2, 3, 4, 5];

// 计算数组中所有元素的和
const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// sum 为 15 (1 + 2 + 3 + 4 + 5)

// 找出数组中的最大值
const max = arr.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue), arr[0]);
// max 为 5
```

### reduceRight() 类似于 reduce() 方法，但是从数组的末尾开始执行

```js
const arr = ['a', 'b', 'c'];
const reversedStr = arr.reduceRight((accumulator, currentValue) => accumulator + currentValue);
// reversedStr 为 'cba'
```

### for...of 很方便地迭代数组中的元素，而无需手动管理索引

```js
const arr = [1, 2, 3, 4, 5];

for (const element of arr) {
  console.log(element);
}
// 输出: 1 2 3 4 5
```

### @@iterator 返回一个包含数组键值对的迭代器对象，可以通过同步调用得到数组元素的键值对

```js
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let iterator = numbers[Symbol.iterator]()
iterator.next().value // 1
iterator.next().value // 2
iterator.next().value // 3
iterator.next().value // 4
iterator.next().value // 5
```

### entries 返回数组的键值对的迭代器

```js
const arr = ['a', 'b', 'c'];
const iterator = arr.entries();

for (const [index, value] of iterator) {
    console.log(index, value); // 0 'a', 1 'b', 2 'c'
}
```

### keys 返回数组的索引/键的迭代器

```js
const arr = ['a', 'b', 'c'];
const iterator = arr.keys();

for (const key of iterator) {
    console.log(key); // 0, 1, 2
}
```

### values 返回数组的值的迭代器

```js
const arr = ['a', 'b', 'c'];
const iterator = arr.values();

for (const value of iterator) {
    console.log(value); // 'a', 'b', 'c'
}
```

### from 通过类数组对象或可迭代对象创建一个新的数组实例

```js
const arr = Array.from('hello');
// arr 为 ['h', 'e', 'l', 'l', 'o']
```

### of 一个静态方法，用于创建一个新的数组实例，该数组包含任意数量的参数

```js
const arr = Array.of(1, 2, 3, 4, 5);
// arr 为 [1, 2, 3, 4, 5]

const emptyArray = Array.of();
// emptyArray 为 []
```

### fill 用一个固定值填充数组的所有元素

```js
const arr = [1, 2, 3, 4, 5];
arr.fill(0, 2, 4); // 从索引2开始到索引4之前的位置填充0
// arr 变为 [1, 2, 0, 0, 5]
```

### copyWithin 复制数组的一部分到同一数组中的另一个位置，并返回修改后的数组

```js
const arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3, 4); // 从索引3开始复制到索引4之前的位置
// arr 变为 [4, 2, 3, 4, 5]
```

### reverse 反转数组中元素的顺序，修改原数组

```js
const arr = [1, 2, 3, 4, 5];
arr.reverse();
// arr 变为 [5, 4, 3, 2, 1]
```

### sort 对数组元素进行排序，默认按照字符串 Unicode 顺序排序，修改原数组

```js
const arr = [3, 1, 4, 1, 5, 9, 2, 6];
arr.sort((a, b) => a - b); // 数字升序排序
// arr 变为 [1, 1, 2, 3, 4, 5, 6, 9]
```

### indexOf 在数组中查找指定元素并返回其第一次出现的索引，如果数组中不存在该元素，则返回 -1

```js
const arr = [1, 2, 3, 4, 5];

const index = arr.indexOf(3);
// index 为 2

const notFoundIndex = arr.indexOf(6);
// notFoundIndex 为 -1，因为数组中不存在元素 6

const fromIndex = arr.indexOf(2, 2);
// fromIndex 为 -1，因为从索引 2 开始后面没有元素等于 2
```

### lastIndexOf 从数组的末尾开始搜索指定的元素，并返回它在数组中最后一次出现的索引。如果数组中不存在该元素，则返回 -1

```js
const arr = [1, 2, 3, 4, 3, 2, 1];

const lastIndex = arr.lastIndexOf(3);
// lastIndex 为 4，因为元素 3 在索引 4 处最后一次出现

const notFoundIndex = arr.lastIndexOf(5);
// notFoundIndex 为 -1，因为数组中不存在元素 5

const fromIndex = arr.lastIndexOf(2, 3);
// fromIndex 为 1，因为从索引 3 开始向前搜索，找到元素 2 的最后一次出现在索引 1 处
```

### find 查找数组中第一个满足条件的元素，并返回该元素。如果找到满足条件的元素，则返回该元素；如果找不到，则返回 undefined

```js
const arr = [1, 2, 3, 4, 5];

const found = arr.find(element => element > 2);
// found 为 3，因为 3 是数组中第一个大于 2 的元素

const notFound = arr.find(element => element > 5);
// notFound 为 undefined，因为数组中没有大于 5 的元素
```

### findIndex 返回数组中满足提供的测试函数的第一个元素的索引，否则返回 -1

```js
const arr = [1, 2, 3, 4, 5];
const foundIndex = arr.findIndex(item => item > 3);
// foundIndex 为 3
```

### includes 判断数组是否包含指定的元素，返回布尔值

```js
const arr = [1, 2, 3, 4, 5];
const hasThree = arr.includes(3);
// hasThree 为 true
```

### toString 将数组转换为字符串，返回一个字符串表示数组

```js
const arr = [1, 2, 3];
const str = arr.toString();
// str 为 "1,2,3"
```

### join 将数组中所有元素连接成一个字符串

```js
const arr = [1, 2, 3];
const str = arr.join('-');
// str 为 "1-2-3"
```

### valueOf 和 toString 类似，将数组作为字符串返回

```js
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
document.getElementById("result").innerHTML = months.valueOf();
```

### flat() 将嵌套数组扁平化为指定深度的新数组

```js
const arr = [1, [2, [3, 4]]];
const flatArr = arr.flat();
// flatArr 为 [1, 2, [3, 4]]
```

### flatMap() 首先使用映射函数映射每个元素，然后将结果扁平化为一个新数组

```js
const arr = [1, 2, 3];
const doubledArr = arr.flatMap(item => [item, item * 2]);
// doubledArr 为 [1, 2, 2, 4, 3, 6]
```

### isArray() 判断给定参数是否为数组

```js
const arr = [1, 2, 3];
const isArray = Array.isArray(arr); // true
```







