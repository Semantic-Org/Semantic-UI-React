import React, { PropTypes } from 'react'
import cx from 'classnames'

import META from '../../utils/Meta'
import { useKeyOnly } from '../../utils/propUtils'

function AccordionTitle({ active, children, className, onClick, ...rest }) {
  const classes = cx(
    'title',
    useKeyOnly(active, 'active'),
    className
  )

  const handleClick = (e) => {
    if (onClick) onClick(e)
  }

  return (
    <div {...rest} className={classes} onClick={handleClick}>
      {children}
    </div>
  )
}

AccordionTitle.displayName = 'AccordionTitle'

AccordionTitle.propTypes = {
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
  library: META.library.semanticUI,
  name: 'AccordionTitle',
  type: META.type.module,
  parent: 'Accordion',
}

export default AccordionTitle
