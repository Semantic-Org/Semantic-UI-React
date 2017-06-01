import * as React from 'react';

export interface SearchResultsProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

declare const SearchResults: React.StatelessComponent<SearchResultsProps>;

export default SearchResults;
