import React, { Component } from 'react'
import { Dropdown } from 'stardust'

export default class DropdownDisabledExample extends Component {
  render() {
    return (
      <Dropdown className='disabled' text='Dropdown'>
        <Dropdown.Menu>
          <Dropdown.Item text='Choice 1' />
          <Dropdown.Item text='Choice 2' />
          <Dropdown.Item text='Choice 3' />
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}
