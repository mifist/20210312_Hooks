import NavLink from "./NavLink"

const Navigation = ({children}) => {
  return (
    <div className="container">
      <div className="row">
        <nav className="nav mb-3">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="about" className="nav-link">
            About us
          </NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Navigation
