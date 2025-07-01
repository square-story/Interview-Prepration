import React from 'react'

export const EventDelegationExample = () => {
    const handleClick = (event: React.MouseEvent<HTMLUListElement>) => {
        console.log((event.target as HTMLElement).textContent)
    }
    return (
        <ul onMouseMove={handleClick}>
            <li>cherry</li>
            <li>banana</li>
            <li>apple</li>
        </ul>
    )
}
