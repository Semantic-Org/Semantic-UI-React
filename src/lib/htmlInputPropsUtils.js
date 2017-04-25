import _ from 'lodash'

export const htmlInputAttrs = [
  // REACT
  'selected', 'defaultValue', 'defaultChecked',

  // LIMITED HTML PROPS
  'autoCapitalize', 'autoComplete', 'autoCorrect', 'autoFocus', 'checked', 'disabled', 'form', 'id', 'max', 'maxLength',
  'min', 'multiple', 'name', 'pattern', 'placeholder', 'readOnly', 'required', 'step', 'type', 'value',
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

export const htmlInputProps = [...htmlInputAttrs, ...htmlInputEvents]

/**
 * Returns an array of objects consisting of: props of html input element and rest.
 * @param {object} props A ReactElement props object
 * @param {array} [htmlProps] An array of html input props
 * @returns {[{}, {}]} An array of objects
 */
export const partitionHTMLInputProps = (props, htmlProps = htmlInputProps) => {
  const inputProps = {}
  const rest = {}

  _.forEach(props, (val, prop) => _.includes(htmlProps, prop) ? (inputProps[prop] = val) : (rest[prop] = val))

  return [inputProps, rest]
}
