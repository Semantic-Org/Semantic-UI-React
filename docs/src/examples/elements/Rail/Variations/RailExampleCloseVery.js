import React from 'react'
import { GridColumn, Grid, Image, Rail, Segment } from 'semantic-ui-react'

const RailExampleCloseVery = () => (
  <Grid centered columns={3}>
    <GridColumn>
      <Segment>
        <Image src='/images/wireframe/paragraph.png' />

        <Rail close='very' position='left'>
          <Segment>Left Rail Content</Segment>
        </Rail>

        <Rail close='very' position='right'>
          <Segment>Right Rail Content</Segment>
        </Rail>
      </Segment>
    </GridColumn>
  </Grid>
)

export default RailExampleCloseVery
