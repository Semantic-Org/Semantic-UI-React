import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import {
  AutoControlledComponent as Component,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'
import Grid from '../../collections/Grid/Grid'
import GridColumn from '../../collections/Grid/GridColumn'
import Menu from '../../collections/Menu/Menu'
import TabPane from './TabPane'

/**
 * A Tab is a hidden section of content activated by a Menu.
 * @see Menu
 * @see Segment
 */
class Tab extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** The initial activeIndex. */
    defaultActiveIndex: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),

    /** Index of the currently active tab. */
    activeIndex: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),

    /** Shorthand props for the Menu. */
    menu: PropTypes.object,

    /** Shorthand props for the Grid. */
    grid: PropTypes.object,

    /**
     * Called on tab change.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props and proposed new activeIndex.
     * @param {object} data.activeIndex - The new proposed activeIndex.
     */
    onTabChange: PropTypes.func,

    /**
     * Array of objects describing each Menu.Item and Tab.Pane:
     * {
     *   menuItem: 'Home',
     *   render: () => <Tab.Pane>Welcome!</Tab.Pane>
     * }
     */
    panes: PropTypes.arrayOf(PropTypes.shape({
      menuItem: customPropTypes.itemShorthand,
      render: PropTypes.func.isRequired,
    })),
  }

  static autoControlledProps = [
    'activeIndex',
  ]

  static defaultProps = {
    menu: { attached: true, tabular: true, vertical: false, fluid: false },
    grid: { segmentWidth: 12, tabWidth: 4 },
  }

  static _meta = {
    name: 'Tab',
    type: META.TYPES.MODULE,
  }

  static Pane = TabPane

  getInitialAutoControlledState() {
    return { activeIndex: 0 }
  }

  handleItemClick = (e, { index }) => {
    _.invoke(this.props, 'onTabChange', e, { ...this.props, activeIndex: index })
    this.trySetState({ activeIndex: index })
  }

  renderMenu() {
    const { menu, panes } = this.props
    const { activeIndex } = this.state

    return Menu.create(menu, {
      overrideProps: {
        items: _.map(panes, 'menuItem'),
        onItemClick: this.handleItemClick,
        activeIndex,
      },
    })
  }

  renderColumn(columnProps) {
    return GridColumn.create(columnProps)
  }

  renderVertical(menu) {
    const { grid, panes } = this.props
    const { activeIndex } = this.state

    return (
      <Grid>
        {menu.props.tabular !== 'right' && this.renderColumn({ width: grid.tabWidth, children: menu })}
        {this.renderColumn({
          width: grid.segmentWidth,
          children: _.invoke(_.get(panes, `[${activeIndex}]`), 'render', this.props),
          stretched: true }
        )}
        {menu.props.tabular === 'right' && this.renderColumn({ width: grid.tabWidth, children: menu })}
      </Grid>
    )
  }

  render() {
    const { panes } = this.props
    const { activeIndex } = this.state

    const menu = this.renderMenu()
    const grid = menu.props.vertical === true ? this.renderVertical(menu) : null
    const rest = getUnhandledProps(Tab, this.props)
    const ElementType = getElementType(Tab, this.props)

    return (
      <ElementType {...rest}>
        {menu.props.vertical === true && grid}
        {menu.props.vertical !== true && menu.props.attached !== 'bottom' && menu}
        {menu.props.vertical !== true && _.invoke(_.get(panes, `[${activeIndex}]`), 'render', this.props)}
        {menu.props.vertical !== true && menu.props.attached === 'bottom' && menu}
      </ElementType>
    )
  }
}

export default Tab
