import { useState } from 'react'
import { useFindRepeat } from '../hooks/useFindRepeat'

export const FindRepeating = () => {
    const [value, setValue] = useState('')
    const { arrayOfInput, firstRepeat } = useFindRepeat(value)
    return (
        <div>
            <input type="text" value={value} onChange={e => setValue(e.target.value)} />
            <p>{JSON.stringify(arrayOfInput)}</p>
            {firstRepeat && <p>The First repeating element are:{firstRepeat}</p>}
        </div>
    )
}
