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
} from '../../lib'
import MenuItem from './MenuItem'

/**
 * A menu displays grouped navigation actions.
 * */
export default class Menu extends Component {
  static autoControlledProps = [
    'activeIndex',
  ]

  static _meta = {
    name: 'Menu',
    type: META.TYPES.COLLECTION,
    props: {
      widths: SUI.WIDTHS,
    },
  }

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

    /** A menu can have its items divided evenly. */
    widths: PropTypes.oneOf(Menu._meta.props.widths),
  }

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
    const { className, widths } = this.props
    const classes = cx(
      'ui',
      className,
      numberToWord(widths),
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
