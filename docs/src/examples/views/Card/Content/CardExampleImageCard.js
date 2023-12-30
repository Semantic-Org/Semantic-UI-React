import React from 'react'
import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Icon,
  Image,
} from 'semantic-ui-react'

const CardExampleImageCard = () => (
  <Card>
    <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
    <CardContent>
      <CardHeader>Daniel</CardHeader>
      <CardMeta>Joined in 2016</CardMeta>
      <CardDescription>
        Daniel is a comedian living in Nashville.
      </CardDescription>
    </CardContent>
    <CardContent extra>
      <a>
        <Icon name='user' />
        10 Friends
      </a>
    </CardContent>
  </Card>
)

export default CardExampleImageCard
