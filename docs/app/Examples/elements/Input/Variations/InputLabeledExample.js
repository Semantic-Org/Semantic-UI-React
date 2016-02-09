import React, { Component } from 'react'
import { Input } from 'stardust'

export default class InputLabeledExample extends Component {
  render() {
    return (
      <Input className='labeled' placeholder='mysite.com'>
        <div className='ui label'>http://</div>
      </Input>
    )
  }
}
