import { useEffect, useState } from "react"

const Timer = () => {
    const [timer, setTimer] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        let timerId: undefined | number
        if (isRunning) {
            timerId = setInterval(() => {
                setTimer(prev => prev + 1)
            }, 1000);
        }
        return () => clearInterval(timerId)
    }, [isRunning])

    const startTimer = () => setIsRunning(true)
    const stopTimer = () => setIsRunning(false)
    const resetTimer = () => {
        setIsRunning(false)
        setTimer(0)
    }
    return (
        <>
            <p>{timer}</p>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
        </>
    )
}

export default Timer