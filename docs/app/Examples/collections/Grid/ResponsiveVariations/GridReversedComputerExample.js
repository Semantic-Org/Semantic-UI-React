import React from 'react'
import { Grid } from 'semantic-ui-react'

const { Column, Row } = Grid

const GridReversedComputerExample = () => (
    <Grid reversed='computer' columns='equal'>
      <Row>
        <Column>Computer A Fourth</Column>
        <Column>Computer A Third</Column>
        <Column>Computer A Second</Column>
        <Column>Computer A First</Column>
      </Row>
      <Row>
        <Column>Computer B Fourth</Column>
        <Column>Computer B Third</Column>
        <Column>Computer B Second</Column>
        <Column>Computer B First</Column>
      </Row>
    </Grid>
)

export default GridReversedComputerExample
