import React from 'react'
import { Card, Placeholder } from 'semantic-ui-react'

const PlaceholderExampleImageShapeSquare = () => (
  <Card.Group itemsPerRow={3}>
    <Card>
      <Card.Content>
        <Placeholder>
          <Placeholder.Image shape='square' />
        </Placeholder>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Placeholder>
          <Placeholder.Image shape='square' />
        </Placeholder>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Placeholder>
          <Placeholder.Image shape='square' />
        </Placeholder>
      </Card.Content>
    </Card>
  </Card.Group>
)

export default PlaceholderExampleImageShapeSquare
