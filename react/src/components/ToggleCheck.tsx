import { useRef } from "react"


const ToggleCheck = () => {
    const checkRef = useRef<HTMLInputElement>(null)
    const handleClick = () => {
        if (checkRef.current) {
            checkRef.current.checked = !checkRef.current.checked
        }
    }

    return (
        <>
            <input type='checkbox' ref={checkRef} />
            <button onClick={handleClick}>onClick here!</button>
        </>

    )
}

export default ToggleCheck