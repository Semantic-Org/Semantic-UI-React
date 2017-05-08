import _ from 'lodash'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useValueAndKey,
  useKeyOnly,
} from '../../lib'
import Step from './Step'

/**
 * A set of steps.
 */
function StepGroup(props) {
  const {
    children,
    className,
    fluid,
    items,
    ordered,
    size,
    stackable,
    vertical,
  } = props
  const classes = cx(
    'ui',
    size,
    useKeyOnly(fluid, 'fluid'),
    useKeyOnly(ordered, 'ordered'),
    useKeyOnly(vertical, 'vertical'),
    useValueAndKey(stackable, 'stackable'),
    'steps',
    className,
  )
  const rest = getUnhandledProps(StepGroup, props)
  const ElementType = getElementType(StepGroup, props)

  if (!_.isNil(children)) {
    return <ElementType {...rest} className={classes}>{children}</ElementType>
  }

  const content = _.map(items, item => {
    const key = item.key || [item.title, item.description].join('-')
    return <Step key={key} {...item} />
  })

  return <ElementType {...rest} className={classes}>{content}</ElementType>
}

StepGroup._meta = {
  name: 'StepGroup',
  parent: 'Step',
  type: META.TYPES.ELEMENT,
}

StepGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** A fluid step takes up the width of its container. */
  fluid: PropTypes.bool,

  /** Shorthand array of props for Step. */
  items: customPropTypes.collectionShorthand,

  /** A step can show a ordered sequence of steps. */
  ordered: PropTypes.bool,

  /** Steps can have different sizes. */
  size: PropTypes.oneOf(_.without(SUI.SIZES, 'medium')),

  /** A step can stack vertically only on smaller screens. */
  stackable: PropTypes.oneOf(['tablet']),

  /** A step can be displayed stacked vertically. */
  vertical: PropTypes.bool,
}

export default StepGroup
