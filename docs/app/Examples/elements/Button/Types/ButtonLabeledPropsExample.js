import React from 'react'
import { Button } from 'stardust'

const ButtonLabeledPropsExample = () => (
  <div>
    <Button label='2,048' icon='heart' content='Like' />
    <Button label='2,048' icon='heart' content='Like' labeled='left' />
    <Button label='1,048' icon='fork' labeled='left' />
  </div>
)

export default ButtonLabeledPropsExample
