import _ from 'lodash'
import React from 'react'
import { Image, Grid } from 'semantic-ui-react'

const columns = _.times(16, (i) => (
  <Grid.Column key={i}>
    <Image src='http://semantic-ui.com/images/wireframe/media-paragraph.png' />
  </Grid.Column>
))

const GridExample = () => (
  <Grid>{columns}</Grid>
)

export default GridExample
