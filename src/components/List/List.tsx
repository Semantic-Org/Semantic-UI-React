import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

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

    /**
     * Renderer for each item in the List
     *
     * @param {ListItemProps} props - props passed to each ListItem
     * @param {any} item - Item in the list
     */
    renderItem: PropTypes.func,

    children: PropTypes.node,
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

  static defaultProps = {
    renderItem: (props, item) => (
      <ListItem
        // TODO: use real keys
        key={item.header || item.content}
        debug={props.debug}
        selection={props.selection}
        truncateContent={props.truncateContent}
        truncateHeader={props.truncateHeader}
        variables={props.variables}
        {...item}
      />
    ),
  }

  renderItems = props => {
    const { items, renderItem } = props
    return items.map(item => renderItem(props, item))
  }

  render() {
    const ElementType = getElementType(List, this.props)
    const { children, items, className } = this.props
    const rest = getUnhandledProps(List, this.props)

    return (
      <ElementType className={cx('ui-list', className)} {...rest}>
        {items ? this.renderItems(this.props) : children}
      </ElementType>
    )
  }
}

export default createComponent(List, {
  rules: listRules,
})
