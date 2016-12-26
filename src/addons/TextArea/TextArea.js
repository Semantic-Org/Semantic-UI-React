import React, { Component, PropTypes } from 'react'
import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

/**
 * A simple <textarea> wrapper for use in Form.TextArea.
 * We may add more features to the TextArea in the future.
 * @see Form
 */
class TextArea extends Component {
  static _meta = {
    name: 'TextArea',
    type: META.TYPES.ADDON,
  }

  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Indicates whether height of the textarea fits the content or not */
    autoHeight: PropTypes.bool,

    /** Handles input event */
    onInput: PropTypes.function,

    /** Handles blur event */
    onBlur: PropTypes.function,

    /**
     * Called on change.
     * @param {SyntheticEvent} event - The React SyntheticEvent object
     * @param {object} data - All props and the event value.
     */
    onChange: PropTypes.func,
  }

  static defaultProps = {
    as: 'textarea',
    autoHeight: true,
  }

  handleChange = (e) => {
    const { onChange } = this.props
    if (onChange) {
      onChange(e, { ...this.props, value: e.target && e.target.value })
    }
  }

  handleBlur = (e) => {
    const { onBlur } = this.props
    if (onBlur) {
      onBlur(e, { ...this.props, value: e.target && e.target.value })
    }
    if (e.target) { // PhantomJS puts here null during tests
      this.updateHeight(e.target)
    }
  }

  handleInput = (e) => {
    const { onInput } = this.props
    if (onInput) {
      onInput(e, { ...this.props, value: e.target && e.target.value })
    }
    if (e.target) { // PhantomJS puts here null during tests
      this.updateHeight(e.target)
    }
  }

  updateHeight = (textarea) => {
    if (!this.props.autoHeight) {
      return
    }

    const computedStyle = window.getComputedStyle(textarea)
    const borderTopWidth = parseInt(computedStyle.borderTopWidth, 10)
    const borderBottomWidth = parseInt(computedStyle.borderBottomWidth, 10)
    if (!textarea.style) {
      textarea.style = {}
    }
    textarea.style.height = 'auto'
    textarea.style.height = (textarea.scrollHeight + borderTopWidth + borderBottomWidth) + 'px'
  }

  componentDidMount = () => {
    if (this.props.autoHeight) {
      this.updateHeight(this.refs.root)
    }
  }

  render() {
    const rest = getUnhandledProps(TextArea, this.props)
    const ElementType = getElementType(TextArea, this.props)

    return (
      <ElementType
        {...rest}
        onChange={this.handleChange}
        onInput={this.handleInput}
        onBlur={this.handleBlur}
        ref='root'
      />
    )
  }
}

export default TextArea
