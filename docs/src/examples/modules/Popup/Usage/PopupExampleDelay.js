import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

const PopupExampleDelay = () => (
  <Popup
    content='Popup will hide in 500ms after leaving mouse.'
    mouseEnterDelay={500}
    mouseLeaveDelay={500}
    on='hover'
    trigger={<Button>Open After 500ms</Button>}
  />
)

export default PopupExampleDelay
