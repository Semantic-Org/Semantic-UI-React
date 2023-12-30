import React from 'react'
import {
  ModalHeader,
  ModalContent,
  ModalActions,
  Button,
  Modal,
} from 'semantic-ui-react'

function exampleReducer(state, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { open: true, dimmer: action.dimmer }
    case 'CLOSE_MODAL':
      return { open: false }
    default:
      throw new Error()
  }
}

function ModalExampleDimmer() {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    dimmer: undefined,
  })
  const { open, dimmer } = state

  return (
    <div>
      <Button onClick={() => dispatch({ type: 'OPEN_MODAL' })}>Default</Button>
      <Button
        onClick={() => dispatch({ type: 'OPEN_MODAL', dimmer: 'inverted' })}
      >
        Inverted
      </Button>
      <Button
        onClick={() => dispatch({ type: 'OPEN_MODAL', dimmer: 'blurring' })}
      >
        Blurring
      </Button>

      <Modal
        dimmer={dimmer}
        open={open}
        onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
      >
        <ModalHeader>Use Google's location service?</ModalHeader>
        <ModalContent>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </ModalContent>
        <ModalActions>
          <Button negative onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
            Disagree
          </Button>
          <Button positive onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
            Agree
          </Button>
        </ModalActions>
      </Modal>
    </div>
  )
}

export default ModalExampleDimmer
