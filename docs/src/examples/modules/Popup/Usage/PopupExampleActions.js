import React from 'react'
import { GridColumn, Button, Grid, Input, Popup } from 'semantic-ui-react'

const PopupExampleActions = () => (
  <Grid columns={1}>
    <GridColumn>
      <Popup
        trigger={<Button icon='add' content='Add a friend' />}
        content='Sends an email invite to a friend.'
        on='hover'
      />
      <Popup
        trigger={
          <Button color='red' icon='flask' content='Activate doomsday device' />
        }
        content={<Button color='green' content='Confirm the launch' />}
        on='click'
        position='top right'
      />
      <Popup
        trigger={<Input icon='search' placeholder='Search...' />}
        header='Movie Search'
        content='You may search by genre, header, year and actors'
        on='focus'
      />
    </GridColumn>
    <GridColumn>
      <Popup
        trigger={<Button>Click me or Hover me</Button>}
        header='Movie Search'
        content='Multiple events can trigger a popup'
        on={['hover', 'click']}
      />
    </GridColumn>
  </Grid>
)

export default PopupExampleActions
