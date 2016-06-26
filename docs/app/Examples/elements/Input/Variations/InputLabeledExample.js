import React, { Component } from 'react'
import { Input, Label } from 'stardust'

export default class InputLabeledExample extends Component {
  render() {
    return (
      <Input className='labeled' placeholder='mysite.com'>
        <Label>http://</Label>
      </Input>
    )
  }
}
