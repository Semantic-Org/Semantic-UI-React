import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

const PopupExamplePinned = () => (
  <Popup
    content='I will not flip!'
    pinned
    trigger={<Button content='Button' />}
  />
)

export default PopupExamplePinned
