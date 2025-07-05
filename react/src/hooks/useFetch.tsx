import { useEffect, useState } from "react";

interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null
}

export const useFetch = <T = unknown>(url: string, options: RequestInit = {}): FetchState<T> => {
    const [state, setState] = useState<FetchState<T>>({ data: null, error: null, loading: true })
    useEffect(() => {
        let Mounted: boolean = true
        const fetchFunction = async () => {
            try {
                const response = await fetch(url, options)

                if (!response.ok) {
                    let errorMsg = `Error ${response.status}: ${response.statusText}`;
                    if (response.status === 404) errorMsg = 'Resource not found';
                    else if (response.status === 500) errorMsg = 'Server error';
                    else if (response.status === 401) errorMsg = 'Unauthorized';

                    throw new Error(errorMsg)
                }

                const data = await response.json()
                if (Mounted) {
                    setState({ data, error: null, loading: false })
                }
            } catch (error) {
                if (Mounted) {
                    setState({ data: null, error: (error as Error).message, loading: false })
                }
            }
        }

        fetchFunction()
        return () => {
            Mounted = false
        }
    }, [url, JSON.stringify(options)])

    return state
}
