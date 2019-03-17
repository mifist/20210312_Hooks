import {Link} from "@reach/router"

const NavLink = ({className, ...rest}) => (
  <Link
    getProps={({isCurrent}) =>
      isCurrent ? {className: `${className} active`} : {className}
    }
    {...rest}
  />
)

const Navigation = () => {
  return (
    <nav className="nav mb-3">
      <NavLink to="/" className="nav-link">
        Counter 1
      </NavLink>
      <NavLink to="counter-cls" className="nav-link">
        Counter class
      </NavLink>
      <NavLink to="counter2" className="nav-link">
        Counter 2
      </NavLink>
      <NavLink to="counter3" className="nav-link">
        Counter 3
      </NavLink>
    </nav>
  )
}

export default Navigation
