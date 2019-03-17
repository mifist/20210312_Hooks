import {Router} from "@reach/router"
import Navigation from "./nav/Navigation"
import Debouncing from "./components/Debouncing"
import Pokemon from "./components/Pokemon"
import Pokemon1 from "./components/Pokemon1"
import Pokemon2 from "./components/Pokemon2"

const App = () => (
  <div className="container pt-3">
    <Navigation />
    <Router>
      <Debouncing path="/" />
      <Pokemon path="pokemon" />
      <Pokemon1 path="pokemon1" />
      <Pokemon2 path="pokemon2" />
    </Router>
  </div>
)

export default App
