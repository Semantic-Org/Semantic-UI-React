import React, { PropTypes } from 'react'
import cx from 'classnames'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'

function AccordionContent(props) {
  const { active, children, className } = props
  const classes = cx(
    'content',
    useKeyOnly(active, 'active'),
    className
  )
  const rest = getUnhandledProps(AccordionContent, props)
  const ElementType = getElementType(AccordionContent, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

AccordionContent.displayName = 'AccordionContent'

AccordionContent.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Whether or not the content is visible. */
  active: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
}

AccordionContent._meta = {
  name: 'AccordionContent',
  type: META.TYPES.MODULE,
  parent: 'Accordion',
}

export default AccordionContent
