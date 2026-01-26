class DirectedGraph {
    constructor() {
        this.list = {}
    }

    addVertex(vertex) {
        if (!this.list[vertex]) {
            this.list[vertex] = new Set()
        }
    }

    addEdge(from, to) {
        this.addVertex(from)
        this.addVertex(to)
        this.list[from].add(to)
    }

    dfs(start, visited = new Set()) {
        if (!this.list[start]) return
        visited.add(start)
        console.log(start)
        for (let neigbour of this.list[start]) {
            if (!visited.has(neigbour)) {
                this.dfs(neigbour, visited)
            }
        }
    }

    hasCycle() {
        const visited = new Set()
        const recStack = new Set()
        const dfs = (vertex) => {
            visited.add(vertex)
            recStack.add(vertex)
            for (let neighbour of this.list[vertex]) {
                if (!visited.has(neighbour)) {
                    if (dfs(neighbour)) return true
                } else if (recStack.has(neighbour)) {
                    return true
                }
            }

            recStack.delete(vertex)
            return false
        }

        for (let vertex in this.list) {
            if (!visited.has(vertex)) {
                if (dfs(vertex)) return true
            }
        }
        return false
    }
}

const dg = new DirectedGraph()

dg.addEdge("A", "B")
dg.addEdge("B", "C")
dg.addEdge("C", "D")
dg.addEdge("D", "B") // cycle

dg.dfs("A")
console.log("Has Cycle:", dg.hasCycle())
