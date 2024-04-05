# Stack

**栈的介绍：**
1. 栈是一种特殊的列表 栈顶 栈底
2. 栈是一种高效的数据结构，因为数据只能在栈顶删除或增加，操作很快
3. 栈内元素只能通过列表的一端访问，这一端称为栈顶（反之栈底）
4. 栈被称为一种后入先出的数据结构（LIFO，last-in-first-out）
5. 插入新元素称作进栈、入栈、压栈，从一个栈删除元素称作出栈或者退栈
6. 例子：类似一摞书或者 一摞盘子

## 适用场景

### 可以将数字转化为`二至九进制`的数字

```js
function mulBase(num, base) {
  var s = new Stack();
  do {
    s.push(num % base);
    num = Math.floor(num /= base);
  } while (num > 0);
  
  var converted = "";
  while (s.length() > 0) {
    converted += s.pop();
  }

  return converted;
}
```

```js
var num = 32;
var base = 2;
var newNum = mulBase(num, base);
print(num + " converted to base " + base + " is " + newNum);

num = 125;
base = 8;
var newNum = mulBase(num, base);
print(num + " converted to base " + base + " is " + newNum);

// 32 converted to base 2 is 100000
// 125 converted to base 8 is 175
```

```js
// 233 == 11101001
// 2x(10x10) + 3x(10) + 3x(1)
function divideBy2(decNumber){
  var remStack = new Stack(),
      rem,
      binaryString = '';
  while (decNumber > 0){
      rem = Math.floor(decNumber % 2);
      remStack.push(rem);
      decNumber = Math.floor(decNumber / 2);
  }
  while (!remStack.isEmpty()){
      binaryString += remStack.pop().toString();
  }
  return binaryString;
}

console.log(divideBy2(233));
console.log(divideBy2(10));
console.log(divideBy2(1000));
```

```js
// 10进制转其他任意进制
function baseConverter(decNumber, base){
  var remStack = new Stack(),
      rem,
      baseString = '',
      digits = '0123456789ABCDEF';
  while (decNumber > 0){
      rem = Math.floor(decNumber % base);
      remStack.push(rem);
      decNumber = Math.floor(decNumber / base);
  }
  while (!remStack.isEmpty()){
      baseString += digits[remStack.pop()];
  }
  return baseString;
}

console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 16));
```

### 回文字符串

```js
function isPalindrome(word) {
  var s = new Stack();

  for (var i = 0; i < word.length; ++i) {
    s.push(word[i]);
  }

  var rword = "";
  while (s.length() > 0) {
    rword += s.pop();
  }
  return word == rword;
}


var word = "hello";
if (isPalindrome(word)) {
  print(word + " is a palindrome.");
}else {
  print(word + " is not a palindrome.");
}

word = "racecar"
if (isPalindrome(word)) {
  print(word + " is a palindrome.");
}else {
  print(word + " is not a palindrome.");
}

// hello is not a palindrome.
// racecar is a palindrome.
```

### 递归

```js
function fact(n) {
  var s = new Stack();
  while (n > 1) {
    s.push(n--);
  }
  var product = 1;
  while (s.length() > 0) {
    product *= s.pop();
  }
  return product;
}

// print(fact(5)); // 显示 120
```

## 相关题

### 1. 栈可以用来判断一个算术表达式中的括号是否匹配。

编写一个函数，该函数接受一个算术表达式作为参数，返回括号缺失的位置。

下面是一个括号不匹配的算术表达式的例子：`2.3 + 23 / 12 + (3.14159×0.24`。

```js
function findMissingBracket(expression) {
    const stack = [];
    
    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];
        if (char === '(') {
            stack.push(i);
        } else if (char === ')') {
            if (stack.length === 0) {
                return i; // 返回当前右括号的位置
            } else {
                stack.pop(); // 匹配左括号，弹出栈顶元素
            }
        }
    }
    
    // 如果栈不为空，说明还有左括号未匹配
    if (stack.length > 0) {
        return stack.pop(); // 返回最后一个左括号的位置
    }
    
    // 如果栈为空，说明所有括号匹配
    return -1; // 表示所有括号都匹配
}

// 测试函数
const expression = "2.3 + 23 / 12 + (3.14159×0.24";
const missingPosition = findMissingBracket(expression);
if (missingPosition === -1) {
    console.log("所有括号都匹配");
} else {
    console.log("括号缺失的位置在:", missingPosition);
}
```

### 2. 一个算术表达式的后缀表达式形式如下：

`op1 op2 operator`

使用两个栈，一个用来存储操作数，另外一个用来存储操作符，设计并实现一个 JavaScript 函数，该函数可以将中缀表达式转换为后缀表达式，然后利用栈对该表达式求值。

**分析：**

这个问题的目标是设计一个 JavaScript 函数，它能够将给定的中缀表达式转换为后缀表达式，并且能够对后缀表达式进行求值。为了实现这个功能，我们可以使用两个栈来模拟该过程。

首先，我们需要将中缀表达式转换为后缀表达式。后缀表达式也被称为逆波兰表达式，其中操作符位于操作数的后面。例如，中缀表达式 `2 + 3 * 4` 的后缀表达式是 `2 3 4 * +`。

转换中缀表达式为后缀表达式的算法一般如下：

