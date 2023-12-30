import React from 'react'
import {
  ModalContent,
  ModalActions,
  Button,
  Header,
  Icon,
  Modal,
} from 'semantic-ui-react'

function ModalExampleBasic() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      trigger={<Button>Basic Modal</Button>}
    >
      <Header icon>
        <Icon name='archive' />
        Archive Old Messages
      </Header>
      <ModalContent>
        <p>
          Your inbox is getting full, would you like us to enable automatic
          archiving of old messages?
        </p>
      </ModalContent>
      <ModalActions>
        <Button basic color='red' inverted onClick={() => setOpen(false)}>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' inverted onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Yes
        </Button>
      </ModalActions>
    </Modal>
  )
}

export default ModalExampleBasic
