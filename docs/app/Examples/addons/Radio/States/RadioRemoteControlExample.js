import React, { Component } from 'react'
import { Button, Radio } from 'stardust'

export default class RadioRemoteControlExample extends Component {
  state = { checked: false }
  toggle = () => this.setState({ checked: !this.state.checked })

  render() {
    return (
      <div>
        <Button onClick={this.toggle}>
          Toggle it
        </Button>
        <Radio
          label='Check this radio'
          onClick={this.toggle}
          checked={this.state.checked}
        />
      </div>
    )
  }
}
