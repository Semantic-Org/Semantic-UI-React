import React from 'react'
import { Card, Icon } from 'stardust'

const description = [
  'Amy is a violinist with 2 years experience in the wedding industry.',
  'She enjoys the outdoors and currently resides in upstate New York.',
].join(' ')

const ExtraContent = () => (
  <Card>
    <Card.Content>
      <Card.Header>
        About Amy
      </Card.Header>
    </Card.Content>
    <Card.Content description={description} />
    <Card.Content extra>
      <Icon name='user' />
      4 Friends
    </Card.Content>
  </Card>
)

export default ExtraContent
