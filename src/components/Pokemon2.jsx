import {useState} from "react"

function PokemonInfo({pokemonName}) {
  return <h1>I am {pokemonName}</h1>
}

const Pokemon2 = () => {
  const [pokemonName, setPokemonName] = useState("")

  return (
    <div className="container">
      <h3>Pokemon 2</h3>
      <input
        value={pokemonName}
        onChange={e => setPokemonName(e.target.value)}
      />
      <PokemonInfo pokemonName={pokemonName} />
    </div>
  )
}

export default Pokemon2
