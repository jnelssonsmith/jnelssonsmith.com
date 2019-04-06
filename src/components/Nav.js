import React from 'react'

class Nav extends React.Component {
  render() {
    return (
      <nav className="navigation-bar">
        <div>
          <a className="home-link" href="/">Josh Nelsson-Smith</a>
          <a className="home-link mobile-only" href="/">Josh N-S</a>
        </div>
        <div className="nav-link-container">
          <a className="nav-link first" href="/blog">Blog</a>
          <a className="nav-link" href="/projects">Projects</a>
          <a className="nav-link menu mobile-only" href="javascript:void(0);">
            <i className="fa fa-bars"></i>
          </a>
        </div>
      </nav>
    )
  }
}

export default Nav;