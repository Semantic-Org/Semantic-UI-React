import React, { Component } from 'react'
import { Checkbox, Segment } from 'stardust'

export default class CheckboxFittedExample extends Component {
  render() {
    return (
      <div>
        <Segment className='compact'>
          <Checkbox />
        </Segment>
        <Segment className='compact'>
          <Checkbox slider />
        </Segment>
        <Segment className='compact'>
          <Checkbox toggle />
        </Segment>
      </div>
    )
  }
}
