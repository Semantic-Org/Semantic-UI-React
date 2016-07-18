import React, { PropTypes } from 'react'
import cx from 'classnames'

import * as sui from '../../utils/semanticUtils'
import { customPropTypes, getUnhandledProps, useKeyOnly, useKeyOrValueAndKey } from '../../utils/propUtils'
import META from '../../utils/Meta'

function Loader(props) {
  const { children, className, active, disabled, indeterminate, inline, inverted, size, text } = props
  const classes = cx(
    'ui',
    useKeyOnly(active, 'active'),
    useKeyOnly(disabled, 'disabled'),
    useKeyOnly(indeterminate, 'indeterminate'),
    useKeyOrValueAndKey(inline, 'inline'),
    useKeyOnly(inverted, 'inverted'),
    useKeyOnly(text, 'text') || useKeyOnly(children, 'text'),
    size,
    className,
    'loader',
  )
  const rest = getUnhandledProps(Loader, props)

  return <div className={classes} {...rest}>{ children || text }</div>
}

Loader._meta = {
  library: META.library.semanticUI,
  name: 'Loader',
  type: META.type.element,
  props: {
    inline: ['centered'],
    size: sui.sizes,
  },
}

Loader.propTypes = {
  /** A loader can be active or visible. */
  active: PropTypes.bool,

  /** Classes that will be added to the Loader className. */
  className: PropTypes.string,

  /** Primary content of the Loader. Mutually exclusive with the text prop. */
  children: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['text']),
    PropTypes.node,
  ]),

  /** A loader can be disabled or hidden. */
  disabled: PropTypes.bool,

  /** A loader can show it's unsure of how long a task will take. */
  indeterminate: PropTypes.bool,

  /** Loaders can have their colors inverted. */
  inverted: PropTypes.bool,

  /** Loaders can appear inline with content. */
  inline: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(Loader._meta.props.inline),
  ]),

  /** Loaders can have different sizes. */
  size: PropTypes.oneOf(Loader._meta.props.size),

  /** Primary content of the Loader. Mutually exclusive with the children prop. */
  text: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['children']),
    PropTypes.node,
  ]),
}

export default Loader
