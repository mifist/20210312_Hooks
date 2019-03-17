import Items from "./components/Items"
import HeaderMemo from "./components/HeaderMemo"

const App = props => (
  <div className="container pt-3">
    <div className="row">
      <Items />
      <HeaderMemo />
    </div>
  </div>
)

export default App
