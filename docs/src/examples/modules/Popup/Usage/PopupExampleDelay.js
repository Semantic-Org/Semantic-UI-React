import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

const PopupExampleDelay = () => (
  <Popup
    mouseEnterDelay={400}
    mouseLeaveDelay={300}
    openOnTriggerClick={false} // Disable opening it on click
    content='Popup will hide in 300ms after leaving mouse.'
    trigger={<Button>Open After 400ms</Button>}
  />
)

export default PopupExampleDelay
