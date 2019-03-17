import {useState} from "react"

const Counter1 = () => {
  const [count, setCount] = useState(0)

  function handleAlertClick() {
    setTimeout(() => {
      console.log("You clicked on: " + count)
    }, 3000)
  }

  return (
    <>
      <h1>Counter 1</h1>
      <h3>clicked: {count} times</h3>
      <button
        onClick={() => setCount(x => x + 1)}
        className="btn btn-primary mr-3"
      >
        Click me
      </button>
      <button className="btn btn-success" onClick={handleAlertClick}>
        Show alert
      </button>
    </>
  )
}

export default Counter1
