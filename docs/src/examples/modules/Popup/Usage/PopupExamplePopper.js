import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

const PopupExamplePopper = () => (
  <Popup
    content={
      <>
        A wrapping element in this Popup will have custom <code>id</code> &{' '}
        <code>zIndex</code>.
      </>
    }
    on='click'
    popper={{ id: 'popper-container', style: { zIndex: 2000 } }}
    trigger={<Button>Open a popup</Button>}
  />
)

export default PopupExamplePopper
