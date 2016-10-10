import faker from 'faker'
import React from 'react'
import { Dropdown, Image } from 'semantic-ui-react'

const trigger = (
  <span>
    <Image avatar src={faker.internet.avatar()} />
    {faker.name.findName()}
  </span>
)

const DropdownImageTriggerExample = () => (
  <Dropdown trigger={trigger} pointing='top left' icon={null}>
    <Dropdown.Menu>
      <Dropdown.Item text='Account' icon='user' />
      <Dropdown.Item text='Settings' icon='settings' />
      <Dropdown.Item text='Sign Out' icon='sign out' />
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownImageTriggerExample
