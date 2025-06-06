import type { IChildProps } from "../types/child"


const Child = ({ setMessage }: IChildProps) => {
    const handleClick = () => {
        setMessage('something')
    }
    return <button onClick={() => handleClick()}>Send Button</button>
}

export default Child