1. 初始化两个栈，一个用于存储操作数，另一个用于存储操作符。
2. 遍历中缀表达式的每个字符。
3. 如果当前字符是操作数，则直接将其加入到后缀表达式中。
4. 如果当前字符是左括号，则将其加入到操作符栈中。
5. 如果当前字符是右括号，则弹出操作符栈中的元素，直到遇到左括号，并将弹出的操作符加入到后缀表达式中。
6. 如果当前字符是操作符，则比较其与操作符栈顶元素的优先级，将高于或等于其优先级的操作符弹出，并将其加入到后缀表达式中，然后将当前操作符加入到操作符栈中。
7. 处理完所有字符后，将操作符栈中的所有元素弹出，并加入到后缀表达式中。

转换完成后，我们得到了后缀表达式。接下来，我们可以利用栈对后缀表达式进行求值。求值的过程一般如下：

1. 初始化一个栈用于存储操作数。
2. 遍历后缀表达式的每个字符。
3. 如果当前字符是操作数，则将其压入栈中。
4. 如果当前字符是操作符，则从栈中弹出两个操作数进行计算，并将计算结果压入栈中。
5. 处理完所有字符后，栈中剩余的元素即为后缀表达式的计算结果。

通过这个思路，我们可以实现一个 JavaScript 函数，能够将中缀表达式转换为后缀表达式，并且对后缀表达式进行求值。

```js
function operatorChange(numStack, operatorStack) {
  let op1, op2, operator;
  op1 = numStack.pop();
  op2 = numStack.pop();
  operator = operatorStack.pop();
  switch (operator) {
    case "+":
      numStack.push(parseFloat(op2) + parseFloat(op1));
      break;
    case "-":
      numStack.push(op2 - op1);
      break;
    case "*":
      numStack.push(op2 * op1);
      break;
    case "/":
      numStack.push(op2 / op1);
      break;
  }
}

function evaluateExpression(str) {
  let numStack = new Stack();
  let operatorStack = new Stack();

  str = str.replace(/\s+/g, ''); // Remove white spaces

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === "+" || char === "-") {
      // 1.2
      while (!operatorStack.isEmpty() && (
        operatorStack.peek() === "+" || 
        operatorStack.peek() === "-" || 
        operatorStack.peek() === "*" || 
        operatorStack.peek() === "/")) {
        operatorChange(numStack, operatorStack);
      }
      operatorStack.push(char);
    } else if (char === "*" || char === "/") {
      // 1.3
      while (!operatorStack.isEmpty() && (
        operatorStack.peek() === "*" || 
        operatorStack.peek() === "/")) {
        operatorChange(numStack, operatorStack);
      }
      operatorStack.push(char);
    } else if (char === "(") {
      // 1.4
      operatorStack.push(char);
    } else if (char === ")") {
      // 1.5
      while (operatorStack.peek() !== "(") {
        operatorChange(numStack, operatorStack);
      }
      operatorStack.pop(); // Remove "("
    } else {
      // 1.1
      numStack.push(parseFloat(str[i]));
    }
  }

  // 2 
  while (!operatorStack.isEmpty()) {
    operatorChange(numStack, operatorStack);
  }

  return numStack.pop();
}

// 测试函数
let str = "4 + 5 - 3 * 9 - (2 + 3)";
let result = evaluateExpression(str);
console.log(result); // 输出: -23
```

1. `扫描阶段`：程序从左到右扫描表达式，提取操作数、运算符和括号。
  1.1. 如果提取的字符是一个操作数，将它压入 `numStack` 中。
  1.2. 如果提取的字符是一个 `+` 或 `-` 的运算符，因为 `+、-` 运算符在算术表达式中的优先级是最低的，所以此时在将 `+` 或者 `-` 运算符插入栈中之前，可以处理 `operatorStack` 栈顶的所有运算符，最后将提取出来的运算符压入 `operatorStack` 中。
  1.3. 如果提取的字符是一个 `*` 或 `/` 的运算符，则处理 `operatorStack` 栈顶的所有 `*` 和 `/` 的运算符，最后将新提取出来的运算符压入 `operatorStack`中。
  1.4. 如果提取出来的运算符是一个 `"("`，则将它压入 `operatorStack` 中。
  1.5. 如果提取出来的运算符是一个 `")"`，则重复处理 `operatorStack` 栈顶的运算符，直到看到栈顶的运算符为 `")"`。
2. `清除栈阶段`：重复处理来自 `operatorStack` 栈顶的运算符，直到 `operatorStack` 为空为止。


### 3. 现实生活中栈的一个例子是佩兹糖果盒。

想象一下你有一盒佩兹糖果，里面塞满了红色、黄色和白色的糖果，但是你不喜欢黄色的糖果。

使用栈（有可能用到多个栈）写一段程序，在不改变盒内其他糖果叠放顺序的基础上，将黄色糖果移出。

```js
function removeYellowCandies(candies) {
    const originalStack = new Stack();
    const tempStack = new Stack();

    // 将糖果依次放入原始栈中
    candies.forEach(candy => {
        originalStack.push(candy);
    });

    // 从原始栈中取出糖果，将不是黄色的糖果放入临时栈中
    while (!originalStack.isEmpty()) {
        const candy = originalStack.pop();
        if (candy !== "yellow") {
            tempStack.push(candy);
        }
    }

    // 将临时栈中的糖果重新放回原始栈中，此时黄色糖果已被移除
    while (!tempStack.isEmpty()) {
        originalStack.push(tempStack.pop());
    }

    // 返回处理后的糖果列表
    const result = [];
    while (!originalStack.isEmpty()) {
        result.push(originalStack.pop());
    }

    return result.reverse(); // 为了保持原始顺序，需要反转结果数组
}

// 测试程序
const candies = ["red", "yellow", "white", "yellow", "red", "yellow", "white"];
const result = removeYellowCandies(candies);
console.log("处理后的糖果:", result);
```