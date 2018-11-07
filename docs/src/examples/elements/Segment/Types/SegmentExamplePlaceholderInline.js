import React from 'react'
import { Button, Header, Icon, Segment } from 'semantic-ui-react'

const SegmentExamplePlaceholderInline = () => (
  <Segment placeholder>
    <Header icon>
      <Icon name='search' />
      We don't have any documents matching your query.
    </Header>
    <Segment.Inline>
      <Button primary>Clear Query</Button>
      <Button>Add Document</Button>
    </Segment.Inline>
  </Segment>
)

export default SegmentExamplePlaceholderInline
