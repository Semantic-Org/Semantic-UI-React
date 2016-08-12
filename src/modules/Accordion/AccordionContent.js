import React, { PropTypes } from 'react'
import cx from 'classnames'

import { META, useKeyOnly } from '../../lib'

function AccordionContent({ active, children, className, ...rest }) {
  const classes = cx(
    'content',
    useKeyOnly(active, 'active'),
    className
  )

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  )
}

AccordionContent.displayName = 'AccordionContent'

AccordionContent.propTypes = {
  /** Whether or not the content is visible. */
  active: PropTypes.bool,

  /** Primary content of the Content. */
  children: PropTypes.node,

  /** Classes to add to the content className. */
  className: PropTypes.string,
}

AccordionContent._meta = {
  name: 'AccordionContent',
  type: META.TYPES.MODULE,
  parent: 'Accordion',
}

export default AccordionContent
