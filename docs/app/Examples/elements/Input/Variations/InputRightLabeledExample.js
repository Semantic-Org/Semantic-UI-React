import React, { Component } from 'react'
import { Input, Label } from 'stardust'

export default class InputRightLabeledExample extends Component {
  render() {
    return (
      <Input className='right labeled' placeholder='mysite.com'>
        <Label>http://</Label>
      </Input>
    )
  }
}
