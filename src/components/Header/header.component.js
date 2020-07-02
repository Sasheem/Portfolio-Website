import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

import DrawerToggleButton from '../SideDrawer/drawer-toggle-button.component';

import Logo from '../../assets/logo-dark-gradient-md.svg';

import './header.styles.scss';
import { FirebaseContext } from '../Firebase';

const Header = ({ siteTitle, drawerClickHandler }) => (
  <header className="header">
    <nav className="header-nav">
      <span className="header-logo" onClick={() => scrollTo('#hero')}>
        <Logo />
      </span>
      {/* <Link to="/" className="header-logo">
        <Logo />
      </Link> */}
      <div className="spacer" />
      <div className="header-nav-items">
        <ul>
          <li>
            <p
              className="text-2xl-responsive font-bold"
              onClick={() => scrollTo('#work-dev')}
            >
              Portfolio
            </p>
          </li>
          <li>
            <p
              className="text-2xl-responsive font-bold"
              onClick={() => scrollTo('#contact')}
            >
              Contact
            </p>
          </li>
        </ul>
      </div>
      {/* <div className="header-toggle-button">
        <DrawerToggleButton click={drawerClickHandler} />
      </div> */}
      <FirebaseContext.Consumer>
        {props => {
          console.log(`props: ${props}`);
          console.dir(props);
          return <div />;
        }}
      </FirebaseContext.Consumer>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
