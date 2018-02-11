import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  customPropTypes,
  useKeyOnly,
  getUnhandledProps,
  META,
} from '../../lib'
import AccordionAccordion from './AccordionAccordion'

/**
 * An accordion allows users to toggle the display of sections of content.
 */
function AccordionAnimated(props) {
  const {
    className,
    fluid,
    inverted,
    styled,
    panels,
  } = props

  const classes = cx(
    'ui',
    useKeyOnly(fluid, 'fluid'),
    useKeyOnly(inverted, 'inverted'),
    useKeyOnly(styled, 'styled'),
    className,
  )
  const rest = getUnhandledProps(AccordionAnimated, props)
  const animatedPanels = panels.map(panel => ({
    content: {
      ...panel.content,
      animation: 'fade down',
      transitionDuration: 300,
    },
    title: panel.title,
  }))
  return <AccordionAccordion {...rest} panels={animatedPanels} className={classes} />
}

AccordionAnimated._meta = {
  name: 'AccordionAnimated',
  type: META.TYPES.MODULE,
}

AccordionAnimated.propTypes = {
  /** Additional classes. */
  className: PropTypes.string,

  /** Format to take up the width of its container. */
  fluid: PropTypes.bool,

  /** Format for dark backgrounds. */
  inverted: PropTypes.bool,

  /** Adds some basic styling to accordion panels. */
  styled: PropTypes.bool,

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

export default AccordionAnimated
