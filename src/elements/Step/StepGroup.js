import _ from 'lodash'
import cx from 'classnames'
import React, { PropTypes } from 'react'

import { mapChildType } from '../../utils/childrenUtils'
import META from '../../utils/Meta'
import { customPropTypes, getUnhandledProps, useValueAndKey, useKeyOnly } from '../../utils/propUtils'
import * as sui from '../../utils/semanticUtils'
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

  if (items) {
    return (
      <div {...rest} className={classes}>
        {items.map((item, index) => <Step key={index} {...item} ordered={ordered} />)}
      </div>
    )
  }

  return (
    <div {...rest} className={classes}>
      {mapChildType(children, Step, (step, index) => (
        <Step {...step.props} key={index} ordered={ordered} />
      ))}
    </div>
  )
}

StepGroup._meta = {
  library: META.library.semanticUI,
  name: 'StepGroup',
  parent: 'Step',
  props: {
    sizes: _.without(sui.sizes, 'medium'),
    stackable: ['tablet'],
  },
  type: META.type.element,
}

StepGroup.propTypes = {
  /** Classes that will be added to the StepGroup className. */
  className: PropTypes.string,

  /** Primary content of the StepGroup. Mutually exclusive with items prop. */
  children: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['description', 'title']),
    customPropTypes.ofComponentTypes(['Step']),    // <-- only allow Step children
    PropTypes.node,
  ]),

  /** A fluid step takes up the width of its container. */
  fluid: PropTypes.bool,

  /** Primary content of the StepGroup. Mutually exclusive with items children. */
  items: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['description', 'title']),
    PropTypes.array,
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
