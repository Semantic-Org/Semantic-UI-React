import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import {
  AutoControlledComponent as Component,
  childrenUtils,
  createShorthandFactory,
  customPropTypes,
  getElementType,
  getUnhandledProps,
} from '../../lib'
import AccordionPanel from './AccordionPanel'

/**
 * An Accordion can contain sub-accordions.
 */
export default class AccordionAccordion extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Index of the currently active panel. */
    activeIndex: customPropTypes.every([
      customPropTypes.disallow(['children']),
      PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
    ]),

    /** Primary content. */
    children: PropTypes.node,

    /** Additional classes. */
    className: PropTypes.string,

    /** Initial activeIndex value. */
    defaultActiveIndex: customPropTypes.every([
      customPropTypes.disallow(['children']),
      PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
    ]),

    /** Only allow one panel open at a time. */
    exclusive: PropTypes.bool,

    /**
     * Called when a panel title is clicked.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All item props.
     */
    onTitleClick: customPropTypes.every([customPropTypes.disallow(['children']), PropTypes.func]),

    /** Shorthand array of props for Accordion. */
    panels: customPropTypes.every([
      customPropTypes.disallow(['children']),
      PropTypes.arrayOf(
        PropTypes.shape({
          content: customPropTypes.itemShorthand,
          title: customPropTypes.itemShorthand,
        }),
      ),
    ]),
  }

  static defaultProps = {
    exclusive: true,
  }

  static autoControlledProps = ['activeIndex']

  getInitialAutoControlledState({ exclusive }) {
    return { activeIndex: exclusive ? -1 : [] }
  }

  computeNewIndex = (index) => {
    if (this.props.exclusive) {
      return this.computeNewIndexIfExclusive(index)
    }

    return this.computeNewIndexIfNotExclusive(index)
  }

  computeNewIndexIfExclusive = (index) => {
    if (this.state.activeIndex === index) {
      return -1
    }

    return index
  }

  computeNewIndexIfNotExclusive = (index) => {
    const activeIndexArray = _.castArray(this.state.activeIndex)

    return _.includes(activeIndexArray, index)
      ? _.without(activeIndexArray, index)
      : [...activeIndexArray, index]
  }

  handleTitleClick = (e, titleProps) => {
    const { index } = titleProps

    this.trySetState({ activeIndex: this.computeNewIndex(index) })
    _.invoke(this.props, 'onTitleClick', e, titleProps)
  }

  isIndexActive = index => _.includes(_.castArray(this.state.activeIndex), index)

  render() {
    const { className, children, panels } = this.props

    const classes = cx('accordion', className)
    const rest = getUnhandledProps(AccordionAccordion, this.props)
    const ElementType = getElementType(AccordionAccordion, this.props)

    return (
      <ElementType {...rest} className={classes}>
        {childrenUtils.isNil(children)
          ? _.map(panels, (panel, index) =>
            AccordionPanel.create(panel, {
              defaultProps: {
                active: this.isIndexActive(index),
                index,
                onTitleClick: this.handleTitleClick,
              },
            }),
          )
          : children}
      </ElementType>
    )
  }
}

AccordionAccordion.create = createShorthandFactory(AccordionAccordion, content => ({ content }))
