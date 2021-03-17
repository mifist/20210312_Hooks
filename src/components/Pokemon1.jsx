import {useState, useEffect, useReducer} from "react"
import axios, {CancelToken} from "axios"

// https://pokeapi.co/api/v2/pokemon/${pokemonName}

function reducer(state, action) {
  switch (action.type) {
    case "pending": {
      return {status: "pending", data: null, error: null}
    }
    case "resolved": {
      return {status: "resolved", data: action.data, error: null}
    }
    case "rejected": {
      return {status: "rejected", data: null, error: action.error}
    }
    default: {
      throw new Error(`no found action type: ${action.type}`)
    }
  }
}

const Pokemon1 = () => {
  const [pokemonName, setPokemonName] = useState("")
  const [state, dispatch] = useReducer(reducer, {
    status: pokemonName ? "pending" : "idle",
    data: null,
    error: null,
  })
  /*eslint no-unused-vars: "off"*/
  const {data: pokemon, status, error} = state

  useEffect(() => {
    if (!pokemonName) {
      return
    }
    const source = CancelToken.source();
    
    new Promise(resolve => setTimeout(resolve, 1000)).then(
      () => axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
          cancelToken: source.token
      }) 
    )   
     .then(res => res.data)
        .then(
          data => dispatch({type: "resolved", data}),
          error => dispatch({type: "rejected", error}),
        );
        
         return () => {
           source.cancel('Query cancelled')
         } 

  }, [pokemonName])

  const handleChange = ({target}) => setPokemonName(target.value)

  return (
    <div className="col-4">
      <h3>Pokemon 1</h3>
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

export default Pokemon1
