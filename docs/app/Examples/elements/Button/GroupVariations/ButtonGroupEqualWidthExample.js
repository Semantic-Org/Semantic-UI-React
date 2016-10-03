import React from 'react'
import { Button, Divider } from 'semantic-ui-react'

const ButtonGroupEqualWidthExample = () => (
  <div>
    <Button.Group widths='5'>
      <Button>Overview</Button>
      <Button>Specs</Button>
      <Button>Warranty</Button>
      <Button>Reviews</Button>
      <Button>Support</Button>
    </Button.Group>
    <Divider />
    <Button.Group widths='3'>
      <Button>Overview</Button>
      <Button>Specs</Button>
      <Button>Support</Button>
    </Button.Group>
  </div>
)

export default ButtonGroupEqualWidthExample
