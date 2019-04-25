import React from 'react'

class Links extends React.Component {
  render() {
    const { animateIn, isLight } = this.props;
    return (
      <div className={`links${animateIn ? ' fade-in--nav' : ''}`}>
        <a className={`link__item${isLight ? ' link__item--light' : ''}`} href="javascript:void(0);">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a className={`link__item${isLight ? ' link__item--light' : ''}`} href="javascript:void(0);">
          <i class="fab fa-twitter"></i>
        </a>
        <a className={`link__item${isLight ? ' link__item--light' : ''}`} href="javascript:void(0);">
          <i class="fab fa-github"></i>
        </a>
        <a className={`link__item${isLight ? ' link__item--light' : ''}`} href="javascript:void(0);">
          <i class="fas fa-envelope"></i>
        </a>
      </div>
    )
  }
}

export default Links
