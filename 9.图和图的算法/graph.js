// 图 的介绍
// 1.图 是由边的集合 和 顶点的集合组成
// 2.顶点 也有权重，也称为 成本
// 3.如果一个图的顶点对是有序的，则称为 有向图，有向图表明了顶点的流向，流程图就是一个有向图的例子
// 4.如果图是无序的，则称为无序图或无向图
// 5.从一个节点走到另一个节点的这一组边称为 路径。指向自身的顶点组成的路径称为环，环的长度为0
// 6.圈 是至少有一条边的路径，且路径的第一个顶点和最后一个顶点相同。
// 7.无论有向图还是无向图，只要是没有重复的顶点的圈就是一个简单圈。除第一个和最后一个顶点以外，路径的其他顶点有重复的圈称为平凡圈
// 8.如果两个顶点之间有路径，那么这两个顶点之间就是强连通的。如果有向图的所有顶点都是强连通的，那么这个有向图也是强连通的。


function Graph(v) {
  this.vertices = v // 顶点
  this.edges = 0 // 边缘
  this.adj = [] // 临界表
  this.marked = [] // 是否被访问过
  for (var i = 0; i < this.vertices; i++) {
    this.adj[i] = []
    this.marked[i] = false
  }
  this.addEdge = addEdge
  this.showGraph = showGraph
  this.dfs = dfs
  this.bfs = bfs
  this.bfs2 = bfs2
  this.edgeTo = [] // 最短路径所有的边
  this.hasPathTo = hasPathTo // 有没有路径
  this.pathTo = pathTo // 最短路径
}

function addEdge(v, w) {
  this.adj[v].push(w)
  this.adj[w].push(v)
  this.edges++
}

function showGraph() {
  for (let i = 0; i < this.vertices; i++) {
    let edges = ""
    for (let j = 0; j < this.vertices; j++) {
      if (this.adj[i][j]) {
        edges += this.adj[i][j] + ''
      }
    }
    console.log(i + '-->' + edges)
  }
}

// 深度搜索
function dfs(v) {
  this.marked[v] = true
  if (this.adj[v] != undefined) {
    console.log(v + '节点已经被访问')
  }
  for (let w in this.adj[v]) {
    let current = this.adj[v][w]
    if (!this.marked[current]) {
      this.dfs(current)
    }
  }
}

// 广度搜索
function bfs(s) {
  let queue = [] // 队列
  this.marked[s] = true
  queue.push(s)
  while (queue.length > 0) {
    let v = queue.shift()
    if (v != undefined) {
      console.log('bfs' + v + '节点已经被访问')
    }
    for (let w in this.adj[v]) {
      let current = this.adj[v][w]
      if (!this.marked[current]) {
        this.marked[current] = true
        queue.push(current)
      }
    }
  }
}

// 广度搜索2 配合做最小路径
function bfs2(s) {
  let queue = [] // 队列
  this.marked[s] = true
  queue.push(s)
  while (queue.length > 0) {
    let v = queue.shift()
    if (v != undefined) {
      console.log('bfs' + v + '节点已经被访问')
    }
    for (let w in this.adj[v]) {
      let current = this.adj[v][w]
      if (!this.marked[current]) {
        this.marked[current] = true
        queue.push(current)
        this.edgeTo[current] = v
      }
    }
  }
}

function hasPathTo(v) {
  return this.marked[v]
}

function pathTo(v) {
  let source = 0
  if (!this.hasPathTo(v)) {
    return undefined
  }
  let path = []
  for (let i = v; i != source; i = this.edgeTo[i]) {
    path.push(i)
  }
  path.push(source)
  return path
}
