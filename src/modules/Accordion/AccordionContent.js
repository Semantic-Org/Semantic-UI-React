import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenUtils,
  createShorthandFactory,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  useKeyOnly,
} from '../../lib'
import { withTransition } from '../Transition'

/**
 * A content sub-component for Accordion component.
 */
function AccordionContent(props) {
  const { active, children, className, content } = props
  const classes = cx('content', useKeyOnly(active, 'active'), className)
  const rest = getUnhandledProps(AccordionContent, props)
  const ElementType = getElementType(AccordionContent, props)

  return (
    <ElementType {...rest} className={classes}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
}

AccordionContent.defaultProps = {
  transition: 'fade',
}

AccordionContent.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Whether or not the content is visible. */
  active: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  transition: '',
}

AccordionContent.create = createShorthandFactory(AccordionContent, content => ({ content }))

export default withTransition(AccordionContent, { visibleProp: 'active' })
