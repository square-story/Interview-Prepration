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

    startsWith(prefix) {
        let currentNode = this.root;
        for (let char of prefix) {
            if (!currentNode.children[char]) {
                return false
            }
            currentNode = currentNode.children[char]
        }
        return true
    }


    delete(word, root = this.root, depth = 0) {
        if (!root) return false
        if (depth === word.length) {
            if (!root.isEndOfWord) return false
            root.isEndOfWord = false
            return Object.keys(root.children).length === 0
        }
        let char = word[depth]
        if (!root.children[char]) return false

        let shouldDelete = this.delete(word, root.children[char], depth + 1)
        if (shouldDelete) {
            delete root.children[char]
            return !root.isEndOfWord && Object.keys(root.children).length === 0
        }
        return false
    }

}

const myTrie = new Trie();
myTrie.insert("apple");
myTrie.insert("apricot");
myTrie.insert("banana");

console.log(myTrie.search("apple"));    // true
console.log(myTrie.search("app"));      // false (unless explicitly inserted)
console.log(myTrie.startsWith("app"));  // true
console.log(myTrie.search("orange"));   // false
console.log(myTrie.delete("apple")) //true "deleting the apple"
myTrie.delete("apple")
console.log("Search for 'apple' after deletion:", myTrie.search("apple")); // false
