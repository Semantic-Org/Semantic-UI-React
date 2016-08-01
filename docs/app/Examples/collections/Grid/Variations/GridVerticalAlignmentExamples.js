import React from 'react'
import { Divider, Grid, Image } from 'stardust'

const { Column, Row } = Grid
const image = <Image src='http://semantic-ui.com/images/wireframe/image.png' />

const GridVerticalAlignmentExamples = () => (
  <div>
    <Grid vertical='middle' column={4} centered>
      <Row>
        <Column>{image}</Column>
        <Column>
          {image}
          <br />
          {image}
        </Column>
        <Column>{image}</Column>
      </Row>
    </Grid>

    <Divider />

    <Grid column={4} centered>
      <Row vertical='top'>
        <Column>{image}</Column>
        <Column>
          {image}
          <br />
          {image}
        </Column>
        <Column>{image}</Column>
      </Row>
      <Row vertical='middle'>
        <Column>{image}</Column>
        <Column>
          {image}
          <br />
          {image}
        </Column>
        <Column>{image}</Column>
      </Row>
      <Row vertical='bottom'>
        <Column>{image}</Column>
        <Column>
          {image}
          <br />
          {image}
        </Column>
        <Column>{image}</Column>
      </Row>
    </Grid>
  </div>
)

export default GridVerticalAlignmentExamples
