import * as React from 'react';

export interface StatisticValueProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Format the value with smaller font size to fit nicely beside number values. */
  text?: boolean;

  /** Primary content of the StatisticValue. Mutually exclusive with the children prop. */
  value?: React.ReactNode;
}

declare const StatisticValue: React.StatelessComponent<StatisticValueProps>;

export default StatisticValue;
