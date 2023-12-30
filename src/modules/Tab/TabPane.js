import cx from 'clsx'
import PropTypes from 'prop-types'
import * as React from 'react'

import {
  childrenUtils,
  createShorthandFactory,
  customPropTypes,
  getComponentType,
  getUnhandledProps,
  useKeyOnly,
} from '../../lib'
import Segment from '../../elements/Segment/Segment'

/**
 * A tab pane holds the content of a tab.
 */
const TabPane = React.forwardRef(function (props, ref) {
  const { active = true, children, className, content, loading } = props

  const classes = cx(useKeyOnly(active, 'active'), useKeyOnly(loading, 'loading'), 'tab', className)
  const rest = getUnhandledProps(TabPane, props)
  const ElementType = getComponentType(props, { defaultAs: Segment })

  const calculatedDefaultProps = {}

  if (ElementType === Segment) {
    calculatedDefaultProps.attached = 'bottom'
  }

  return (
    <ElementType {...calculatedDefaultProps} {...rest} className={classes} ref={ref}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
})

TabPane.displayName = 'TabPane'
TabPane.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** A tab pane can be active. */
  active: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** A Tab.Pane can display a loading indicator. */
  loading: PropTypes.bool,
}

TabPane.create = createShorthandFactory(TabPane, (content) => ({ content }))

export default TabPane
