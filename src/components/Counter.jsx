import {useState, useEffect} from "react"

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(x => x + 1)

  useEffect(() => {
    console.log(`You clicked ${count} times`)
  })

  return (
    <>
      <h3>Counter: {count}</h3>
      <button onClick={increment} className="btn btn-primary mr-3">
        Click me
      </button>
    </>
  )
}

export default Counter
