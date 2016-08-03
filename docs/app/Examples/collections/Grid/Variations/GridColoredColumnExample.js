import React from 'react'
import { Grid } from 'stardust'

const { Column } = Grid

const GridColoredColumnExample = () => (
  <Grid columns={5} padded>
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
)

export default GridColoredColumnExample
