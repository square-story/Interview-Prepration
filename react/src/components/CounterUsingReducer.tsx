import { useReducer } from "react"

const intialValue = {
    count: 1
}

function counterReducer(state: { count: number }, action: { type: string, payload?: number }) {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 }
        case "decrement":
            return { count: state.count - 1 }
        default:
            return state
    }
}
const CounterUsingReducer = () => {

    const [state, reducer] = useReducer(counterReducer, intialValue)
    return (
        <div>
            <button onClick={() => reducer({ type: 'increment' })}>Increment</button>
            <button onClick={() => reducer({ type: "decrement" })}>Decrement</button>
            <p style={{ color: 'red' }}><strong>{state.count}</strong></p>
        </div>
    )
}

export default CounterUsingReducer