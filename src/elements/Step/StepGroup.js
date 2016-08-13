import _ from 'lodash'
import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getUnhandledProps,
  META,
  SUI,
  useValueAndKey,
  useKeyOnly,
} from '../../lib'
import Step from './Step'

function StepGroup(props) {
  const { className, children, fluid, items, ordered, size, stackable, vertical } = props
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

  const content = !items ? children : items.map(item => {
    const key = item.key || [item.title, item.description].join('-')
    return <Step key={key} {...item} />
  })

  return <div {...rest} className={classes}>{content}</div>
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
  /** Classes that will be added to the StepGroup className. */
  className: PropTypes.string,

  /** Primary content of the StepGroup. Mutually exclusive with items prop. */
  children: customPropTypes.every([
    customPropTypes.disallow(['items']),
    PropTypes.node,
  ]),

  /** A fluid step takes up the width of its container. */
  fluid: PropTypes.bool,

  /** Primary content of the StepGroup. Mutually exclusive with items children. */
  items: customPropTypes.every([
    customPropTypes.disallow(['description', 'title']),
    PropTypes.arrayOf(PropTypes.shape({
      description: PropTypes.node,
      icon: PropTypes.node,
      key: PropTypes.string,
      title: PropTypes.node,
    })),
  ]),

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
