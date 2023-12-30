import React from 'react'
import {
  CardGroup,
  CardContent,
  PlaceholderImage,
  Card,
  Placeholder,
} from 'semantic-ui-react'

const PlaceholderExampleImageRectangular = () => (
  <CardGroup itemsPerRow={3}>
    <Card>
      <CardContent>
        <Placeholder>
          <PlaceholderImage rectangular />
        </Placeholder>
      </CardContent>
    </Card>
    <Card>
      <CardContent>
        <Placeholder>
          <PlaceholderImage rectangular />
        </Placeholder>
      </CardContent>
    </Card>
    <Card>
      <CardContent>
        <Placeholder>
          <PlaceholderImage rectangular />
        </Placeholder>
      </CardContent>
    </Card>
  </CardGroup>
)

export default PlaceholderExampleImageRectangular
