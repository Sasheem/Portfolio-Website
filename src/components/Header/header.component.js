import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import DrawerToggleButton from '../SideDrawer/drawer-toggle-button.component'

import './header.styles.scss'

const Header = ({ siteTitle, drawerClickHandler }) => (
  <header className="header">
    <nav className="header-nav">
      <div className="header-logo">
        <Link to="/" className="link">
          {'<'}
          {siteTitle}
          {' />'}
        </Link>
      </div>
      <div className="spacer" />
      <div className="header-nav-items">
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
      </div>
      <div className="header-toggle-button">
        <DrawerToggleButton click={drawerClickHandler} />
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
