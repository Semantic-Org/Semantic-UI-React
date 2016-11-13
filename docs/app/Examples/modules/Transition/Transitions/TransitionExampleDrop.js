import React, { Component } from 'react'
import { Button, Divider, Image, Transition } from 'semantic-ui-react'

export default class TransitionExampleDrop extends Component {
  state = { active: true }

  handleClick = () => {
    const { active } = this.state

    this.setState({ active: !active })
  }

  render() {
    const { active } = this.state

    return (
      <div>
        <Transition
          active={active}
          animation='drop'
          as={Image}
          size='small'
          src='http://semantic-ui.com/images/leaves/1.png'
        />

        <Divider hidden />

        <Button onClick={this.handleClick}>Run</Button>
        <pre>state = {JSON.stringify(this.state, null, 2)}</pre>
      </div>
    )
  }
}
