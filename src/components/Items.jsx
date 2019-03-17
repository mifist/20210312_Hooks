import {useState, useEffect, useRef} from "react"
import Header from "./Header"

function useItems(initialValue) {
  const [inputValue, setInputValue] = useState(initialValue)
  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState([])
  const inputRef = useRef()

  const handleChange = () => setInputValue(inputRef.current.value)

  useEffect(() => {
    if (inputValue) {
      setLoading(true)
      fetch(`https://swapi.dev/api/${inputValue}`)
        .then(r => r.json())
        .then(({results}) => {
          setItems(results)
          setLoading(false)
        })
    } else {
      setItems([])
    }
  }, [inputValue])

  return {
    handleChange,
    loading,
    items,
    inputRef,
  }
}

const Items = () => {
  const {handleChange, loading, items, inputRef} = useItems("films")

  return (
    <div className="col-md-5">
      <Header />

      <div className="form-group">
        <input ref={inputRef} type="text" className="form-control mb-3" />
        <button onClick={handleChange} className="btn btn-primary">
          Search
        </button>
      </div>
      {loading ? (
        <h1>...Loading...</h1>
      ) : (
        <h1>Total: {items && items.length}</h1>
      )}
    </div>
  )
}

export default Items
