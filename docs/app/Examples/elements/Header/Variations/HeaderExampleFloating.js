import React from 'react'
import { Header, Segment } from 'semantic-ui-react'

const HeaderExampleFloating = () => (
  <Segment clearing>
    <Header as='h2' floated='right'>
      Float Right
    </Header>
    <Header as='h2' floated='left'>
      Float Left
    </Header>
  </Segment>
)

export default HeaderExampleFloating
