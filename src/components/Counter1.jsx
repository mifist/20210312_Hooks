import {useState, useEffect} from "react"

const Counter1 = () => {
  const [count, setCount] = useState(0)

  return <h3>Counter_1: {count}</h3>
}

export default Counter1
