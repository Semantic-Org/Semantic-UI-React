import React from 'react'
import { Button, Confirm } from 'semantic-ui-react'

function ConfirmExampleHeader() {
  const [open, setOpen] = React.useState(false)

  const show = () => setOpen(true)
  const handleConfirm = () => setOpen(false)
  const handleCancel = () => setOpen(false)

  return (
    <div>
      <Button onClick={show}>Show</Button>
      <Confirm
        open={open}
        header='This is a custom header'
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </div>
  )
}

export default ConfirmExampleHeader
