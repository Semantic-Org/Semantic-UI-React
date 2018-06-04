import React, { Component } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'

class NestedModal extends Component {
  state = { open: false }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open } = this.state

    return (
      <Modal
        dimmer={false}
        open={open}
        onOpen={this.open}
        onClose={this.close}
        size='small'
        trigger={<Button primary icon>Proceed <Icon name='right chevron' /></Button>}
      >
        <Modal.Header>Modal #2</Modal.Header>
        <Modal.Content>
          <p>That's everything!</p>
        </Modal.Content>
        <Modal.Actions>
          <Button icon='check' content='All Done' onClick={this.close} />
        </Modal.Actions>
      </Modal>
    )
  }
}

const ModalExampleMultiple = () => (
  <Modal trigger={<Button>Multiple Modals</Button>}>
    <Modal.Header>Modal #1</Modal.Header>
    <Modal.Content image>
      <div className='image'>
        <Icon name='right arrow' />
      </div>
      <Modal.Description>
        <p>We have more to share with you. Follow us along to modal 2</p>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <NestedModal />
    </Modal.Actions>
  </Modal>
)

export default ModalExampleMultiple

