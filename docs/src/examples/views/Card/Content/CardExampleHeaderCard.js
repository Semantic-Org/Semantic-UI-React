import React from 'react'
import {
  CardMeta,
  CardHeader,
  CardGroup,
  CardDescription,
  CardContent,
  Card,
} from 'semantic-ui-react'

const CardExampleHeaderCard = () => (
  <CardGroup>
    <Card>
      <CardContent>
        <CardHeader>Matthew Harris</CardHeader>
        <CardMeta>Co-Worker</CardMeta>
        <CardDescription>
          Matthew is a pianist living in Nashville.
        </CardDescription>
      </CardContent>
    </Card>

    <Card>
      <CardContent>
        <CardHeader content='Jake Smith' />
        <CardMeta content='Musicians' />
        <CardDescription content='Jake is a drummer living in New York.' />
      </CardContent>
    </Card>

    <Card>
      <CardContent
        header='Elliot Baker'
        meta='Friend'
        description='Elliot is a music producer living in Chicago.'
      />
    </Card>

    <Card
      header='Jenny Hess'
      meta='Friend'
      description='Jenny is a student studying Media Management at the New School'
    />
  </CardGroup>
)

export default CardExampleHeaderCard
