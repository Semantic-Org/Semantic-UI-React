import React from 'react'
import { IconGroup, Icon } from 'semantic-ui-react'

const IconExampleLoadingGroup = () => (
  <div>
    <IconGroup size='huge'>
      <Icon size='big' color='red' name='dont' />
      <Icon color='black' name='user' />
    </IconGroup>
    <IconGroup size='huge'>
      <Icon loading size='big' name='circle notch' />
      <Icon name='user' />
    </IconGroup>
  </div>
)

export default IconExampleLoadingGroup
