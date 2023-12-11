import cx from 'clsx'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenUtils,
  createShorthandFactory,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  useAutoControlledValue,
  useEventCallback,
} from '../../lib'
import AccordionPanel from './AccordionPanel'

/**
 * @param {Boolean} exclusive
 * @param {Number} activeIndex
 * @param {Number} itemIndex
 */
function isIndexActive(exclusive, activeIndex, itemIndex) {
  return exclusive ? activeIndex === itemIndex : _.includes(activeIndex, itemIndex)
}

/**
 * @param {Boolean} exclusive
 * @param {Number} activeIndex
 * @param {Number} itemIndex
 */
function computeNewIndex(exclusive, activeIndex, itemIndex) {
  if (exclusive) {
    return itemIndex === activeIndex ? -1 : itemIndex
  }

  // check to see if index is in array, and remove it, if not then add it
  if (_.includes(activeIndex, itemIndex)) {
    return _.without(activeIndex, itemIndex)
  }

  return [...activeIndex, itemIndex]
}

/**
 * An Accordion can contain sub-accordions.
 */
const AccordionAccordion = React.forwardRef(function (props, ref) {
  const { className, children, exclusive, panels } = props
  const [activeIndex, setActiveIndex] = useAutoControlledValue({
    state: props.activeIndex,
    defaultState: props.defaultActiveIndex,
    initialState: () => (exclusive ? -1 : []),
  })

  const classes = cx('accordion', className)
  const rest = getUnhandledProps(AccordionAccordion, props)
  const ElementType = getElementType(AccordionAccordion, props)

  const handleTitleClick = useEventCallback((e, titleProps) => {
    const { index } = titleProps

    setActiveIndex(computeNewIndex(exclusive, activeIndex, index))
    _.invoke(props, 'onTitleClick', e, titleProps)
  })

  if (process.env.NODE_ENV !== 'production') {
    React.useEffect(() => {
      /* eslint-disable no-console */
      if (exclusive && typeof activeIndex !== 'number') {
        console.error('`activeIndex` must be a number if `exclusive` is true')
      } else if (!exclusive && !_.isArray(activeIndex)) {
        console.error('`activeIndex` must be an array if `exclusive` is false')
      }
      /* eslint-enable no-console */
    }, [exclusive, activeIndex])
  }

  return (
    <ElementType {...rest} className={classes} ref={ref}>
      {childrenUtils.isNil(children)
        ? _.map(panels, (panel, index) =>
            AccordionPanel.create(panel, {
              defaultProps: {
                active: isIndexActive(exclusive, activeIndex, index),
                index,
                onTitleClick: handleTitleClick,
              },
            }),
          )
        : children}
    </ElementType>
  )
})

AccordionAccordion.defaultProps = {
  exclusive: true,
}

AccordionAccordion.displayName = 'AccordionAccordion'
AccordionAccordion.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

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

AccordionAccordion.create = createShorthandFactory(AccordionAccordion, (content) => ({ content }))

export default AccordionAccordion
