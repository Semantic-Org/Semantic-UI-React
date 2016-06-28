import cx from 'classnames'
import React, { PropTypes } from 'react'
import META from '../../utils/Meta'
import {getUnhandledProps} from '../../utils/propUtils'
import ListItem from './ListItem'

function _List(props) {
  const {
    children, className,
    } = props

  const classes = cx(
    'ui',
    'list',
    className
  )

  const ListComponent = 'div'
  const rest = getUnhandledProps(List, props)

  return (
    <ListComponent className={classes} {...rest}>
      {children}
    </ListComponent>
  )
}

_List.Item = ListItem

_List._meta = {
  library: META.library.semanticUI,
  name: 'List',
  type: META.type.element,
}

_List.propTypes = {
  /** Primary content of the List */
  children: PropTypes.node,

  /** Classes to add to the divider className. */
  className: PropTypes.string,
}

export default _List