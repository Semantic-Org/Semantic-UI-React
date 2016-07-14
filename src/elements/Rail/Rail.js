import _ from 'lodash'
import React, { PropTypes } from 'react'
import cx from 'classnames'

import * as sui from '../../utils/semanticUtils'
import { customPropTypes, getUnhandledProps, useKeyOnly, useKeyOrValueAndKey } from '../../utils/propUtils'
import META from '../../utils/Meta'

function Rail(props) {
  const { attached, className, close, children, dividing, internal, position, size } = props
  const classes = cx(
    'ui',
    position,
    useKeyOnly(attached, 'attached'),
    useKeyOrValueAndKey(close, 'close'),
    useKeyOnly(dividing, 'dividing'),
    useKeyOnly(internal, 'internal'),
    size,
    className,
    'rail',
  )
  const rest = getUnhandledProps(Rail, props)

  return <div className={classes} {...rest}>{ children }</div>
}

Rail._meta = {
  library: META.library.semanticUI,
  name: 'Rail',
  props: {
    close: ['very'],
    position: sui.floats,
    size: _.without(sui.sizes, 'mini', 'small', 'medium', 'big'),
  },
  type: META.type.element,
}

Rail.propTypes = {
  /** Show that the Rail is attached. */
  attached: PropTypes.bool,

  /** Classes that will be added to the Rail className. */
  className: PropTypes.string,

  /** Show that the Rail is close. */
  close: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(Rail._meta.props.close),
  ]),

  /** Primary content of the Rail. */
  children: customPropTypes.ofComponentTypes([
    'Segment',
  ]),

  /** Show that the Rail is dividing. */
  dividing: PropTypes.bool,

  /** Show that the Rail is internal. */
  internal: PropTypes.bool,

  /** Show that the Rail is inverted. */
  inverted: PropTypes.bool,

  /** Shows Rail's position. */
  position: PropTypes.oneOf(Rail._meta.props.position).isRequired,

  /** Size of the Rail. */
  size: PropTypes.oneOf(Rail._meta.props.size),
}

export default Rail

