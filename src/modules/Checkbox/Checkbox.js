import React, { PropTypes } from 'react'
import cx from 'classnames'

import {
  AutoControlledComponent as Component,
  getElementType,
  getUnhandledProps,
  META,
  makeDebugger,
  useKeyOnly,
} from '../../lib'

const debug = makeDebugger('checkbox')

// maps checkbox types to input types
const typeMap = {
  checkbox: 'checkbox',
  radio: 'radio',
  slider: 'checkbox',
  toggle: 'checkbox',
}

const _meta = {
  name: 'Checkbox',
  type: META.TYPES.MODULE,
  props: {
    inputType: [
      'checkbox',
      'radio',
    ],
    type: [
      'checkbox',
      'radio',
      'slider',
      'toggle',
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
    as: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ]),

    /** Additional classes. */
    className: PropTypes.string,

    /** Whether or not checkbox is checked. */
    checked: PropTypes.bool,

    /** The initial value of checked. */
    defaultChecked: PropTypes.bool,

    /** A checkbox can appear disabled and be unable to change states */
    disabled: PropTypes.bool,

    /** Removes padding for a label. Auto applied when there is no label. */
    fitted: PropTypes.bool,

    /** The text of the associated label element. */
    label: PropTypes.string,

    /** HTML input type, either checkbox or radio. */
    inputType: PropTypes.oneOf(_meta.props.inputType),

    /** The HTML input name. */
    name: PropTypes.string,

    /** Called with (event, { name, value, checked }) when the user attempts to change the value. */
    onChange: PropTypes.func,

    /** Called with (event, { name, value, checked }) when the checkbox or label is clicked. */
    onClick: PropTypes.func,

    /** A checkbox can be read-only and unable to change states */
    readOnly: PropTypes.bool,

    /**
     * Display as a checkbox, radio, slider, or toggle.
     * The input type is `checkbox` for both slider and toggle types.
     * You can set `inputType` separately to mix and match appearance and behavior.
     */
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

  get inputType() {
    const { inputType, type } = this.props
    return inputType || typeMap[type]
  }

  canToggle = () => {
    const { disabled, readOnly } = this.props
    const { checked } = this.state

    return !(disabled || readOnly || this.inputType === 'radio' && checked)
  }

  handleClick = (e) => {
    debug('handleClick()')
    const { onChange, onClick, name, value } = this.props
    const { checked } = this.state
    debug(`  name:       ${name}`)
    debug(`  value:      ${value}`)
    debug(`  checked:    ${checked}`)

    if (onClick) onClick(e, { name, value, checked: !!checked })
    if (onChange) onChange(e, { name, value, checked: !checked })

    if (this.canToggle()) {
      this.trySetState({ checked: !checked })
    }
  }

  render() {
    const { className, label, name, type, value } = this.props
    const { checked } = this.state
    const classes = cx(
      'ui',
      // don't add duplicate "checkbox" classes, but add any other type
      type !== 'checkbox' && type,
      // auto apply fitted class to compact white space when there is no label
      // http://semantic-ui.com/modules/checkbox.html#fitted
      useKeyOnly(!label, 'fitted'),
      useKeyOnly(checked, 'checked'),
      'checkbox',
      className
    )
    const rest = getUnhandledProps(Checkbox, this.props)
    const ElementType = getElementType(Checkbox, this.props)
    return (
      <ElementType
        {...rest}
        className={classes}
        onClick={this.handleClick}
        onChange={this.handleClick}
      >
        <input
          type={this.inputType}
          name={name}
          checked={checked}
          className='hidden'
          readOnly
          tabIndex={0}
          value={value}
        />
        {/*
         Heads Up!
         Do not remove empty labels, they are required by SUI CSS
         */}
        <label>{label}</label>
      </ElementType>
    )
  }
}
