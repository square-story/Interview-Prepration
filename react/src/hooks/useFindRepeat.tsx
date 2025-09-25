import { useEffect, useState } from 'react'

export const useFindRepeat = (input: string) => {
  const arrayOfInput = input ? Array.from(input) : []
  const [firstRepeat, setFirstRepeat] = useState<string | null>(null)
  useEffect(() => {
    const set = new Set()
    let duplicateFind = null
    for (let i = 0; i < arrayOfInput.length; i++) {
      const element = arrayOfInput[i];
      if (set.has(element)) {
        duplicateFind = element
        break;
      } else {
        set.add(element)
      }
    }
    setFirstRepeat(duplicateFind)

  }, [input])
  return { arrayOfInput, firstRepeat }
}
