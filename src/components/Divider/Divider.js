import cx from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

import dividerRules from './dividerRules'
import dividerVariables from './dividerVariables'

import { createComponent } from '../../lib'

const Divider = (props) => {
  const { children, styles } = props

  return <div className={cx('ui-divider', styles.root)}>{children}</div>
}

Divider.propTypes = {
  /** Size multiplier (default 0) * */
  size: PropTypes.number,

  /** Rounding multiplier (0 equals no rounding, default: 1) * */
  rounding: PropTypes.number,

  /** TODO: this is not a prop we want here... */
  styles: PropTypes.object,

  /** Child content * */
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.array]),
}

Divider.defaultProps = {
  size: 0,
  rounding: 1,
}

export default createComponent(Divider, {
  rules: dividerRules,
  variables: dividerVariables,
})
