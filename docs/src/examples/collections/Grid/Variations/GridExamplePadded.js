import React from 'react'
import { GridColumn, Grid, Image } from 'semantic-ui-react'

const GridExamplePadded = () => (
  <div>
    <p>The following grid has vertical and horizontal gutters.</p>

    <Grid columns={2} padded>
      <GridColumn>
        <Image src='/images/wireframe/paragraph.png' />
      </GridColumn>
      <GridColumn>
        <Image src='/images/wireframe/paragraph.png' />
      </GridColumn>
    </Grid>
  </div>
)

export default GridExamplePadded
