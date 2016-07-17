import _ from 'lodash'
import React, { PropTypes } from 'react'
import cx from 'classnames'

import AutoControlledComponent from '../../utils/AutoControlledComponent'
import META from '../../utils/Meta'
import { makeDebugger } from '../../utils/debug'
import { getUnhandledProps } from '../../utils/propUtils'

const debug = makeDebugger('checkbox')

// maps checkbox types to input types
const typeMap = {
  checkbox: 'checkbox',
  radio: 'radio',
  slider: 'checkbox',
  toggle: 'checkbox',
}

const _meta = {
  library: META.library.semanticUI,
  name: 'Checkbox',
  type: META.type.module,
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
 * @see Radio
 */
export default class Checkbox extends AutoControlledComponent {
  static propTypes = {
    className: PropTypes.string,

    /** Whether or not checkbox is checked. */
    checked: PropTypes.bool,

    /** The initial value of checked. */
    defaultChecked: PropTypes.bool,

    /** Removes padding for a label. Auto applied when there is no label. */
    fitted: PropTypes.bool,

    /** The text of the associated label element. */
    label: PropTypes.string,

    /** HTML input type, either checkbox or radio. */
    inputType: PropTypes.oneOf(_meta.props.inputType),

    /** Called with (event, { name, value, checked }) when the checkbox or label is clicked. */
    onClick: PropTypes.func,

    /**
     * Display as a checkbox, radio, slider, or toggle.
     * The input type is `checkbox` for both slider and toggle types.
     * You can set `inputType` separately to mix and match appearance and behavior.
     */
    type: PropTypes.oneOf(_meta.props.type),

    /** The HTML input name. */
    name: PropTypes.string,

    /** The HTML input value. */
    value: PropTypes.string,

    /** Called with (event, { name, value, checked }) when the user attempts to change the value. */
    onChange: PropTypes.func,
  }

  static defaultProps = {
    type: 'checkbox',
  }

  static autoControlledProps = [
    'checked',
  ]

  static _meta = _meta

  state = {}

  handleClick = (e) => {
    debug('handleClick()')
    const { disabled, onChange, onClick, name, readOnly, value } = this.props
    // using a ref here allows us to let the browser manage radio group state for us
    // this is a special exception where we are reading state from the DOM
    // otherwise, all radio groups would have to be controlled components
    const refChecked = _.get(this.refs, 'input.checked')
    debug(`  name:       ${name}`)
    debug(`  value:      ${value}`)
    debug(`  refChecked: ${refChecked}`)

    if (onClick) onClick(e, { name, value, checked: !!refChecked })
    if (onChange) onChange(e, { name, value, checked: !refChecked })

    if (!disabled && !readOnly) {
      this.trySetState({ checked: !refChecked })
    }
  }

  render() {
    const { className, inputType, label, name, onChange, type, value } = this.props
    const { checked } = this.state
    const classes = cx(
      'ui',
      // don't add duplicate "checkbox" classes, but add any other type
      type !== 'checkbox' && type,
      // auto apply fitted class to compact white space when there is no label
      // http://semantic-ui.com/modules/checkbox.html#fitted
      !label && 'fitted',
      checked && 'checked',
      'checkbox',
      className
    )
    const rest = getUnhandledProps(Checkbox, this.props)
    // Heads Up!
    // onChange props are never called as the user cannot click on the hidden input.
    // We call onChange in the onClick handler.
    // This exists only to prevent React "prop checked without onChange" warnings.
    return (
      <div
        {...rest}
        className={classes}
        onClick={this.handleClick}
        onChange={onChange || _.noop}
      >
        <input
          ref='input'
          type={inputType || typeMap[type]}
          name={name}
          onChange={onChange || _.noop}
          checked={checked}
          className='hidden'
          tabIndex={0}
          value={value}
        />
        <label>{label}</label>
      </div>
    )
  }
}
