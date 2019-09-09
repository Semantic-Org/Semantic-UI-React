import React from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'

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
          <Button onClick={() => setSecondOpen(true)} primary>
            Proceed <Icon name='right chevron' />
          </Button>
        </Modal.Actions>

        <Modal
          onClose={() => setSecondOpen(false)}
          open={secondOpen}
          size='small'
        >
          <Modal.Header>Modal #2</Modal.Header>
          <Modal.Content>
            <p>That's everything!</p>
          </Modal.Content>
          <Modal.Actions>
            <Button
              icon='check'
              content='All Done'
              onClick={() => setSecondOpen(false)}
            />
          </Modal.Actions>
        </Modal>
      </Modal>
    </>
  )
}

export default ModalExampleMultiple
