import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  createShorthandFactory,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'
import Segment from '../../elements/Segment/Segment'

/**
 * A tab pane holds the content of a tab.
 */
function TabPane(props) {
  const { children, className, loading } = props

  const classes = cx(
    useKeyOnly(loading, 'loading'),
    'active tab',
    className
  )
  const rest = getUnhandledProps(TabPane, props)
  const ElementType = getElementType(TabPane, props)

  const calculatedDefaultProps = {}
  if (ElementType === Segment) {
    calculatedDefaultProps.attached = 'bottom'
  }

  return (
    <ElementType {...calculatedDefaultProps} {...rest} className={classes} loading={loading}>
      {children}
    </ElementType>
  )
}

TabPane._meta = {
  name: 'TabPane',
  parent: 'Tab',
  type: META.TYPES.MODULE,
}

TabPane.defaultProps = {
  as: Segment,
}

TabPane.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** A Tab.Pane can display a loading indicator. */
  loading: PropTypes.bool,
}

TabPane.create = createShorthandFactory(TabPane, children => ({ children }))

export default TabPane
