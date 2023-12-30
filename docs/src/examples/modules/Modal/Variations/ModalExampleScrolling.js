import React from 'react'
import {
  ModalHeader,
  ModalDescription,
  ModalContent,
  ModalActions,
  Button,
  Icon,
  Image,
  Modal,
} from 'semantic-ui-react'

function ModalScrollingExample() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button>Long Modal</Button>}
    >
      <ModalHeader>Modal Header</ModalHeader>
      <ModalContent image>
        <Image size='medium' src='/images/wireframe/image.png' wrapped />
        <ModalDescription>
          <p>
            This is an example of expanded content that will cause the modal's
            dimmer to scroll.
          </p>

          <Image
            src='/images/wireframe/paragraph.png'
            style={{ marginBottom: 10 }}
          />
          <Image
            src='/images/wireframe/paragraph.png'
            style={{ marginBottom: 10 }}
          />
          <Image
            src='/images/wireframe/paragraph.png'
            style={{ marginBottom: 10 }}
          />
          <Image
            src='/images/wireframe/paragraph.png'
            style={{ marginBottom: 10 }}
          />
          <Image
            src='/images/wireframe/paragraph.png'
            style={{ marginBottom: 10 }}
          />
          <Image
            src='/images/wireframe/paragraph.png'
            style={{ marginBottom: 10 }}
          />
          <Image
            src='/images/wireframe/paragraph.png'
            style={{ marginBottom: 10 }}
          />
          <Image src='/images/wireframe/paragraph.png' />
        </ModalDescription>
      </ModalContent>
      <ModalActions>
        <Button primary onClick={() => setOpen(false)}>
          Proceed <Icon name='right chevron' />
        </Button>
      </ModalActions>
    </Modal>
  )
}

export default ModalScrollingExample
