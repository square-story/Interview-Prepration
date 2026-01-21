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
        } else if (newNode.value > root.value) {
            if (root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        } else {
            return
        }
    }

    search(root, value) {
        if (!root) {
            return false;
        } else {
            if (root.value === value) {
                return true
            } else if (value > root.value) {
                return this.search(root.right, value)
            } else {
                return this.search(root.left, value)
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

    findClosestValueRecursive(target, root = this.root, closest = null) {
        if (!root) return closest
        if (closest === null || Math.abs(target - closest) > Math.abs(target - root.value)) {
            closest = root.value
        }
        if (target < root.value) {
            return this.findClosestValueRecursive(target, root.left, closest)
        } else if (target > root.value) {
            return this.findClosestValueRecursive(target, root.right, closest)
        } else {
            return closest
        }
    }

    findClosestValueItrative(target, current = this.root) {
        if (!current) return null
        let closest = current.value
        while (current) {
            if (Math.abs(current.value - target) < Math.abs(closest - target)) {
                closest = current.value
            }

            if (target > current.value) {
                current = current.right
            } else if (target < current.value) {
                current = current.left
            } else {
                return current.value
            }
        }
        return closest
    }

    isBST(root = this.root, min = -Infinity, max = Infinity) {
        if (!root) return true;
        if (root.value <= min || root.value >= max) return false;
        return (
            this.isBST(root.left, min, root.value) &&
            this.isBST(root.right, root.value, max)
        );
    }

    findDegree(value) {
        let node = this.findNode(value)
        if (node) {
            let degree = (node.right ? 1 : 0) + (node.left ? 1 : 0)
            return degree
        }
        return null
    }

    findNode(value, root = this.root) {
        if (!root) return null
        else {
            if (root.value === value) {
                return root
            } else if (root.value > value) {
                return this.findNode(value, root.left)
            } else {
                return this.findNode(value, root.right)
            }
        }
    }

    levelOrder() {
        let queue = [this.root]
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

    findHeight(root = this.root) {
        if (!root) return -1
        let left = this.findHeight(root.left)
        let right = this.findHeight(root.right)
        return Math.max(left, right) + 1
    }

    isPerfectBinaryTree(root = this.root) {
        if (!root) return true
        let countNode = this.countNodes()
        let HeightOf = this.findHeight()
        return countNode === Math.pow(2, HeightOf + 1) - 1
    }

    isSameTree(bst1, bst2) {
        if (!bst1 && !bst2) {
            return true
        }
        if (!bst1 || !bst2) {
            return false
        }
        if (bst1.value !== bst2.value) {
            return false
        }

        return (
            this.isSameTree(bst1.left, bst2.left) && this.isSameTree(bst1.right, bst2.right)
        )
    }

    countNodes(root = this.root) {
        if (!root) return 0
        let left = this.countNodes(root.left)
        let right = this.countNodes(root.right)

        return left + right + 1
    }
    countLeafNodes(root = this.root) {
        if (!root) return 0
        if (!root.right && !root.left) return 1
        return (this.countLeafNodes(root.left) + this.countLeafNodes(root.right))
    }
    depthOfANode(value, root = this.root, count = 0) {
        if (!root) return count
        if (root.value === value) return count
        if (value > root.value) {
            return this.depthOfANode(value, root.right, count + 1)
        } else {
            return this.depthOfANode(value, root.left, count + 1)
        }
    }

    isBalanced(root = this.root) {
        if (!root) return true
        const leftHeight = this.findHeight(root.left)
        const rightHeight = this.findHeight(root.right)
        if (Math.abs(leftHeight - rightHeight) > 1) {
            return false
        }
        return (this.isBalanced(root.left) && this.isBalanced(root.right))
    }

    kthSmallest(k, root = this.root) {
        const stack = []
        let current = root
        while (current || stack.length > 0) {
            while (current) {
                stack.push(current)
                current = current.left
            }

            current = stack.pop()
            k--

            if (k === 0) return current.value
            current = current.right
        }
    }
    kThLargest(k, root = this.root) {
        let current = root
        let stack = []
        while (current || stack.length) {
            while (current) {
                stack.push(current)
                current = current.right
            }

            current = stack.pop()
            k--

            if (k == 0) return current.value

            current = current.left
        }
    }
}

const bst = new BinarySearchTree();
[4, 44, 2, 4, 2, 6, 5, 8].forEach(v => bst.insert(v));

console.log("InOrder:");
bst.inOrder();
console.log("PreOrder:");
bst.preOrder();
console.log("PostOrder:");
bst.postOrder();
console.log("LevelOrder:");
bst.levelOrder();

console.log("Min:", bst.min());
console.log("Max:", bst.max());
bst.delete(44);
console.log("After deleting 44:");
bst.levelOrder();
console.log("isBST:", bst.isBST());
console.log('The length of the BST is:', bst.findHeight())
console.log('the total count nodes:', bst.countNodes())
console.log('the total leaf nodes:', bst.countLeafNodes())
console.log('the depth of the 5 is:', bst.depthOfANode(4))
console.log('--the second smallest element--:', bst.kthSmallest(2))
console.log('--for confirmation smallest: Inorder--')
bst.inOrder()
console.log('---2th largest element:--', bst.kThLargest(2))

console.log('Degree of 6:', bst.findDegree(6))
console.log('Closest of 7:', bst.findClosestValueItrative(7))
console.log('Closest of 7:', bst.findClosestValueRecursive(7))
console.log('is this perfect:', bst.isPerfectBinaryTree())
console.log('Is Balanced tree :', bst.isBalanced());

const perfectBST = new BinarySearchTree();
[4, 2, 6, 1, 3, 5, 7].forEach(v => perfectBST.insert(v));
console.log('Is perfect tree :', perfectBST.isPerfectBinaryTree());
console.log('Is Balanced tree :', perfectBST.isBalanced());
const bst1 = new BinarySearchTree()
const bst2 = new BinarySearchTree()
    ;[5, 3, 6, 2, 3].forEach(item => bst1.insert(item))
    ;[5, 3, 6, 2, 3].forEach(item => bst2.insert(item))
console.log('is this same tree:', bst1.isSameTree(bst1, bst2))

