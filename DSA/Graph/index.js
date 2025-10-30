class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = new Set()
    }

    addEdges(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1)
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    hasEdge(vertex1, vertex2) {
        return (
            this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
        )
    }

    removeEdge(vertex2, vertex1) {
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) return null
        for (let adjacency of this.adjacencyList[vertex]) {
            this.removeEdge(adjacency, this.adjacencyList[vertex])
        }
        delete this.adjacencyList[vertex]
    }

    getVertexes() {
        return Object.keys(this.adjacencyList)
    }

    getVertexesLength() {
        return Object.keys(this.adjacencyList).length
    }

    getEdgeCount() {
        let count = 0
        for (let el in this.adjacencyList) {
            count += this.adjacencyList[el].size
        }
        return count / 2
    }

    getNeigbour(vertex) {
        if (!this.adjacencyList[vertex]) {
            return null
        }

        return [...this.adjacencyList[vertex]]
    }

    getDegreeOfNode(vertex) {
        if (!this.adjacencyList[vertex]) {
            return null
        }
        return this.adjacencyList[vertex].size
    }

    dfsRecursion(start, visted = new Set()) {
        if (!this.adjacencyList[start]) return null
        visted.add(start)
        console.log(start)
        for (let el of this.adjacencyList[start]) {
            if (!visted.has(el)) {
                this.dfsRecursion(el, visted)
            }
        }
    }

    bfs(start) {
        if (!this.adjacencyList[start]) return null
        const queue = [start]
        const visted = new Set([start])
        while (queue.length) {
            const value = queue.shift()
            console.log(value)
            for (let neigbour of this.adjacencyList[value]) {
                if (!visted.has(neigbour)) {
                    visted.add(neigbour)
                    queue.push(neigbour)
                }
            }
        }
    }

    display() {
        for (let el in this.adjacencyList) {
            console.log(el, "-->", [...this.adjacencyList[el]])
        }
    }
}

const graph = new Graph()
graph.addEdges("A", "B");
graph.addEdges("A", "C");
graph.addEdges("B", "D");
graph.addEdges("C", "D");
graph.addEdges("D", "E");
console.log('---vertexes---')
console.log(graph.getVertexes())
console.log('---Edge count---')
console.log(graph.getEdgeCount())
console.log('---Neigbour of B---')
console.log(graph.getNeigbour("B"))
console.log('---Display---')
graph.display()
console.log('----DFS----')
graph.dfsRecursion('A')
console.log('---BFS---')
graph.bfs("A")
