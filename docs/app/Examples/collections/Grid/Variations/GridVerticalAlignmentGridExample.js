import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const { Column, Row } = Grid
const image = <Image src='http://semantic-ui.com/images/wireframe/image.png' />

const GridVerticalAlignmentGridExample = () => (
    <Grid verticalAlign='middle' columns={4} centered>
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
)

export default GridVerticalAlignmentGridExample
