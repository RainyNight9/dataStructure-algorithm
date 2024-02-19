// 链表介绍
// 1.数组不是组织数据最佳结构
// 2.JS 的数组被实现成了对象，与其他语言的数组相比，效率低了很多
// 3.如果你发现数组实际使用时很慢，就可以考虑链表代替它。除了对数据的随机访问，链表几乎可以用在任何可以使用一维数组的地方
// 4.链表是由一系列 节点 组成的集合，每个节点都使用一个对象的引用指向他的后继，指向另一个节点的引用叫做 链
// 5.A -> B -> C, B并不是链表的第二个元素而是B跟在A后边，遍历不包含头节点，头元素被称为链表的接入点，链表的尾元素指向一个null节点
// 6.链表 插入一个节点，修改前驱 和 后继
// 7.链表删除一个元素，修改前驱 和 后继，同时删除的元素指向null


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

function disReverse() {
  let currNode = this.findLast()
  while (currNode.previous != null) {
    console.log(currNode.ele)
    currNode = currNode.previous
  }
}