const fetchResult = async () => {
    try {
        const result = await fetch('https://my.api.mockaroo.com/users?key=c1c53eb0', {
            method: 'GET',
            headers: {
                'X-API-Key': 'c1c53eb0',
                'Content-Type': 'application/json'
            }
        })
        console.log(await result.json())
    } catch (error) {
        console.error(error)
    } finally {
        console.log('hell yeaaa..')
    }
}

fetchResult()