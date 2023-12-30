import React from 'react'
import { ButtonGroup, Button, Divider } from 'semantic-ui-react'

const ButtonExampleGroupEqualWidth = () => (
  <div>
    <ButtonGroup widths='5'>
      <Button>Overview</Button>
      <Button>Specs</Button>
      <Button>Warranty</Button>
      <Button>Reviews</Button>
      <Button>Support</Button>
    </ButtonGroup>
    <Divider />
    <ButtonGroup widths='3'>
      <Button>Overview</Button>
      <Button>Specs</Button>
      <Button>Support</Button>
    </ButtonGroup>
  </div>
)

export default ButtonExampleGroupEqualWidth
