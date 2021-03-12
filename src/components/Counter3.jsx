import {useState} from "react"

function initializeState() {
  return {
    count: 0,
    message: "Counter",
  }
}

const Counter3 = () => {
  const [countOb, setCountOb] = useState(initializeState())

  const mergeState = newOb => setCountOb(prevOb => ({...prevOb, ...newOb}))

  const reset = () => mergeState({count: 0})

  const increment = () => mergeState({count: countOb.count + 1})

  const decrement = () =>
    mergeState({count: countOb.count - 1, message: "Decrement"})

  return (
    <>
      <h1>Counter 3</h1>
      <h3>
        {countOb.message}: {countOb.count}
      </h3>
      <button onClick={decrement} className="btn btn-primary mr-3">
        Decrement
      </button>
      <button onClick={reset} className="btn btn-warning mr-3">
        Reset
      </button>
      <button onClick={increment} className="btn btn-success">
        Increment
      </button>
    </>
  )
}

export default Counter3
