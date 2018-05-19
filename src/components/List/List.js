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
    debugLayout: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.object),
    selection: PropTypes.bool,
    truncateContent: PropTypes.bool,
    truncateHeader: PropTypes.bool,
    variables: PropTypes.object,
    renderItem: PropTypes.func,
    children: PropTypes.arrayOf(PropTypes.any),
    rest: PropTypes.object,
  }

  static Item = ListItem

  static defaultProps = {
    renderItem: (props, item) => (
      <ListItem
        // TODO: use real keys
        key={item.header || item.content}
        debugLayout={props.debugLayout}
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

export const List_ = createComponent(List, {
  rules: listRules,
})

export default List
