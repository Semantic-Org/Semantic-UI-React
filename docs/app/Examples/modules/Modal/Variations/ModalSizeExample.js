import React, { Component } from 'react'
import { Button, Icon, Modal } from 'stardust'

class ModalSizeExample extends Component {
  state = { active: false }

  show = (size) => () => this.setState({ size, active: true })
  hide = () => this.setState({ active: false })

  render() {
    const { active, size } = this.state

    return (
      <div>
        <Button onClick={this.show('small')}>Small</Button>
        <Button onClick={this.show('large')}>Large</Button>
        <Button onClick={this.show('fullscreen')}>Fullscreen</Button>

        <Modal size={size} active={active} onHide={this.hide}>
          <Modal.Header>
            Delete Your Account
          </Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to delete your account</p>
          </Modal.Content>
          <Modal.Actions>
            <Button className='negative'>
              No
            </Button>
            <Button className='positive right labeled icon'>
              Yes <Icon name='checkmark' />
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default ModalSizeExample
