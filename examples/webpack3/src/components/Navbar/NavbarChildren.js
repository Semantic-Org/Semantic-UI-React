import PropTypes from 'prop-types'
import React from 'react'
import { Container } from 'semantic-ui-react'

import * as styles from './NavbarChildren.less'

const NavbarChildren = ({ children }) => <Container className={styles.container}>{children}</Container>

NavbarChildren.propTypes = {
  children: PropTypes.node,
}

export default NavbarChildren
