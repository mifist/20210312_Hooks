import {useState, useReducer, useEffect} from "react"
import "./App.css"
import Form from "./components/Form"
import ItemFallback from './components/ItemsFallbak'
import ItemsError from './components/ItemsError'
import Items from './components/Items'

import {queryApi} from './api'

const initState = {
  data: null,
  status: "idle",
  error: null,
}

function reducer(state, action) {
  switch (action.type) {
    case "pending": return{data:null, error:null, status: 'pending'}
    case "resolved": return{data:action.data, error:null, status: 'resolved'}
    case "rejected": return{data:null, error:action.error, status: 'rejected'}
    default:
      throw Error("this case impossible")
  }
}

const ItemsView = ({title}) => {
  const [{data, status, error}, dispatch] = useReducer(reducer, initState)

  useEffect(() => {
    if(!title) return;
    dispatch({type: 'pending'})
    queryApi(title).then(
      data => dispatch({type: 'resolved', data}),
      error => dispatch({type: 'rejected', error}),
    )
  }, [title])

  if(status === 'idle') {
    return "Choose item"
  } else if(status === 'pending') {
     return <ItemFallback />
  } else if(status === 'rejected') {
    return <ItemsError  error={error}/>
  } else if(status === 'resolved'){
    return <Items data={data}/>
  }
 
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
