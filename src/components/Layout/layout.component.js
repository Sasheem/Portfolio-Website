/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, StaticQuery } from 'gatsby';
import { FirebaseContext, useAuth } from '../Firebase';

// import Header from '../header'
import Header from '../Header/header.component';
import SideDrawer from '../SideDrawer/side-drawer.component';
import Backdrop from '../Backdrop/backdrop.component';
import './layout.styles.scss';

const Layout = ({ children }) => {
  const { user, firebase, loading } = useAuth();
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  function menuToggleClickHandler() {
    setSideMenuOpen(!sideMenuOpen);
  }

  function hideBackdrop() {
    setSideMenuOpen(false);
  }

  return (
    <FirebaseContext.Provider value={{ user, firebase, loading }}>
      <Header
        siteTitle={data.site.siteMetadata.title}
        drawerClickHandler={menuToggleClickHandler}
        hideBackdrop={hideBackdrop}
      />
      <SideDrawer show={sideMenuOpen} hideBackdrop={hideBackdrop} />
      {sideMenuOpen === true && <Backdrop click={hideBackdrop} />}
      <div className="container">
        <main>{children}</main>
        <footer
          style={{
            marginTop: '40vh',
            paddingBottom: '10vh',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          © {new Date().getFullYear()}, Developed by SasheemDev
        </footer>
      </div>
    </FirebaseContext.Provider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

// class Layout extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       sideDrawerOpen: false,
//     };
//   }

//   drawerToggleClickHandler = () => {
//     this.setState(prevState => {
//       return { sideDrawerOpen: !prevState.sideDrawerOpen };
//     });
//   };

//   backdropClickHandler = () => {
//     this.setState({ sideDrawerOpen: false });
//   };

//   render() {
//     let backdrop;
//     const { children, data } = this.props;

//     if (this.state.sideDrawerOpen) {
//       backdrop = <Backdrop click={this.backdropClickHandler} />;
//     }

//     return (
//       <div>
//         <Header
//           siteTitle={data.site.siteMetadata.title}
//           drawerClickHandler={this.drawerToggleClickHandler}
//         />
//         <SideDrawer show={this.state.sideDrawerOpen} />
//         {backdrop}
//         <div className="container">
//           <main>{children}</main>
//           <footer
//             style={{
//               marginTop: '40vh',
//               display: 'flex',
//               justifyContent: 'center',
//             }}
//           >
//             © {new Date().getFullYear()}, Developed by SasheemDev with
//             {`  `}
//             <a href="https://www.gatsbyjs.org">Gatsby</a>
//           </footer>
//         </div>
//       </div>
//     );
//   }
// }

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default props => (
//   <StaticQuery
//     query={graphql``}
//     render={data => <Layout data={data} {...props} />}
//   />
// );
