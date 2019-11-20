import React from 'react'
import { Link } from 'gatsby'

import './side-drawer.styles.scss'

const SideDrawer = props => {
  let drawerClasses = 'side-drawer'

  if (props.show) {
    drawerClasses = 'side-drawer open'
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link to="/about/">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <a>Projects</a>
          </Link>
        </li>
        <li>
          <Link to="/blog/">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link to="/contact/">
            <a>Hire Me</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default SideDrawer
