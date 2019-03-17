import {Link} from "@reach/router"

const NavLink = ({className, ...rest}) => (
  <Link
    getProps={({isCurrent}) =>
      isCurrent ? {className: `${className} active`} : {className}
    }
    {...rest}
  />
)

export default NavLink
