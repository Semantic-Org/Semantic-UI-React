import * as React from 'react';
import { SegmentSizeProp } from './Segment';

interface SegmentGroupProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A segment may take up only as much space as is necessary. */
  compact?: boolean;

  /** Formats content to be aligned horizontally. */
  horizontal?: boolean;

  /** Formatted to look like a pile of pages. */
  piled?: boolean;

  /** A segment group may be formatted to raise above the page. */
  raised?: boolean;

  /** A segment group can have different sizes. */
  size?: SegmentSizeProp;

  /** Formatted to show it contains multiple pages. */
  stacked?: boolean;
}

declare const SegmentGroup: React.StatelessComponent<SegmentGroupProps>;

export default SegmentGroup;
