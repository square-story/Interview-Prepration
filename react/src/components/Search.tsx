import { useEffect, useState } from "react"
import type { IPerson } from "../types/persons"

const Search = () => {
    const [search, setSearch] = useState("")
    const [data, setData] = useState<IPerson[]>([])
    const [filteredData, setFilteredData] = useState<IPerson[]>([])
    useEffect(() => {
        const fetchData = async () => {
            const response: IPerson[] = await fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())
            setData(response)
            setFilteredData(response)
        }
        fetchData()
    }, [])

    useEffect(() => {
        if (search === '') {
            setFilteredData(data)
        } else {
            const filterOne = data.filter(item => {
                return item.name.toLowerCase().includes(search.toLowerCase())
            })
            setFilteredData(filterOne)
        }
    }, [data, search])

    return (
        <>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Please Enter The Name" />
            {filteredData.map((item, index) => (
                <li key={index}>
                    {item.name}
                </li>
            ))}
        </>
    )
}

export default Search