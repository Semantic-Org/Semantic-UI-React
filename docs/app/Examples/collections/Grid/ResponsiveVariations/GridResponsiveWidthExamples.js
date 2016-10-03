import React from 'react'
import { Image, Grid } from 'semantic-ui-react'

const { Column } = Grid
const image = <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />

const GridResponsiveWidthExamples = () => (
  <div>
    <Grid>
      <Column mobile={16} tablet={8} computer={4}>{image}</Column>
      <Column mobile={16} tablet={8} computer={4}>{image}</Column>
      <Column mobile={16} tablet={8} computer={4}>{image}</Column>
      <Column mobile={16} tablet={8} computer={4}>{image}</Column>
      <Column mobile='sixteen' tablet='eight' computer='four'>{image}</Column>
    </Grid>

    <Grid>
      <Column largeScreen={2} widescreen={1}>{image}</Column>
      <Column largeScreen={2} widescreen={1}>{image}</Column>
      <Column largeScreen='two' widescreen='one'>{image}</Column>
      <Column largeScreen='two' widescreen='one'>{image}</Column>
    </Grid>
  </div>
)

export default GridResponsiveWidthExamples
