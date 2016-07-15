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
  /** Show that the Loader is active. */
  active: PropTypes.bool,

  /** Classes that will be added to the Loader className. */
  className: PropTypes.string,

  /** Primary content of the Loader. Mutually exclusive with the text prop. */
  children: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['text']),
    PropTypes.node,
  ]),

  /** Show that the Loader is inactive. */
  disabled: PropTypes.bool,

  /** Show that the Loader is indeterminate. */
  indeterminate: PropTypes.bool,

  /** Show that the Loader is inverted. */
  inverted: PropTypes.bool,

  /** Show that the Loader is inline. */
  inline: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(Loader._meta.props.inline),
  ]),

  /** Size of the Loader. */
  size: PropTypes.oneOf(Loader._meta.props.size),

  /** Text content of the Loader. Mutually exclusive with the children prop. */
  text: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['children']),
    PropTypes.node,
  ]),
}

export default Loader

