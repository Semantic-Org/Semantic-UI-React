import React from 'react'
import { Button, Label } from 'semantic-ui-react'

const ButtonExampleLabeledProps = () => (
  <div>
    <Button label={1048} icon='fork' labelPosition='left' />
    <Button label='1,048' icon='fork' labelPosition='left' />
    <Button label={{ content: '2,048' }} icon='heart' content='Like' labelPosition='left' />
    <Button label={<Label>2,048</Label>} icon='heart' content='Like' />
  </div>
)

export default ButtonExampleLabeledProps
