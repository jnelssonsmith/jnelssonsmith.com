import React from 'react'
import { Link } from 'gatsby'

import Nav from './Nav';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <Nav />
      )
    } else {
      header = (
         <Nav />
      )
    }
    return (
      <div className="app">
        {header}
        <div className="content">
          {children}
        </div>
      </div>
    )
  }
}

export default Layout
