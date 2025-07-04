import { useState } from "react"

interface IUseToggle {
    currentState?: boolean
}

interface IUseToggleReturn {
    customState: boolean,
    toggle: () => void;
    toggleOff: () => void;
    toggleOn: () => void;
}

const useToggle = ({ currentState = false }: IUseToggle = {}): IUseToggleReturn => {
    const [customState, setCustomState] = useState<boolean>(currentState)
    const toggle = () => setCustomState(prev => !prev)
    const toggleOn = () => setCustomState(true)
    const toggleOff = () => setCustomState(false)
    return { customState, toggle, toggleOff, toggleOn }
}

export default useToggle