import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'

const { Column } = Grid

const GridEqualWidthColumnExample = () => (
  <Grid columns='equal'>
    <Column>
      <Segment>1</Segment>
    </Column>
    <Column width={8}>
      <Segment>2</Segment>
    </Column>
    <Column>
      <Segment>3</Segment>
    </Column>
  </Grid>
)

export default GridEqualWidthColumnExample
