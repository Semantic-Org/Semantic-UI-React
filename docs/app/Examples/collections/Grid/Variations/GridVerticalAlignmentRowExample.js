import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const { Column, Row } = Grid
const image = <Image src='http://semantic-ui.com/images/wireframe/image.png' />

const GridVerticalAlignmentRowExample = () => (
    <Grid columns={4} centered>
      <Row verticalAlign='top'>
        <Column>{image}</Column>
        <Column>
          {image}
          <br />
          {image}
        </Column>
        <Column>{image}</Column>
      </Row>
      <Row verticalAlign='middle'>
        <Column>{image}</Column>
        <Column>
          {image}
          <br />
          {image}
        </Column>
        <Column>{image}</Column>
      </Row>
      <Row verticalAlign='bottom'>
        <Column>{image}</Column>
        <Column>
          {image}
          <br />
          {image}
        </Column>
        <Column>{image}</Column>
      </Row>
    </Grid>
)

export default GridVerticalAlignmentRowExample
