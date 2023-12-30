import React from 'react'
import { Button, Confirm } from 'semantic-ui-react'

function ConfirmExampleConfirm() {
  const [open, setOpen] = React.useState(false)

  const show = () => setOpen(true)
  const close = () => setOpen(false)

  return (
    <div>
      <Button onClick={show}>Show</Button>
      <Confirm open={open} onCancel={close} onConfirm={close} />
    </div>
  )
}

export default ConfirmExampleConfirm
