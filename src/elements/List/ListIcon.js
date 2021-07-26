import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import { createShorthandFactory, getUnhandledProps, SUI, useVerticalAlignProp } from '../../lib'
import Icon from '../Icon/Icon'

/**
 * A list item can contain an icon.
 */
const ListIcon = React.forwardRef(function (props, ref) {
  const { className, verticalAlign } = props
  const classes = cx(useVerticalAlignProp(verticalAlign), className)
  const rest = getUnhandledProps(ListIcon, props)

  return <Icon {...rest} className={classes} ref={ref} />
})

ListIcon.displayName = 'ListIcon'
ListIcon.propTypes = {
  /** Additional classes. */
  className: PropTypes.string,

  /** An element inside a list can be vertically aligned. */
  verticalAlign: PropTypes.oneOf(SUI.VERTICAL_ALIGNMENTS),
}

ListIcon.create = createShorthandFactory(ListIcon, (name) => ({ name }))

export default ListIcon
