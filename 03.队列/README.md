# 队列

## 基础知识

队列：是连续的存储区，可以存储一系列的元素。是 FIFO(先入先出，First- In-First-Out)结构。

队列通常具有头尾指针(左闭右开区间)，头指针指向第一个元素，尾指针指向最后一个元素的下一位。

队列出队：支持(从队首)出队(dequeue)。

队列入队：支持(从队尾)入队(enqueue)。

队列假溢出：

循环队列：可以通过取模操作更充分地利用空间。

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