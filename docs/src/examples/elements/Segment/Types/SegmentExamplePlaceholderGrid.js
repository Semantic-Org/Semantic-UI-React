import React from 'react'
import {
  GridRow,
  GridColumn,
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Search,
  Segment,
} from 'semantic-ui-react'

const SegmentExamplePlaceholderGrid = () => (
  <Segment placeholder>
    <Grid columns={2} stackable textAlign='center'>
      <Divider vertical>Or</Divider>

      <GridRow verticalAlign='middle'>
        <GridColumn>
          <Header icon>
            <Icon name='search' />
            Find Country
          </Header>

          <Search placeholder='Search countries...' />
        </GridColumn>

        <GridColumn>
          <Header icon>
            <Icon name='world' />
            Add New Country
          </Header>
          <Button primary>Create</Button>
        </GridColumn>
      </GridRow>
    </Grid>
  </Segment>
)

export default SegmentExamplePlaceholderGrid
