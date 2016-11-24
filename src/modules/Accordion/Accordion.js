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
import Icon from '../../elements/Icon'

import AccordionContent from './AccordionContent'
import AccordionTitle from './AccordionTitle'

/**
 * An accordion allows users to toggle the display of sections of content
 */
export default class Accordion extends Component {
  static autoControlledProps = [
    'activeIndex',
  ]

  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Index of the currently active panel. */
    activeIndex: PropTypes.number,

    /** Primary content. */
    children: PropTypes.node,

    /** Additional classes. */
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
     * TODO: AccordionPanel should be a sub-component
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
    // TODO AutoControlledComponent should consider default prop values when trySetState is called before mount.
    // Otherwise, on first render we're allowed to set state for a prop that might have a default.
    // The default prop should always win on first render.
    // This default check should then be removed.
    if (typeof this.props.defaultActiveIndex === 'undefined') {
      this.trySetState({ activeIndex: -1 })
    }
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
    let titleIndex = 0
    let contentIndex = 0

    return Children.map(children, (child) => {
      const isTitle = child.type === AccordionTitle
      const isContent = child.type === AccordionContent

      if (isTitle) {
        const currentIndex = titleIndex
        const isActive = _.has(child, 'props.active') ? child.props.active : activeIndex === currentIndex
        const onClick = (e) => {
          this.handleTitleClick(e, currentIndex)
          if (child.props.onClick) child.props.onClick(e, currentIndex)
        }
        titleIndex++
        return cloneElement(child, { ...child.props, active: isActive, onClick })
      }

      if (isContent) {
        const currentIndex = contentIndex
        const isActive = _.has(child, 'props.active') ? child.props.active : activeIndex === currentIndex
        contentIndex++
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
