import React from 'react'
import { Header, Segment } from 'semantic-ui-react'

const HeaderExampleTextAlignment = () => (
  <Segment>
    <Header as='h3' textAlign='right'>
      Float Right
    </Header>
    <Header as='h3' textAlign='left'>
      Float Left
    </Header>
    <Header as='h3' textAlign='justified'>
      This text takes up the full width of the container
    </Header>
    <Header as='h3' textAlign='center'>
      Centered
    </Header>
  </Segment>
)

export default HeaderExampleTextAlignment
