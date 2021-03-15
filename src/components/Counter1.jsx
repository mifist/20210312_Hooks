import {useState, useEffect} from "react"

const initState = {count: 0, step: 1}

// tick 
// step

const Counter1 = () => {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  useEffect(() => {
    const id = setInterval(() => setCount(x => x + step), 1000)
    return () => clearInterval(id)
  }, [step])

  return <>
  <input type="number" value={step} onChange={e => setStep(Number(e.target.value))}/>
  <h3>Counter_1: {count}</h3>
  </>
}

export default Counter1
