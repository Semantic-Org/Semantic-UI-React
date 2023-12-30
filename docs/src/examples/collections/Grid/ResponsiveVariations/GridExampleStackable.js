import React from 'react'
import { GridColumn, Grid, Image, Segment } from 'semantic-ui-react'

const GridExampleStackable = () => (
  <Grid stackable columns={2}>
    <GridColumn>
      <Segment>
        <Image src='/images/wireframe/paragraph.png' />
      </Segment>
    </GridColumn>
    <GridColumn>
      <Segment>
        <Image src='/images/wireframe/paragraph.png' />
      </Segment>
    </GridColumn>
  </Grid>
)

export default GridExampleStackable
