import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

const PopupVisualFloatingButton = () => (
  <Popup
    data-tid='popup-content'
    on='click'
    trigger={<Button data-tid='button-popup'>Open a popup</Button>}
  >
    <Button floated='right'>I am a floating button</Button>
  </Popup>
)

export default PopupVisualFloatingButton
