import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
  useWidthProp,
} from '../../lib'

/**
 * A set of fields can appear grouped together.
 * @see Form
 */
function FormGroup(props) {
  const {
    children,
    className,
    grouped,
    inline,
    widths,
  } = props

  const classes = cx(
    useKeyOnly(grouped, 'grouped'),
    useKeyOnly(inline, 'inline'),
    useWidthProp(widths, null, true),
    'fields',
    className,
  )
  const rest = getUnhandledProps(FormGroup, props)
  const ElementType = getElementType(FormGroup, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

FormGroup._meta = {
  name: 'FormGroup',
  parent: 'Form',
  type: META.TYPES.COLLECTION,
}

FormGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Fields can show related choices. */
  grouped: customPropTypes.every([
    customPropTypes.disallow(['inline']),
    PropTypes.bool,
  ]),

  /** Multiple fields may be inline in a row. */
  inline: customPropTypes.every([
    customPropTypes.disallow(['grouped']),
    PropTypes.bool,
  ]),

  /** Fields Groups can specify their width in grid columns or automatically divide fields to be equal width. */
  widths: PropTypes.oneOf([...SUI.WIDTHS, 'equal']),
}

export default FormGroup
