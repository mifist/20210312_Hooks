import {useState, useEffect} from "react"

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(x => x + 1)

  useEffect(() => {
    const hnd = setTimeout(increment, 2000)
    console.log(`running useEffect ${count}`)
    return () => clearInterval(hnd)
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
