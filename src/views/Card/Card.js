import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import * as sui from '../../utils/semanticUtils'
import { useKeyOnly } from '../../utils/propUtils'

function Card(props) {
  const {
    centered,
    children,
    className,
    color,
    fluid,
    raised,
    ...rest,
  } = props

  const classes = cx('ui',
    useKeyOnly(centered, 'centered'),
    useKeyOnly(fluid, 'fluid'),
    useKeyOnly(raised, 'raised'),
    color,
    'card',
    className,
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
  props: {
    color: sui.colors,
  },
}

Card.propTypes = {
  centered: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(Card._meta.props.color),
  fluid: PropTypes.bool,
  raised: PropTypes.bool,
}

export default Card
