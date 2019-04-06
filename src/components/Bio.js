import React from 'react'
import Links from './Links'

class Bio extends React.Component {
  render() {
    return (
      <div className="intro">
        <p>Hi, I'm <b>Josh</b></p>
        <p>I'm a <b>Software Engineer</b> currently based in <b>Melbourne, Australia</b></p>
        <Links />
      </div>
    )
  }
}

export default Bio
