import React, { Component } from 'react'
import { Button, Divider, Image, Message, Transition } from 'semantic-ui-react'

export default class TransitionExampleSwing extends Component {
  state = { active: true }

  handleClick = (animation) => () => {
    const { active } = this.state

    this.setState({ active: !active, animation })
  }

  render() {
    const { active, animation } = this.state

    return (
      <div>
        <Transition active={active} animation={animation}>
          <Image size='small' src='http://semantic-ui.com/images/leaves/1.png' />
        </Transition>

        <Divider hidden />

        <Button.Group>
          <Button onClick={this.handleClick('swing left')}>Swing Left</Button>
          <Button onClick={this.handleClick('swing right')}>Swing Right</Button>
          <Button onClick={this.handleClick('swing up')}>Swing Up</Button>
          <Button onClick={this.handleClick('swing down')}>Swing Down</Button>
        </Button.Group>

        <Message>
          <pre>state = {JSON.stringify(this.state, null, 2)}</pre>
        </Message>
      </div>
    )
  }
}
