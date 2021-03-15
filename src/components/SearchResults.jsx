import {useState, useEffect, useCallback} from "react"
import Form from "./Form"

const SearchResults = () => {
  const [results, setResults] = useState([])
  const [query, setQuery] = useState('films')

  const fetchData = useCallback( async ()  => {
    const res = await fetch("https://swapi.dev/api/" + query)
    const {results} = await res.json()
    setResults(results)
  }, [query])

  useEffect(() => {
    fetchData()
  }, [fetchData]) // Нормально ли это?

  const handleSubmit = value => {
    setQuery(value)
  }

  return (
    <>
      <Form handleSubmit={handleSubmit} />
      <h1>Total: {results?.length} items</h1>
    </>
  )
}

export default SearchResults
