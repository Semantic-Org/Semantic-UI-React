import React from 'react'
import { Dimmer, Header, Icon, Segment } from 'semantic-ui-react'

const DimmerExamplePage = () => (
  <Dimmer active page>
    <Header as='h2' icon inverted>
      <Icon name='heart' />
      Dimmed Message!
      <Header.Subheader>Dimmer sub-header</Header.Subheader>
    </Header>
  </Dimmer>
)

export default DimmerExamplePage
