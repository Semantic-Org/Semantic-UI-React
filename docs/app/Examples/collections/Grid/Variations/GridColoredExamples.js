import React from 'react'
import { Divider, Grid } from 'stardust'

const { Column, Row } = Grid

const GridColoredExamples = () => (
  <div>
    <Grid column={5} padded>
      <Column color='red'>Red</Column>
      <Column color='orange'>Orange</Column>
      <Column color='yellow'>Yellow</Column>
      <Column color='olive'>Olive</Column>
      <Column color='green'>Green</Column>
      <Column color='teal'>Teal</Column>
      <Column color='blue'>Blue</Column>
      <Column color='violet'>Violet</Column>
      <Column color='purple'>Purple</Column>
      <Column color='pink'>Pink</Column>
      <Column color='brown'>Brown</Column>
      <Column color='grey'>Grey</Column>
      <Column color='black'>Black</Column>
    </Grid>

    <Divider />

    <Grid padded>
      <Row color='red'>
        <Column>Red</Column>
      </Row>
      <Row color='orange'>
        <Column>Orange</Column>
      </Row>
      <Row color='yellow'>
        <Column>Yellow</Column>
      </Row>
      <Row color='olive'>
        <Column>Olive</Column>
      </Row>
      <Row color='green'>
        <Column>Green</Column>
      </Row>
      <Row color='teal'>
        <Column>Teal</Column>
      </Row>
      <Row color='blue'>
        <Column>Blue</Column>
      </Row>
      <Row color='violet'>
        <Column>Violet</Column>
      </Row>
      <Row color='purple'>
        <Column>Purple</Column>
      </Row>
      <Row color='pink'>
        <Column>Pink</Column>
      </Row>
      <Row color='brown'>
        <Column>Brown</Column>
      </Row>
      <Row color='grey'>
        <Column>Grey</Column>
      </Row>
      <Row color='black'>
        <Column>Black</Column>
      </Row>
    </Grid>
  </div>
)

export default GridColoredExamples
