import React from 'react'
import { Button, Header, Icon, Image, Modal } from 'stardust'

const ModalScrollingExample = () => (
  <Modal trigger={<Button>Long Modal</Button>}>
    <Modal.Header>Profile Picture</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='http://semantic-ui.com/images/wireframe/image.png' />
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
      <Button primary icon>
        Proceed <Icon name='right chevron' />
      </Button>
    </Modal.Actions>
  </Modal>
)

export default ModalScrollingExample

