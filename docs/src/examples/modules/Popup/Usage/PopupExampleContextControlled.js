import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

function PopupExampleContextControlled() {
  const contextRef = React.useRef()
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <Button
        content='Open controlled Popup'
        onClick={() => setOpen((prevOpen) => !prevOpen)}
      />
      <Popup
        context={contextRef}
        content='Hello'
        position='top center'
        open={open}
      />
      ---------->
      <strong ref={contextRef}>here</strong>
    </>
  )
}

export default PopupExampleContextControlled
