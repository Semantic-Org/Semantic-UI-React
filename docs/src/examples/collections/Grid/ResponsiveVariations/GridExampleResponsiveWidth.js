import React from 'react'
import { GridColumn, Grid, Image } from 'semantic-ui-react'

const GridExampleResponsiveWidth = () => (
  <div>
    <Grid>
      <GridColumn mobile={16} tablet={8} computer={4}>
        <Image src='/images/wireframe/paragraph.png' />
      </GridColumn>
      <GridColumn mobile={16} tablet={8} computer={4}>
        <Image src='/images/wireframe/paragraph.png' />
      </GridColumn>
      <GridColumn mobile={16} tablet={8} computer={4}>
        <Image src='/images/wireframe/paragraph.png' />
      </GridColumn>
      <GridColumn mobile={16} tablet={8} computer={4}>
        <Image src='/images/wireframe/paragraph.png' />
      </GridColumn>
      <GridColumn mobile={16} tablet={8} computer={4}>
        <Image src='/images/wireframe/paragraph.png' />
      </GridColumn>
    </Grid>

    <Grid>
      <GridColumn largeScreen={2} widescreen={1}>
        <Image src='/images/wireframe/paragraph.png' />
      </GridColumn>
      <GridColumn largeScreen={2} widescreen={1}>
        <Image src='/images/wireframe/paragraph.png' />
      </GridColumn>
      <GridColumn largeScreen={2} widescreen={1}>
        <Image src='/images/wireframe/paragraph.png' />
      </GridColumn>
      <GridColumn largeScreen={2} widescreen={1}>
        <Image src='/images/wireframe/paragraph.png' />
      </GridColumn>
    </Grid>
  </div>
)

export default GridExampleResponsiveWidth
