import {Router} from "@reach/router"
import Navigation from "./components/Navigation"
import Counter1 from "./components/Counter1"
import Counter2 from "./components/Counter2"
import Counter3 from "./components/Counter3"
import CounterCls from "./components/CounterCls"

const App = props => (
  <div className="container pt-3">
    <div className="row">
      <div className="col-md-6">
        <Navigation />
        <Router>
          <Counter1 path="/" />
          <CounterCls path="counter-cls" />
          <Counter2 path="counter2" />
          <Counter3 path="counter3" />
        </Router>
      </div>
    </div>
  </div>
)

export default App
