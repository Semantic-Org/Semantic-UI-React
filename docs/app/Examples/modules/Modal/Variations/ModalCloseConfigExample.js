import React, { Component } from 'react'
import { Button, Icon, Modal } from 'stardust'

class ModalCloseConfigExample extends Component {
  state = { active: false }

  closeConfigShow = (closeOnEscape, closeOnClickOutside) => () => {
    this.setState({ closeOnEscape, closeOnClickOutside, active: true })
  }

  hide = () => this.setState({ active: false })

  render() {
    const { active, closeOnEscape, closeOnClickOutside } = this.state

    return (
      <div>
        <Button onClick={this.closeConfigShow(false, true)}>No Close on Escape</Button>
        <Button onClick={this.closeConfigShow(true, false)}>No Close on Click Outside</Button>

        <Modal active={active} onHide={this.hide}
          closeOnEscape={closeOnEscape} closeOnClickOutside={closeOnClickOutside}
        >
          <Modal.Header>
            Delete Your Account
          </Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to delete your account</p>
          </Modal.Content>
          <Modal.Actions>
            <Button negative>No</Button>
            <Button positive labled='right' icon>
              Yes <Icon name='checkmark' />
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default ModalCloseConfigExample
