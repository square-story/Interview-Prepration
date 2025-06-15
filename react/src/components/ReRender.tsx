import { useEffect, useState } from "react"

const ReRender = () => {
    const [resizeInfo, setResizeInfo] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })
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
        <div>{`ReRender width is ${resizeInfo.width} and hight is ${resizeInfo.height}`}</div>
    )
}

export default ReRender