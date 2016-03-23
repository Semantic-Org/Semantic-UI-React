import React, { Component } from 'react'
import { Button, Icon } from 'stardust'

export default class ButtonLabeledExample extends Component {
  render() {
    return (
      <Button className='labeled'>
        <Button>
          <Icon className='heart' /> Like
        </Button>
        {/* TODO: See issue #46 - button needs to render as a div */}
        <a className='ui basic label'>
          3,000
        </a>
      </Button>
    )
  }
}
