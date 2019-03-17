import NavLink from "./NavLink"

const Navigation = ({children}) => {
  return (
    <div className="container">
      <div className="row">
        <nav className="nav mb-3">
          <NavLink to="/" className="nav-link">
            Debouncing
          </NavLink>
          <NavLink to="pokemon" className="nav-link">
            Pokemon
          </NavLink>
          <NavLink to="pokemon1" className="nav-link">
            Pokemon 1
          </NavLink>
          <NavLink to="pokemon2" className="nav-link">
            Pokemon 2
          </NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Navigation
