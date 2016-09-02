import React from 'react'
import { Button } from 'stardust'

const ButtonEqualWidthsButtonsExample = () => (
  <div>
    <Button.Group widths='five'>
      <Button>Overview</Button>
      <Button>Specs</Button>
      <Button>Warrantee</Button>
      <Button>Reviews</Button>
      <Button>Support</Button>
    </Button.Group>
    <Button.Group widths='three'>
      <Button>Overview</Button>
      <Button>Specs</Button>
      <Button>Support</Button>
    </Button.Group>
  </div>
)

export default ButtonEqualWidthsButtonsExample
