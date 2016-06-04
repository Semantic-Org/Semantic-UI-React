import React, { Component } from 'react'
import Content from './Content/Content'
import States from './States/States'

import { Label, Message } from 'stardust'

export default class DropdownExamples extends Component {
  render() {
    return (
      <div>
        <Message className='info'>
          For predictability and simplicity between multiple and single type Dropdowns
          {' '}<code>value</code> is <b>always and array.</b>
        </Message>
        <Content />
        <States />
      </div>
    )
  }
}
