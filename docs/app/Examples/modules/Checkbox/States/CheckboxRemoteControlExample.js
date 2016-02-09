import React, { Component } from 'react'
import { Button, Checkbox } from 'stardust'

export default class CheckboxRemoteControlExample extends Component {
  toggle = () => {
    this.refs.checkbox.plugin('toggle')
  };

  render() {
    return (
      <div>
        <Button onClick={this.toggle}>Toggle it</Button>
        <Checkbox label='Check this box' ref='checkbox' />
      </div>
    )
  }
}
