import React from 'react'

class Nav extends React.Component {
  render() {
    return (
      <nav className="navigation-bar">
        <a href="#home">Home</a>
        <div className="nav-link-container">
          <a className="nav-link" href="#news">Blog</a>
          <a className="nav-link" href="#contact">Resume</a>
          <a className="nav-link" href="#about">Projects</a>
          <a className="nav-link" href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
          </a>
        </div>
      </nav>
    )
  }
}

export default Nav;