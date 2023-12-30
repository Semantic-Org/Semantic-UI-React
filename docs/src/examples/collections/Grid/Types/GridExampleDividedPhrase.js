import React from 'react'
import { GridRow, GridColumn, Grid, Image } from 'semantic-ui-react'

const GridExampleDividedPhrase = () => (
  <Grid columns='three' divided>
    <GridRow>
      <GridColumn>
        <Image src='/images/wireframe/media-paragraph.png' />
      </GridColumn>
      <GridColumn>
        <Image src='/images/wireframe/media-paragraph.png' />
      </GridColumn>
      <GridColumn>
        <Image src='/images/wireframe/media-paragraph.png' />
      </GridColumn>
    </GridRow>

    <GridRow>
      <GridColumn>
        <Image src='/images/wireframe/media-paragraph.png' />
      </GridColumn>
      <GridColumn>
        <Image src='/images/wireframe/media-paragraph.png' />
      </GridColumn>
      <GridColumn>
        <Image src='/images/wireframe/media-paragraph.png' />
      </GridColumn>
    </GridRow>
  </Grid>
)

export default GridExampleDividedPhrase
