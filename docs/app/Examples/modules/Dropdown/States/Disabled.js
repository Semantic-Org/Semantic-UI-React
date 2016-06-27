import React, { Component } from 'react'
import { Dropdown } from 'stardust'

export default class DropdownDisabledExample extends Component {
  render() {
    return (
      <Dropdown disabled text='Dropdown' options={[]} />
    )
  }
}
