import _ from 'lodash'
import cx from 'classnames'
import React, { Component, PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  makeDebugger,
  META,
  SUI,
  useKeyOnly,
  useWidthProp,
} from '../../lib'
import FormButton from './FormButton'
import FormCheckbox from './FormCheckbox'
import FormDropdown from './FormDropdown'
import FormField from './FormField'
import FormGroup from './FormGroup'
import FormInput from './FormInput'
import FormRadio from './FormRadio'
import FormSelect from './FormSelect'
import FormTextArea from './FormTextArea'

const debug = makeDebugger('form')

let getNodeName = ({ name }) => name
let debugSerializedResult = () => undefined

if (process.NODE_ENV !== 'production') {
  // debug serialized values
  debugSerializedResult = (json, name, node) => {
    debug('serialized ' + JSON.stringify({ [name]: json[name] }) + ' from:', node)
  }

  // warn about form nodes missing a "name"
  getNodeName = (node) => {
    const name = node.name

    if (!name) {
      const errorMessage = [
        'Encountered a form control node without a name attribute.',
        'Each node in a group should have a name.',
        'Otherwise, the node will serialize as { "undefined": <value> }.',
      ].join(' ')
      console.error(errorMessage, node) // eslint-disable-line no-console
    }

    return name
  }
}

function formSerializer(formNode) {
  debug('formSerializer()')
  const json = {}
  // handle empty formNode ref
  if (!formNode) return json

  // ----------------------------------------
  // Checkboxes
  // Single: { name: value|bool        }
  // Group:  { name: [value|bool, ...] }

  _.each(formNode.querySelectorAll('input[type="checkbox"]'), (node, index, arr) => {
    const name = getNodeName(node)
    const checkboxesByName = _.filter(arr, { name })

    // single: (value|checked)
    if (checkboxesByName.length === 1) {
      json[name] = node.checked && node.value !== 'on' ? node.value : node.checked
      debugSerializedResult(json, name, node)
      return
    }

    // groups (checked): [value, ...]
    if (!Array.isArray(json[name])) json[name] = []
    if (node.checked) json[name].push(node.value)
    debugSerializedResult(json, name, node)

    // in dev, warn about multiple checkboxes with a default browser value of "on"
    if (process.NODE_ENV !== 'production' && node.value === 'on') {
      const errorMessage = [
        "Encountered a checkbox in a group with the default browser value 'on'.",
        'Each checkbox in a group should have a unique value.',
        "Otherwise, the checkbox value will serialize as ['on', ...].",
      ].join(' ')
      console.error(errorMessage, node, formNode) // eslint-disable-line no-console
    }
  })

  // ----------------------------------------
  // Radios
  // checked: { name: checked value }
  // none:    { name: null }

  _.each(formNode.querySelectorAll('input[type="radio"]'), (node, index, arr) => {
    const name = getNodeName(node)
    const checkedRadio = _.find(arr, { name, checked: true })

    if (checkedRadio) {
      json[name] = checkedRadio.value
    } else {
      json[name] = null
    }

    debugSerializedResult(json, name, node)

    // in dev, warn about radios with a default browser value of "on"
    if (process.NODE_ENV !== 'production' && node.value === 'on') {
      const errorMessage = [
        "Encountered a radio with the default browser value 'on'.",
        'Each radio should have a unique value.',
        "Otherwise, the radio value will serialize as { [name]: 'on' }.",
      ].join(' ')
      console.error(errorMessage, node, formNode) // eslint-disable-line no-console
    }
  })

  // ----------------------------------------
  // Other inputs
  // { name: value }

  _.each(formNode.querySelectorAll('input:not([type="radio"]):not([type="checkbox"])'), (node) => {
    const name = getNodeName(node)
    json[name] = node.value
    debugSerializedResult(json, name, node)
  })

  // ----------------------------------------
  // Other inputs and text areas
  // { name: value }

  _.each(formNode.querySelectorAll('textarea'), (node) => {
    const name = getNodeName(node)
    json[name] = node.value
    debugSerializedResult(json, name, node)
  })

  // ----------------------------------------
  // Selects
  // single:   { name: value }
  // multiple: { name: [value, ...] }

  _.each(formNode.querySelectorAll('select'), (node) => {
    const name = getNodeName(node)

    if (node.multiple) {
      json[name] = _.map(_.filter(node.querySelectorAll('option'), 'selected'), 'value')
    } else {
      json[name] = node.value
    }

    debugSerializedResult(json, name, node)
  })

  return json
}

const _meta = {
  name: 'Form',
  type: META.TYPES.COLLECTION,
  props: {
    widths: ['equal'],
    size: _.without(SUI.SIZES, 'medium'),
  },
}

/**
 * A Form displays a set of related user input fields in a structured way.
 * @see Button
 * @see Checkbox
 * @see Dropdown
 * @see Input
 * @see Message
 * @see Radio
 * @see Select
 * @see TextArea
 */
export default class Form extends Component {
  static defaultProps = {
    as: 'form',
    serializer: formSerializer,
  }

  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Primary content. */
    children: PropTypes.node,

    /** Additional classes. */
    className: PropTypes.string,

    /** Automatically show any error Message children */
    error: PropTypes.bool,

    /** A form can have its color inverted for contrast */
    inverted: PropTypes.bool,

    /** Automatically show a loading indicator */
    loading: PropTypes.bool,

    /**
     * Called on submit
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props and the form's serialized values.
     */
    onSubmit: PropTypes.func,

    /** A comment can contain a form to reply to a comment. This may have arbitrary content. */
    reply: PropTypes.bool,

    /** Called onSubmit with the form node that returns the serialized form object */
    serializer: PropTypes.func,

    /** A form can vary in size */
    size: PropTypes.oneOf(_meta.props.size),

    /** Automatically show any success Message children */
    success: PropTypes.bool,

    /** Automatically show any warning Message children */
    warning: PropTypes.bool,

    /** Forms can automatically divide fields to be equal width */
    widths: PropTypes.oneOf(_meta.props.widths),
  }

  static _meta = _meta

  static Field = FormField
  static Button = FormButton
  static Checkbox = FormCheckbox
  static Dropdown = FormDropdown
  static Group = FormGroup
  static Input = FormInput
  static Radio = FormRadio
  static Select = FormSelect
  static TextArea = FormTextArea

  _form = null

  handleRef = (c) => (this._form = this._form || c)

  handleSubmit = (e) => {
    const { onSubmit, serializer } = this.props

    if (onSubmit) onSubmit(e, { ...this.props, formData: serializer(this._form) })
  }

  render() {
    const {
      children,
      className,
      error,
      inverted,
      loading,
      reply,
      size,
      success,
      warning,
      widths,
    } = this.props

    const classes = cx(
      'ui',
      size,
      useKeyOnly(error, 'error'),
      useKeyOnly(inverted, 'inverted'),
      useKeyOnly(loading, 'loading'),
      useKeyOnly(reply, 'reply'),
      useKeyOnly(success, 'success'),
      useKeyOnly(warning, 'warning'),
      useWidthProp(widths, null, true),
      'form',
      className,
    )
    const rest = getUnhandledProps(Form, this.props)
    const ElementType = getElementType(Form, this.props)

    return (
      <ElementType {...rest} className={classes} ref={this.handleRef} onSubmit={this.handleSubmit}>
        {children}
      </ElementType>
    )
  }
}
