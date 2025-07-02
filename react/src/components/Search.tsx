import { useEffect, useState } from "react"
import type { IPerson } from "../types/persons"
import { useDebounce } from "../hooks/useDebounce"

const Search = () => {
    const [search, setSearch] = useState("")
    const [data, setData] = useState<IPerson[]>([])
    const [filteredData, setFilteredData] = useState<IPerson[]>([])
    const debouncedSearch = useDebounce(search, 1000)
    useEffect(() => {
        const fetchData = async () => {
            const response: IPerson[] = await fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())
            setData(response)
            setFilteredData(response)
        }
        fetchData()
    }, [])

    useEffect(() => {
        if (debouncedSearch === '') {
            setFilteredData(data)
        } else {
            const filterOne = data.filter(item => {
                return item.name.toLowerCase().includes(debouncedSearch.toLowerCase())
            })
            setFilteredData(filterOne)
        }
    }, [data, debouncedSearch])

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