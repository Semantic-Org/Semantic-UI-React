import React, { PropTypes } from 'react'
import cx from 'classnames'
import META from '../../utils/Meta'

function Flag(props) {
  const { className, name, ...rest } = props
  const classes = cx(
    name,
    className,
    'flag',
  )

  return (<i className={classes} {...rest} />)
}

Flag._meta = {
  library: META.library.semanticUI,
  name: 'Flag',
  type: META.type.element,
}

Flag.propTypes = {
  /** Classes to add to the Flag className. */
  className: PropTypes.string,

  /** Name for element, can use the two digit country code, the full name, or a common alias */
  name: PropTypes.string.isRequired,
}

export default Flag
