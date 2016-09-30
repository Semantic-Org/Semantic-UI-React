import React, { Component } from 'react'
import { Button, Icon, Modal } from 'stardust'

class ModalCloseConfigExample extends Component {
  state = { open: false }

  closeConfigShow = (closeOnEscape, closeOnDocumentClick) => () => {
    this.setState({ closeOnEscape, closeOnDocumentClick, open: true })
  }

  hide = () => this.setState({ open: false })

  render() {
    const { open, closeOnEscape, closeOnDocumentClick } = this.state

    return (
      <div>
        <Button onClick={this.closeConfigShow(false, true)}>No Close on Escape</Button>
        <Button onClick={this.closeConfigShow(true, false)}>No Close on Click Outside</Button>

        <Modal portal={{ open, closeOnEscape, closeOnDocumentClick }} onHide={this.hide}>
          <Modal.Header>
            Delete Your Account
          </Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to delete your account</p>
          </Modal.Content>
          <Modal.Actions>
            <Button negative>No</Button>
            <Button positive labeled='right' icon>
              Yes <Icon name='checkmark' />
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default ModalCloseConfigExample
