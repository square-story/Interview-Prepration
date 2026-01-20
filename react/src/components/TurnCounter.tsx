import { useEffect, useState } from "react"

const TurnCounter = () => {
    const [timer, setTimer] = useState(0)
    const [turn, setTurn] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prev => {
                if (prev >= 10) {
                    setTurn(false)
                    return prev - 1
                }

                if (prev <= 0) {
                    setTurn(true)
                    return prev + 1
                }

                return turn ? prev + 1 : prev - 1
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [turn])

    return <h1>{timer}</h1>
}

export default TurnCounter
