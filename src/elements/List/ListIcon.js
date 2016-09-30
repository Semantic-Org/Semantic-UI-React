import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  getUnhandledProps,
  META,
  SUI,
  useVerticalAlignProp,
} from '../../lib'
import { Icon } from '../'

function ListIcon(props) {
  const { className, verticalAlign } = props
  const classes = cx(
    useVerticalAlignProp(verticalAlign),
    className
  )
  const rest = getUnhandledProps(ListIcon, props)

  return <Icon {...rest} className={classes} />
}

ListIcon._meta = {
  name: 'ListIcon',
  parent: 'List',
  type: META.TYPES.ELEMENT,
  props: {
    verticalAlign: SUI.VERTICAL_ALIGNMENTS,
  },
}

ListIcon.propTypes = {
  /** Classes to add to the ListIcon className. */
  className: PropTypes.string,

  /** An element inside a list can be vertically aligned. */
  verticalAlign: PropTypes.oneOf(ListIcon._meta.props.verticalAlign),
}

export default ListIcon
