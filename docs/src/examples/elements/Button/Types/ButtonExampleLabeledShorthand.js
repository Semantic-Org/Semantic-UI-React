import React from 'react'
import { Button } from 'semantic-ui-react'

const ButtonExampleLabeledShorthand = () => (
  <div>
    <Button
      content='Like'
      icon='heart'
      label={{ as: 'a', basic: true, content: '2,048' }}
      labelPosition='right'
    />
    <Button
      content='Like'
      icon='heart'
      label={{ as: 'a', basic: true, pointing: 'right', content: '2,048' }}
      labelPosition='left'
    />
    <Button
      icon='fork'
      label={{ as: 'a', basic: true, content: '2,048' }}
      labelPosition='left'
    />
  </div>
)

export default ButtonExampleLabeledShorthand
