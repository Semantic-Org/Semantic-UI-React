import React from 'react'
import { Button, Confirm } from 'semantic-ui-react'

const ConfirmExampleContent = () => (
  <Confirm
    trigger={<Button>Show</Button>}
    content='This is a custom message'
  />
)

export default ConfirmExampleContent
