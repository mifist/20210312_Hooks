import NavLink from "./NavLink"

const Navigation = ({children}) => {
  return (
    <div className="container">
      <div className="row">
        <nav className="nav mb-3">
          <NavLink to="counters" className="nav-link">
            Counters List
          </NavLink>
          <NavLink to="search-results" className="nav-link">
            Search Results
          </NavLink>
          <NavLink to="search-results-1" className="nav-link">
            Search Results 1
          </NavLink>
          <NavLink to="tilt" className="nav-link">
            Tilt
          </NavLink>
          <NavLink to="timer" className="nav-link">
            Timer
          </NavLink>
        </nav>
      </div>
      <div className="row">{children}</div>
    </div>
  )
}

export default Navigation
