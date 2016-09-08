import React from 'react'
import { Button } from 'stardust'

const ButtonLabeledPropsExample = () => (
  <div>
    <Button label='2,048' icon='heart' content='Like' />
    <Button labeled='left' label='2,048' icon='heart' content='Like' />
    <Button labeled='left' label='1,048' icon='fork' />
  </div>
)

export default ButtonLabeledPropsExample
