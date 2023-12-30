import React from 'react'
import { GridColumn, Grid, Image, Rail, Segment } from 'semantic-ui-react'

const RailExampleDividing = () => (
  <Grid centered columns={3}>
    <GridColumn>
      <Segment>
        <Image src='/images/wireframe/paragraph.png' />

        <Rail dividing position='left'>
          <Segment>Left Rail Content</Segment>
        </Rail>

        <Rail dividing position='right'>
          <Segment>Right Rail Content</Segment>
        </Rail>
      </Segment>
    </GridColumn>
  </Grid>
)

export default RailExampleDividing
