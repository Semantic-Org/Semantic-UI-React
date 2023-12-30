import React from 'react'
import {
  ModalHeader,
  ModalDescription,
  ModalContent,
  ModalActions,
  Button,
  Image,
  Modal,
} from 'semantic-ui-react'

function ModalExampleContentImage() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Show Modal</Button>}
    >
      <ModalHeader>Upload image</ModalHeader>
      <ModalContent image>
        <Image size='medium' src='/images/wireframe/image-square.png' wrapped />
        <ModalDescription>
          <p>Would you like to upload this image?</p>
        </ModalDescription>
      </ModalContent>
      <ModalActions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button onClick={() => setOpen(false)} positive>
          Ok
        </Button>
      </ModalActions>
    </Modal>
  )
}

export default ModalExampleContentImage
