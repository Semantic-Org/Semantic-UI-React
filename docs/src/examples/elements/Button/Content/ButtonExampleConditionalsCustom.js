import React from 'react'
import { Button } from 'semantic-ui-react'

const ButtonExampleConditionalsCustom = () => (
  <Button.Group>
    <Button>un</Button>
    <Button.Or text='ou' />
    <Button positive>deux</Button>
  </Button.Group>
)

export default ButtonExampleConditionalsCustom
