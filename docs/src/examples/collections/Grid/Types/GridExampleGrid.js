import _ from 'lodash'
import React from 'react'
import { GridColumn, Grid, Image } from 'semantic-ui-react'

const columns = _.times(16, (i) => (
  <GridColumn key={i}>
    <Image src='/images/wireframe/image.png' />
  </GridColumn>
))

const GridExampleGrid = () => <Grid>{columns}</Grid>

export default GridExampleGrid
