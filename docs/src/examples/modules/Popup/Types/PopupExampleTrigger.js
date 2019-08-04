import React from 'react'
import { Popup, Card, Image, Rating } from 'semantic-ui-react'

const PopupExampleTrigger = () => (
  <Popup
    trigger={
      <Card>
        <Image src='/images/movies/totoro-horizontal.jpg' />
        <Card.Content>
          <Card.Header>My Neighbor Totoro</Card.Header>
          <Card.Description>
            Two sisters move to the country with their father in order to be
            closer to their hospitalized mother, and discover the surrounding
            trees are inhabited by magical spirits.
          </Card.Description>
        </Card.Content>
      </Card>
    }
  >
    <Popup.Header>User Rating</Popup.Header>
    <Popup.Content>
      <Rating icon='star' defaultRating={3} maxRating={4} />
    </Popup.Content>
  </Popup>
)

export default PopupExampleTrigger
