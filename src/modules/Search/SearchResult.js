import React, { PropTypes } from 'react'
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

function SearchResult(props) {
  const {
    active,
    className,
    id,
    onClick,
    renderer,
  } = props

  const handleClick = (e) => {
    if (onClick) onClick(e, id)
  }

  const classes = cx(
    useKeyOnly(active, 'active'),
    'result',
    className,
  )
  const ElementType = getElementType(SearchResult, props)
  const rest = getUnhandledProps(SearchResult, props)

  // Note: You technically only need the 'content' wrapper when there's an
  // image. However, optionally wrapping it makes this function a lot more
  // complicated and harder to read. Since always wrapping it doesn't affect
  // the style in any way let's just do that.
  return (
    <ElementType {...rest} className={classes} onClick={handleClick}>
      {renderer ? renderer(props) : defaultRenderer(props)}
    </ElementType>
  )
}

SearchResult._meta = {
  name: 'SearchResult',
  parent: 'Search',
  type: META.TYPES.MODULE,
}

SearchResult.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** The item currently selected by keyboard shortcut. */
  active: PropTypes.bool,

  /** Additional className. */
  className: PropTypes.string,

  /** Additional text with less emphasis. */
  description: PropTypes.string,

  /** A unique identifier. */
  id: PropTypes.number,

  /** Add an image to the item. */
  image: PropTypes.string,

  /** Customized text for price. */
  price: PropTypes.string,

  /**
   * A function that returns the result contents.
   * Receives all SearchResult props.
   */
  renderer: PropTypes.func,

  /** Display title. */
  title: PropTypes.string,

  /** Called on click with (event, value, text). */
  onClick: PropTypes.func,
}

export default SearchResult
