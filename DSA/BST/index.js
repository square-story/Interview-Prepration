class Node {
    constructor(value) {
        this.value = value; //The data
        this.left = null; //
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    //helpers
    isEmpty() {
        return this.root === null
    }

    insert(value) {
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    search(root, value) {
        if (!root) {
            return false;
        } else {
            if (root.value === value) {
                return true
            }
        }
    }
    preOrder(root = this.root) {
        if (root) {
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root = this.root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    postOrder(root = this.root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value) {
        if (root === null) {
            return null
        }

        if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            //if the node has no childrens(leaf nodes)
            if (!root.left && !root.right) {
                return null
            }
            //if the node has exact one node
            if (!root.left) {
                return root.right
            } else if (!root.right) {
                return root.left
            }

            //remove node two child nodes
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }

    levelOrder() {
        let queue = [];
        queue.push(this.root);
        while (queue.length > 0) {
            let current = queue.shift();
            console.log(current.value);
            current.left && queue.push(current.left);
            current.right && queue.push(current.right);
        }
    }
    min(root = this.root) {
        if (!root.left) return root.value
        else return this.min(root.left)
    }
    max(root = this.root) {
        if (!root.right) return root.value
        else return this.max(root.right)
    }
}

const bst = new BinarySearchTree()
let arr = [2, 4, 2, 4, 44, 5, 6, 8]
arr.forEach(item => bst.insert(item))
bst.inOrder()
bst.preOrder()
bst.postOrder()
bst.levelOrder()
console.log('something')
console.log(bst.min())
console.log(bst.max())
bst.delete(44)
console.log("after");
bst.inOrder()