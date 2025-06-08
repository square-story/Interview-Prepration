import { useEffect, useState } from "react"

export function useDebounce<T>(value: T, delay: number): T {
    const [debounceValue, setDebounceValue] = useState(value);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounceValue(value)
        }, delay);

        return () => clearTimeout(timeout)
    }, [delay, value])
    return debounceValue
}