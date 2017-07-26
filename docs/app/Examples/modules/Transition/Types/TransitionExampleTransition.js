import React, { Component } from 'react'
import { Button, Divider, Image, Transition } from 'semantic-ui-react'

export default class TransitionExampleTransition extends Component {
  state = { visible: true }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state

    return (
      <div>
        <Button content={visible ? 'Hide' : 'Show'} onClick={this.toggleVisibility} />
        <Divider hidden />
        <Transition visible={visible} animation='scale' duration={500}>
          <Image size='small' src='/assets/images/leaves/1.png' />
        </Transition>
      </div>
    )
  }
}
