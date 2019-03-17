import {useState, useEffect} from "react"
import Form from "./Form"

const SearchResults = () => {
  const [results, setResults] = useState([])

  async function fetchData() {
    const res = await fetch("https://swapi.dev/api/films")
    const {results} = await res.json()
    setResults(results)
  }

  useEffect(() => {
    fetchData()
  }, []) // Нормально ли это?

  const handleSubmit = value => {
    console.log(value)
  }

  return (
    <>
      <Form handleSubmit={handleSubmit} />
      <h1>Total: {results?.length} items</h1>
    </>
  )
}

export default SearchResults
