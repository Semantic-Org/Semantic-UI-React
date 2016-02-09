import React, { Component } from 'react'
import { Button } from 'stardust'

export default class ButtonEmphasisExample extends Component {
  render() {
    return (
      <div>
        <Button className='primary'>Primary</Button>
        <Button className='secondary'>Secondary</Button>
      </div>
    )
  }
}
