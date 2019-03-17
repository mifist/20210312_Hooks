import {Router} from "@reach/router"
import Navigation from "./nav/Navigation"
import Counter from "./components/Counter"
import CounterCls from "./components/CounterCls"
import Counter1 from "./components/Counter1"
import Counter2 from "./components/Counter2"
import Users from "./components/Users"
import CounterList from "./components/CountersList"
import SearchResults from "./components/SearchResults"
import SearchResults1 from "./components/SearchResults1"
import Tilt from "./components/Tilt"
import Timer from "./components/Timer"

const App = props => (
  <Router>
    <Navigation path="/">
      <CounterList path="counters">
        <Counter path="/" />
        <CounterCls path="counter-cls" />
        <Counter1 path="counter-1" />
        <Users path="users" />
        <Counter2 path="counter-2" />
      </CounterList>
      <SearchResults path="search-results" />
      <SearchResults1 path="search-results-1" />
      <Tilt path="tilt" />
      <Timer path="timer" />
    </Navigation>
  </Router>
)

export default App
