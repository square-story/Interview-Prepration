import { useRef } from "react"

export const InputFocus = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const handleButton = () => {
        inputRef.current?.focus()
        inputRef.current?.select()
    }
    return (
        <>
            <input type="text" ref={inputRef} placeholder="Click to the button" />
            <button onClick={handleButton}>click here</button>
        </>
    )
}
