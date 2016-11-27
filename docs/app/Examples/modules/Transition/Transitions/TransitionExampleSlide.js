import React, { Component } from 'react'
import { Button, Divider, Image, Message, Transition } from 'semantic-ui-react'

export default class TransitionExampleSlide extends Component {
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
          <Button onClick={this.handleClick('slide left')}>Slide Left</Button>
          <Button onClick={this.handleClick('slide right')}>Slide Right</Button>
          <Button onClick={this.handleClick('slide up')}>Slide Up</Button>
          <Button onClick={this.handleClick('slide down')}>Slide Down</Button>
        </Button.Group>

        <Message>
          <pre>state = {JSON.stringify(this.state, null, 2)}</pre>
        </Message>
      </div>
    )
  }
}
