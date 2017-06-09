import _ from 'lodash'

export const htmlInputAria = [
  'aria-activedescendant', 'aria-atomic', 'aria-autocomplete', 'aria-busy', 'aria-checked', 'aria-controls',
  'aria-describedby', 'aria-disabled', 'aria-dropeffect', 'aria-expanded', 'aria-flowto', 'aria-grabbed',
  'aria-haspopup', 'aria-hidden', 'aria-invalid', 'aria-label', 'aria-labelledby', 'aria-level', 'aria-live',
  'aria-multiline', 'aria-multiselectable', 'aria-orientation', 'aria-owns', 'aria-posinset', 'aria-pressed',
  'aria-readonly', 'aria-relevant', 'aria-required', 'aria-selected', 'aria-setsize', 'aria-sort', 'aria-valuemax',
  'aria-valuemin', 'aria-valuenow', 'aria-valuetext', 'role',
]

export const htmlInputAttrs = [
  // REACT
  'selected', 'defaultValue', 'defaultChecked',

  // LIMITED HTML PROPS
  'autoCapitalize', 'autoComplete', 'autoCorrect', 'autoFocus', 'checked', 'disabled', 'form', 'id', 'max', 'maxLength',
  'min', 'minLength', 'multiple', 'name', 'pattern', 'placeholder', 'readOnly', 'required', 'step', 'type', 'value',
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

export const htmlInputProps = [...htmlInputAria, ...htmlInputAttrs, ...htmlInputEvents]

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
