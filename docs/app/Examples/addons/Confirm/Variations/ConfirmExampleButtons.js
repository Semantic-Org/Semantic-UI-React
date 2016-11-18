import React from 'react'
import { Button, Confirm } from 'semantic-ui-react'

const ConfirmExampleButtons = () => (
  <Confirm
    trigger={<Button>Show</Button>}
    cancelButton='Never mind'
    confirmButton="Let's do it"
  />
)

export default ConfirmExampleButtons
