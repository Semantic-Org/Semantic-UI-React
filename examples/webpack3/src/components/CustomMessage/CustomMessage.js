import PropTypes from 'prop-types'
import React from 'react'
import { Icon } from 'semantic-ui-react'

import * as styles from './CustomMessage.less'

const CustomMessage = ({ children }) => (
  <div className={styles.container}>
    <Icon name='question' />
    <div className={styles.textMessage}>{children}</div>
  </div>
)

CustomMessage.propTypes = {
  children: PropTypes.node,
}

export default CustomMessage
