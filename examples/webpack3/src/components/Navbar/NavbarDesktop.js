import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { Container, Image, Menu } from 'semantic-ui-react'

import logo from 'resources/logo.png'

const NavbarDesktop = ({ leftItems, rightItems }) => (
  <Menu fixed='top' inverted>
    <Container>
      <Menu.Item>
        <Image size='mini' src={logo} />
      </Menu.Item>
      {_.map(leftItems, item => <Menu.Item {...item} />)}
      <Menu.Menu position='right'>
        {_.map(rightItems, item => <Menu.Item {...item} />)}
      </Menu.Menu>
    </Container>
  </Menu>
)

NavbarDesktop.propTypes = {
  leftItems: PropTypes.arrayOf(PropTypes.object),
  rightItems: PropTypes.arrayOf(PropTypes.object),
}

export default NavbarDesktop
