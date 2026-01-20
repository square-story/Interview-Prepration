import { useRef } from "react";

export function useScrollThrottle(callback: () => void, delay: number) {
    const timerId = useRef(null)
    return function (...arg) {
        const now = new Date()
        if ((now - timerId.current) > delay) {
            timerId.current = now
            callback(...arg)
        }
    }
}