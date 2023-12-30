import React from 'react'
import {
  ModalHeader,
  ModalDescription,
  ModalContent,
  ModalActions,
  Button,
  Icon,
  Modal,
} from 'semantic-ui-react'

function ModalExampleMultiple() {
  const [firstOpen, setFirstOpen] = React.useState(false)
  const [secondOpen, setSecondOpen] = React.useState(false)

  return (
    <>
      <Button onClick={() => setFirstOpen(true)}>Open first Modal</Button>

      <Modal
        onClose={() => setFirstOpen(false)}
        onOpen={() => setFirstOpen(true)}
        open={firstOpen}
      >
        <ModalHeader>Modal #1</ModalHeader>
        <ModalContent image>
          <div className='image'>
            <Icon name='right arrow' />
          </div>
          <ModalDescription>
            <p>We have more to share with you. Follow us along to modal 2</p>
          </ModalDescription>
        </ModalContent>
        <ModalActions>
          <Button onClick={() => setSecondOpen(true)} primary>
            Proceed <Icon name='right chevron' />
          </Button>
        </ModalActions>

        <Modal
          onClose={() => setSecondOpen(false)}
          open={secondOpen}
          size='small'
        >
          <ModalHeader>Modal #2</ModalHeader>
          <ModalContent>
            <p>That's everything!</p>
          </ModalContent>
          <ModalActions>
            <Button
              icon='check'
              content='All Done'
              onClick={() => setSecondOpen(false)}
            />
          </ModalActions>
        </Modal>
      </Modal>
    </>
  )
}

export default ModalExampleMultiple
