import React, { Component } from 'react'
import { Button, Divider, Image, Transition } from 'semantic-ui-react'

export default class TransitionExampleFlip extends Component {
  state = { active: true }

  handleClick = (animation) => () => {
    const { active } = this.state

    this.setState({ active: !active, animation })
  }

  render() {
    const { active, animation } = this.state

    return (
      <div>
        <Transition
          active={active}
          animation={animation}
          as={Image}
          size='small'
          src='http://semantic-ui.com/images/leaves/1.png'
        />

        <Divider hidden />

        <Button.Group>
          <Button onClick={this.handleClick('horizontal flip')}>Horizontal Flip</Button>
          <Button onClick={this.handleClick('vertical flip')}>Vertical Flip</Button>
        </Button.Group>
      </div>
    )
  }
}
