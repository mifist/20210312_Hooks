import {lazy, Suspense, useState} from "react"
import "./style.css"

const loadTitl = () => import('./components/Tilt');
const Tilt = lazy(loadTitl)


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
        <label  htmlFor="toggle-element">
          <input
            type="checkbox"
            checked={on}
            onChange={toggle}
            id="toggle-element"
          />{" "}
          {on ? "Hide Tilt" : "Show Tilt"}
        </label>
      </div>
      {on ?  <Suspense fallback={<h1>Loading...</h1>}><Tilt /></Suspense> : null}
    </div>
    
  )
}

export default App
