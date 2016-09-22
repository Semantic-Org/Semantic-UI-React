import React, { PropTypes } from 'react'
import cx from 'classnames'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'

function AccordionTitle(props) {
  const { active, children, className, onClick } = props
  const classes = cx(
    'title',
    useKeyOnly(active, 'active'),
    className
  )

  const handleClick = (e) => {
    if (onClick) onClick(e)
  }

  const ElementType = getElementType(AccordionTitle, props)
  const rest = getUnhandledProps(AccordionTitle, props)

  return (
    <ElementType {...rest} className={classes} onClick={handleClick}>
      {children}
    </ElementType>
  )
}

AccordionTitle.displayName = 'AccordionTitle'

AccordionTitle.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Whether or not the title is in the open state. */
  active: PropTypes.bool,

  /** Primary content of the Title. */
  children: PropTypes.node,

  /** Classes to add to the title className. */
  className: PropTypes.string,

  /** Called with (event, index) on title click. */
  onClick: PropTypes.func,
}

AccordionTitle._meta = {
  name: 'AccordionTitle',
  type: META.TYPES.MODULE,
  parent: 'Accordion',
}

export default AccordionTitle
