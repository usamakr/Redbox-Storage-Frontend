import { useEffect, useState } from 'react'

export const useDebounce = (value: string, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(handler) // Cleanup the timeout if value changes or component unmounts
        }
    }, [value, delay])

    return debouncedValue
}
