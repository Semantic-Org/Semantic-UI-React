import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

const PopupExampleDisabled = () => (
  <Popup
    content='I will not render.'
    disabled
    trigger={<Button content='Button' />}
  />
)

export default PopupExampleDisabled
