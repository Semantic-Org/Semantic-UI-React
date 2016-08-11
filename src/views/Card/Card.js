import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'

function Card(props) {
  const { children, className, ...rest } = props
  const classes = cx(
    className,
    'card',
  )
  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  )
}

Card._meta = {
  name: 'Card',
  type: META.type.view,
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Card
