import * as React from 'react';

interface SearchProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  // ------------------------------------
  // Behavior
  // ------------------------------------

  /** Initial value of open. */
  defaultOpen?: boolean;

  /** Initial value. */
  defaultValue?: string;

  /** Shorthand for Icon. */
  icon?: any;

  /** Minimum characters to query for results. */
  minCharacters?: number;

  /** Additional text for "No Results" message with less emphasis. */
  noResultsDescription?: string;

  /** Message to display when there are no results. */
  noResultsMessage?: string;

  /** Controls whether or not the results menu is displayed. */
  open?: boolean;

  /** Placeholder of the search input. */
  placeholder?: string;

  /**
   * One of:
   * - array of Search.Result props e.g. `{ title: '', description: '' }` or
   * - object of categories e.g. `{ name: '', results: [{ title: '', description: '' }]`
   */
  results?: Array<any> | Object;

  /** Whether the search should automatically select the first result after searching. */
  selectFirstResult?: boolean;

  /** Whether a "no results" message should be shown if no results are found. */
  showNoResults?: boolean;

  /** Current value of the search input. Creates a controlled component. */
  value?: string;

  // ------------------------------------
  // Rendering
  // ------------------------------------

  /**
   * A function that returns the category contents.
   * Receives all SearchCategory props.
   */
  categoryRenderer?: (props: SearchCategoryProps) => React.ReactElement<any>;

  /**
   * A function that returns the result contents.
   * Receives all SearchResult props.
   */
  resultRenderer?: (props: SearchResultProps) => Array<React.ReactElement<any>>;

  // ------------------------------------
  // Callbacks
  // ------------------------------------

  /**
   * Called on blur.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onBlur: (event: React.MouseEvent<HTMLElement>, data: SearchProps) => void;

  /**
   * Called on focus.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onFocus: (event: React.MouseEvent<HTMLElement>, data: SearchProps) => void;

  /**
   * Called on mousedown.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onMouseDown: (event: React.MouseEvent<HTMLElement>, data: SearchProps) => void;

  /**
   * Called when a result is selected.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onResultSelect: (event: React.MouseEvent<HTMLDivElement>, data: SearchResultProps) => void;

  /**
   * Called on search input change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {string} value - Current value of search input.
   */
  onSearchChange: (event: React.MouseEvent<HTMLElement>, value: string) => void;

  // ------------------------------------
  // Style
  // ------------------------------------

  /** A search can have its results aligned to its left or right container edge. */
  aligned?: string;

  /** A search can display results from remote content ordered by categories. */
  category?: boolean;

  /** Additional classes. */
  className?: string;

  /** A search can have its results take up the width of its container. */
  fluid?: boolean;

  /** A search input can take up the width of its container. */
  input: any;

  /** A search can show a loading indicator. */
  loading?: boolean;

  /** A search can have different sizes. */
  size?: 'mini' | 'tiny' | 'small' | 'large' | 'big' | 'huge' | 'massive';
}

interface SearchComponent extends React.ComponentClass<SearchProps> {
  Category: typeof SearchCategory;
  Result: typeof SearchResult;
  Results: typeof SearchResults;
}

export const Search: SearchComponent;

interface SearchCategoryProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** The item currently selected by keyboard shortcut. */
  active?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Display name. */
  name?: string;

  /**
   * A function that returns the category contents.
   * Receives all SearchCategory props.
   */
  renderer?: (props: SearchCategoryProps) => React.ReactElement<any>;

  /** Array of Search.Result props. */
  results?: Array<typeof SearchResult>;
}

export const SearchCategory: React.StatelessComponent<SearchCategoryProps>;

interface SearchResultProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** The item currently selected by keyboard shortcut. */
  active?: boolean;

  /** Additional classes. */
  className?: string;

  /** Additional text with less emphasis. */
  description?: string;

  /** A unique identifier. */
  id?: number;

  /** Add an image to the item. */
  image?: string;

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement>, data: SearchResultProps) => void;

  /** Customized text for price. */
  price?: string;

  /**
   * A function that returns the result contents.
   * Receives all SearchResult props.
   */
  renderer?: (props: SearchResultProps) => Array<React.ReactElement<any>>;

  /** Display title. */
  title?: string;
}

export const SearchResult: React.ComponentClass<SearchResultProps>;

interface SearchResultsProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const SearchResults: React.StatelessComponent<SearchResultsProps>;
