// 二叉树介绍
// 1.数是由一组以 边 链接的 节点 组成
// 2.一棵树最上面的节点称为 根节点， 父节点...  子节点 ...
// 3.没有任何子节点的节点 称为 叶子节点
// 4.二叉树 是一种特殊的树，子节点个数不超过两个
// 5.从一个节点走到另一个节点的这一组边称为 路径
// 6.以某种特定顺序访问树中的所有节点 称为树的遍历
// 7.树分为几个层次，根节点是第0层，它的子节点第一层...  层数就是树的深度
// 8.每个节点都有一个与之相关的值，该值有时被称为键
// 9.左节点...  右节点...  
// 10.二叉查找树是一种特殊的二叉树，相对较小的值保存在左节点，较大的值保存在右节点，这一个特性使得查找效率很高


function Node(data, left, right) {
  this.data = data
  this.left = left
  this.right = right
  this.show = show
}

function show() {
  return this.data
}



function Bst() {
  this.root = null
  this.insert = insert
  this.inOrder = inOrder
  this.getMin = getMin
  this.getMax = getMax
  this.find = find
  this.remove = remove
}

// 插入
function insert(data) {
  let n = new Node(data, null, null)
  if (this.root == null) {
    this.root = n
  } else {
    let current = this.root
    let parent
    while (true) {
      parent = current
      if (data < current.data) {
        current = current.left
        if (current == null) {
          parent.left = n
          break
        }
      } else {
        current = current.right
        if (current == null) {
          parent.right = n
          break
        }
      }
    }
  }
}

// 中序
function inOrder(node) {
  if (node != null) {
    inOrder(node.left)
    console.log(node.data) // 键值
    inOrder(node.right)
  }
}

function getMin(root) {
  let current = this.root || root
  while (current.left != null) {
    current = current.left
  }
  return current.data
}

function getMinNode(root) {
  let current = this.root || root
  while (current.left != null) {
    current = current.left
  }
  return current
}

function getMax(root) {
  let current = this.root || root
  while (current.right != null) {
    current = current.right
  }
  return current.data
}

function find(data) {
  let current = this.root
  while (current != null) {
    if (data == current.data) {
      return current
    } else if (data < current.data) {
      current = current.left
    } else if (data > current.data) {
      current = current.right
    }
  }
  return null
}

function remove(data) {
  removeNode(this.root, data)
}

function removeNode(node, data) {
  if (node == null) return null
  if (data == node.data) {
    if (node.left == null && node.right == null) {
      return null
    }
    if (node.left == null) {
      return node.right
    }
    if (node.right == null) {
      return node.left
    }
    // 此处啥意思？？？
    let tempNode = getMinNode(node.right)
    node.data = tempNode.data
    node.right = removeNode(node.right, tempNode.data)
    return node
  } else if (data < node.data) {
    node.left = removeNode(node.left, data)
    return node
  } else if (data > node.data) {
    node.right = removeNode(node.right, data)
    return node
  }
}