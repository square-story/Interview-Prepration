class WeightedGraph {
    constructor() {
        this.list = new Map()
    }

    addVertex(vertex) {
        if (!this.list.has(vertex)) {
            this.list.set(vertex, new Map())
        }
    }

    addEdges(vertex1, vertex2, weight) {
        this.addVertex(vertex1)
        this.addVertex(vertex2)
        this.list.get(vertex1).set(vertex2, weight)
        this.list.get(vertex2).set(vertex1, weight)
    }

    display() {
        for (let [vertex, neighbours] of this.list) {
            console.log(vertex, "--->", neighbours);
        }
    }
}

const graph = new WeightedGraph()
graph.addEdges('A', "B", 3)
graph.addEdges("B", "C", 4)
graph.addEdges("C", "A", 8)

graph.display()