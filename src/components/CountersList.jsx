import NavLink from "../nav/NavLink"

const CountersList = ({children}) => {
  return (
    <>
      <nav className="nav mb-3">
        <NavLink to="./" className="nav-link">
          Counter
        </NavLink>
        <NavLink to="counter-cls" className="nav-link">
          Counter class
        </NavLink>
        <NavLink to="counter-1" className="nav-link">
          Counter 1
        </NavLink>
        <NavLink to="counter-2" className="nav-link">
          Counter 2
        </NavLink>
        <NavLink to="users" className="nav-link">
          Users
        </NavLink>
      </nav>
      <>{children}</>
    </>
  )
}

export default CountersList
