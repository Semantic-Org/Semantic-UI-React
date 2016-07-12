import React, { PropTypes } from 'react'
import cx from 'classnames'

import { getElementType, getUnhandledProps, META, useKeyOnly } from '../../lib'
import { Content } from '../../parts'

function AccordionContent(props) {
  const { active, children, className } = props
  const classes = cx(
    useKeyOnly(active, 'active'),
    className
  )

  const rest = getUnhandledProps(AccordionContent, props)
  const ElementType = getElementType(AccordionContent, props)
  return (
    <Content as={ElementType} {...rest} className={classes}>
      {children}
    </Content>
  )
}

AccordionContent.propTypes = {
  ...Content.propTypes,
  /** Whether or not the content is visible. */
  active: PropTypes.bool,
}

AccordionContent._meta = {
  ...Content._meta,
  name: 'AccordionContent',
  type: META.TYPES.MODULE,
  parent: 'Accordion',
}

export default AccordionContent
