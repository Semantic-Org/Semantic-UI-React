import React from 'react'
import { Input } from 'semantic-ui-react'

const InputRightLabeledTag = () => (
  <Input
    icon='tags'
    iconPosition='left'
    label={{ tag: true, content: 'Add Tag' }}
    labelPosition='right'
    placeholder='Enter tags'
  />
)

export default InputRightLabeledTag
