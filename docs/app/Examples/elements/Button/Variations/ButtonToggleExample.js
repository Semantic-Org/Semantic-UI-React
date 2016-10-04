import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

class ButtonToggleExample extends Component {
  state = {}

  handleClick = () => this.setState({ active: !this.state.active })

  render() {
    const { active } = this.state
    return (
      <Button toggle active={active} onClick={this.handleClick}>
        Toggle
      </Button>
    )
  }
}

export default ButtonToggleExample
