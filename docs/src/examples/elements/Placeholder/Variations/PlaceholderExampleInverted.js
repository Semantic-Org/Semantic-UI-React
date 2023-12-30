import React from 'react'
import {
  PlaceholderParagraph,
  PlaceholderLine,
  PlaceholderHeader,
  Placeholder,
  Segment,
} from 'semantic-ui-react'

const PlaceholderExampleInverted = () => (
  <Segment inverted>
    <Placeholder inverted>
      <PlaceholderHeader image>
        <PlaceholderLine />
        <PlaceholderLine />
      </PlaceholderHeader>
      <PlaceholderParagraph>
        <PlaceholderLine />
        <PlaceholderLine />
        <PlaceholderLine />
      </PlaceholderParagraph>
    </Placeholder>
  </Segment>
)

export default PlaceholderExampleInverted
