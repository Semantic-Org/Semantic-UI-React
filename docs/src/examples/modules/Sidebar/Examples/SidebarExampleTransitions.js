import React from 'react'
import {
  SidebarPusher,
  SidebarPushable,
  ButtonGroup,
  MenuItem,
  GridRow,
  GridColumn,
  Button,
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'

const HorizontalSidebar = ({ animation, direction, visible }) => (
  <Sidebar
    as={Segment}
    animation={animation}
    direction={direction}
    visible={visible}
  >
    <Grid textAlign='center'>
      <GridRow columns={1}>
        <GridColumn>
          <Header as='h3'>New Content Awaits</Header>
        </GridColumn>
      </GridRow>
      <GridRow columns={3}>
        <GridColumn>
          <Image src='/images/wireframe/media-paragraph.png' />
        </GridColumn>
        <GridColumn>
          <Image src='/images/wireframe/media-paragraph.png' />
        </GridColumn>
        <GridColumn>
          <Image src='/images/wireframe/media-paragraph.png' />
        </GridColumn>
      </GridRow>
    </Grid>
  </Sidebar>
)

const VerticalSidebar = ({ animation, direction, visible }) => (
  <Sidebar
    as={Menu}
    animation={animation}
    direction={direction}
    icon='labeled'
    inverted
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
)

function exampleReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_ANIMATION':
      return { ...state, animation: action.animation, visible: !state.visible }
    case 'CHANGE_DIMMED':
      return { ...state, dimmed: action.dimmed }
    case 'CHANGE_DIRECTION':
      return { ...state, direction: action.direction, visible: false }
    default:
      throw new Error()
  }
}

function SidebarExampleTransitions() {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    animation: 'overlay',
    direction: 'left',
    dimmed: false,
    visible: false,
  })

  const { animation, dimmed, direction, visible } = state
  const vertical = direction === 'bottom' || direction === 'top'

  return (
    <div>
      <Checkbox
        checked={dimmed}
        label='Dim Page'
        onChange={(e, { checked }) =>
          dispatch({ type: 'CHANGE_DIMMED', dimmed: checked })
        }
        toggle
      />

      <Header as='h5'>Direction</Header>
      <ButtonGroup>
        <Button
          active={direction === 'left'}
          onClick={() =>
            dispatch({ type: 'CHANGE_DIRECTION', direction: 'left' })
          }
        >
          Left
        </Button>
        <Button
          active={direction === 'right'}
          onClick={() =>
            dispatch({ type: 'CHANGE_DIRECTION', direction: 'right' })
          }
        >
          Right
        </Button>
        <Button
          active={direction === 'top'}
          onClick={() =>
            dispatch({ type: 'CHANGE_DIRECTION', direction: 'top' })
          }
        >
          Top
        </Button>
        <Button
          active={direction === 'bottom'}
          onClick={() =>
            dispatch({ type: 'CHANGE_DIRECTION', direction: 'bottom' })
          }
        >
          Bottom
        </Button>
      </ButtonGroup>

      <Header as='h5'>All Direction Animations</Header>
      <Button
        onClick={() =>
          dispatch({ type: 'CHANGE_ANIMATION', animation: 'overlay' })
        }
      >
        Overlay
      </Button>
      <Button
        onClick={() =>
          dispatch({ type: 'CHANGE_ANIMATION', animation: 'push' })
        }
      >
        Push
      </Button>
      <Button
        onClick={() =>
          dispatch({ type: 'CHANGE_ANIMATION', animation: 'scale down' })
        }
      >
        Scale Down
      </Button>

      <Header as='h5'>Vertical-Only Animations</Header>
      <Button
        disabled={vertical}
        onClick={() =>
          dispatch({ type: 'CHANGE_ANIMATION', animation: 'uncover' })
        }
      >
        Uncover
      </Button>
      <Button
        disabled={vertical}
        onClick={() =>
          dispatch({ type: 'CHANGE_ANIMATION', animation: 'slide along' })
        }
      >
        Slide Along
      </Button>
      <Button
        disabled={vertical}
        onClick={() =>
          dispatch({ type: 'CHANGE_ANIMATION', animation: 'slide out' })
        }
      >
        Slide Out
      </Button>

      <SidebarPushable as={Segment} style={{ overflow: 'hidden' }}>
        {vertical && (
          <HorizontalSidebar
            animation={animation}
            direction={direction}
            visible={visible}
          />
        )}
        {!vertical && (
          <VerticalSidebar
            animation={animation}
            direction={direction}
            visible={visible}
          />
        )}

        <SidebarPusher dimmed={dimmed && visible}>
          <Segment basic>
            <Header as='h3'>Application Content</Header>
            <Image src='/images/wireframe/paragraph.png' />
          </Segment>
        </SidebarPusher>
      </SidebarPushable>
    </div>
  )
}

export default SidebarExampleTransitions
