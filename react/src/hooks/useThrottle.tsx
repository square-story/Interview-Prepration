import { useEffect, useRef, useState } from "react";

export function useThrottle<T>(value: T, delay: number): T {
    const [newValue, setNewValue] = useState<T>(value);
    const lastExecuted = useRef(0);
    useEffect(() => {
        const now = Date.now();
        if (now - lastExecuted.current >= delay) {
            setNewValue(value);
            lastExecuted.current = now;
        } else {
            const handler = setTimeout(() => {
                setNewValue(value);
                lastExecuted.current = Date.now();
            }, delay - (now - lastExecuted.current));

            return () => clearTimeout(handler);
        }
    }, [value, delay]);
    return newValue;
};
