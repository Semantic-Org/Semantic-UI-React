import React from 'react'
import { Icon } from 'stardust'

const IconExampleLoadingGroup = () => (
  <div>
    <Icon.Group size='huge'>
      <Icon size='big' color='red' name='dont' />
      <Icon color='black' name='use' />
    </Icon.Group>
    <Icon.Group size='huge'>
      <Icon loading size='big' name='sun' />
      <Icon name='user'/>
    </Icon.Group>
  </div>
)

export default IconExampleLoadingGroup
