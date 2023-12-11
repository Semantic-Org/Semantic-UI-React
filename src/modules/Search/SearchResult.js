import cx from 'clsx'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import {
  createHTMLImage,
  customPropTypes,
  getElementType,
  getUnhandledProps,
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
  image && (
    <div key='image' className='image'>
      {createHTMLImage(image, { autoGenerateKey: false })}
    </div>
  ),
  <div key='content' className='content'>
    {price && <div className='price'>{price}</div>}
    {title && <div className='title'>{title}</div>}
    {description && <div className='description'>{description}</div>}
  </div>,
]

const SearchResult = React.forwardRef(function (props, ref) {
  const { active, className, renderer } = props

  const handleClick = (e) => {
    _.invoke(props, 'onClick', e, props)
  }

  const classes = cx(useKeyOnly(active, 'active'), 'result', className)
  const rest = getUnhandledProps(SearchResult, props)
  const ElementType = getElementType(SearchResult, props)

  // Note: You technically only need the 'content' wrapper when there's an
  // image. However, optionally wrapping it makes this function a lot more
  // complicated and harder to read. Since always wrapping it doesn't affect
  // the style in any way let's just do that.
  return (
    <ElementType {...rest} className={classes} onClick={handleClick} ref={ref}>
      {renderer(props)}
    </ElementType>
  )
})

SearchResult.displayName = 'SearchResult'
SearchResult.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** The item currently selected by keyboard shortcut. */
  active: PropTypes.bool,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Additional text with less emphasis. */
  description: PropTypes.string,

  /** A unique identifier. */
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

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
   * Renders the result contents.
   *
   * @param {object} props - The SearchResult props object.
   * @returns {*} - Renderable result contents.
   */
  renderer: PropTypes.func,

  /** Display title. */
  title: PropTypes.string.isRequired,
}

SearchResult.defaultProps = {
  renderer: defaultRenderer,
}

export default SearchResult
