import React, { Component } from 'react'
import { Button, Radio } from 'semantic-ui-react'

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
          onChange={this.toggle}
          checked={this.state.checked}
        />
      </div>
    )
  }
}
