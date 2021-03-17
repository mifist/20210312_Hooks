import {useState, useCallback, useEffect} from "react"
import "./App.css"
import Form from "./components/Form"
import ItemFallback from "./components/ItemsFallbak"
import ItemsError from "./components/ItemsError"
import Items from "./components/Items"
import {ErrorBoundary} from "react-error-boundary"
import useAsync from "./hooks/useAsync"
import {queryApi} from "./api"

const ItemsView = ({title}) => {
  const {data, status, error, run} = useAsync({
    status: title ? "pending" : "idle",
  })
  useEffect(() => {
    if (!title) return
    return run(queryApi(title))
  }, [run, title])

  if (status === "idle") {
    return "Choose item"
  } else if (status === "pending") {
    return <ItemFallback />
  } else if (status === "rejected") {
    throw Error
  } else if (status === "resolved") {
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
