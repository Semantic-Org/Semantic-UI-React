import React from 'react'
import { GridRow, GridColumn, Grid, Image } from 'semantic-ui-react'

const GridExampleColumnCount = () => (
  <Grid>
    <GridRow columns={3}>
      <GridColumn>
        <Image src='/images/wireframe/image.png' />
      </GridColumn>
      <GridColumn>
        <Image src='/images/wireframe/image.png' />
      </GridColumn>
      <GridColumn>
        <Image src='/images/wireframe/image.png' />
      </GridColumn>
    </GridRow>

    <GridRow columns={4}>
      <GridColumn>
        <Image src='/images/wireframe/image.png' />
      </GridColumn>
      <GridColumn>
        <Image src='/images/wireframe/image.png' />
      </GridColumn>
      <GridColumn>
        <Image src='/images/wireframe/image.png' />
      </GridColumn>
      <GridColumn>
        <Image src='/images/wireframe/image.png' />
      </GridColumn>
    </GridRow>

    <GridRow columns={5}>
      <GridColumn>
        <Image src='/images/wireframe/image.png' />
      </GridColumn>
      <GridColumn>
        <Image src='/images/wireframe/image.png' />
      </GridColumn>
      <GridColumn>
        <Image src='/images/wireframe/image.png' />
      </GridColumn>
      <GridColumn>
        <Image src='/images/wireframe/image.png' />
      </GridColumn>
      <GridColumn>
        <Image src='/images/wireframe/image.png' />
      </GridColumn>
    </GridRow>
  </Grid>
)

export default GridExampleColumnCount
