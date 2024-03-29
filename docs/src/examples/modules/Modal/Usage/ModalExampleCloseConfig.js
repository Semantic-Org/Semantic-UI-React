import React from 'react'
import {
  ModalHeader,
  ModalContent,
  ModalActions,
  GridColumn,
  Button,
  Checkbox,
  Grid,
  Modal,
} from 'semantic-ui-react'

function exampleReducer(state, action) {
  switch (action.type) {
    case 'CONFIG_CLOSE_ON_DIMMER_CLICK':
      return { ...state, closeOnDimmerClick: action.value }
    case 'CONFIG_CLOSE_ON_ESCAPE':
      return { ...state, closeOnEscape: action.value }
    case 'OPEN_MODAL':
      return { ...state, open: true }
    case 'CLOSE_MODAL':
      return { ...state, open: false }
    default:
      throw new Error()
  }
}

function ModalExampleCloseConfig() {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    closeOnEscape: true,
    closeOnDimmerClick: true,
    open: false,
    dimmer: undefined,
  })
  const { open, closeOnEscape, closeOnDimmerClick } = state

  return (
    <Grid columns={1}>
      <GridColumn>
        <Checkbox
          checked={closeOnEscape}
          label={{ children: <code>closeOnEscape</code> }}
          onChange={(e, { checked }) =>
            dispatch({ type: 'CONFIG_CLOSE_ON_ESCAPE', value: checked })
          }
        />
        <br />
        <Checkbox
          checked={closeOnDimmerClick}
          label={{ children: <code>closeOnDimmerClick</code> }}
          onChange={(e, { checked }) =>
            dispatch({ type: 'CONFIG_CLOSE_ON_DIMMER_CLICK', value: checked })
          }
        />
      </GridColumn>

      <GridColumn>
        <Modal
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          open={open}
          onOpen={() => dispatch({ type: 'OPEN_MODAL' })}
          onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
          trigger={<Button>Show Modal</Button>}
        >
          <ModalHeader>Delete Your Account</ModalHeader>
          <ModalContent>
            <p>Are you sure you want to delete your account</p>
          </ModalContent>
          <ModalActions>
            <Button onClick={() => dispatch({ type: 'CLOSE_MODAL' })} negative>
              No
            </Button>
            <Button onClick={() => dispatch({ type: 'CLOSE_MODAL' })} positive>
              Yes
            </Button>
          </ModalActions>
        </Modal>
      </GridColumn>
    </Grid>
  )
}

export default ModalExampleCloseConfig
