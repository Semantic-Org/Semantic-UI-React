import React, { Component } from 'react'
import { Button, Divider, Image, Transition } from 'semantic-ui-react'

export default class TransitionExampleTransition extends Component {
  state = { visible: true }

  handleVisibility = () => {
    const { visible } = this.state
    this.setState({ visible: !visible })
  }

  render() {
    const { visible } = this.state

    return (
      <div>
        <Transition.Group animation='scale' duration={1500}>
          {visible ? <Image size='small' src='/assets/images/leaves/1.png' /> : null }
        </Transition.Group>
        <Divider hidden />
        <Button
          content={visible ? 'Hide' : 'Show'}
          onClick={this.handleVisibility}
          type='button'
        />
      </div>
    )
  }
}
