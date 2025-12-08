//Group anagrams together in an array.


let arr = ["eat", "tea", "tan", "ate", "nat", "bat"]


let map = {}
arr.forEach(item => {
    let sorted = item.split('').sort().join('')
    map[sorted] = map[sorted] || []
    map[sorted].push(item)
})

console.log(Object.values(map))
