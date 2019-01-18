import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

const PopupExampleDisabled = () => (
  <Popup
    trigger={<Button content='Button' />}
    content='I will not render.'
    disabled
  />
)

export default PopupExampleDisabled
