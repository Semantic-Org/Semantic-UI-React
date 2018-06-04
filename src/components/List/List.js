import React from 'react'
import PropTypes from 'prop-types'
import createComponent from '../../lib/createComponent'
import ListItem from './ListItem'
import listRules from './listRules'

class List extends React.Component {
  static _meta = {
    type: 'component',
    name: 'List',
  }

  static propTypes = {
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

    rest: PropTypes.object,
  }

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

  renderItems = (props) => {
    const { items, renderItem } = props
    return items.map(item => renderItem(props, item))
  }

  render() {
    const { children, items, rest } = this.props

    return (
      <div className='list' {...rest}>
        {items ? this.renderItems(this.props) : children}
      </div>
    )
  }
}

export default createComponent(List, {
  rules: listRules,
})
