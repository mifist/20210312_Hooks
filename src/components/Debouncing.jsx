import {useState, useEffect} from "react"

// https://pokeapi.co/api/v2/pokemon/${pokemonName}

const Debouncing = () => {
  const [pokemon, setPokemon] = useState(null)
  const [pokemonName, setPokemonName] = useState("")

  useEffect(() => {
    if (!pokemonName) return
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(r => r.json())
      .then(pokemon => setPokemon(pokemon))
  }, [pokemonName])

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
