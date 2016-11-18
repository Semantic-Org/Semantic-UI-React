import React from 'react'
import { Button, Confirm } from 'semantic-ui-react'

const ConfirmExampleHeader = () => (
  <Confirm
    trigger={<Button>Show</Button>}
    header='This is a custom header'
  />
)

export default ConfirmExampleHeader
