import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

const PopupExampleDefaultOpen = () => (
  <Popup
    content='Hello'
    open
    position='top center'
    trigger={<Button content='Already Open' />}
  />
)

export default PopupExampleDefaultOpen
