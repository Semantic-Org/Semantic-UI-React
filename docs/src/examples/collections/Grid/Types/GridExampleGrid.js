import _ from 'lodash'
import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const columns = _.times(16, (i) => (
  <Grid.Column key={i}>
    <Image src='/images/wireframe/image.png' />
  </Grid.Column>
))

const GridExampleGrid = () => <Grid>{columns}</Grid>

export default GridExampleGrid
