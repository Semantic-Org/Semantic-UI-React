import React, { Component, PropTypes } from 'react'
import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

/**
 * A TextArea can be used to allow for extended user input.
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

    /** Indicates whether height of the textarea fits the content or not. */
    autoHeight: PropTypes.bool,

    /**
     * Called on change.
     * @param {SyntheticEvent} event - The React SyntheticEvent object
     * @param {object} data - All props and the event value.
     */
    onChange: PropTypes.func,

    /** The value of the textarea. */
    value: PropTypes.string,
  }

  static defaultProps = {
    as: 'textarea',
  }

  componentDidMount() {
    this.updateHeight()
  }

  componentDidUpdate(prevProps, prevState) {
    // removed autoHeight
    if (!this.props.autoHeight && prevProps.autoHeight) {
      this.removeAutoHeightStyles()
    }
    // added autoHeight or value changed
    if (this.props.autoHeight && !prevProps.autoHeight || prevProps.value !== this.props.value) {
      this.updateHeight()
    }
  }

  handleChange = (e) => {
    const { onChange } = this.props
    if (onChange) onChange(e, { ...this.props, value: e.target && e.target.value })

    this.updateHeight(e.target)
  }

  removeAutoHeightStyles = () => {
    this.rootNode.removeAttribute('rows')
    this.rootNode.style.height = null
    this.rootNode.style.minHeight = null
    this.rootNode.style.resize = null
  }

  updateHeight = () => {
    if (!this.rootNode) return

    const { autoHeight } = this.props
    if (!autoHeight) return

    let { borderTopWidth, borderBottomWidth } = window.getComputedStyle(this.rootNode)
    borderTopWidth = parseInt(borderTopWidth, 10)
    borderBottomWidth = parseInt(borderBottomWidth, 10)

    this.rootNode.rows = '1'
    this.rootNode.style.minHeight = '0'
    this.rootNode.style.resize = 'none'
    this.rootNode.style.height = 'auto'
    this.rootNode.style.height = (this.rootNode.scrollHeight + borderTopWidth + borderBottomWidth) + 'px'
  }

  render() {
    const { value } = this.props
    const rest = getUnhandledProps(TextArea, this.props)
    const ElementType = getElementType(TextArea, this.props)

    return (
      <ElementType
        {...rest}
        value={value}
        onChange={this.handleChange}
        ref={c => (this.rootNode = c)}
      />
    )
  }
}

export default TextArea
