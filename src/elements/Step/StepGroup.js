import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { customPropTypes, getUnhandledProps, useKeyOnly } from '../../utils/propUtils'
import Step from './Step'

function StepGroup(props) {
  const { className, children, items, ordered, vertical } = props
  const classes = cx(
    'ui',
    useKeyOnly(ordered, 'ordered'),
    useKeyOnly(vertical, 'vertical'),
    className,
    'steps',
  )
  const rest = getUnhandledProps(StepGroup, props)

  if (!items) return <div {...rest} className={classes}>{ children }</div>

  return <div {...rest} className={classes}>{ items.map((item) => <Step {...item} />) }</div>
}

StepGroup._meta = {
  library: META.library.semanticUI,
  name: 'StepGroup',
  parent: 'Step',
  type: META.type.element,
}

StepGroup.propTypes = {
  /** Classes that will be added to the StepGroup className. */
  className: PropTypes.string,

  /** Primary content of the StepGroup. Mutually exclusive with items prop. */
  children: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['description', 'title']),
    PropTypes.node,
  ]),

  /** Primary content of the StepGroup. Mutually exclusive with items children. */
  items: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['description', 'title']),
    PropTypes.array,
  ]),

  /** A step can show a ordered sequence of steps. */
  ordered: PropTypes.bool,

  /** A step can be displayed stacked vertically. */
  vertical: PropTypes.bool,
}

export default StepGroup
