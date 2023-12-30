import React from 'react'
import {
  SidebarPusher,
  SidebarPushable,
  SegmentGroup,
  MenuItem,
  GridColumn,
  Button,
  Checkbox,
  Grid,
  Header,
  Image,
  Label,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'

const initialState = { items: [], count: 0 }

const logReducer = (state, action) => {
  switch (action.type) {
    case 'clearLog':
      return initialState
    case 'updateLog':
      return {
        items: [
          `${new Date().toLocaleTimeString()}: ${action.name}`,
          ...state.items,
        ].slice(0, 20),
        count: state.count + 1,
      }
    default:
      return state
  }
}

const SidebarExampleCallback = () => {
  const [logs, dispatch] = React.useReducer(logReducer, initialState)
  const [visible, setVisible] = React.useState(false)

  return (
    <Grid>
      <GridColumn width={16}>
        <Checkbox
          checked={visible}
          label={{ children: <code>visible</code> }}
          onChange={(e, data) => setVisible(data.checked)}
        />
      </GridColumn>

      <GridColumn width={8}>
        <SidebarPushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHidden={() => dispatch({ name: 'onHidden', type: 'updateLog' })}
            onHide={() => {
              setVisible(false)
              dispatch({ name: 'onHide', type: 'updateLog' })
            }}
            onShow={() => dispatch({ name: 'onShow', type: 'updateLog' })}
            onVisible={() => dispatch({ name: 'onVisible', type: 'updateLog' })}
            vertical
            visible={visible}
            width='thin'
          >
            <MenuItem as='a'>Home</MenuItem>
            <MenuItem as='a'>Games</MenuItem>
            <MenuItem as='a'>Channels</MenuItem>
          </Sidebar>

          <SidebarPusher>
            <Segment basic>
              <Header as='h3'>Application Content</Header>
              <Image src='/images/wireframe/paragraph.png' />
            </Segment>
          </SidebarPusher>
        </SidebarPushable>
      </GridColumn>

      <GridColumn width={8}>
        <SegmentGroup>
          <Segment>
            <Button
              compact
              size='small'
              floated='right'
              onClick={() => dispatch({ type: 'clearLog' })}
            >
              Clear
            </Button>
            Event Log <Label circular>{logs.count}</Label>
          </Segment>
          <Segment secondary>
            <pre>
              {logs.items.map((e, i) => (
                <div key={i}>{e}</div>
              ))}
            </pre>
          </Segment>
        </SegmentGroup>
      </GridColumn>
    </Grid>
  )
}

export default SidebarExampleCallback
