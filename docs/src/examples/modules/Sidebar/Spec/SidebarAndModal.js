import React from 'react'
import {
  Button,
  Grid,
  Header,
  Icon,
  Menu,
  Segment,
  Sidebar,
  Modal,
} from 'semantic-ui-react'

const SidebarAndModal = () => {
  const [visible, setVisible] = React.useState(false)

  return (
    <>
      <Button
        data-tid='button-sidebar-toggle'
        onClick={() => setVisible(!visible)}
      >
        Toggle
      </Button>
      <Grid columns={1}>
        <Grid.Column>Hello world!</Grid.Column>

        <Grid.Column>
          <Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation='overlay'
              data-tid='sidebar'
              icon='labeled'
              inverted
              onHide={() => setVisible(false)}
              vertical
              visible={visible}
              width='thin'
            >
              <Menu.Item as='a' data-tid='sidebar-home'>
                <Icon name='home' />
                Home
              </Menu.Item>
              <Menu.Item as='a'>
                <Icon name='gamepad' />
                Games
              </Menu.Item>
              <Menu.Item as='a'>
                <Icon name='camera' />
                Channels
              </Menu.Item>
            </Sidebar>

            <Sidebar.Pusher>
              <Segment basic style={{ minHeight: '50vh' }}>
                <Header as='h3'>Application Content</Header>
                <Modal
                  trigger={
                    <Button data-tid='button-modal-open'>Show Modal</Button>
                  }
                  header='Reminder!'
                  content={{
                    content: 'Call Benjamin regarding the reports',
                    'data-tid': 'modal-content',
                  }}
                  actions={[
                    'Snooze',
                    {
                      key: 'done',
                      content: 'Done',
                      'data-tid': 'button-modal-close',
                      positive: true,
                    },
                  ]}
                />
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Grid.Column>
      </Grid>
    </>
  )
}

export default SidebarAndModal
