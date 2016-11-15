import React, { Component } from 'react'
import { Button, Divider, Image, Transition } from 'semantic-ui-react'

export default class TransitionExampleFade extends Component {
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
          <Button onClick={this.handleClick('fade')}>Fade</Button>
          <Button onClick={this.handleClick('fade up')}>Fade Up</Button>
          <Button onClick={this.handleClick('fade down')}>Fade Down</Button>
          <Button onClick={this.handleClick('fade left')}>Fade Left</Button>
          <Button onClick={this.handleClick('fade right')}>Fade Right</Button>
        </Button.Group>
        <pre>state = {JSON.stringify(this.state, null, 2)}</pre>
      </div>
    )
  }
}
