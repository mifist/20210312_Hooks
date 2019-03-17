import {useState, useReducer} from "react"
import "./App.css"
import Form from "./components/Form"

const initState = {
  data: null,
  status: "idle",
  error: null,
}

function reducer(state, action) {
  switch (action.type) {
    default:
      throw Error("this case impossible")
  }
}

const ItemsView = ({title}) => {
  const [{data, status, error}, dispatch] = useReducer(reducer, initState)

  // todo useEffect

  /* 
  - status === 'idle'  -> "Choose item"
  - status === 'pending' -> ItemsFallback
  - status === 'resolved' -> Items  
  - status === 'rejected'-> ItemsError
  */
  return "Todo"
}

function App() {
  const [title, setTitle] = useState("")

  const handleSubmit = title => {
    setTitle(title)
  }

  return (
    <div className="items-wrap">
      <Form title={title} onSubmit={handleSubmit} />
      <div className="items-view">
        <ItemsView title={title} />
      </div>
    </div>
  )
}

export default App
