import _ from 'lodash'

export const htmlInputProps = [
  // REACT
  'selected', 'defaultValue', 'defaultChecked',

  // LIMITED HTML PROPS
  'autoCapitalize', 'autoComplete', 'autoFocus', 'checked', 'form', 'max', 'maxLength', 'min', 'multiple',
  'name', 'pattern', 'placeholder', 'readOnly', 'required', 'step', 'type', 'value',

  // Heads Up!
  // Do not pass disabled, it duplicates the SUI CSS opacity rule.
  // 'disabled',
]

export const htmlInputEvents = [
  // EVENTS
  // keyboard
  'onKeyDown', 'onKeyPress', 'onKeyUp',

  // focus
  'onFocus', 'onBlur',

  // form
  'onChange', 'onInput',

  // mouse
  'onClick', 'onContextMenu',
  'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop',
  'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp',

  // selection
  'onSelect',

  // touch
  'onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart',
]

export const htmlInputPropNames = [...htmlInputProps, ...htmlInputEvents]

export const omitHTMLInputProps = (props, htmlProps = htmlInputPropNames) => _.omit(props, htmlProps)

export const pickHTMLInputProps = (props, htmlProps = htmlInputPropNames) => _.pick(props, htmlProps)
