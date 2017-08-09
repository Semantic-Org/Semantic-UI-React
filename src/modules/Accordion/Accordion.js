import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Children, cloneElement } from 'react'

import {
  AutoControlledComponent as Component,
  customPropTypes,
  getElementType,
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
    activeIndex: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.number),
      PropTypes.number,
    ]),

    /** Primary content. */
    children: PropTypes.node,

    /** Additional classes. */
    className: PropTypes.string,

    /** Initial activeIndex value. */
    defaultActiveIndex: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.number),
      PropTypes.number,
    ]),

    /** Only allow one panel open at a time. */
    exclusive: PropTypes.bool,

    /** Format to take up the width of it's container. */
    fluid: PropTypes.bool,

    /** Format for dark backgrounds. */
    inverted: PropTypes.bool,

    /**
     * Called when a panel title is clicked.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {number} index - The index of the clicked panel.
     */
    onTitleClick: PropTypes.func,

    /**
     * Create simple accordion panels from an array of { text: <string>, content: <custom> } objects.
     * Object can optionally define an `active` key to open/close the panel.
     * Object can opitonally define a `key` key used for title and content nodes' keys.
     * Mutually exclusive with children.
     * TODO: AccordionPanel should be a sub-component
     */
    panels: customPropTypes.every([
      customPropTypes.disallow(['children']),
      PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        active: PropTypes.bool,
        title: customPropTypes.contentShorthand,
        content: customPropTypes.contentShorthand,
        onClick: PropTypes.func,
      })),
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

  getInitialAutoControlledState({ exclusive }) {
    return { activeIndex: exclusive ? -1 : [-1] }
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

  renderChildren = () => {
    const { children } = this.props
    let titleIndex = 0
    let contentIndex = 0

    return Children.map(children, (child) => {
      const isTitle = child.type === AccordionTitle
      const isContent = child.type === AccordionContent

      if (isTitle) {
        const currentIndex = titleIndex
        const isActive = _.has(child, 'props.active') ? child.props.active : this.isIndexActive(titleIndex)
        const onClick = (e) => {
          this.handleTitleClick(e, currentIndex)
          if (child.props.onClick) child.props.onClick(e, currentIndex)
        }
        titleIndex++
        return cloneElement(child, { ...child.props, active: isActive, onClick })
      }

      if (isContent) {
        const isActive = _.has(child, 'props.active') ? child.props.active : this.isIndexActive(contentIndex)
        contentIndex++
        return cloneElement(child, { ...child.props, active: isActive })
      }

      return child
    })
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
      fluid,
      inverted,
      panels,
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
    const rest = _.omit(this.props, _.keys(Accordion.propTypes))
    const ElementType = getElementType(Accordion, this.props)

    return (
      <ElementType {...rest} className={classes}>
        {panels ? this.renderPanels() : this.renderChildren()}
      </ElementType>
    )
  }
}
