import cx from 'clsx'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenUtils,
  createShorthandFactory,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  useKeyOnly,
  useEventCallback,
} from '../../lib'
import Icon from '../../elements/Icon'

/**
 * A title sub-component for Accordion component.
 */
const AccordionTitle = React.forwardRef(function (props, ref) {
  const { active, children, className, content, icon } = props

  const classes = cx(useKeyOnly(active, 'active'), 'title', className)
  const rest = getUnhandledProps(AccordionTitle, props)
  const ElementType = getElementType(AccordionTitle, props)
  const iconValue = _.isNil(icon) ? 'dropdown' : icon

  const handleClick = useEventCallback((e) => {
    _.invoke(props, 'onClick', e, props)
  })

  if (!childrenUtils.isNil(children)) {
    return (
      <ElementType {...rest} className={classes} onClick={handleClick} ref={ref}>
        {children}
      </ElementType>
    )
  }

  return (
    <ElementType {...rest} className={classes} onClick={handleClick} ref={ref}>
      {Icon.create(iconValue, { autoGenerateKey: false })}
      {content}
    </ElementType>
  )
})

AccordionTitle.displayName = 'AccordionTitle'
AccordionTitle.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Whether or not the title is in the open state. */
  active: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Shorthand for Icon. */
  icon: customPropTypes.itemShorthand,

  /** AccordionTitle index inside Accordion. */
  index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: PropTypes.func,
}
AccordionTitle.create = createShorthandFactory(AccordionTitle, (content) => ({ content }))

export default AccordionTitle
