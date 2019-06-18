import * as React from 'react'
import NavLink from '../elements/nav-link'

export default function Header() {
  return (
    <div>
      <NavLink exact activeClassName="active" to="/">
        /Top page
      </NavLink>
      <NavLink exact activeClassName="active" to="/counter">
        /Question
      </NavLink>
    </div>
  )
}
