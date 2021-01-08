import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

const PopupExampleHideOnScroll = () => (
  <React.Fragment>
    <Popup
      trigger={<Button>Click me</Button>}
      content='Hide the popup on any scroll event'
      on='click'
      hideOnScroll
    />
    <Popup
      trigger={<Button>Hover me</Button>}
      content='Hide the popup on any scroll event'
      hideOnScroll
    />
  </React.Fragment>
)

export default PopupExampleHideOnScroll
