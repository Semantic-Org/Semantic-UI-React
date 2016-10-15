import React from 'react'
import { Icon, Input } from 'semantic-ui-react'

const InputIconElement = () => (
  <Input
    icon={<Icon name='search' inverted circular link />}
    placeholder='Search...'
  />
)

export default InputIconElement
