import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  AutoControlledComponent as Component,
  createHTMLLabel,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  makeDebugger,
  META,
  useKeyOnly,
} from '../../lib'

const debug = makeDebugger('checkbox')

const _meta = {
  name: 'Checkbox',
  type: META.TYPES.MODULE,
  props: {
    type: [
      'checkbox',
      'radio',
    ],
  },
}

/**
 * A checkbox allows a user to select a value from a small set of options, often binary
 * @see Form
 * @see Radio
 */
export default class Checkbox extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Whether or not checkbox is checked. */
    checked: PropTypes.bool,

    /** Additional classes. */
    className: PropTypes.string,

    /** The initial value of checked. */
    defaultChecked: PropTypes.bool,

    /** A checkbox can appear disabled and be unable to change states */
    disabled: PropTypes.bool,

    /** Removes padding for a label. Auto applied when there is no label. */
    fitted: PropTypes.bool,

    /** The text of the associated label element. */
    label: customPropTypes.itemShorthand,

    /** The HTML input name. */
    name: PropTypes.string,

    /** Called with (event, { name, value, checked }) when the user attempts to change the value. */
    onChange: PropTypes.func,

    /** Called with (event, { name, value, checked }) when the checkbox or label is clicked. */
    onClick: PropTypes.func,

    /** Format as a radio element. This means it is an exclusive option.*/
    radio: customPropTypes.every([
      PropTypes.bool,
      customPropTypes.disallow(['slider', 'toggle']),
    ]),

    /** A checkbox can be read-only and unable to change states */
    readOnly: PropTypes.bool,

    /** Format to emphasize the current selection state */
    slider: customPropTypes.every([
      PropTypes.bool,
      customPropTypes.disallow(['radio', 'toggle']),
    ]),

    /** Format to show an on or off choice */
    toggle: customPropTypes.every([
      PropTypes.bool,
      customPropTypes.disallow(['radio', 'slider']),
    ]),

    /** HTML input type, either checkbox or radio. */
    type: PropTypes.oneOf(_meta.props.type),

    /** The HTML input value. */
    value: PropTypes.string,
  }

  static defaultProps = {
    type: 'checkbox',
  }

  static autoControlledProps = [
    'checked',
  ]

  static _meta = _meta

  state = {}

  canToggle = () => {
    const { disabled, radio, readOnly } = this.props
    const { checked } = this.state

    return !disabled && !readOnly && !(radio && checked)
  }

  handleClick = (e) => {
    debug('handleClick()')
    const { name, onChange, onClick, value } = this.props
    const { checked } = this.state
    debug(`  name:       ${name}`)
    debug(`  value:      ${value}`)
    debug(`  checked:    ${checked}`)

    if (this.canToggle()) {
      if (onClick) onClick(e, { name, value, checked: !!checked })
      if (onChange) onChange(e, { name, value, checked: !checked })

      this.trySetState({ checked: !checked })
    }
  }

  render() {
    const {
      className,
      disabled,
      label,
      name,
      radio,
      readOnly,
      slider,
      toggle,
      type,
      value,
    } = this.props
    const { checked } = this.state

    const classes = cx(
      'ui',
      useKeyOnly(checked, 'checked'),
      useKeyOnly(disabled, 'disabled'),
      // auto apply fitted class to compact white space when there is no label
      // http://semantic-ui.com/modules/checkbox.html#fitted
      useKeyOnly(!label, 'fitted'),
      useKeyOnly(radio, 'radio'),
      useKeyOnly(readOnly, 'read-only'),
      useKeyOnly(slider, 'slider'),
      useKeyOnly(toggle, 'toggle'),
      'checkbox',
      className
    )
    const rest = getUnhandledProps(Checkbox, this.props)
    const ElementType = getElementType(Checkbox, this.props)

    return (
      <ElementType {...rest} className={classes} onClick={this.handleClick} onChange={this.handleClick}>
        <input
          checked={checked}
          className='hidden'
          name={name}
          readOnly
          tabIndex={0}
          type={type}
          value={value}
        />
        {/*
         Heads Up!
         Do not remove empty labels, they are required by SUI CSS
         */}
        {createHTMLLabel(label) || <label />}
      </ElementType>
    )
  }
}
