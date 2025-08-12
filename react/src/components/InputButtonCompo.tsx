//Input to button to list

import { useRef, useState } from "react"

const InputButtonCompo = () => {
    const inputRef = useRef(null)
    const [array, setArray] = useState([])
    const handleClick = () => {
        setArray(prev => [inputRef.current.value, ...prev])
    }
    return (
        <>
            <input type="text" ref={inputRef} />
            <button onDoubleClick={handleClick}>add</button>
            <ul>
                {array.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default InputButtonCompo