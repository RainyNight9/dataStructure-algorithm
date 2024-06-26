---
theme: channing-cyan
---
# 数据结构与算法——链表

## 基础知识

1. 数组不是组织数据最佳结构
2. JS 的数组被实现成了对象，与其他语言的数组相比，效率低了很多
3. 如果你发现数组实际使用时很慢，就可以考虑链表代替它。除了对数据的随机访问，链表几乎可以用在任何可以使用一维数组的地方

链表是一种由`一群节点组成顺序`的数据结构。

在最简单的情况下，每个节点由`一个数据`和一个指向在顺序中下一个节点的`指针`（即连接）而组成。

1. 链表中的每个节点至少包含两部分：`数据域 和 指针域`
2. 链表中的每个节点，通过指针域的值，形成线性结构
3. 查找节点O(n），插入节点O(1)，删除节点O(1)
4. 不适合快速的定位数据，适合动态的插入和删除数据的应用场景

实现链表的方式：`包括地址、下标(相对地址)、引用`。

1. 传统方法(节点+指针) 
2. 使用数组模拟
    - 指针域和数据域分离
    - 利用数组存放下标进行索引

链表`不适合快速的定位数据`，`适合动态的插入和删除的应用场景`。

## 实现链表

```js
function Node(ele) {
  this.ele = ele
  this.next = null
}

// 创建单链表的构造函数
function LinkedList() {
  this.head = new Node('head')
  this.length = 0
  this.find = find
  this.insert = insert
  this.display = display
  this.findPrevious = findPrevious
  this.remove = remove
}

// 尾部添加一个新的
function append(element) {
  let node = new Node(element)
  let cur

  if(this.head === null) {
    this.head = node
  } else {
    cur = this.head
    while(cur.next){
      cur = cur.next
    }

    cur.next = node
  }

  this.length++
}

function find(item) {
  let currNode = this.head
  while (currNode.ele != item) {
    currNode = currNode.next
  }
  return currNode
}

// 特定位置插入一个新的
function insert(newEle, item) {
  let newNode = new Node(newEle)
  let currNode = this.find(item)
  newNode.next = currNode.next
  currNode.next = newNode
}

// 显示链表中的元素
function display() {
  let currNode = this.head
  while (currNode.next != null) {
    console.log(currNode.next.ele)
    currNode = currNode.next
  }
}

function findPrevious(item) {
  let currNode = this.head
  while (currNode.next != null && currNode.next.ele != item) {
    currNode = currNode.next
  }
  return currNode
}

// 移除一项
function remove(item) {
  let preNode = this.findPrevious(item)
  let currNode = this.find(item)
  if (preNode.next != null) {
    preNode.next = currNode.next
    currNode.next = null
  }
}
```

### 双向链表

双向链表（Doubly Linked List）与普通的链表相似，不同之处在于每个节点都有指向前一个节点和后一个节点的指针。这使得双向链表可以从前向后或从后向前遍历，而不需要像单向链表那样重新遍历整个列表。

每个节点通常包含两个指针，一个指向前一个节点（previous），一个指向后一个节点（next）。

双向链表的优点是在某些情况下能够提供更高效的插入和删除操作，因为它不需要像单向链表那样寻找前一个节点。但是，它相对于单向链表需要更多的存储空间来存储额外的指针。

```js
// 创建双链表
function Node2(ele) {
  this.ele = ele
  this.next = null
  this.previous = null
}

function DLList() {
  this.head = new Node2('head')
  this.find = find
  this.insert = insert
  this.remove = remove
  this.display = display
  this.findLast = findLast
  this.disReverse = disReverse
}

function find(item) {
  let currNode = this.head
  while (currNode.ele != item) {
    currNode = currNode.next
  }
  return currNode
}

function insert(newEle, item) {
  let newNode = new Node2(newEle)
  let currNode = this.find(item)
  newNode.next = currNode.next
  newNode.previous = currNode
  currNode.next = newNode
  if (currNode.next == null) {
    newNode.next.previous = newNode
  }
}

function remove(item) {
  let currNode = this.find(item)
  if (currNode.next != null) {
    currNode.previous.next = currNode.next
    currNode.next.previous = currNode.previous
    currNode.previous = null
    currNode.next = null
  } else {
    currNode.previous.next = null
    currNode.previous = null
  }
}

function dispaly() {
  let currNode = this.head
  while (currNode.next != null) {
    console.log(currNode.next.ele)
    currNode = currNode.next
  }
}

function findLast() {
  let currNode = this.head
  while (currNode.next != null) {
    currNode = currNode.next
  }
  return currNode
}

// 反序显示双向链表中的元素
function disReverse() {
  let currNode = this.findLast()
  while (currNode.previous != null) {
    console.log(currNode.ele)
    currNode = currNode.previous
  }
}
```

### 循环链表

循环链表是一种特殊的链表，其中最后一个节点的指针不是指向空（null），而是指向链表的头部，从而形成一个环。这意味着可以从任何节点开始遍历整个链表，直到再次回到起始节点。

```js
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head; // 将新节点的 next 指向头节点，形成循环
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }
            current.next = newNode;
            newNode.next = this.head; // 新节点的 next 也指向头节点，形成循环
        }
    }

    traverse() {
        if (!this.head) {
            return;
        }
        let current = this.head;
        do {
            console.log(current.data);
            current = current.next;
        } while (current !== this.head);
    }
}

// 示例用法：
const cll = new CircularLinkedList();
cll.append(1);
cll.append(2);
cll.append(3);
cll.append(4);

console.log("遍历循环链表:");
cll.traverse();
```

## 应用场景

1. 操作系统内的动态内存分配
2. LRU 缓存淘汰算法
    - LRU = Least Recently Used(近期最少使用)
    - vue 的 keep-alive 的实现就是 LRU 缓存淘汰算法

缓存是一种高速的数据结构。缓存其实就是低速设备有效的数据管理手段，缓存是⾼速设备之于低速设备的⼀种称呼。

设备间存在速度差异，可以通过将使用较多的数据存放在高速区域，而将使用较少的内容存放在相对低速的区域的方式，来对系统进行优化。

## 经典算法

### 1、[141. 环形链表](https://leetcode.cn/problems/linked-list-cycle/)

思路一：哈希表

- 使用哈希表(额外的存储区)存储已经遍历过的节点

思路二：快慢指针

- 使用快慢指针，快指针一次向前2个节点 慢指针一次向前1个节点
    - 有环的链表中，快指针和慢指针最终一定会在环中相遇
    - 无环的链表中，快指针会率先访问到链表尾，从而终结检测过程

```ts
function hasCycle(head: ListNode | null): boolean {
    if(!head) return false
    let l = head, q = head.next
    while(q && q.next && q !== l) {
        l = l.next
        q = q.next.next
    }
    return q && q.next ? true : false
};
```

### 2、[142. 环形链表 II](https://leetcode.cn/problems/linked-list-cycle-ii/)

思路一：哈希表

思路二：快慢指针

- 快指针走的路程是慢指针的2倍
- 考虑快慢指针第一次相遇的情况(设此时慢指针走的路程为x)
    - 指定一个指针p放置在链表头部(p每次向前1个节点) 
    - 再走一个路程为x的长度
        - 慢指针到达了2x的位置
        - 指针p到达了x的位置
        - 慢指针和p相遇了
            - 往前回放一下，在环的入口开始，慢指针和p已经相遇了
            - 慢指针和p重叠走了一段距离

```ts
function detectCycle(head: ListNode | null): ListNode | null {
    if(!head) return null
    let l = head, q = head.next
    while(q !== l && q && q.next) {
        l = l.next
        q = q.next.next
    }
    if(q===null || q.next === null) return null
    l = head.next
    q = head.next.next
    while(q!==l){
        l = l.next
        q = q.next.next
    }
    l = head
    while(q!==l){
        l = l.next
        q = q.next
    }
    return l
};

// 或者
function detectCycle(head: ListNode | null): ListNode | null {
    if(!head) return null
    let l = head, q = head
    if(q.next===null) return null
    do{
        l = l.next
        q = q.next.next
    }while(q!==l && q && q.next)
    if(q === null || q.next === null) return null
    l = head
    while(q!==l) {
        l = l.next
        q = q.next
    }
    return q
};
```

### 3、[202. 快乐数](https://leetcode.cn/problems/happy-number/)

思路一：快慢指针

- 转化为判断链表是否有环的问题
    1. 创建一个慢指针，一次走一步，再创建一个快指针，一次走两步。
    2. 当快慢指针相遇，代表形参环路，该数不是快乐数。
    3. 若指针移动过程中，找到了 11，则当前数是一个快乐数。

```ts
function isHappy(n: number): boolean {
    let l = n, q = n
    do{
        l = getNext(l)
        q = getNext(getNext(q))
    }while(q!==l && q!==1) 
    return q === 1
};

function getNext(x: number): number {
    return x.toString().split('').map(x => Number(x) ** 2).reduce((a, b) => a+b)
}
```

### 4、[206. 反转链表](https://leetcode.cn/problems/reverse-linked-list/)

思路一：迭代反转

- 可以使用虚拟头节点来进行头插法

```ts
function reverseList(head: ListNode | null): ListNode | null {
    if(!head) return head
    let pre = null, cur = head, next = head.next
    while(cur){
        cur.next = pre;
        pre = cur;
        (cur = next) && (next = next.next)
    }
    return pre
};
```

思路二：递归

- 一次拆掉一个节点并递归处理剩余的子链表

```ts
function reverseList(head: ListNode | null): ListNode | null {
    if(!head || !head.next) return head
    let p = reverseList(head.next)
    head.next.next = head
    head.next = null
    return p
};
```

### 5、[92. 反转链表 II](https://leetcode.cn/problems/reverse-linked-list-ii/)

思路一：递归

- 使用虚拟头结点(dummy head)
    - 通常用于链表的首地址有可能改变的情况

```ts
function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if (!head) return null;
    let count  = right - left + 1
    let res = new ListNode(-1, head), p = res
    while(--left){
        p = p.next
    }
    p.next = reverseN(p.next, count)
    return res.next
};

function reverseN(head: ListNode, n: number): ListNode{
    if(n===1) return head
    let next = head.next
    let p = reverseN(next, n-1)
    head.next = next.next
    next.next = head
    return p
}
```

### 6、**[25. K 个一组翻转链表](https://leetcode.cn/problems/reverse-nodes-in-k-group/)**

思路一：递归（困难）

- 先判断是否有 K 个元素，然后对这 K 个节点进行反转，最后拆装一下首尾部分

```ts
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    let ret = new ListNode(-1, head), pre = ret, cur = pre.next
    while((pre.next = reverseN(cur, k)) !== cur) {
        pre = cur
        cur = pre.next
    }
    return ret.next
};

function reverseN(head: ListNode | null, n: number): ListNode | null {
    let p = head, cnt = n
    while(--n && p) {
        p = p.next
    }
    if(!p) return head
    return _reverseN(head, cnt)
}

function _reverseN(head: ListNode | null, n: number): ListNode | null {
    if(n===1) return head
    let tail = head.next
    let p = _reverseN(tail, n-1)
    head.next = tail.next
    tail.next = head
    return p
}
```

### 7、[61. 旋转链表](https://leetcode.cn/problems/rotate-list/)

思路一：迭代

- 把整个链表首尾相接，向后走K位后将环拆开

```ts
function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if(!head) return head
    let n = 1, p = head
    while(p.next) p = p.next, n++
    p.next = head
    k %= n
    k = n - k
    while(k--) p = p.next
    head = p.next
    p.next = null
    return head
};
```

### 8、[24. 两两交换链表中的节点](https://leetcode.cn/problems/swap-nodes-in-pairs/)

```ts
// 类似第 6 题解法，是K = 2的简单情形
function swapPairs(head: ListNode | null): ListNode | null {
    let ret = new ListNode(-1, head), pre = ret, cur = pre.next
    while((pre.next=reverseN(cur, 2))!==cur) {
        pre = cur
        cur = pre.next
    }
    return ret.next
};

function reverseN(head: ListNode | null, n: number): ListNode | null {
    let p = head, cnt = n
    while(--n && p) {
        p = p.next
    }
    if(!p) return head
    return _reverseN(head, cnt)
}

function _reverseN(head: ListNode | null, n: number): ListNode | null {
    if(n===1) return head
    let tail = head.next
    let p = _reverseN(tail, n-1)
    head.next = tail.next
    tail.next = head
    return p
}
```

```ts
// 递归，两两互换
function swapPairs(head: ListNode | null): ListNode | null {
    if(!head || !head.next) return head
    let newHead = head.next
    head.next = swapPairs(newHead.next)
    newHead.next = head
    return newHead
};
```

### 9、[19. 删除链表的倒数第 N 个结点](https://leetcode.cn/problems/remove-nth-node-from-end-of-list/)

思路一：快慢指针

- 找到前一个节点，删除后调整指针

```ts
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let ret = new ListNode(-1, head), l = ret, q = head
    while(n--) q = q.next
    while(q) l = l.next, q = q.next
    l.next = l.next.next
    return ret.next
};
```

### 10、[83. 删除排序链表中的重复元素](https://leetcode.cn/problems/remove-duplicates-from-sorted-list/)

```ts
function deleteDuplicates(head: ListNode | null): ListNode | null {
    if(!head) return head
    let p = head
    while(p.next){
        if(p.val === p.next.val) {
            p.next = p.next.next
        }else{
            p = p.next
        }
    }
    return head
};
```

### 11、[82. 删除排序链表中的重复元素 II](https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii/)

思路一：快慢指针

```ts
function deleteDuplicates(head: ListNode | null): ListNode | null {
    let ret = new ListNode(-1, head), l = ret, q
    while(l.next){
        if(l.next.next && l.next.val === l.next.next.val) {
            q = l.next.next
            while(q && q.val === l.next.val) q = q.next
            l.next = q
        } else {
            l = l.next
        }
    }
    return ret.next
};
```

### 12、10万以内快乐数的总和

```ts
function happyTotal(num: number): number {
    let total = 0;
    for(let i=1; i<=num; i++) {
        if(isHappy(i)) {
            total += i
        }
    }
    return total
};

function isHappy(n: number): boolean {
    let l = n, q = n
    do{
        l = getNext(l)
        q = getNext(getNext(q))
    }while(q!==l && q!==1) 
    return q === 1
};

function getNext(x: number): number {
    return x.toString().split('').map(x => Number(x) ** 2).reduce((a, b) => a+b)
}
```

未完结，敬请期待！
