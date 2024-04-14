---
theme: channing-cyan
---
# 数据结构与算法——队列

## 基础知识

1. 队列只能在`队尾插入元素`（dequeue），在`队首删除元素`（dequeue）
2. 插入新元素 叫做 `入队`，删除操作 叫做 `出队`
3. 队列是一种 `先进先出` 的数据结构（FIFO，first-in-first-out）
4. 队列通常具有`头尾指针`(左闭右开区间)，头指针指向第一个元素，尾指针指向最后一个元素的下一位。
5. 队列：是连续的存储区，可以存储一系列的元素，按顺序存储。
6. CPU 的超线程技术，线程池的任务队列

## 队列实现

```js
function Queue() {
  this.dataStore = []
  this.enqueue = enqueue // 向队尾增加一个元素
  this.dequeue = dequeue // 删除队首元素
  this.front = front // 读取队首元素
  this.back = back // 读取队尾元素
  this.size = size
  this.print = print // 显示队列中的所有元素
  this.empty = empty // 判断队列是否为空
}

// 添加
function enqueue(element) {
  this.dataStore.push(element)
}

// 移除
function dequeue() {
  this.dataStore.shift()
}

// 返回第一个
function front() {
  return this.dataStore[0]
}

// 返回最后一个
function back() {
  return this.dataStore[this.dataStore.length - 1]
}

function size() {
  return this.dataStore.length
}

function print() {
  console.log(this.dataStore.toString())
}

// 是否空队列
function empty() {
  return this.dataStore.length === 0
}
```

## 使用场景

### 方块舞的舞伴分配问题

当男男女女来到舞池，他们按照自己的性别排成两队。当舞池中有地方空出来时，选两个队列中的第一个人组成舞伴。他们身后的人各自向前移动一位，变成新的队首。当一对舞伴迈入舞池时，主持人会大声喊出他们的名字。当一对舞伴走出舞池，且两排队伍中有任意一队没人时，主持人也会把这个情况告诉大家。

```js
function Dancer(name, sex) {
  this.name = name;
  this.sex = sex;
}

function getDancers(males, females) {
  var names = read("dancers.txt").split("\n");
  for (var i = 0; i < names.length; ++i) {
    names[i] = names[i].trim();
  }
  for (var i = 0; i < names.length; ++i) {
    var dancer = names[i].split(" ");
    var sex = dancer[0];
    var name = dancer[1];
    if (sex == "F") {
      femaleDancers.enqueue(new Dancer(name, sex));
    }else {
      maleDancers.enqueue(new Dancer(name, sex));
    }
  }
}

function dance(males, females) {
  print("The dance partners are: \n");
  while (!females.empty() && !males.empty()) {
    person = females.dequeue();
    putstr("Female dancer is: " + person.name);
    person = males.dequeue();
    print(" and the male dancer is: " + person.name);
  }
  print();
}

// 测试程序
var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);

if (!femaleDancers.empty()) {
  print(femaleDancers.front().name + " is waiting to dance.");
}
if (!maleDancers.empty()) {
  print(maleDancers.front().name + " is waiting to dance.");
}
```

### 基数排序

对于 0~99 的数字，基数排序将数据集扫描两次。第一次按个位上的数字进行排序，第二次按十位上的数字进行排序。

```js
function distribute(nums, queues, n, digit) {
  for (var i = 0; i < n; ++i) {
    if (digit == 1) { 
      queues[nums[i] % 10].enqueue(nums[i]); 
    } else { 
      queues[Math.floor(nums[i] / 10)].enqueue(nums[i]); 
    }
  }
}

function collect(queues, nums) {
  var i = 0; for (var digit = 0; digit < 10; ++digit) {
    while (!queues[digit].empty()) {
       nums[i++] = queues[digit].dequeue(); 
    }
  }
}
function dispArray(arr) {
  for (var i = 0; i < arr.length; ++i) {
     putstr(arr[i] + " ");
  }
}

// 主程序
var queues = [];
for (var i = 0; i < 10; ++i) {
   queues[i] = new Queue(); 
} 

var nums = []; 
for (var i = 0; i < 10; ++i) { 
  nums[i] = Math.floor(Math.floor(Math.random() * 101)); 
} 

print("Before radix sort: "); 
dispArray(nums); 
distribute(nums, queues, 10, 1); 
collect(queues, nums); 
distribute(nums, queues, 10, 10); 
collect(queues, nums); 
print("\n\nAfter radix sort: "); 
dispArray(nums);
```

