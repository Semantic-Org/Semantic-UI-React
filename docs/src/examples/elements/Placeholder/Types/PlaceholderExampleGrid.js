import React from 'react'
import {
  PlaceholderParagraph,
  PlaceholderLine,
  PlaceholderHeader,
  GridColumn,
  Grid,
  Placeholder,
  Segment,
} from 'semantic-ui-react'

const PlaceholderExampleGrid = () => (
  <Grid columns={3} stackable>
    <GridColumn>
      <Segment raised>
        <Placeholder>
          <PlaceholderHeader image>
            <PlaceholderLine />
            <PlaceholderLine />
          </PlaceholderHeader>
          <PlaceholderParagraph>
            <PlaceholderLine length='medium' />
            <PlaceholderLine length='short' />
          </PlaceholderParagraph>
        </Placeholder>
      </Segment>
    </GridColumn>

    <GridColumn>
      <Segment raised>
        <Placeholder>
          <PlaceholderHeader image>
            <PlaceholderLine />
            <PlaceholderLine />
          </PlaceholderHeader>
          <PlaceholderParagraph>
            <PlaceholderLine length='medium' />
            <PlaceholderLine length='short' />
          </PlaceholderParagraph>
        </Placeholder>
      </Segment>
    </GridColumn>

    <GridColumn>
      <Segment raised>
        <Placeholder>
          <PlaceholderHeader image>
            <PlaceholderLine />
            <PlaceholderLine />
          </PlaceholderHeader>
          <PlaceholderParagraph>
            <PlaceholderLine length='medium' />
            <PlaceholderLine length='short' />
          </PlaceholderParagraph>
        </Placeholder>
      </Segment>
    </GridColumn>
  </Grid>
)

export default PlaceholderExampleGrid
