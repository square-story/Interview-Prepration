import { useEffect, useState } from "react"
import type { ITodos } from "../types/todos"

const Todos = () => {
    const [todos, setTodos] = useState<ITodos | null>(null)
    const [count, setCount] = useState<number>(1)
    useEffect(() => {
        const fetchTodo = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`);
            const data: ITodos = await response.json();
            setTodos(data);
        };
        fetchTodo();
    }, [setTodos, count]);

    const handleChange = async () => {
        return setCount(count + 1)
    }
    return (
        <>0
            <div>{todos?.title}</div>
            <button onClick={handleChange}>increment</button>
        </>

    )
}

export default Todos