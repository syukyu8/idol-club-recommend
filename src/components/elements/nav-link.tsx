import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

export default styled(NavLink)`
  text-decoration-line: none;
  &:hover {
    text-decoration-line: underline;
  }
  &.active {
    cursor: auto;
    font-weight: bold;
    pointer-events: none;
    text-decoration-line: none;
  }
`
