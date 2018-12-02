import React from 'react'
import profilePic from './profile-pic.jpg'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: '10px',
        }}
      >
        <img
          src={profilePic}
          alt={`Kyle Mathews`}
          style={{
            marginRight: '10px',
            marginBottom: 0,
            width:'20px',
            height: '20px',
          }}
        />
        <p>
          Written by <strong>Kyle Mathews</strong> who lives and works in San
          Francisco building useful things.{' '}
          <a href="https://twitter.com/kylemathews">
            You should follow him on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
