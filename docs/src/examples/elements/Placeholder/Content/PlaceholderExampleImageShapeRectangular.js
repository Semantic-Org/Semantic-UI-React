import React from 'react'
import { Card, Placeholder } from 'semantic-ui-react'

const PlaceholderExampleLine = () => (
  <Card.Group itemsPerRow={3}>
    <Card>
      <Card.Content>
        <Placeholder>
          <Placeholder.Image shape='rectangular' />
        </Placeholder>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Placeholder>
          <Placeholder.Image shape='rectangular' />
        </Placeholder>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Placeholder>
          <Placeholder.Image shape='rectangular' />
        </Placeholder>
      </Card.Content>
    </Card>
  </Card.Group>
)

export default PlaceholderExampleLine
