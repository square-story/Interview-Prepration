class TreeNode {
    constructor(value) {
        this.value = value
        this.children = []
    }

    addChild(node) {
        this.children.push(node)
    }
}

class Tree {
    constructor(value) {
        this.root = new TreeNode(value)
    }

    dfs(node = this.root) {
        console.log(node.value)
        for (let child of node.children) {
            this.dfs(child)
        }
    }
}