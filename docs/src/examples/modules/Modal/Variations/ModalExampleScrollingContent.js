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

const ModalExampleScrollingContent = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button>Scrolling Content Modal</Button>}
    >
      <ModalHeader>Profile Picture</ModalHeader>
      <ModalContent image scrolling>
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
        <Button onClick={() => setOpen(false)} primary>
          Proceed <Icon name='chevron right' />
        </Button>
      </ModalActions>
    </Modal>
  )
}

export default ModalExampleScrollingContent
