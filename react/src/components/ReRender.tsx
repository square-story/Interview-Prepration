import { useEffect } from "react"

const ReRender = () => {
    useEffect(() => {
        function something() {
            console.log(`the changes happend in the width: ${window.innerWidth} and the hight: ${window.innerHeight}`)
        }
        window.addEventListener('resize', something)
    })
    return (
        <div>ReRender</div>
    )
}

export default ReRender