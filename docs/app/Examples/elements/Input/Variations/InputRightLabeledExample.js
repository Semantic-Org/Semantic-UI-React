import React, { Component } from 'react'
import { Input } from 'stardust'

export default class InputRightLabeledExample extends Component {
  render() {
    return (
      <Input className='right labeled' placeholder='mysite.com'>
        <div className='ui label'>http://</div>
      </Input>
    )
  }
}
