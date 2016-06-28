import cx from 'classnames'
import React, { PropTypes } from 'react'
import META from '../../utils/Meta'
import { getUnhandledProps } from '../../utils/propUtils'
import ListItem from './ListItem'

function List(props) {
  const {
    children, className,
    } = props

  const classes = cx(
    'ui',
    'list',
    className
  )

  const rest = getUnhandledProps(List, props)

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

List.Item = ListItem

List._meta = {
  library: META.library.semanticUI,
  name: 'List',
  type: META.type.element,
}

List.propTypes = {
  /** Primary content of the List */
  children: PropTypes.node,

  /** Classes to add to the divider className. */
  className: PropTypes.string,
}

export default List
