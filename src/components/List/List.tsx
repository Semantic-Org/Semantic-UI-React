import _ from 'lodash'
import cx from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

import { createComponent, customPropTypes, getUnhandledProps, getElementType } from '../../lib'
import ListItem from './ListItem'
import listRules from './listRules'

class List extends React.Component<any, any> {
  static propTypes = {
    as: customPropTypes.as,

    /** Additional classes. */
    className: PropTypes.string,

    /** Toggle debug mode */
    debug: PropTypes.bool,

    /** Shorthand array of props for ListItem. */
    items: PropTypes.arrayOf(PropTypes.any),

    /** A selection list formats list items as possible choices. */
    selection: PropTypes.bool,

    /** Truncates content */
    truncateContent: PropTypes.bool,

    /** Truncates header */
    truncateHeader: PropTypes.bool,

    /** Variables */
    variables: PropTypes.object,

    children: PropTypes.node,
  }

  static defaultProps = {
    as: 'ul',
  }

  static handledProps = [
    'as',
    'children',
    'className',
    'debug',
    'items',
    'renderItem',
    'selection',
    'truncateContent',
    'truncateHeader',
    'variables',
  ]

  static Item = ListItem

  // List props that are passed to each individual Item props
  static itemProps = ['debug', 'selection', 'truncateContent', 'truncateHeader', 'variables']

  render() {
    const { className, items, styles } = this.props

    const ElementType = getElementType(List, this.props)
    const rest = getUnhandledProps(List, this.props)

    const classes = cx('ui-list', styles.root, className)
    const itemProps = _.pick(this.props, List.itemProps)

    return (
      <ElementType className={classes} {...rest}>
        {_.map(items, item => ListItem.create(item, { defaultProps: itemProps }))}
      </ElementType>
    )
  }
}

export default createComponent(List, {
  rules: listRules,
})
