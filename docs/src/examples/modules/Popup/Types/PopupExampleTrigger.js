import React from 'react'
import {
  CardHeader,
  CardDescription,
  CardContent,
  PopupHeader,
  PopupContent,
  Popup,
  Card,
  Image,
  Rating,
} from 'semantic-ui-react'

const PopupExampleTrigger = () => (
  <Popup
    trigger={
      <Card>
        <Image src='/images/movies/totoro-horizontal.jpg' />
        <CardContent>
          <CardHeader>My Neighbor Totoro</CardHeader>
          <CardDescription>
            Two sisters move to the country with their father in order to be
            closer to their hospitalized mother, and discover the surrounding
            trees are inhabited by magical spirits.
          </CardDescription>
        </CardContent>
      </Card>
    }
  >
    <PopupHeader>User Rating</PopupHeader>
    <PopupContent>
      <Rating icon='star' defaultRating={3} maxRating={4} />
    </PopupContent>
  </Popup>
)

export default PopupExampleTrigger
