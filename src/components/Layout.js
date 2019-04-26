import React from 'react'
import { Link } from 'gatsby'

import Nav from './Nav';
import Footer from './Footer';
import DarkModeToggle from './DarkModeToggle';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false,
      first: true,
      initialTheme: localStorage.getItem('theme') || 'light',
    }

    this.toggleNav = this.toggleNav.bind(this);
  }


  toggleNav() {
    this.setState(prevState => ({
      navOpen: !prevState.navOpen,
      first: false,
    }));
  }


  render() {
    const { children, location, title, disableAnimations} = this.props
    const { navOpen, first, initialTheme } = this.state;

    const rootPath = `${__PATH_PREFIX__}/`
    const isHome = location.pathname === rootPath;
    
    let contentStyles = {};
    if (navOpen) {
      //contentStyles.display = 'none';
    }

    let navStyle = 'shade';
    if (navOpen) {
      navStyle += ' shade--open'
    } else if (!first) {
      navStyle += ' shade--close'
    }

    return (
      <div className="app">
        <Nav animateIn={isHome && !disableAnimations} toggleNav={this.toggleNav} isOpen={navOpen} initialTheme={initialTheme} />
        <div className={navStyle} />
        <div className="content" style={contentStyles}>
          {children}
        </div>
        <Footer />
      </div>
    )
  }
}

export default Layout
