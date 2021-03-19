import {useState, useEffect} from "react"
import "./App.css"
import {useQuery} from 'react-query'
import Form from "./components/Form"
import ItemFallback from "./components/ItemsFallbak"
import ItemsError from "./components/ItemsError"
import Items from "./components/Items"
import {ErrorBoundary} from "react-error-boundary"
import {queryApi} from "./api"





const ItemsView = ({title}) => {
  const {data,  isIdle, isLoading, isError, isSuccess,  error} = useQuery(
      ['starwars', {title}], 
      () => queryApi(title), 
      {
        enabled: !!title
      }
   )





  if (isIdle) {
    return "Choose item"
  } else if (isLoading) {
    return <ItemFallback />
  } else if (isError) {
    Promise.reject(error)
  } else if (isSuccess) {
    return <Items data={data} />
  }
}

function App() {
  const [title, setTitle] = useState("")

  const handleSubmit = title => {
    setTitle(title)
  }
  const onReset = () => setTitle("")

  return (
    <div className="items-wrap">
      <Form title={title} onSubmit={handleSubmit} />
      <div className="items-view">
        <ErrorBoundary
          resetKeys={[title]}
          onReset={onReset}
          FallbackComponent={ItemsError}
        >
          <ItemsView title={title} />
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default App
