import {Router} from "@reach/router"
import Navigation from "./nav/Navigation"
import Items from "./components/Items"
import HeaderMemo from "./components/HeaderMemo"

const App = props => (
  <div className="container pt-3">
    <div className="row">
      <Navigation />
      <Router>
        <Items path="/" />
        <HeaderMemo path="header-memo" />
      </Router>
    </div>
  </div>
)

export default App
