class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    hash(key) {
        let index = 0;
        for (let i = 0; i < key.length; i++) {
            index += key.charCodeAt(i)
        }
        return index % this.size
    }

    set(key, value) {
        const index = this.hash(key)
        const bucket = this.table[index]
        if (!bucket) {
            this.table[index] = [[key, value]]
        } else {
            let sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem) {
                sameKeyItem[1] = value
            } else {
                bucket.push([key, value])
            }
        }
    }

    has(key) {
        let index = this.hash(key)
        let bucket = this.table[index]
        if (bucket) {
            let sameItem = bucket.find(item => item[0] === key)
            if (sameItem) {
                return true
            }
        }
        return false
    }

    get(key) {
        let index = this.hash(key)
        let bucket = this.table[index]
        if (bucket) {
            let sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem) {
                return sameKeyItem[1]
            }
        }
        return undefined
    }

    display() {
        for (let i = 0; i < this.size; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i])
            }
        }
    }

    remove(key) {
        let index = this.hash(key)
        let bucket = this.table[index]
        if (bucket) {
            let i = bucket.findIndex(item => item[0] === key)
            if (i !== -1) {
                bucket.splice(i, 1)
                if (!bucket.length) {
                    this.table[index] = undefined
                }
            }
        }
    }
}


const table = new HashTable(10)

table.set('key', 'value')
table.set('name', 'sadik')
table.set('mane', 'something')

table.display()
console.log('retreavals....')
console.log(table.get('mane'))
console.log(table.get('name'))
console.log(table.get('mae'))

function detectDuplicate(arr) {
    let seen = new HashTable(arr.length)
    for (let el of arr) {
        if (seen.has(String(el))) {
            seen.set(String(el), seen.get(String(el)) + 1)
        } else {
            seen.set(String(el), 1)
        }
    }
    return seen.display()
}

console.log(detectDuplicate([4, 5, 3, 5, 6, 34, 6, 4, 5, 4, 6, 32, 5, 7, 3]))

