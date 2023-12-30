import React from 'react'
import { Button, Confirm } from 'semantic-ui-react'

function ConfirmExampleCallbacks() {
  const [open, setOpen] = React.useState(false)
  const [result, setResult] = React.useState(
    'show the modal to capture a result',
  )

  const show = () => setOpen(true)
  const handleConfirm = () => {
    setResult('confirmed')
    setOpen(false)
  }
  const handleCancel = () => {
    setResult('cancelled')
    setOpen(false)
  }

  return (
    <div>
      <p>
        Result: <em>{result}</em>
      </p>

      <Button onClick={show}>Show</Button>
      <Confirm open={open} onCancel={handleCancel} onConfirm={handleConfirm} />
    </div>
  )
}

export default ConfirmExampleCallbacks