### 优先队列

从优先队列中删除元素时，需要考虑优先权的限制。比如医院急诊科（EmergencyDepartment）的候诊室，就是一个采取优先队列的例子。当病人进入候诊室时，分诊护士会评估患者病情的严重程度，然后给一个优先级代码。高优先级的患者先于低优先级的患者就医，同样优先级的患者按照先来先服务的顺序就医。

```js
class PriorityQueue {
  constructor() {
    this.elements = [];
  }

  // 插入元素到队列中，根据元素的优先级进行排序
  enqueue(element, priority) {
    const item = { element, priority };
    let added = false;
    for (let i = 0; i < this.elements.length; i++) {
      if (item.priority < this.elements[i].priority) {
        this.elements.splice(i, 0, item);
        added = true;
        break;
      }
    }
    if (!added) {
      this.elements.push(item);
    }
  }

  // 移除并返回队列中优先级最高的元素
  dequeue() {
    return this.elements.shift();
  }

  // 返回队列中优先级最高的元素，但不移除它
  peek() {
    return this.elements[0];
  }

  // 检查队列是否为空
  isEmpty() {
    return this.elements.length === 0;
  }

  // 返回队列的大小（元素数量）
  size() {
    return this.elements.length;
  }
}

// 示例用法
const pq = new PriorityQueue();
pq.enqueue("A", 2);
pq.enqueue("B", 1);
pq.enqueue("C", 3);

console.log(pq.peek()); // 输出: { element: 'B', priority: 1 }

pq.dequeue();
console.log(pq.peek()); // 输出: { element: 'A', priority: 2 }
```

### 循环队列——击鼓传花

```js
function hotPotato(names, num) {
  const queue = new Queue();

  for (let i = 0; i < names.length; i++) {
    queue.enqueue(names[i]);
  }

  let eliminated = '';
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue()); // 把第一个人移到队列末尾
    }
    eliminated = queue.dequeue(); // 淘汰第 num 个人
    console.log(`${eliminated} 被淘汰！`);
  }

  return queue.front(); // 返回最后留下的人
}

// 示例用法
const names = ['Alice', 'Bob', 'Charlie', 'David', 'Emma'];
const winner = hotPotato(names, 3);
console.log(`胜利者是：${winner}`);
```

### 双向队列

### 回文字符串

## 经典算法

### 1、[86. 分隔链表](https://leetcode.cn/problems/partition-list/)

思路一：使用两个链表，一个用于插入小于x的元素，一个用于插入大于等于x的元素，最后合并两个链表即可。

```ts
function partition(head: ListNode | null, x: number): ListNode | null {
    if(!head) return head
    let small = new ListNode(), big = new ListNode(), s = small, b = big
    let cur = head, next

    while(cur){
        next = cur.next
        cur.next = null
        if(cur.val<x) {
            s.next = cur
            s = cur
        }else{
            b.next = cur
            b = cur
        }
        cur = next
    }
    s.next = big.next
    return small.next
};
```

### 2、[138. 复制带随机指针的链表](https://leetcode.cn/problems/copy-list-with-random-pointer/)

思路一：难点在于复制随机指针。这里可以使用一个小技巧对节点进行复制: 将原本的 A->B->C 复制成 A->A1->B->B1->C->C1。
然后将复制节点中的随机指针域向后推进一格，这样复制节点的随机指针域，就指向了随机指针的复制节点。最后将复制的节点拆下来即可。

```ts
function copyRandomList(head: Node | null): Node | null {
    if(!head) return head
    let p = head, q
    while(p) {
        q = new Node(p.val)
        q.next = p.next
        q.random = p.random
        p.next = q
        p = q.next
    }
    p = head.next
    while(p){
        if(p.random) p.random = p.random.next;
        (p = p.next) && (p = p.next)
    }
    let new_head = head.next
    p = head
    while(p){
        q = p.next
        p.next = q.next
        if(p.next) q.next = p.next.next
        p = p.next
    }
    return new_head
};
```

### 3、[622. 设计循环队列](https://leetcode.cn/problems/design-circular-queue/)

```ts

```
