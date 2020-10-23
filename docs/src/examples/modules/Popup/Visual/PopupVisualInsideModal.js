import React from 'react'
import { Button, Modal, Popup } from 'semantic-ui-react'

const PopupVisualInsideModal = () => (
  <Modal trigger={<Button data-tid='button-dialog'>Open a dialog</Button>}>
    <p>This is a dialog</p>

    <Popup
      data-tid='popup-content'
      on='click'
      trigger={<Button data-tid='button-popup'>Open a popup</Button>}
    >
      This is a nested Popup
    </Popup>
  </Modal>
)

export default PopupVisualInsideModal
