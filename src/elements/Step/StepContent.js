import cx from 'clsx'
import PropTypes from 'prop-types'
import * as React from 'react'

import {
  childrenUtils,
  createShorthandFactory,
  customPropTypes,
  getComponentType,
  getUnhandledProps,
} from '../../lib'
import StepDescription from './StepDescription'
import StepTitle from './StepTitle'

/**
 * A step can contain a content.
 */
const StepContent = React.forwardRef(function (props, ref) {
  const { children, className, content, description, title } = props
  const classes = cx('content', className)
  const rest = getUnhandledProps(StepContent, props)
  const ElementType = getComponentType(props)

  if (!childrenUtils.isNil(children)) {
    return (
      <ElementType {...rest} className={classes} ref={ref}>
        {children}
      </ElementType>
    )
  }

  if (!childrenUtils.isNil(content)) {
    return (
      <ElementType {...rest} className={classes} ref={ref}>
        {content}
      </ElementType>
    )
  }

  return (
    <ElementType {...rest} className={classes} ref={ref}>
      {StepTitle.create(title, { autoGenerateKey: false })}
      {StepDescription.create(description, { autoGenerateKey: false })}
    </ElementType>
  )
})

StepContent.displayName = 'StepContent'
StepContent.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Shorthand for StepDescription. */
  description: customPropTypes.itemShorthand,

  /** Shorthand for StepTitle. */
  title: customPropTypes.itemShorthand,
}

StepContent.create = createShorthandFactory(StepContent, (content) => ({ content }))

export default StepContent
