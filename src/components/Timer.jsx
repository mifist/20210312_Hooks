import {useState} from "react"

const Timer = () => {
  return (
    <>
      <h3>Time: </h3>
      <button onClick={() => {}} className="btn btn-primary btn-lg mr-3">
        Start
      </button>
      <button onClick={() => {}} className="btn btn-success btn-lg">
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
