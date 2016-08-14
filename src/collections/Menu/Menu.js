import _ from 'lodash'
import cx from 'classnames'
import React, { Children, cloneElement, PropTypes } from 'react'

import {
  AutoControlledComponent as Component,
  getElementType,
  getUnhandledProps,
  META,
  numberToWord,
  SUI,
  useKeyOnly,
} from '../../lib'
import MenuHeader from './MenuHeader'
import MenuItem from './MenuItem'

const _meta = {
  name: 'Menu',
  type: META.TYPES.COLLECTION,
  props: {
    widths: SUI.WIDTHS,
  },
}

/**
 * A menu displays grouped navigation actions.
 * */
export default class Menu extends Component {
  static _meta = _meta

  static autoControlledProps = [
    'activeIndex',
  ]

  static propTypes = {
    /** An element type to render as (string or function). */
    as: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ]),

    /** Index of the currently active item. */
    activeIndex: PropTypes.number,

    /** Primary content of the Menu. */
    children: PropTypes.node,

    /** Classes that will be added to the Menu className. */
    className: PropTypes.string,

    /** Initial activeIndex value. */
    defaultActiveIndex: PropTypes.number,

    /** onClick handler for MenuItem. */
    onItemClick: PropTypes.func,

    /** A vertical menu displays elements vertically. */
    vertical: PropTypes.bool,

    /** A menu can have its items divided evenly. */
    widths: PropTypes.oneOf(_meta.props.widths),
  }

  static Header = MenuHeader
  static Item = MenuItem

  state = {}

  componentWillMount() {
    super.componentWillMount()

    const activeIndex = _.findIndex(this.props.children, child => {
      return child.type === MenuItem && _.has(child, 'props.active') && child.props.active
    })
    this.trySetState({ activeIndex: _.isNumber(activeIndex) ? activeIndex : 0 })
  }

  handleItemClick = (e, index) => {
    const { onItemClick } = this.props

    this.trySetState({ activeIndex: index })
    if (onItemClick) onItemClick(e, index)
  }

  renderChildren = () => {
    const { children } = this.props
    const { activeIndex } = this.state

    return Children.map(children, (child, i) => {
      const isItem = child.type === MenuItem

      if (isItem) {
        const onClick = (e) => {
          this.handleItemClick(e, i)
          if (child.props.onClick) child.props.onClick(e, i)
        }

        return cloneElement(child, { ...child.props, active: activeIndex === i, onClick })
      }

      return child
    })
  }

  render() {
    const { className, vertical, widths } = this.props
    const classes = cx(
      'ui',
      className,
      numberToWord(widths),
      useKeyOnly(vertical, 'vertical'),
      'menu'
    )
    const rest = getUnhandledProps(Menu, this.props)
    const ElementType = getElementType(Menu, this.props)

    return (
      <ElementType {...rest} className={classes}>
        {this.renderChildren()}
      </ElementType>
    )
  }
}
