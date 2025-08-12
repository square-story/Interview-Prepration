const str = '343231512322349'

function NonRepeating(str) {
    let map = new Map()
    for (let el of str) {
        map.set(el, (map.get(el) || 0) + 1)
    }

    return [...map].filter((item) => item[1] == 1)[0][0]
}

console.log(NonRepeating(str))