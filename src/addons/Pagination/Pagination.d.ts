import * as React from 'react';

export interface PaginationProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;
}

declare class Pagination extends React.Component<PaginationProps, {}> {
}

export default Pagination;
