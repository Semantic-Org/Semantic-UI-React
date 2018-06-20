import cx from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

import dividerRules from './dividerRules'
import dividerVariables from './dividerVariables'

import { customPropTypes, createComponent, getElementType, getUnhandledProps } from '../../lib'

const Divider: any = (props: any) => {
  const ElementType = getElementType(Divider, props)
  const { children, className, styles } = props
  const rest = getUnhandledProps(Divider, props)

  return (
    <ElementType {...rest} className={cx('ui-divider', styles.root, className)}>
      {children}
    </ElementType>
  )
}

Divider.propTypes = {
  as: customPropTypes.as,

  /** Size multiplier (default 0) * */
  size: PropTypes.number,

  /** TODO: this is not a prop we want here... */
  styles: PropTypes.object,

  /** Child content * */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
}

Divider.handledProps = ['as', 'children', 'className', 'size', 'styles']

Divider.defaultProps = {
  size: 0,
}

export default createComponent(Divider, {
  rules: dividerRules,
  variables: dividerVariables,
})
