import cx from 'classnames'
import META from '../../utils/Meta'
import { getUnhandledProps } from '../../utils/propUtils'
import React, { PropTypes } from 'react'

function Reveal(props) {
  const rest = getUnhandledProps(Reveal, props)
  const { children, className } = props
  const classes = cx('ui', 'reveal', className)

  return <div className={classes} {...rest}>{children}</div>
}

Reveal._meta = {
  library: META.library.semanticUI,
  name: 'Reveal',
  type: META.type.element,
}

Reveal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Reveal
