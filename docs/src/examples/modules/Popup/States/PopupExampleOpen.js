
import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

const PopupExampleOpen = () => (
  <Popup
    content='Hello. This popup is open.'
    open
    trigger={<Button content='Open Popup' />} />
)

export default PopupExampleOpen
