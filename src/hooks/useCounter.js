import {useState} from "react"

function useCounter(val = 0, step = 1) {
  const [count, setCount] = useState(val)

  const reset = () => setCount(val)
  const increment = () => setCount(prev => prev + 1)
  const decrement = () => setCount(prev => prev - 1)

  return {count, reset, increment, decrement}
}

export default useCounter
