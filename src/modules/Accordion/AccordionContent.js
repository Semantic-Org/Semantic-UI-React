import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenUtils,
  createShorthandFactory,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'
import Transition from '../Transition'

/**
 * A content sub-component for Accordion component.
 */
function AccordionContent(props) {
  const {
    active,
    animation,
    children,
    className,
    content,
    transitionDuration,
  } = props
  const rest = getUnhandledProps(AccordionContent, props)
  const ElementType = getElementType(AccordionContent, props)

  if (transitionDuration) {
    const classes = cx(
      'content',
      className,
    )
    return (
      <Transition.Group animation={animation} duration={transitionDuration}>
        {active && (
          <ElementType {...rest} className={classes}>
            {childrenUtils.isNil(children) ? content : children}
          </ElementType>
        )}
      </Transition.Group>
    )
  }
  const classes = cx(
    'content',
    useKeyOnly(active, 'active'),
    className,
  )
  return (
    <ElementType {...rest} className={classes}>
      {childrenUtils.isNil(children) ? content : children}
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

  /** Animation type */
  animation: PropTypes.string,

  /** Animation type */
  transitionDuration: PropTypes.number,
}

AccordionContent.defaultProps = {
  animation: 'slide down',
  transitionDuration: 0,
}

AccordionContent._meta = {
  name: 'AccordionContent',
  type: META.TYPES.MODULE,
  parent: 'Accordion',
}

AccordionContent.create = createShorthandFactory(AccordionContent, content => ({ content }))

export default AccordionContent
