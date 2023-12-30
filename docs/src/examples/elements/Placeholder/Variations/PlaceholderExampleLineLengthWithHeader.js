import React from 'react'
import {
  PlaceholderParagraph,
  PlaceholderLine,
  PlaceholderHeader,
  Placeholder,
} from 'semantic-ui-react'

const PlaceholderExampleLineLengthWithHeader = () => (
  <Placeholder>
    <PlaceholderHeader image>
      <PlaceholderLine length='medium' />
      <PlaceholderLine length='full' />
    </PlaceholderHeader>
    <PlaceholderParagraph>
      <PlaceholderLine length='full' />
      <PlaceholderLine length='medium' />
    </PlaceholderParagraph>
  </Placeholder>
)

export default PlaceholderExampleLineLengthWithHeader
