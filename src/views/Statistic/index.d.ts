import * as React from 'react';
import {
  SemanticCOLORS,
  SemanticFLOATS,
  SemanticWIDTHS
} from '../..';

type StatisticSizeProp = 'mini' | 'tiny' | 'small' | 'large' | 'huge';

interface StatisticProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A statistic can be formatted to be different colors. */
  color?: SemanticCOLORS;

  /** A statistic can sit to the left or right of other content. */
  floated?: SemanticFLOATS;

  /** A statistic can present its measurement horizontally. */
  horizontal?: boolean;

  /** A statistic can be formatted to fit on a dark background. */
  inverted?: string;

  /** Label content of the Statistic. */
  label?: any;

  /** A statistic can vary in size. */
  size?: StatisticSizeProp;

  /** Format the StatisticValue with smaller font size to fit nicely beside number values. */
  text?: boolean;

  /** Value content of the Statistic. */
  value?: any;
}

interface StatisticComponent extends React.StatelessComponent<StatisticProps> {
  Group: typeof StatisticGroup;
  Label: typeof StatisticLabel;
  Value: typeof StatisticValue;
}

export const Statistic: StatisticComponent;

interface StatisticGroupProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A statistic group can be formatted to be different colors. */
  color?: SemanticCOLORS;

  /** A statistic group can present its measurement horizontally. */
  horizontal?: boolean;

  /** A statistic group can present its measurement horizontally. */
  inverted?:boolean;

  /** Array of props for Statistic. */
  items?: any;

  /** A statistic group can vary in size. */
  size?: StatisticSizeProp;

  /** A statistic group can have its items divided evenly. */
  widths?: SemanticWIDTHS;
}

export const StatisticGroup: React.StatelessComponent<StatisticGroupProps>;

interface StatisticLabelProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  label?: React.ReactNode;
}

export const StatisticLabel: React.StatelessComponent<StatisticLabelProps>;

interface StatisticValueProps {
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

export const StatisticValue: React.StatelessComponent<StatisticValueProps>;
