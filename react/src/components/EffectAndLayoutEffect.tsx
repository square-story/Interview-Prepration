import { useEffect, useLayoutEffect, useRef } from "react"

const EffectAndLayoutEffect = () => {
    const boxRef = useRef(null)
    useLayoutEffect(() => {
        (boxRef.current as unknown as HTMLDivElement).style.background = "red"
    }, [])
    useEffect(() => {
        (boxRef.current as unknown as HTMLDivElement).style.background = "green"
    }, [])

    return (
        <div ref={boxRef} style={{ width: 200, height: 200, }}>
            EffectAndLayoutEffect
        </div>
    )
}

export default EffectAndLayoutEffect