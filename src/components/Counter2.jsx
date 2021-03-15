import useLocalStorage from '../hooks/useLocalStorage'

const Counter2 = () => {
  const [count, setCount] = useLocalStorage('count', 0)

  const increment = () => setCount(x => x + 1)

  return (
    <>
      <h1>
        Counter_2: <span data-testid="cnt">{count}</span>
      </h1>
      <button  onClick={increment}  className="btn btn-success">Increment</button>
    </>
  )
}
export default Counter2
