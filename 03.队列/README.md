# 队列

## 基础知识

队列：是连续的存储区，可以存储一系列的元素。是 FIFO(先入先出，First- In-First-Out)结构。

队列通常具有头尾指针(左闭右开区间)，头指针指向第一个元素，尾指针指向最后一个元素的下一位。

队列出队：支持(从队首)出队(dequeue)。

队列入队：支持(从队尾)入队(enqueue)。

队列假溢出：

循环队列：可以通过取模操作更充分地利用空间。

## 优先队列

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

## 循环队列——击鼓传花

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

## 应用场景

    1、CPU 的超线程技术

    2、线程池的任务队列

## 经典算法

1、[86. 分隔链表](https://leetcode.cn/problems/partition-list/)

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

2、[138. 复制带随机指针的链表](https://leetcode.cn/problems/copy-list-with-random-pointer/)

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

3、[622. 设计循环队列](https://leetcode.cn/problems/design-circular-queue/)

```ts

```