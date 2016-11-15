import React, { Component } from 'react'
import { Button, Divider, Image, Message, Transition } from 'semantic-ui-react'

export default class TransitionExampleFly extends Component {
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
          <Button onClick={this.handleClick('fly left')}>Fly Left</Button>
          <Button onClick={this.handleClick('fly right')}>Fly Right</Button>
          <Button onClick={this.handleClick('fly up')}>Fly Up</Button>
          <Button onClick={this.handleClick('fly down')}>Fly Down</Button>
        </Button.Group>

        <Message>
          <pre>state = {JSON.stringify(this.state, null, 2)}</pre>
        </Message>
      </div>
    )
  }
}
