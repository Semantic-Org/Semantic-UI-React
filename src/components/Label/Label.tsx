import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'

import {
  customPropTypes,
  createComponent,
  getElementType,
  getUnhandledProps,
  childrenExist,
} from '../../lib'
import labelRules from './labelRules'
import labelVariables from './labelVariables'

/**
 * A label displays content classification
 */
const Label: any = props => {
  const ElementType = getElementType(Label, props)
  const rest = getUnhandledProps(Label, props)
  const { content, styles, children, className } = props

  return (
    <ElementType {...rest} className={cx('ui-label', styles.root, className)}>
      {childrenExist(children) ? children : content}
    </ElementType>
  )
}

Label.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** A label can be circular. */
  circular: PropTypes.bool,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  styles: PropTypes.object,
}

Label.handledProps = ['as', 'children', 'circular', 'className', 'content', 'styles']

Label.defaultProps = {
  as: 'label',
}

export default createComponent(Label, {
  rules: labelRules,
  variables: labelVariables,
})
