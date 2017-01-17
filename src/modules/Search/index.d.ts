import { ReactFocusEvents, ReactFormEvents, ReactMouseEvents, SemanticSearchOnClick, SemanticSIZES } from '../..';
import * as React from 'react';


interface SearchProps extends ReactMouseEvents<HTMLInputElement>, ReactFocusEvents<HTMLInputElement>, ReactFormEvents<HTMLInputElement> {

    /** A search can have its results aligned to its left or right container edge. */
    aligned?: string;

    /** An element type to render as (string or function). */
    as?: any;

    /** A search can display results from remote content ordered by categories. */
    category?: boolean;

    /**
     * A function that returns the category contents.
     * Receives all SearchCategory props.
     */
    categoryRenderer?: () => void;  // TODO : fix;

    /** Additional classes. */
    className?: string;

    /** Initial value of open. */
    defaultOpen?: boolean;

    /** Initial value. */
    defaultValue?: string;

    /** A search can have its results take up the width of its container. */
    fluid?: boolean;

    /** Shorthand for Icon. */
    icon?: any;

    /** A search can show a loading indicator. */
    loading?: boolean;

    /** Minimum characters to query for results */
    minCharacters?: number;

    /** Additional text for "No Results" message with less emphasis. */
    noResultsDescription?: string;

    /** Message to display when there are no results. */
    noResultsMessage?: string;

    /**
     * Called when a result is selected.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onResultSelect: (e: React.FormEvent<HTMLInputElement>, result: Array<any> | Object) => void;

    /**
     * Called on search input change.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {string} value - Current value of search input.
     */
    onSearchChange?: React.FormEventHandler<HTMLInputElement>;

    /** Controls whether or not the results menu is displayed. */
    open?: boolean;

    /** Placeholder of the search input. */
    placeholder?: string;

    /**
     * A function that returns the result contents.
     * Receives all SearchResult props.
     */
    resultRenderer?: () => void;   // TODO: fix.

    /**
     * One of:
     * - array of Search.Result props e.g. `{ title: '', description: '' }` or
     * - object of categories e.g. `{ name: '', results: [{ title: '', description: '' }]`
     */
    results?: Array<any> | Object;

    /** Whether the search should automatically select the first result after searching */
    selectFirstResult?: boolean;

    /** Whether a "no results" message should be shown if no results are found. */
    showNoResults?: boolean;

    /** A search can have different sizes. */
    size?: SemanticSIZES;

    /** Current value of the search input. Creates a controlled component. */
    value?: string;
}

interface SearchClass extends React.ComponentClass<SearchProps> {
    SearchResult: typeof SearchResult;
    SearchResults: typeof SearchResults;

}

export const Search: SearchClass;

interface SearchResultProps {

    /** The item currently selected by keyboard shortcut. */
    active?: boolean;

    /** An element type to render as (string or function). */
    as?: any;

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
    onClick?: SemanticSearchOnClick;

    /** Customized text for price. */
    price?: string;

    /**
     * A function that returns the result contents.
     * Receives all SearchResult props.
     */
    renderer?: () => void; // TODO - fix;

    /** Display title. */
    title?: string;
}

export const SearchResult: React.ComponentClass<SearchResultProps>;

interface SearchResultsProps {

    /** An element type to render as (string or function). */
    as?: any;

    /** Primary content. */
    children?: React.ReactNode;

    /** Additional classes. */
    className?: string;
}

export const SearchResults: React.ComponentClass<SearchResultsProps>;

interface SearchCategoryProps {

    /** The item currently selected by keyboard shortcut. */
    active?: boolean;

    /** An element type to render as (string or function). */
    as?: any;

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
    renderer?: () => void; // TODO - fix;

    /** Array of Search.Result props */
    results?: Array<typeof SearchResult>;
}

export const SearchCategory: React.ComponentClass<SearchCategoryProps>;
