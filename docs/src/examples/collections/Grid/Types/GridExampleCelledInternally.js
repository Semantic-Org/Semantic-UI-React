import React from 'react'
import { GridRow, GridColumn, Grid, Image } from 'semantic-ui-react'

const GridExampleCelledInternally = () => (
  <Grid celled='internally'>
    <GridRow>
      <GridColumn width={3}>
        <Image src='/images/wireframe/image.png' />
      </GridColumn>
      <GridColumn width={10}>
        <Image src='/images/wireframe/centered-paragraph.png' />
      </GridColumn>
      <GridColumn width={3}>
        <Image src='/images/wireframe/image.png' />
      </GridColumn>
    </GridRow>

    <GridRow>
      <GridColumn width={3}>
        <Image src='/images/wireframe/image.png' />
      </GridColumn>
      <GridColumn width={10}>
        <Image src='/images/wireframe/paragraph.png' />
      </GridColumn>
      <GridColumn width={3}>
        <Image src='/images/wireframe/image.png' />
      </GridColumn>
    </GridRow>
  </Grid>
)

export default GridExampleCelledInternally
