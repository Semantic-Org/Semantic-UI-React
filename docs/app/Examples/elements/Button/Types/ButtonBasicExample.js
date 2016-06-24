import React, { Component } from 'react'
import { Button } from 'stardust'

export default class ButtonBasicExample extends Component {
  render() {
    return (
      <div>
        <Button basic >Standard</Button>
        <Button basic color='red'>Red</Button>
        <Button basic color='orange'>Orange</Button>
        <Button basic color='yellow'>Yellow</Button>
        <Button basic color='olive'>Olive</Button>
        <Button basic color='green'>Green</Button>
        <Button basic color='teal'>Teal</Button>
        <Button basic color='blue'>Blue</Button>
        <Button basic color='violet'>Violet</Button>
        <Button basic color='purple'>Purple</Button>
        <Button basic color='pink'>Pink</Button>
        <Button basic color='brown'>Brown</Button>
        <Button basic color='grey'>Grey</Button>
        <Button basic color='black'>Black</Button>
      </div>
    )
  }
}
