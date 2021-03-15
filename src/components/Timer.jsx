import {useState, useRef, useReducer} from "react"
import { useEffect } from "react/cjs/react.development"

// lapse, running, clear
/* function reducer(state, action) {
  switch(action.type){
    case 'lapse': return {...state, lapse: action.now - action.startTime}
    case 'running': return {...state, running: !state.running}
    case 'clear': return {...state, running: false, lapse: 0}
    default: throw Error('no cases')
  }
} */

const reducer = (s, a) => ({...s, ...a})

const initState=  {lapse: 0, running: false}

const Timer = () => {
  const [{lapse, running}, dispatch] =useReducer(reducer, initState)
  const intervalRef = useRef();

  useEffect(() => {
    return () => clearInterval(intervalRef.current)
  }, [])


  const handleRunning = () => {
    if(running){
      clearInterval(intervalRef.current)
    } else {
      const startTime = Date.now() - lapse
      intervalRef.current = setInterval(() => dispatch({lapse:  Date.now() - startTime}), 0)
    }
    dispatch({running: !running})
  }

  const handleClear = () => {
    clearInterval(intervalRef.current)
    dispatch({running: false , lapse: 0})

  }

  return (
    <>
      <h3>Time: {lapse}</h3>
      <button onClick={handleRunning} className="btn btn-primary btn-lg mr-3">
        {running ? "Stop" : "Start"}
      </button>
      <button onClick={handleClear} className="btn btn-success btn-lg">
        Clear
      </button>
    </>
  )
}

function TimerWrap() {
  const [isMount, setIsMount] = useState(false)
  return (
    <>
      <h1>Timer</h1>
      <div className="custom-control custom-checkbox">
        <input
          value={isMount}
          onChange={() => setIsMount(!isMount)}
          checked={isMount}
          type="checkbox"
          id="mounted"
          className="custom-control-input"
        />
        <label htmlFor="mounted" className="custom-control-label">
          {isMount ? "Unmount" : "Mount"}
        </label>
      </div>
      {isMount && <Timer />}
    </>
  )
}

export default TimerWrap
