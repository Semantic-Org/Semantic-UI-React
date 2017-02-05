import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

const PopupExampleClick = () => (
  <Popup
    trigger={<Button color='red' icon='flask' content='Activate doomsday device' />}
    content={<Button color='green' content='Confirm the launch' />}
    on='click'
    position='top right'
  />
)

export default PopupExampleClick
