import { useReducer, useState } from "react";

function stringReducer(state: string, action: { type: string, payload?: string }) {
    switch (action.type) {
        case "REVERSE":
            return state.split('').reverse().join('');
        case "SET":
            return action.payload || '';
        default:
            return state
    }
}


const ReverseAString = () => {
    const [state, dispatch] = useReducer(stringReducer, '')
    const [input, setInput] = useState('')
    return (
        <div style={{ padding: '1rem' }}>
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="type something" />
            <button onClick={() => dispatch({ 'type': 'SET', payload: input })}>Click to Set value</button>
            <button onClick={() => dispatch({ type: 'REVERSE' })}>Click to Reverse The Value</button>
            <p><strong>{state}</strong></p>
        </div>
    )
}

export default ReverseAString