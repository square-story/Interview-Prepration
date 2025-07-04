import { useEffect, useState } from "react"

interface IFetchUser {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    gender: "Male" | "Female",
    ip_address: string
}

export const useFetchUser = () => {
    const [value, setValue] = useState<IFetchUser[] | []>([])
    useEffect(() => {
        const fetchUser = async () => {
            const data = await fetch('https://my.api.mockaroo.com/users', {
                method: 'GET',
                headers: {
                    'X-API-Key': "c1c53eb0"
                }
            }).then(data => data.json())

            setValue(data)
        }
        fetchUser()
    }, [])
    return { value, setValue }
}
