const something = async () => {
    try {
        const response1 = await fetch('https://my.api.mockaroo.com/users', {
            headers: {
                'X-API-Key': 'c1c53eb0'
            }
        })

        if (!response1.ok) throw new Error('new error')
        if (response1) {
            setTimeout(async () => {
                const data = await response1.json()
                console.log(data)
            }, 1000);
        }
    } catch (error) {
        console.log(error)
    }
}

something()