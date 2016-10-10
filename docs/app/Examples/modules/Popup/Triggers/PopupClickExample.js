import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

const PopupClickExample = () => (
  <Popup
    trigger={<Button color='red' icon='flask' content='Activate doomsday device' />}
    content={<Button color='green' content='Confirm the launch' />}
    on='click'
    positioning='top right'
  />
)

export default PopupClickExample
