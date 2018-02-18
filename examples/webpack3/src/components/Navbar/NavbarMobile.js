import PropTypes from 'prop-types'
import React from 'react'
import { Icon, Image, Menu, Sidebar } from 'semantic-ui-react'

import logo from 'resources/logo.png'
import * as styles from './NavbarMobile.less'

const NavbarMobile = ({ children, leftItems, onPusherClick, onToggle, rightItems, visible }) => (
  <Sidebar.Pushable>
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      items={[...leftItems, ...rightItems]}
      vertical
      visible={visible}
    />
    <Sidebar.Pusher dimmed={visible} onClick={onPusherClick} className={styles.pusher}>
      <Menu fixed='top' inverted>
        <Menu.Item>
          <Image size='mini' src={logo} />
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item onClick={onToggle}>
            <Icon name='sidebar' />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      {children}
    </Sidebar.Pusher>
  </Sidebar.Pushable>
)

NavbarMobile.propTypes = {
  children: PropTypes.node,
  leftItems: PropTypes.arrayOf(PropTypes.object),
  onPusherClick: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  rightItems: PropTypes.arrayOf(PropTypes.object),
  visible: PropTypes.bool.isRequired,
}

export default NavbarMobile
