import * as React from 'react'

export interface SearchCategoryLayoutProps extends StrictSearchCategoryLayoutProps {
  [key: string]: any
}

export interface StrictSearchCategoryLayoutProps {
  /** The rendered category content */
  categoryContent: React.ReactElement<any>

  /** The rendered results content */
  resultsContent: React.ReactElement<any>
}

declare const SearchCategoryLayout: React.FC<SearchCategoryLayoutProps>

export default SearchCategoryLayout
