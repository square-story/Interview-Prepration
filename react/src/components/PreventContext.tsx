

export const PreventContext = () => {
    const handleContext = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        alert('haha, Nice try')
    }
    return <button onContextMenu={handleContext}>To See Action Right Click This Button</button>
}
