import React from 'react'
import { SegmentInline, Button, Header, Icon, Segment } from 'semantic-ui-react'

const SegmentExamplePlaceholderInline = () => (
  <Segment placeholder>
    <Header icon>
      <Icon name='search' />
      We don't have any documents matching your query.
    </Header>
    <SegmentInline>
      <Button primary>Clear Query</Button>
      <Button>Add Document</Button>
    </SegmentInline>
  </Segment>
)

export default SegmentExamplePlaceholderInline
