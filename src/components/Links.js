import React from 'react'

class Links extends React.Component {
  render() {
    return (
      <div className="intro">
        <a className="link__item" href="javascript:void(0);">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a className="link__item" href="javascript:void(0);">
          <i class="fab fa-twitter"></i>
        </a>
        <a className="link__item" href="javascript:void(0);">
          <i class="fab fa-github"></i>
        </a>
        <a className="link__item" href="javascript:void(0);">
          <i class="fas fa-envelope"></i>
        </a>
      </div>
    )
  }
}

export default Links
