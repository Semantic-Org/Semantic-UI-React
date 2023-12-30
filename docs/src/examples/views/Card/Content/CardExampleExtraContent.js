import React from 'react'
import { CardContent, Card, Icon } from 'semantic-ui-react'

const description = [
  'Amy is a violinist with 2 years experience in the wedding industry.',
  'She enjoys the outdoors and currently resides in upstate New York.',
].join(' ')

const CardExampleExtraContent = () => (
  <Card>
    <CardContent header='About Amy' />
    <CardContent description={description} />
    <CardContent extra>
      <Icon name='user' />4 Friends
    </CardContent>
  </Card>
)

export default CardExampleExtraContent
