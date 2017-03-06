import cx from 'classnames'
import _ from 'lodash'
import React, { PropTypes } from 'react'

import {
  AutoControlledComponent as Component,
  createShorthandFactory,
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
export default class AccordionAccordion extends Component {
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
    exclusive: PropTypes.bool,

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
  }

  static defaultProps = {
    exclusive: true,
  }

  static autoControlledProps = [
    'activeIndex',
  ]

  static _meta = {
    name: 'AccordionAccordion',
    type: META.TYPES.MODULE,
    parent: 'Accordion',
  }

  state = {}

  constructor(...args) {
    super(...args)

    this.state = {
      activeIndex: this.props.exclusive ? -1 : [-1],
    }
  }

  computeNewIndex = index => {
    const { exclusive } = this.props
    const { activeIndex } = this.state

    if (exclusive) return index === activeIndex ? -1 : index
    // check to see if index is in array, and remove it, if not then add it
    return _.includes(activeIndex, index) ? _.without(activeIndex, index) : [...activeIndex, index]
  }

  handleTitleClick = (e, titleProps) => {
    const { index } = titleProps
    const { onTitleClick, panels } = this.props
    const activeIndex = this.computeNewIndex(index)

    this.trySetState({ activeIndex })

    if (_.get(panels[index], 'onClick')) panels[index].onClick(e, titleProps)
    if (onTitleClick) onTitleClick(e, titleProps)
  }

  isIndexActive = index => {
    const { exclusive } = this.props
    const { activeIndex } = this.state

    return exclusive ? activeIndex === index : _.includes(activeIndex, index)
  }

  renderPanels = () => {
    const children = []
    const { panels } = this.props

    _.each(panels, (panel, index) => {
      const { content, key, title } = panel
      const active = this.isIndexActive(index)

      children.push(AccordionTitle.create(title, {
        active,
        index,
        key: `${key}-title`,
        onClick: this.handleTitleClick,
      }))
      children.push(AccordionContent.create(content, {
        active,
        index,
        key: `${key}-content`,
      }))
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
      useKeyOnly(fluid, 'fluid'),
      useKeyOnly(inverted, 'inverted'),
      useKeyOnly(styled, 'styled'),
      'accordion',
      className,
    )
    const rest = getUnhandledProps(AccordionAccordion, this.props)
    const ElementType = getElementType(AccordionAccordion, this.props)

    return (
      <ElementType {...rest} className={classes}>
        {_.isNil(children) ? this.renderPanels() : children}
      </ElementType>
    )
  }
}

AccordionAccordion.create = createShorthandFactory(AccordionAccordion, content => ({ content }))
