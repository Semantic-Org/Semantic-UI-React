import React, { Component } from 'react'
import { Button } from 'stardust'

export default class ButtonSizeExample extends Component {
  render() {
    return (
      <div>
        <Button size='mini'>
          Mini
        </Button>
        <Button size='tiny'>
          Tiny
        </Button>
        <Button size='small'>
          Small
        </Button>
        <Button size='medium'>
          Medium
        </Button>
        <Button size='large'>
          Large
        </Button>
        <Button size='big'>
          Big
        </Button>
        <Button size='huge'>
          Huge
        </Button>
        <Button size='massive'>
          Massive
        </Button>
      </div>
    )
  }
}
