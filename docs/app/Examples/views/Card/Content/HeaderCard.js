import React from 'react'
import { Card } from 'stardust'

const HeaderCards = () => (
  <Card.Group>
    <Card>
      <Card.Content>
        <Card.Header>
          Matthew Harris
        </Card.Header>
        <Card.Meta>
          Co-Worker
        </Card.Meta>
        <Card.Description>
          Matthew is a pianist living in Nashville.
        </Card.Description>
      </Card.Content>
    </Card>

    <Card>
      <Card.Content>
        <Card.Header content='Jake Smith' />
        <Card.Meta content='Musicians' />
        <Card.Description content='Jake is a drummer living in New York.' />
      </Card.Content>
    </Card>

    <Card>
      <Card.Content
        header='Elliot Baker'
        meta='Friend'
        description='Elliot is a music producer living in Chicago.'
      />
    </Card>
  </Card.Group>
)

export default HeaderCards
