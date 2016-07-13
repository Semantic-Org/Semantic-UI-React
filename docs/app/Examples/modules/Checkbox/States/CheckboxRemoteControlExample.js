import React, { Component } from 'react'
import { Button, Checkbox } from 'stardust'

export default class CheckboxRemoteControlExample extends Component {
  state = { checked: false }
  toggle = () => this.setState({ checked: !this.state.checked })

  render() {
    return (
      <div>
        <Button onClick={this.toggle}>Toggle it</Button>
        <Checkbox label='Check this box' onClick={this.toggle} checked={this.state.checked} />
      </div>
    )
  }
}
