import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

const PopupExample = () => (
  <Popup content='Add users to your feed' trigger={<Button icon='add' />} />
)

export default PopupExample
