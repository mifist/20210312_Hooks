import {Router} from "@reach/router"
import Navigation from "./nav/Navigation"
import AboutUs from "./components/AboutUs"
import App from "./App"

const AppWrap = () => {
  return (
    <div className="container">
      <Navigation />
      <Router>
        <App path="/" />
        <AboutUs path="/about" />
      </Router>
    </div>
  )
}

export default AppWrap
