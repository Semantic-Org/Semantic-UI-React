import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'stardust'

class ModalBasicExample extends Component {
  state = { active: false }

  show = () => this.setState({ active: true })
  hide = () => this.setState({ active: false })

  render() {
    const { active } = this.state

    return (
      <div>
        <Button onClick={this.show}>Basic Modal</Button>

        <Modal basic size='small' active={active} onHide={this.hide}>
          <Header icon='archive'>Archive Old Messages</Header>
          <Modal.Content>
            <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button className='red basic inverted' onClick={this.hide}>
              <Icon name='remove' /> No
            </Button>
            <Button className='green inverted' onClick={this.hide}>
              <Icon name='checkmark' /> Yes
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default ModalBasicExample
