import {useState} from "react"
import Tilt from "./components/Tilt"
import "./style.css"

function useToggle() {
  const [on, setOn] = useState(false)
  const toggle = () => setOn(!on)
  return {on, toggle}
}

const App = props => {
  const {on, toggle} = useToggle()

  return (
    <div className="container pt-3">
      <div className="form-group">
        <label htmlFor="toggle-element">
          <input
            type="checkbox"
            checked={on}
            onChange={toggle}
            id="toggle-element"
          />{" "}
          {on ? "Hide Tilt" : "Show Tilt"}
        </label>
      </div>
      {on ? <Tilt /> : null}
    </div>
  )
}

export default App
