import { useEffect, useState } from "react"
import { useThrottle } from "../hooks/useThrottle"



interface ResizeInfo {
    width: number,
    height: number
}

const ReRender = () => {
    const [resizeInfo, setResizeInfo] = useState<ResizeInfo>({
        width: window.innerWidth,
        height: window.innerHeight
    })

    const throttleValue = useThrottle<ResizeInfo>(resizeInfo, 1000)
    useEffect(() => {
        function something() {
            return setResizeInfo({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        window.addEventListener('resize', something)

        return () => window.removeEventListener('resize', something)
    }, [])
    return (
        <div>{`ReRender width is ${throttleValue.width} and height is ${throttleValue.height}`}</div>
    )
}

export default ReRender