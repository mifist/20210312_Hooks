import {useState, useEffect} from "react"

const SearchResults1 = () => {
  const [films, setFilms] = useState([])
  const [people, setPeople] = useState([])

  function getFetchUrl(query) {
    return "https://swapi.dev/api/" + query
  }

  useEffect(() => {
    const url = getFetchUrl("films")
    fetch(url)
      .then(r => r.json())
      .then(({results}) => setFilms(results))
  }, [])

  useEffect(() => {
    const url = getFetchUrl("people")
    fetch(url)
      .then(r => r.json())
      .then(({results}) => setPeople(results))
  }, [])

  return (
    <div className="grid">
      <ul>
        {films.map(item => (
          <li key={item.title}>{item.title}</li>
        ))}
      </ul>
      <ul>
        {people.map(item => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default SearchResults1
