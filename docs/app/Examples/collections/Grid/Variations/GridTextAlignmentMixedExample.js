import React from 'react'
import { Grid, Menu } from 'semantic-ui-react'

const { Column, Row } = Grid

const GridTextAlignmentJustifiedExample = () => (
  <Grid>
    <Row columns={3}>
      <Column>
        <Menu fluid vertical>
          <Menu.Item className='header'>Cats</Menu.Item>
        </Menu>
      </Column>
      <Column textAlign='center'>
        <Menu fluid vertical>
          <Menu.Item className='header'>Dogs</Menu.Item>
          <Menu.Item>Poodle</Menu.Item>
          <Menu.Item>Cockerspaniel</Menu.Item>
        </Menu>
      </Column>
      <Column>
        <Menu fluid vertical>
          <Menu.Item className='header'>Monkeys</Menu.Item>
        </Menu>
      </Column>
    </Row>
    <Row textAlign='justified'>
      <Column>
        <p>
          Justified content fits exactly inside the grid column, taking up the entire width from one side to the
          other. Justified content fits exactly inside the grid column, taking up the entire width from one side to
          the other. Justified content fits exactly inside the grid column, taking up the entire width from one side
          to the other. Justified content fits exactly inside the grid column, taking up the entire width from one
          side to the other. Justified content fits exactly inside the grid column, taking up the entire width from
          one side to the other.
        </p>
      </Column>
    </Row>
  </Grid>
)

export default GridTextAlignmentJustifiedExample
