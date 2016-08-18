import React from 'react'
import { Card } from 'stardust'

const FluidCards = () => (
  <Card.Group>
    <Card color='red' fluid>
      <Card.Content header='Option 1' />
    </Card>
    <Card color='orange' fluid>
      <Card.Content header='Option 2' />
    </Card>
    <Card color='yellow' fluid>
      <Card.Content header='Option 3' />
    </Card>
  </Card.Group>
)

export default FluidCards
