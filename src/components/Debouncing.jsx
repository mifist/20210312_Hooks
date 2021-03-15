import {useState, useEffect} from "react"
import useDebounce from '../hooks/useDebounce'

// https://pokeapi.co/api/v2/pokemon/${pokemonName}

const Debouncing = () => {
  const [pokemon, setPokemon] = useState(null)
  const [pokemonName, setPokemonName] = useState("")

  const debounceVal = useDebounce(pokemonName)

  useEffect(() => {
    if (!debounceVal) return
    fetch(`https://pokeapi.co/api/v2/pokemon/${debounceVal}`)
      .then(r => r.json())
      .then(pokemon => setPokemon(pokemon))
  }, [debounceVal])

  const handleChange = ({target}) => setPokemonName(target.value)

  return (
    <div className="col-4">
      <input
        value={pokemonName}
        onChange={handleChange}
        type="text"
        className="form-control mb-3"
      />
      {pokemon && pokemon.sprites?.front_default && (
        <div>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      )}
    </div>
  )
}

export default Debouncing
