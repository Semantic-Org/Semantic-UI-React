import _ from 'lodash'
import cx from 'classnames'
import React, { Children, PropTypes } from 'react'

import Icon from '../../elements/Icon/Icon'
import AccordionPanel from '../../modules/Accordion/AccordionPanel'
import AutoControlledComponent from '../../utils/AutoControlledComponent'
import META from '../../utils/Meta'
import { customPropTypes, getUnhandledProps } from '../../utils/propUtils'

export default class Accordion extends AutoControlledComponent {
  static autoControlledProps = [
    'activeIndex',
  ]

  static propTypes = {
    /** Adds some basic styling to accordion panels. */
    styled: PropTypes.bool,

    /** Format for dark backgrounds. */
    inverted: PropTypes.bool,

    /** Format to take up the width of it's container. */
    fluid: PropTypes.bool,

    children: customPropTypes.ofComponentTypes('AccordionPanel'),

    /** Index of the currently active panel. */
    activeIndex: PropTypes.number,

    /** Initial activeIndex value. */
    defaultActiveIndex: PropTypes.number,
  }

  static _meta = {
    library: META.library.semanticUI,
    name: 'Accordion',
    type: META.type.module,
  }

  static Panel = AccordionPanel

  handleTitleClick = (index, e) => {
    this.trySetState({
      activeIndex: index === this.state.activeIndex ? -1 : index,
    })
  }

  renderPanels = () => {
    const titles = []
    const contents = []

    _.each(Children.toArray(this.props.children), (panel, i) => {
      const { children, content, title } = panel.props

      const isActive = this.state.activeIndex === i
      const titleClasses = cx('title', isActive && 'active')
      const contentClasses = cx('content', isActive && 'active')
      const paragraphClasses = cx('transition', isActive ? 'visible' : 'hidden')

      titles.push(
        <div key={title} className={titleClasses} onClick={this.handleTitleClick.bind(this, i)}>
          <Icon className='dropdown' />
          {title}
        </div>
      )
      contents.push(
        <div key={`${title}-content`} className={contentClasses}>
          <p className={paragraphClasses}>
            {content || children}
          </p>
        </div>
      )
    })

    return _.zip(titles, contents)
  }

  render() {
    const {
      fluid,
      inverted,
      styled,
    } = this.props

    const classes = cx(
      'ui',
      fluid && 'fluid',
      inverted && 'inverted',
      styled && 'styled',
      'accordion'
    )

    const rest = getUnhandledProps(Accordion, this.props)

    return (
      <div className={classes} {...rest}>
        {this.renderPanels()}
      </div>
    )
  }
}
