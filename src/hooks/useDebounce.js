import {useState} from 'react'
import { useEffect } from 'react/cjs/react.development'

const useDebounce = (val, delay = 1500) => {
    const [debounce, setDebounce] = useState('')
    
    useEffect(() => {
        const timer = setTimeout(() => setDebounce(val), delay)
        return () => clearTimeout(timer)
    }, [delay, val])
   
    return debounce
}

export default useDebounce
