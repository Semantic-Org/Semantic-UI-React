import _ from 'lodash'
import React, { PropTypes } from 'react'
import cx from 'classnames'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
  createShorthandFactory,
} from '../../lib'

/**
 * A content sub-component for Accordion component.
 */
function AccordionContent(props) {
  const { active, children, className, content } = props
  const classes = cx(
    'content',
    useKeyOnly(active, 'active'),
    className
  )
  const rest = getUnhandledProps(AccordionContent, props)
  const ElementType = getElementType(AccordionContent, props)

  return (
    <ElementType {...rest} className={classes}>
      {_.isNil(children) ? content : children}
    </ElementType>
  )
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
}

AccordionContent._meta = {
  name: 'AccordionContent',
  type: META.TYPES.MODULE,
  parent: 'Accordion',
}

AccordionContent.create = createShorthandFactory(AccordionContent, content => ({ content }))

export default AccordionContent
