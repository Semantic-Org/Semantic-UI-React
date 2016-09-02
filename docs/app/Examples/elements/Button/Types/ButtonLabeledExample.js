import React from 'react'
import { Button, Label } from 'stardust'

const ButtonLabeledExample = () => (
  <Button labeled icon='heart'>
    {/* TODO: See issue #46 - button needs to render as a div */}
    <Label basic link>
      3,000
    </Label>
  </Button>
)

export default ButtonLabeledExample
