import React from 'react'
import { Button } from 'semantic-ui-react'

const ButtonIconButtonsExample = () => (
  <div>
    <Button.Group>
      <Button icon='align left' />
      <Button icon='align center' />
      <Button icon='align right' />
      <Button icon='align justify' />
    </Button.Group>
    {' '}
    <Button.Group>
      <Button icon='bold' />
      <Button icon='underline' />
      <Button icon='text width' />
    </Button.Group>
  </div>
)

export default ButtonIconButtonsExample
