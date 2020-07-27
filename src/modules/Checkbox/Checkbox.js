import { Ref } from '@stardust-ui/react-component-ref'
import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { createRef } from 'react'

import {
  ModernAutoControlledComponent as Component,
  createHTMLLabel,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  htmlInputAttrs,
  makeDebugger,
  partitionHTMLProps,
  useKeyOnly,
} from '../../lib'

const debug = makeDebugger('checkbox')

/**
 * A checkbox allows a user to select a value from a small set of options, often binary.
 * @see Form
 * @see Radio
 */
export default class Checkbox extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: PropTypes.elementType,

    /** Whether or not checkbox is checked. */
    checked: PropTypes.bool,

    /** Additional classes. */
    className: PropTypes.string,

    /** The initial value of checked. */
    defaultChecked: PropTypes.bool,

    /** Whether or not checkbox is indeterminate. */
    defaultIndeterminate: PropTypes.bool,

    /** A checkbox can appear disabled and be unable to change states */
    disabled: PropTypes.bool,

    /** Removes padding for a label. Auto applied when there is no label. */
    fitted: PropTypes.bool,

    /** A unique identifier. */
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /** Whether or not checkbox is indeterminate. */
    indeterminate: PropTypes.bool,

    /** The text of the associated label element. */
    label: customPropTypes.itemShorthand,

    /** The HTML input name. */
    name: PropTypes.string,

    /**
     * Called when the user attempts to change the checked state.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props and proposed checked/indeterminate state.
     */
    onChange: PropTypes.func,

    /**
     * Called when the checkbox or label is clicked.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props and current checked/indeterminate state.
     */
    onClick: PropTypes.func,

    /**
     * Called when the user presses down on the mouse.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props and current checked/indeterminate state.
     */
    onMouseDown: PropTypes.func,

    /**
     * Called when the user releases the mouse.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props and current checked/indeterminate state.
     */
    onMouseUp: PropTypes.func,

    /** Format as a radio element. This means it is an exclusive option. */
    radio: customPropTypes.every([PropTypes.bool, customPropTypes.disallow(['slider', 'toggle'])]),

    /** A checkbox can be read-only and unable to change states. */
    readOnly: PropTypes.bool,

    /** Format to emphasize the current selection state. */
    slider: customPropTypes.every([PropTypes.bool, customPropTypes.disallow(['radio', 'toggle'])]),

    /** A checkbox can receive focus. */
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /** Format to show an on or off choice. */
    toggle: customPropTypes.every([PropTypes.bool, customPropTypes.disallow(['radio', 'slider'])]),

    /** HTML input type, either checkbox or radio. */
    type: PropTypes.oneOf(['checkbox', 'radio']),

    /** The HTML input value. */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }

  static defaultProps = {
    type: 'checkbox',
  }

  static autoControlledProps = ['checked', 'indeterminate']

  inputRef = createRef()
  labelRef = createRef()

  componentDidMount() {
    this.setIndeterminate()
  }

  componentDidUpdate() {
    this.setIndeterminate()
  }

  canToggle = () => {
    const { disabled, radio, readOnly } = this.props
    const { checked } = this.state

    return !disabled && !readOnly && !(radio && checked)
  }

  computeTabIndex = () => {
    const { disabled, tabIndex } = this.props

    if (!_.isNil(tabIndex)) return tabIndex
    return disabled ? -1 : 0
  }

  handleClick = (e) => {
    debug('handleClick()', _.get(e, 'target.tagName'))
    const { id } = this.props
    const { checked, indeterminate } = this.state

    const isInputClick = _.invoke(this.inputRef.current, 'contains', e.target)
    const isLabelClick = _.invoke(this.labelRef.current, 'contains', e.target)
    const isRootClick = !isLabelClick && !isInputClick

    const hasId = !_.isNil(id)
    const isLabelClickAndForwardedToInput = isLabelClick && hasId

    // https://github.com/Semantic-Org/Semantic-UI-React/pull/3351
    if (!isLabelClickAndForwardedToInput) {
      _.invoke(this.props, 'onClick', e, {
        ...this.props,
        checked: !checked,
        indeterminate: !!indeterminate,
      })
    }

    if (this.isClickFromMouse) {
      this.isClickFromMouse = false

      if (isLabelClick && !hasId) {
        this.handleChange(e)
      }

      // Changes should be triggered for the slider variation
      if (isRootClick) {
        this.handleChange(e)
      }

      if (isLabelClick && hasId) {
        // To prevent two clicks from being fired from the component we have to stop the propagation
        // from the "input" click: https://github.com/Semantic-Org/Semantic-UI-React/issues/3433
        e.stopPropagation()
      }
    }
  }

  handleChange = (e) => {
    const { checked } = this.state

    if (!this.canToggle()) return
    debug('handleChange()', _.get(e, 'target.tagName'))

    _.invoke(this.props, 'onChange', e, {
      ...this.props,
      checked: !checked,
      indeterminate: false,
    })
    this.setState({ checked: !checked, indeterminate: false })
  }

  handleMouseDown = (e) => {
    debug('handleMouseDown()')
    const { checked, indeterminate } = this.state

    _.invoke(this.props, 'onMouseDown', e, {
      ...this.props,
      checked: !!checked,
      indeterminate: !!indeterminate,
    })

    if (!e.defaultPrevented) {
      _.invoke(this.inputRef.current, 'focus')
    }

    // Heads up!
    // We need to call "preventDefault" to keep element focused.
    e.preventDefault()
  }

  handleMouseUp = (e) => {
    debug('handleMouseUp()')
    const { checked, indeterminate } = this.state

    this.isClickFromMouse = true
    _.invoke(this.props, 'onMouseUp', e, {
      ...this.props,
      checked: !!checked,
      indeterminate: !!indeterminate,
    })
  }

  // Note: You can't directly set the indeterminate prop on the input, so we
  // need to maintain a ref to the input and set it manually whenever the
  // component updates.
  setIndeterminate = () => {
    const { indeterminate } = this.state

    _.set(this.inputRef, 'current.indeterminate', !!indeterminate)
  }

  render() {
    const {
      className,
      disabled,
      label,
      id,
      name,
      radio,
      readOnly,
      slider,
      toggle,
      type,
      value,
    } = this.props
    const { checked, indeterminate } = this.state

    const classes = cx(
      'ui',
      useKeyOnly(checked, 'checked'),
      useKeyOnly(disabled, 'disabled'),
      useKeyOnly(indeterminate, 'indeterminate'),
      // auto apply fitted class to compact white space when there is no label
      // https://semantic-ui.com/modules/checkbox.html#fitted
      useKeyOnly(_.isNil(label), 'fitted'),
      useKeyOnly(radio, 'radio'),
      useKeyOnly(readOnly, 'read-only'),
      useKeyOnly(slider, 'slider'),
      useKeyOnly(toggle, 'toggle'),
      'checkbox',
      className,
    )
    const unhandled = getUnhandledProps(Checkbox, this.props)
    const ElementType = getElementType(Checkbox, this.props)
    const [htmlInputProps, rest] = partitionHTMLProps(unhandled, { htmlProps: htmlInputAttrs })

    // Heads Up!
    // Do not remove empty labels, they are required by SUI CSS
    const labelElement = createHTMLLabel(label, {
      defaultProps: { htmlFor: id },
      autoGenerateKey: false,
    }) || <label htmlFor={id} />

    return (
      <ElementType
        {...rest}
        className={classes}
        onClick={this.handleClick}
        onChange={this.handleChange}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
      >
        <Ref innerRef={this.inputRef}>
          <input
            {...htmlInputProps}
            checked={checked}
            className='hidden'
            disabled={disabled}
            id={id}
            name={name}
            readOnly
            tabIndex={this.computeTabIndex()}
            type={type}
            value={value}
          />
        </Ref>
        <Ref innerRef={this.labelRef}>{labelElement}</Ref>
      </ElementType>
    )
  }
}
