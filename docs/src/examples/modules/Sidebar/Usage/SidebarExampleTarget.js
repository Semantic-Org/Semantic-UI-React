import React from 'react'
import {
  SidebarPushable,
  SegmentGroup,
  MenuItem,
  GridColumn,
  Checkbox,
  Grid,
  Header,
  Image,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'

const SidebarExampleTarget = () => {
  const segmentRef = React.useRef()
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
        <SidebarPushable as={SegmentGroup} raised>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={() => setVisible(false)}
            vertical
            target={segmentRef}
            visible={visible}
            width='thin'
          >
            <MenuItem as='a'>Home</MenuItem>
            <MenuItem as='a'>Games</MenuItem>
            <MenuItem as='a'>Channels</MenuItem>
          </Sidebar>

          <Segment secondary ref={segmentRef}>
            <Header as='h3'>Clickable area</Header>
            <p>When you will click there, the sidebar will be closed.</p>
          </Segment>

          <Segment>
            <Header as='h3'>Application Content</Header>
            <Image src='/images/wireframe/paragraph.png' />
          </Segment>
        </SidebarPushable>
      </GridColumn>
    </Grid>
  )
}

export default SidebarExampleTarget
