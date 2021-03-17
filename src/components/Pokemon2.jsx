import {QueryClient, QueryClientProvider, useQuery} from "react-query"
import {ReactQueryDevtools} from "react-query/devtools"
import axios, {CancelToken} from "axios"
import {useState} from "react"

const queryClient = new QueryClient()

function PokemonInfo({pokemonName}) {
  const queryInfo = useQuery(
    pokemonName,
    () => {
      const source = CancelToken.source()

      const promise = new Promise(resolve => setTimeout(resolve, 1000))
        .then(() =>
          axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
            cancelToken: source.token,
          }),
        )
        .then(res => res.data)

      promise.cancel = () => {
        source.cancel("Cancelled requerst")
      }
      return promise
    },
    {
      enabled: !!pokemonName,
      refetchOnWindowFocus: false,
      retry: 0,
    },
  )

  return queryInfo.isLoading ? (
    "loading...."
  ) : queryInfo.isError && queryInfo.error ? (
    <p>{queryInfo.error.message}</p>
  ) : queryInfo.isSuccess ? (
    <div>
      {queryInfo.data?.sprites?.front_default ? (
        <img src={queryInfo.data.sprites.front_default} alt="pokemon" />
      ) : (
        "Pokemon not found"
      )}
    </div>
  ) : null
}

const Pokemon2 = () => {
  const [pokemonName, setPokemonName] = useState("")

  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <h3>Pokemon 2</h3>
        <input
          value={pokemonName}
          onChange={e => setPokemonName(e.target.value)}
        />
        <PokemonInfo pokemonName={pokemonName} />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default Pokemon2
