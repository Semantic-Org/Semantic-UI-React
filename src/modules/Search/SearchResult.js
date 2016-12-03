import React, { Component, PropTypes } from 'react'
import cx from 'classnames'

import {
  createHTMLImage,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'

// Note: You technically only need the 'content' wrapper when there's an
// image. However, optionally wrapping it makes this function a lot more
// complicated and harder to read. Since always wrapping it doesn't affect
// the style in any way let's just do that.
//
// Note: To avoid requiring a wrapping div, we return an array here so to
// prevent rendering issues each node needs a unique key.
const defaultRenderer = ({ image, price, title, description }) => [
  image && <div key='image' className='image'>{createHTMLImage(image)}</div>,
  <div key='content' className='content'>
    {price && <div className='price'>{price}</div>}
    {title && <div className='title'>{title}</div>}
    {description && <div className='description'>{description}</div>}
  </div>,
]

export default class SearchResult extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** The item currently selected by keyboard shortcut. */
    active: PropTypes.bool,

    /** Additional classes. */
    className: PropTypes.string,

    /** Additional text with less emphasis. */
    description: PropTypes.string,

    /** A unique identifier. */
    id: PropTypes.number,

    /** Add an image to the item. */
    image: PropTypes.string,

    /**
     * Called on click.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onClick: PropTypes.func,

    /** Customized text for price. */
    price: PropTypes.string,

    /**
     * A function that returns the result contents.
     * Receives all SearchResult props.
     */
    renderer: PropTypes.func,

    /** Display title. */
    title: PropTypes.string,
  }

  handleClick = (e) => {
    const { onClick } = this.props

    if (onClick) onClick(e, this.props)
  }

  static _meta = {
    name: 'SearchResult',
    parent: 'Search',
    type: META.TYPES.MODULE,
  }

  render() {
    const {
      active,
      className,
      renderer,
    } = this.props

    const classes = cx(
      useKeyOnly(active, 'active'),
      'result',
      className,
    )
    const rest = getUnhandledProps(SearchResult, this.props)
    const ElementType = getElementType(SearchResult, this.props)

    // Note: You technically only need the 'content' wrapper when there's an
    // image. However, optionally wrapping it makes this function a lot more
    // complicated and harder to read. Since always wrapping it doesn't affect
    // the style in any way let's just do that.
    return (
      <ElementType {...rest} className={classes} onClick={this.handleClick}>
        {renderer ? renderer(this.props) : defaultRenderer(this.props)}
      </ElementType>
    )
  }
}
