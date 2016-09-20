import React from 'react'
import { Header, Icon } from 'stardust'

const HeaderIconHeadersExample = () => (
  <Header as='h2' icon>
    <Icon name='settings' />
    Account Settings
    <Header.Subheader>
      Manage your account settings and set e-mail preferences.
    </Header.Subheader>
  </Header>
)

export default HeaderIconHeadersExample
