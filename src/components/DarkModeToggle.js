import React from 'react'

class DarkModeToggle extends React.Component {
  constructor(props) {
    super(props);
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  }

  toggleDarkMode() {
    window.__setPreferredTheme(document.body.className === 'dark' ? 'light' : 'dark')
  }

  render() {
    return (
      <button onClick={this.toggleDarkMode}>Toggle Theme</button>
    )
  }
}

export default DarkModeToggle