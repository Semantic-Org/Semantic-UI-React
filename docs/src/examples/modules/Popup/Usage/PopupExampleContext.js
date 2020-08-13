import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

function PopupExampleContext() {
  const contextRef = React.useRef()

  return (
    <>
      <Popup
        trigger={<Button content='Trigger Popup' />}
        context={contextRef}
        content='Hello'
        position='top center'
      />
      ---------->
      <strong ref={contextRef}>here</strong>
    </>
  )
}

export default PopupExampleContext
