import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

const PopupExampleDefaultOpen = () => (
  <Popup open trigger={<Button content='Already Open' />} content='Hello' position='top center' />
)

export default PopupExampleDefaultOpen
