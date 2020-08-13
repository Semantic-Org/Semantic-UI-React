import React from 'react'
import { Icon } from 'semantic-ui-react'

const IconExampleCornerGroupPositions = () => (
  <>
    <Icon.Group size='huge'>
      <Icon name='puzzle' />
      <Icon corner='top left' name='add' />
    </Icon.Group>

    <Icon.Group size='huge'>
      <Icon name='puzzle' />
      <Icon corner='top right' name='add' />
    </Icon.Group>

    <Icon.Group size='huge'>
      <Icon name='puzzle' />
      <Icon corner='bottom left' name='add' />
    </Icon.Group>

    <Icon.Group size='huge'>
      <Icon name='puzzle' />
      <Icon corner='bottom right' name='add' />
    </Icon.Group>
  </>
)

export default IconExampleCornerGroupPositions
