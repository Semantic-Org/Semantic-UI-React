import React from 'react'
import { GridColumn, Grid, Image, Rail, Segment } from 'semantic-ui-react'

const RailExampleAttached = () => (
  <Grid centered columns={3}>
    <GridColumn>
      <Segment textAlign='center'>
        <Image src='/images/wireframe/paragraph.png' />

        <Rail attached position='left'>
          <Segment>Left Rail Content</Segment>
        </Rail>

        <Rail attached position='right'>
          <Segment>Right Rail Content</Segment>
        </Rail>
      </Segment>
    </GridColumn>
  </Grid>
)

export default RailExampleAttached
