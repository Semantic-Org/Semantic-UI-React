import * as React from 'react'

import { SemanticShorthandContent } from '../..'
import SearchResult from './SearchResult'

export interface SearchCategoryProps {
  [key: string]: any

  /** An element type to render as (string or function). */
  as?: any

  /** The item currently selected by keyboard shortcut. */
  active?: boolean

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent

  /** Display name. */
  name?: string

  /**
   * Renders the category contents.
   *
   * @param {object} props - The SearchCategory props object.
   * @returns {*} - Renderable category contents.
   */
  renderer?: (props: SearchCategoryProps) => React.ReactElement<any>

  /** Array of Search.Result props. */
  results?: (typeof SearchResult)[]
}

declare const SearchCategory: React.StatelessComponent<SearchCategoryProps>

export default SearchCategory
