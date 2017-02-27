import cx from 'classnames'
import _ from 'lodash'
import React, { Children, PropTypes } from 'react'

import {
  AutoControlledComponent as Component,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'
import AccordionContent from './AccordionContent'
import AccordionTitle from './AccordionTitle'

/**
 * An accordion allows users to toggle the display of sections of content.
 */
export default class Accordion extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Index of the currently active panel. */
    activeIndex: customPropTypes.every([
      customPropTypes.disallow(['children']),
      PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.number),
        PropTypes.number,
      ]),
    ]),

    /** Primary content. */
    children: PropTypes.node,

    /** Additional classes. */
    className: PropTypes.string,

    /** Initial activeIndex value. */
    defaultActiveIndex: customPropTypes.every([
      customPropTypes.disallow(['children']),
      PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.number),
        PropTypes.number,
      ]),
    ]),

    /** Only allow one panel open at a time. */
    exclusive: customPropTypes.every([
      customPropTypes.disallow(['children']),
      PropTypes.bool,
    ]),

    /** Format to take up the width of it's container. */
    fluid: PropTypes.bool,

    /** Format for dark backgrounds. */
    inverted: PropTypes.bool,

    /**
     * onClick handler for AccordionTitle. Mutually exclusive with children.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All item props.
     */
    onTitleClick: customPropTypes.every([
      customPropTypes.disallow(['children']),
      PropTypes.func,
    ]),

    /** Shorthand array of props for Accordion. */
    panels: customPropTypes.every([
      customPropTypes.disallow(['children']),
      PropTypes.arrayOf(
        PropTypes.shape({
          content: customPropTypes.itemShorthand,
          title: customPropTypes.itemShorthand,
        })
      ),
    ]),

    /** Adds some basic styling to accordion panels. */
    styled: PropTypes.bool,
  }

  static defaultProps = {
    exclusive: true,
  }

  static autoControlledProps = [
    'activeIndex',
  ]

  static _meta = {
    name: 'Accordion',
    type: META.TYPES.MODULE,
  }

  static Content = AccordionContent
  static Title = AccordionTitle

  state = {}

  constructor(...args) {
    super(...args)

    this.state = {
      activeIndex: this.props.exclusive ? -1 : [-1],
    }
  }

  handleTitleClick = (e, index) => {
    const { onTitleClick, exclusive } = this.props
    const { activeIndex } = this.state

    let newIndex
    if (exclusive) {
      newIndex = index === activeIndex ? -1 : index
    } else {
      // check to see if index is in array, and remove it, if not then add it
      newIndex = _.includes(activeIndex, index) ? _.without(activeIndex, index) : [...activeIndex, index]
    }
    this.trySetState({ activeIndex: newIndex })
    if (onTitleClick) onTitleClick(e, index)
  }

  isIndexActive = (index) => {
    const { exclusive } = this.props
    const { activeIndex } = this.state

    return exclusive ? activeIndex === index : _.includes(activeIndex, index)
  }

  renderPanels = () => {
    const { panels } = this.props
    const children = []

    _.each(panels, (panel, i) => {
      const isActive = _.has(panel, 'active') ? panel.active : this.isIndexActive(i)
      const onClick = (e) => {
        this.handleTitleClick(e, i)
        if (panel.onClick) panel.onClick(e, i)
      }

      // implement all methods of creating a key that are supported in factories
      const key = panel.key
        || _.isFunction(panel.childKey) && panel.childKey(panel)
        || panel.childKey && panel.childKey
        || panel.title

      children.push(AccordionTitle.create({ active: isActive, onClick, key: `${key}-title`, content: panel.title }))
      children.push(AccordionContent.create({ active: isActive, key: `${key}-content`, content: panel.content }))
    })

    return children
  }

  render() {
    const {
      className,
      children,
      fluid,
      inverted,
      styled,
    } = this.props

    const classes = cx(
      'ui',
      useKeyOnly(fluid, 'fluid'),
      useKeyOnly(inverted, 'inverted'),
      useKeyOnly(styled, 'styled'),
      'accordion',
      className,
    )
    const rest = getUnhandledProps(Accordion, this.props)
    const ElementType = getElementType(Accordion, this.props)

    return (
      <ElementType {...rest} className={classes}>
        {_.isNil(children) ? this.renderPanels() : children}
      </ElementType>
    )
  }
}
