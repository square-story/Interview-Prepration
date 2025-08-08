import { useEffect, useRef, useState } from "react"

export const TurnCounter = () => {
    const [turn, setTurn] = useState(false)
    const [count, setCount] = useState(0)
    const timerRef = useRef(null)

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setCount(prev => turn ? prev - 1 : prev + 1)
        }, 1000);
        return () => clearInterval(timerRef.current)
    }, [turn])

    useEffect(() => {
        if (count <= 0) {
            setTurn(false)
        } else if (count >= 10) {
            setTurn(true)
        }
    }, [count])

    return (
        <>
            <h1>{count}</h1>
        </>
    )
}