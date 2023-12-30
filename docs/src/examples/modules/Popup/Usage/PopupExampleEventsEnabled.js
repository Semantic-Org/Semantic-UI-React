import React from 'react'
import {
  GridColumn,
  Button,
  Checkbox,
  Divider,
  Grid,
  Popup,
} from 'semantic-ui-react'

const PopupExampleEventsEnabled = () => {
  const [eventsEnabled, setEventsEnabled] = React.useState(true)
  const [open, setOpen] = React.useState(false)

  return (
    <Grid columns={2}>
      <GridColumn>
        <Checkbox
          checked={open}
          label={{ children: <code>open</code> }}
          onChange={(e, data) => setOpen(data.checked)}
        />
        <Divider fitted hidden />
        <Checkbox
          checked={eventsEnabled}
          label={{ children: <code>eventsEnabled</code> }}
          onChange={(e, data) => setEventsEnabled(data.checked)}
        />
      </GridColumn>

      <GridColumn>
        <Popup
          content='Hello'
          eventsEnabled={eventsEnabled}
          on='click'
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={<Button content='A trigger' />}
        />
      </GridColumn>
    </Grid>
  )
}

export default PopupExampleEventsEnabled
