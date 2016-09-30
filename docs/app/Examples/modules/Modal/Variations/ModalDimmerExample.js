import React, { Component } from 'react'
import { Button, Header, Icon, Image, Modal } from 'stardust'

class ModalDimmerExample extends Component {
  state = { open: false }

  show = (dimmer) => () => this.setState({ dimmer, open: true })
  hide = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state

    return (
      <div>
        <Button onClick={this.show(true)}>Default</Button>
        <Button onClick={this.show('inverted')}>Inverted</Button>
        <Button onClick={this.show('blurring')}>Blurring</Button>
        <Button onClick={this.show(false)}>None</Button>

        <Modal dimmer={dimmer} portal={{ open }} onHide={this.hide}>
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Image wrapped className='medium' src='http://semantic-ui.com/images/avatar2/large/rachel.png' />
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>We've found the following gravatar image associated with your e-mail address.</p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.hide}>
              Nope
            </Button>
            <Button positive icon labeled='right' onClick={this.hide}>
              Yep, that's me <Icon name='checkmark' />
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default ModalDimmerExample

