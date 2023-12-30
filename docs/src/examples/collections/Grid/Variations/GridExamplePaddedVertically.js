import React from 'react'
import { GridColumn, Grid, Image } from 'semantic-ui-react'

const GridExamplePaddedVertically = () => (
  <div>
    <p>The following grid has vertical gutters.</p>

    <Grid columns={2} padded='vertically'>
      <GridColumn>
        <Image src='/images/wireframe/paragraph.png' />
      </GridColumn>
      <GridColumn>
        <Image src='/images/wireframe/paragraph.png' />
      </GridColumn>
    </Grid>
  </div>
)

export default GridExamplePaddedVertically
