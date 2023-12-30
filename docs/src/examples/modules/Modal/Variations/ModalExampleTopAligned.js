import React from 'react'
import {
  ModalHeader,
  ModalDescription,
  ModalContent,
  ModalActions,
  Button,
  Modal,
} from 'semantic-ui-react'

function ModalExampleTopAligned() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      centered={false}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button>Show Modal</Button>}
    >
      <ModalHeader>Thank you!</ModalHeader>
      <ModalContent>
        <ModalDescription>
          Your subscription has been confirmed
        </ModalDescription>
      </ModalContent>
      <ModalActions>
        <Button onClick={() => setOpen(false)}>OK</Button>
      </ModalActions>
    </Modal>
  )
}

export default ModalExampleTopAligned
