import React, { Component } from 'react'
import { Button, Header, Icon, Image, Modal } from 'stardust'

class ModalScrollingExample extends Component {
  state = { active: false }

  show = () => this.setState({ active: true })
  hide = () => this.setState({ active: false })

  render() {
    const { active, dimmer } = this.state

    return (
      <div>
        <Button onClick={this.show}>Long Modal</Button>

        <Modal dimmer={dimmer} active={active} onHide={this.hide}>
          <Modal.Header>Profile Picture</Modal.Header>
          <Modal.Content image>
            <Image wrapped className='medium' src='http://semantic-ui.com/images/wireframe/image.png' />
            <Modal.Description>
              <Header>Modal Header</Header>
              <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>
              <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
              <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
              <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
              <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
              <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
              <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
              <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
              <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button className='primary icon' onClick={this.hide}>
              Proceed <Icon name='right chevron' />
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default ModalScrollingExample

