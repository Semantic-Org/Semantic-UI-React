import { useBooleanKnob } from '@stardust-ui/docs-components'
import React from 'react'
import { Header, Image, Menu, Ref, Segment, Sidebar } from 'semantic-ui-react'

const SidebarExampleTarget = () => {
  const segmentRef = React.useRef()
  const [visible, setVisible] = useBooleanKnob({ name: 'visible' })

  return (
    <Sidebar.Pushable as={Segment.Group} raised>
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
        <Menu.Item as='a'>Home</Menu.Item>
        <Menu.Item as='a'>Games</Menu.Item>
        <Menu.Item as='a'>Channels</Menu.Item>
      </Sidebar>

      <Ref innerRef={segmentRef}>
        <Segment secondary>
          <Header as='h3'>Clickable area</Header>
          <p>When you will click there, the sidebar will be closed.</p>
        </Segment>
      </Ref>

      <Segment>
        <Header as='h3'>Application Content</Header>
        <Image src='/images/wireframe/paragraph.png' />
      </Segment>
    </Sidebar.Pushable>
  )
}

export default SidebarExampleTarget
