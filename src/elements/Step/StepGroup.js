import _ from 'lodash'
import cx from 'classnames'
import React, { PropTypes } from 'react'

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

function StepGroup(props) {
  const { children, className, fluid, items, ordered, size, stackable, vertical } = props
  const classes = cx(
    'ui',
    useKeyOnly(fluid, 'fluid'),
    useKeyOnly(ordered, 'ordered'),
    useValueAndKey(stackable, 'stackable'),
    useKeyOnly(vertical, 'vertical'),
    size,
    className,
    'steps',
  )
  const rest = getUnhandledProps(StepGroup, props)
  const ElementType = getElementType(StepGroup, props)

  if (children) {
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
  props: {
    sizes: _.without(SUI.SIZES, 'medium'),
    stackable: ['tablet'],
  },
  type: META.TYPES.ELEMENT,
}

StepGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Additional classes. */
  className: PropTypes.string,

  /** Primary content. */
  children: PropTypes.node,

  /** A fluid step takes up the width of its container. */
  fluid: PropTypes.bool,

  /** Shorthand array of props for Step. */
  items: customPropTypes.collectionShorthand,

  /** A step can show a ordered sequence of steps. */
  ordered: PropTypes.bool,

  /** Steps can have different sizes. */
  size: PropTypes.oneOf(StepGroup._meta.props.sizes),

  /** A step can stack vertically only on smaller screens. */
  stackable: PropTypes.oneOf(StepGroup._meta.props.stackable),

  /** A step can be displayed stacked vertically. */
  vertical: PropTypes.bool,
}

export default StepGroup
