import cx from 'clsx'
import PropTypes from 'prop-types'
import * as React from 'react'

import {
  customPropTypes,
  getComponentType,
  getUnhandledProps,
  SUI,
  useKeyOnly,
  useWidthProp,
} from '../../lib'

/**
 * A set of fields can appear grouped together.
 * @see Form
 */
const FormGroup = React.forwardRef((props, ref) => {
  const { children, className, disabled, error, grouped, inline, unstackable, widths } = props

  const classes = cx(
    useKeyOnly(error, 'error'),
    useKeyOnly(disabled, 'disabled'),
    useKeyOnly(grouped, 'grouped'),
    useKeyOnly(inline, 'inline'),
    useKeyOnly(unstackable, 'unstackable'),
    useWidthProp(widths, null, true),
    'fields',
    className,
  )
  const rest = getUnhandledProps(FormGroup, props)
  const ElementType = getComponentType(props)

  return (
    <ElementType {...rest} className={classes} ref={ref}>
      {children}
    </ElementType>
  )
})

FormGroup.displayName = 'FormGroup'
FormGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** A Form Group can be disabled. */
  disabled: PropTypes.bool,

  /** A Form Group can have error. */
  error: PropTypes.bool,

  /** Fields can show related choices. */
  grouped: customPropTypes.every([customPropTypes.disallow(['inline']), PropTypes.bool]),

  /** Multiple fields may be inline in a row. */
  inline: customPropTypes.every([customPropTypes.disallow(['grouped']), PropTypes.bool]),

  /** A form group can prevent itself from stacking on mobile. */
  unstackable: PropTypes.bool,

  /** Fields Groups can specify their width in grid columns or automatically divide fields to be equal width. */
  widths: PropTypes.oneOf([...SUI.WIDTHS, 'equal']),
}

export default FormGroup
