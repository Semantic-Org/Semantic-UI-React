import React, { Component } from 'react'
import { Button, Header, Image, Modal } from 'stardust'

class ModalModalExample extends Component {
  state = { active: false }

  show = () => this.setState({ active: true })
  hide = () => this.setState({ active: false })

  render() {
    const { active } = this.state

    return (
      <div>
        <Button onClick={this.show}>Show Modal</Button>

        <Modal active={active} onHide={this.hide}>
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Image className='medium' src='http://semantic-ui.com/images/avatar2/large/rachel.png' />
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>We've found the following gravatar image associated with your e-mail address.</p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default ModalModalExample
