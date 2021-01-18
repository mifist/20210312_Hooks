import NavLink from "./NavLink"

const Navigation = ({children}) => {
  return (
    <div className="container">
      <div className="row">
        <nav className="nav mb-3">
          <NavLink to="/" className="nav-link">
            Items
          </NavLink>
          <NavLink to="header-memo" className="nav-link">
            Header memo
          </NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Navigation
