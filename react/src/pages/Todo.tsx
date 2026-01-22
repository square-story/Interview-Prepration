import React, { useState } from "react";
import type { ITodos } from "../types/todos";

const Todo = () => {
    const [todos, setTodos] = useState<ITodos[]>([]);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement;
        const todo = (form.elements.namedItem("todo") as HTMLInputElement).value.trim();
        if (!todo) {
            alert("Please enter a todo item.");
            return;
        }
        setTodos([...todos, { title: todo, completed: false }]);
        form.reset();
    }
    const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    }
    return (
        <>
            <h1>Todo</h1>
            <p>Todo page content goes here.</p>
            {todos.map((item, index) => (
                <div key={index} style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", minWidth: "400px", minHeight: "50px", gap: "10px" }}>
                    <li>{item.title}</li>
                    <button onClick={() => {
                        const updatedTodos = [...todos];
                        updatedTodos[index].completed = !updatedTodos[index].completed;
                        setTodos(updatedTodos);
                    }}>
                        <span>{item.completed ? "✔️" : "❌"}</span>
                        <input type="checkbox" id={`todo-${index}`} checked={item.completed} />
                    </button>
                    <button onClick={() => {
                        const updatedTodos = todos.filter((_, i) => i !== index);
                        setTodos(updatedTodos);
                    }}>
                        delete
                    </button>
                </div>
            ))}
            <form onSubmit={handleSubmit}>
                <input type="text" name="todo" />
                <button type="submit">add</button>
                <button onClick={handleCancel}>cancel</button>
            </form>
        </>
    )
}


export default React.memo(Todo)