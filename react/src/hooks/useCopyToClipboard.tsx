import { useCallback, useState } from 'react'

const useCopyToClipboard = (content: string): [boolean, () => void] => {
    const [isCopied, setIsCopied] = useState<boolean>(false)
    const copy = useCallback(() => {
        navigator.clipboard
            .writeText(content)
            .then(() => setIsCopied(true))
            .then(() => setTimeout(() => setIsCopied(false), 3000))
            .catch((err) => console.log(err))
    }, [content])
    return [isCopied, copy]
}

export default useCopyToClipboard