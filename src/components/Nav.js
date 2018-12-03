import React from 'react'

class Nav extends React.Component {
  render() {
    return (
      <nav className="navigation-bar">
        <a href="#home">Josh Nelsson-Smith</a>
        <div className="nav-link-container">
          <a className="nav-link" href="/blog">Blog</a>
          <a className="nav-link" href="/resume">Resume</a>
          <a className="nav-link" href="/projects">Projects</a>
        </div>
      </nav>
    )
  }
}

export default Nav;