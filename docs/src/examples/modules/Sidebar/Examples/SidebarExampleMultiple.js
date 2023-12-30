import React from 'react'
import {
  SidebarPusher,
  SidebarPushable,
  MenuItem,
  GridColumn,
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'

const SidebarExampleMultiple = () => {
  const [visible, setVisible] = React.useState(false)

  return (
    <Grid columns={1}>
      <GridColumn>
        <Checkbox
          checked={visible}
          label={{ children: <code>visible</code> }}
          onChange={(e, data) => setVisible(data.checked)}
        />
      </GridColumn>

      <GridColumn>
        <SidebarPushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            direction='left'
            icon='labeled'
            inverted
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width='thin'
          >
            <MenuItem as='a'>
              <Icon name='home' />
              Home
            </MenuItem>
            <MenuItem as='a'>
              <Icon name='gamepad' />
              Games
            </MenuItem>
            <MenuItem as='a'>
              <Icon name='camera' />
              Channels
            </MenuItem>
          </Sidebar>

          <Sidebar
            as={Menu}
            animation='overlay'
            direction='right'
            inverted
            vertical
            visible={visible}
          >
            <MenuItem as='a' header>
              File Permissions
            </MenuItem>
            <MenuItem as='a'>Share on Social</MenuItem>
            <MenuItem as='a'>Share by E-mail</MenuItem>
            <MenuItem as='a'>Edit Permissions</MenuItem>
            <MenuItem as='a'>Delete Permanently</MenuItem>
          </Sidebar>

          <SidebarPusher>
            <Segment basic>
              <Header as='h3'>Application Content</Header>
              <Image src='/images/wireframe/paragraph.png' />
            </Segment>
          </SidebarPusher>
        </SidebarPushable>
      </GridColumn>
    </Grid>
  )
}

export default SidebarExampleMultiple
