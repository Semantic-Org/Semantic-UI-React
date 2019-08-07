import React, { Component } from 'react'
import { Button, Radio } from 'semantic-ui-react'

export default class RadioExampleRemoteControl extends Component {
  state = { checked: false }
  toggle = () => this.setState((prevState) => ({ checked: !prevState.checked }))

  render() {
    return (
      <div>
        <Button onClick={this.toggle}>Toggle it</Button>
        <Radio
          label='Check this radio'
          onChange={this.toggle}
          checked={this.state.checked}
        />
      </div>
    )
  }
}
