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

function shouldRender(active, renderActiveOnly) {
  if (renderActiveOnly) {
    return active
  }

  return true
}

function renderChildrenOrContent(children, content) {
  return childrenUtils.isNil(children) ? content : children
}

/**
 * A content sub-component for Accordion component.
 */
function AccordionContent(props) {
  const { active, renderActiveOnly, children, className, content } = props
  const classes = cx('content', useKeyOnly(active, 'active'), className)
  const rest = getUnhandledProps(AccordionContent, props)
  const ElementType = getElementType(AccordionContent, props)

  return (
    <ElementType {...rest} className={classes}>
      {shouldRender(active, renderActiveOnly) ? renderChildrenOrContent(children, content) : null}
    </ElementType>
  )
}

AccordionContent.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Whether or not the content is visible. */
  active: PropTypes.bool,

  /** Only render content or children if active */
  renderActiveOnly: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,
}

AccordionContent.defaultProps = {
  renderActiveOnly: true,
}

AccordionContent.create = createShorthandFactory(AccordionContent, content => ({ content }))

export default AccordionContent
