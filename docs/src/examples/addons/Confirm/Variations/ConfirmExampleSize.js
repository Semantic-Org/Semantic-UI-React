import React from 'react'
import { Button, Confirm } from 'semantic-ui-react'

function ConfirmExampleSize() {
  const [open, setOpen] = React.useState(false)

  const show = () => setOpen(true)
  const handleConfirm = () => setOpen(false)
  const handleCancel = () => setOpen(false)

  return (
    <div>
      <Button onClick={show}>Show Large</Button>
      <Confirm
        header='This is a large confirm'
        open={open}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        size='large'
      />
    </div>
  )
}

export default ConfirmExampleSize
