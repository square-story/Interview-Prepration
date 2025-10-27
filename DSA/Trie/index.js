class TrieNode {
    constructor() {
        this.children = {} //stores child nodes, keyed by character
        this.isEndOfWord = false //
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    /**
     * 
     * @param {string} value 
     */
    insert(value) {
        let currentNode = this.root;
        for (let char of value) {
            if (!currentNode.children[char]) {
                currentNode.children[char] = new TrieNode()
            }

            currentNode = currentNode.children[char]
        }
        currentNode.isEndOfWord = true
    }

    search(value) {
        let currentNode = this.root;
        for (let char of value) {
            if (!currentNode.children[char]) {
                return false
            }
            currentNode = currentNode.children[char]
        }
        return currentNode.isEndOfWord === true
    }

    startWithPrefix(prefix) {
        let currentNode = this.root;
        for (let char of prefix) {
            if (!currentNode.children[char]) {
                return false
            }
            currentNode = currentNode.children[char]
        }
        return true
    }
}


const something = new Trie()
something.insert('something')
console.log(something.search('some'))
console.log(something.startWithPrefix('some'))
