import cx from 'clsx'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import {
  createHTMLLabel,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  htmlInputAttrs,
  makeDebugger,
  partitionHTMLProps,
  useKeyOnly,
  useAutoControlledValue,
  useMergedRefs,
  useIsomorphicLayoutEffect,
} from '../../lib'

const debug = makeDebugger('checkbox')

/**
 * A checkbox allows a user to select a value from a small set of options, often binary.
 * @see Form
 * @see Radio
 */
const Checkbox = React.forwardRef(function (props, ref) {
  const {
    className,
    disabled,
    label,
    id,
    name,
    radio,
    readOnly,
    slider,
    tabIndex,
    toggle,
    type,
    value,
  } = props

  const [checked, setChecked] = useAutoControlledValue({
    state: props.checked,
    defaultState: props.defaultChecked,
    initialState: false,
  })
  const [indeterminate, setIndeterminate] = useAutoControlledValue({
    state: props.indeterminate,
    defaultState: props.defaultIndeterminate,
    initialState: false,
  })

  const inputRef = useMergedRefs(React.useRef(), ref)
  const labelRef = React.useRef()

  const isClickFromMouse = React.useRef()

  // ----------------------------------------
  // Effects
  // ----------------------------------------

  useIsomorphicLayoutEffect(() => {
    // Note: You can't directly set the indeterminate prop on the input, so we
    // need to maintain a ref to the input and set it manually whenever the
    // component updates.
    if (inputRef.current) {
      inputRef.current.indeterminate = !!indeterminate
    }
  })

  // ----------------------------------------
  // Helpers
  // ----------------------------------------

  const canToggle = () => {
    return !disabled && !readOnly && !(radio && checked)
  }

  const computeTabIndex = () => {
    if (!_.isNil(tabIndex)) {
      return tabIndex
    }

    return disabled ? -1 : 0
  }

  // ----------------------------------------
  // Handlers
  // ----------------------------------------

  const handleChange = (e) => {
    if (!canToggle()) {
      return
    }

    debug('handleChange()', _.get(e, 'target.tagName'))

    _.invoke(props, 'onChange', e, {
      ...props,
      checked: !checked,
      indeterminate: false,
    })
    setChecked(!checked)
    setIndeterminate(false)
  }

  const handleClick = (e) => {
    debug('handleClick()', _.get(e, 'target.tagName'))

    const isInputClick = _.invoke(inputRef.current, 'contains', e.target)
    const isLabelClick = _.invoke(labelRef.current, 'contains', e.target)
    const isRootClick = !isLabelClick && !isInputClick

    const hasId = !_.isNil(id)
    const isLabelClickAndForwardedToInput = isLabelClick && hasId

    // https://github.com/Semantic-Org/Semantic-UI-React/pull/3351
    if (!isLabelClickAndForwardedToInput) {
      _.invoke(props, 'onClick', e, {
        ...props,
        checked: !checked,
        indeterminate: !!indeterminate,
      })
    }

    if (isClickFromMouse.current) {
      isClickFromMouse.current = false

      if (isLabelClick && !hasId) {
        handleChange(e)
      }

      // Changes should be triggered for the slider variation
      if (isRootClick) {
        handleChange(e)
      }

      if (isLabelClick && hasId) {
        // To prevent two clicks from being fired from the component we have to stop the propagation
        // from the "input" click: https://github.com/Semantic-Org/Semantic-UI-React/issues/3433
        e.stopPropagation()
      }
    }
  }

  const handleMouseDown = (e) => {
    debug('handleMouseDown()')

    _.invoke(props, 'onMouseDown', e, {
      ...props,
      checked: !!checked,
      indeterminate: !!indeterminate,
    })

    if (!e.defaultPrevented) {
      _.invoke(inputRef.current, 'focus')
    }

    // Heads up!
    // We need to call "preventDefault" to keep element focused.
    e.preventDefault()
  }

  const handleMouseUp = (e) => {
    debug('handleMouseUp()')

    isClickFromMouse.current = true
    _.invoke(props, 'onMouseUp', e, {
      ...props,
      checked: !!checked,
      indeterminate: !!indeterminate,
    })
  }

  // ----------------------------------------
  // Render
  // ----------------------------------------

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
  const unhandled = getUnhandledProps(Checkbox, props)
  const ElementType = getElementType(Checkbox, props)
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
      onClick={handleClick}
      onChange={handleChange}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <input
        {...htmlInputProps}
        checked={checked}
        className='hidden'
        disabled={disabled}
        id={id}
        name={name}
        readOnly
        ref={inputRef}
        tabIndex={computeTabIndex()}
        type={type}
        value={value}
      />
      {React.cloneElement(labelElement, { ref: labelRef })}
    </ElementType>
  )
})

Checkbox.displayName = 'Checkbox'
Checkbox.propTypes = {
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

Checkbox.defaultProps = {
  type: 'checkbox',
}

export default Checkbox
