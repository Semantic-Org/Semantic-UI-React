import cx from 'classnames'
import React, { PropTypes } from 'react'
import {
  customPropTypes,
  getElementType,
  useKeyOnly,
  getUnhandledProps,
  META,
} from '../../lib'

/**
 * An ad displays third-party promotional content.
 */
function Advertisement(props) {
  const {
    className,
    children,
    unit,
    test,
  } = props

  const classes = cx(
    'ui',
    'ad',
    unit,
    useKeyOnly(test, 'test'),
    className
  )
  const rest = getUnhandledProps(Advertisement, props)
  const ElementType = getElementType(Advertisement, props)

  return <ElementType {...rest} className={classes} data-text={test}>{children}</ElementType>
}

Advertisement._meta = {
  name: 'Advertisement',
  type: META.TYPES.VIEW,
}

Advertisement.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Additional classes. */
  className: PropTypes.string,

  /** Primary content. */
  children: PropTypes.node,

  /** Varies the size of the advertisement*/
  unit: PropTypes.oneOf([
    'medium rectangle', 'large rectangle', 'vertical rectangle', 'small rectangle',
    'mobile banner', 'banner', 'vertical banner', 'top banner', 'half banner',
    'button', 'square button', 'small button',
    'skyscraper', 'wide skyscraper',
    'leaderboard', 'large leaderboard', 'mobile leaderboard', 'billboard',
    'panorama',
    'netboard',
    'half page',
    'square', 'small square',
  ]).isRequired,

  /** Text to be displayed on the advertisement*/
  test: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
  ]),
}

export default Advertisement
