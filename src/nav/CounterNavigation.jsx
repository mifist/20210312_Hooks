import NavLink from "./NavLink"

const CounterNavigation = () => {
  return (
    <nav className="nav mb-3">
      <NavLink to="/counter" className="nav-link">
        Counter
      </NavLink>
      <NavLink to="/counter-cls" className="nav-link">
        Counter class
      </NavLink>
      <NavLink to="/counter-1" className="nav-link">
        Counter 1
      </NavLink>
      <NavLink to="/counter-2" className="nav-link">
        Counter 2
      </NavLink>
      <NavLink to="/users" className="nav-link">
        Users
      </NavLink>
    </nav>
  )
}

export default CounterNavigation
