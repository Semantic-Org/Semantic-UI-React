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

    /**
     * Called on change.
     * @param {SyntheticEvent} event - The React SyntheticEvent object
     * @param {object} data - All props and the event value.
     */
    onChange: PropTypes.func,
  }

  static defaultProps = {
    as: 'textarea',
  }

  handleChange = (e) => {
    const { onChange } = this.props
    if (onChange) {
      onChange(e, { ...this.props, value: e.target && e.target.value })
    }
  }

  render() {
    const rest = getUnhandledProps(TextArea, this.props)
    const ElementType = getElementType(TextArea, this.props)

    return <ElementType {...rest} onChange={this.handleChange} />
  }
}

export default TextArea
