import React from 'react'
import { Grid } from 'semantic-ui-react'

const { Column, Row } = Grid

const GridColoredRowExample = () => (
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
)

export default GridColoredRowExample
