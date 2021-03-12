import useCounter from "../hooks/useCounter"

const Counter2 = () => {
  const {count, reset, increment, decrement} = useCounter(10)

  return (
    <>
      <h1>Counter 2</h1>
      <h3>count: {count}</h3>
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

export default Counter2
