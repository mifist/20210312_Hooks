import {useState, useEffect, useReducer} from "react"

// https://pokeapi.co/api/v2/pokemon/${pokemonName}

function reducer(state, action){
  switch(action.type){
     case "pending": return{data:null, status: 'pending', error: null}
    case "resolved": return{data: action.data, status: 'resolved', error: null}
    case "rejected": return{data: null, status: "rejected", error: action.error}
    default: throw Error('no cases found')
  }
}


const Pokemon = () => {
  const [pokemonName, setPokemonName] = useState("")
  const [state, dispatch] = useReducer(reducer, {
    data: null, error: null,
    status: pokemonName ? 'pending': 'idle'
  })

  const {data: pokemon, status, error} = state

  useEffect(() => {
    if(!pokemonName) return;
    dispatch({type: 'pending'});

    const controller = new AbortController();
    const signal = controller.signal

    new Promise(resolve => setTimeout(resolve, 1000)) 
    .then(() => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
          method: 'get',
          signal
        })
  
    })  
     .then(r => r.json())
      .then(
        data => dispatch({type: 'resolved', data})
        , error => dispatch({type: 'rejected', error})
      )

    return () => {
      controller.abort();
    }

  }, [pokemonName])

  const handleChange = ({target}) => setPokemonName(target.value)

  return (
    <div className="col-4">
      <h3>Pokemon</h3>
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

export default Pokemon
