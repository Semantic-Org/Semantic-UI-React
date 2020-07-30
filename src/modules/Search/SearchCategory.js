import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenUtils,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  useKeyOnly,
} from '../../lib'
import SearchCategoryLayout from './SearchCategoryLayout'

function SearchCategory(props) {
  const { active, children, className, content, layoutRenderer, renderer } = props
  const classes = cx(useKeyOnly(active, 'active'), 'category', className)
  const rest = getUnhandledProps(SearchCategory, props)
  const ElementType = getElementType(SearchCategory, props)

  const categoryContent = renderer(props)
  const resultsContent = childrenUtils.isNil(children) ? content : children

  return (
    <ElementType {...rest} className={classes}>
      {layoutRenderer({ categoryContent, resultsContent })}
    </ElementType>
  )
}

SearchCategory.defaultProps = {
  layoutRenderer: SearchCategoryLayout,
  renderer: ({ name }) => name,
}

SearchCategory.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** The item currently selected by keyboard shortcut. */
  active: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Display name. */
  name: PropTypes.string,

  /**
   * Renders the category layout contents.
   *
   * @param {object} props - The SearchCategoryLayout props object.
   * @returns {*} - Renderable category layout contents.
   */
  layoutRenderer: PropTypes.func,

  /**
   * Renders the category contents.
   *
   * @param {object} props - The SearchCategory props object.
   * @returns {*} - Renderable category contents.
   */
  renderer: PropTypes.func,

  /** Array of Search.Result props. */
  results: PropTypes.array,
}

export default SearchCategory
