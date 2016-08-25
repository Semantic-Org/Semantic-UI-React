import _ from 'lodash'
import cx from 'classnames'
import React, { Children, cloneElement, PropTypes } from 'react'

import {
  AutoControlledComponent as Component,
  customPropTypes,
  getElementType,
  META,
  useKeyOnly,
} from '../../lib'
import { Icon } from '../../elements'
import AccordionContent from '../../modules/Accordion/AccordionContent'
import AccordionTitle from '../../modules/Accordion/AccordionTitle'

/**
 * An accordion allows users to toggle the display of sections of content
 */
export default class Accordion extends Component {
  static autoControlledProps = [
    'activeIndex',
  ]

  static propTypes = {
    /** An element type to render as (string or function). */
    as: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ]),

    /** Index of the currently active panel. */
    activeIndex: PropTypes.number,

    /** Accordion.Title and Accordion.Content components.  Mutually exclusive with the panels prop. */
    children: customPropTypes.every([
      customPropTypes.disallow(['panels']),
      PropTypes.node,
    ]),

    /** Classes to add to the Accordion className. */
    className: PropTypes.string,

    /** Initial activeIndex value. */
    defaultActiveIndex: PropTypes.number,

    /** Format to take up the width of it's container. */
    fluid: PropTypes.bool,

    /** Format for dark backgrounds. */
    inverted: PropTypes.bool,

    /** Called with (event, index) when a panel title is clicked. */
    onTitleClick: PropTypes.func,

    /**
     * Create simple accordion panels from an array of { text: <string>, content: <string> } objects.
     * Object can optionally define an `active` key to open/close the panel.
     * Mutually exclusive with children.
     */
    panels: customPropTypes.every([
      customPropTypes.disallow(['children']),
      PropTypes.arrayOf(PropTypes.shape({
        active: PropTypes.bool,
        title: PropTypes.string,
        content: PropTypes.string,
        onClick: PropTypes.func,
      })),
    ]),

    /** Adds some basic styling to accordion panels. */
    styled: PropTypes.bool,
  }

  static _meta = {
    name: 'Accordion',
    type: META.TYPES.MODULE,
  }

  static Content = AccordionContent
  static Title = AccordionTitle

  state = {}

  componentWillMount() {
    super.componentWillMount()
    this.trySetState({ activeIndex: -1 })
  }

  handleTitleClick = (e, index) => {
    const { onTitleClick } = this.props
    const { activeIndex } = this.state

    this.trySetState({
      activeIndex: index === activeIndex ? -1 : index,
    })
    if (onTitleClick) onTitleClick(e, index)
  }

  renderChildren = () => {
    const { children } = this.props
    const { activeIndex } = this.state

    return Children.map(children, (child, i) => {
      const isTitle = child.type === AccordionTitle
      const isContent = child.type === AccordionContent

      if (isTitle) {
        const isActive = _.has(child, 'props.active') ? child.props.active : activeIndex === i
        const onClick = (e) => {
          this.handleTitleClick(e, i)
          if (child.props.onClick) child.props.onClick(e, i)
        }
        return cloneElement(child, { ...child.props, active: isActive, onClick })
      }

      if (isContent) {
        // content must be the a sibling too title
        // it is active if the active title index that precedes it is active
        const isActive = _.has(child, 'props.active') ? child.props.active : activeIndex === i - 1
        return cloneElement(child, { ...child.props, active: isActive })
      }

      return child
    })
  }

  renderPanels = () => {
    const { panels } = this.props
    const { activeIndex } = this.state
    const children = []

    _.each(panels, (panel, i) => {
      const isActive = _.has(panel, 'active') ? panel.active : activeIndex === i

      const onClick = (e) => {
        this.handleTitleClick(e, i)
        if (panel.onClick) panel.onClick(e, i)
      }

      children.push(
        <AccordionTitle key={`${panel.title}-title`} active={isActive} onClick={onClick}>
          <Icon name='dropdown' />
          {panel.title}
        </AccordionTitle>
      )
      children.push(
        <AccordionContent key={`${panel.title}-content`} active={isActive}>
          {panel.content}
        </AccordionContent>
      )
    })

    return children
  }

  render() {
    const { className, fluid, inverted, panels, styled } = this.props

    const classes = cx(
      className,
      'ui',
      useKeyOnly(fluid, 'fluid'),
      useKeyOnly(inverted, 'inverted'),
      useKeyOnly(styled, 'styled'),
      'accordion'
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
