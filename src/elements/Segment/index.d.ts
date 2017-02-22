import * as React from 'react';
import {
  SemanticCOLORS,
  SemanticFLOATS,
  SemanticTEXTALIGNMENTS
} from '../..';

type SEGMENT_SIZES = 'mini' | 'tiny' | 'small' | 'large' | 'big' | 'huge' | 'massive';

interface SegmentProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Attach segment to other content, like a header. */
  attached?: boolean | 'top' | 'bottom';

  /** A basic segment has no special formatting. */
  basic?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** A segment can be circular. */
  circular?: boolean;

  /** Additional classes. */
  className?: string;

  /** A segment can clear floated content. */
  clearing?: boolean;

  /** Segment can be colored. */
  color?: SemanticCOLORS;

  /** A segment may take up only as much space as is necessary. */
  compact?: boolean;

  /** A segment may show its content is disabled. */
  disabled?: boolean;

  /** Segment content can be floated to the left or right. */
  floated?: SemanticFLOATS;

  /** A segment can have its colors inverted for contrast. */
  inverted?: boolean;

  /** A segment may show its content is being loaded. */
  loading?: boolean;

  /** A segment can increase its padding. */
  padded?: boolean | 'very';

  /** Formatted to look like a pile of pages. */
  piled?: boolean;

  /** A segment may be formatted to raise above the page. */
  raised?: boolean;

  /** A segment can be formatted to appear less noticeable. */
  secondary?: boolean;

  /** A segment can have different sizes. */
  size?: SEGMENT_SIZES;

  /** Formatted to show it contains multiple pages. */
  stacked?: boolean;

  /** A segment can be formatted to appear even less noticeable. */
  tertiary?: boolean;

  /** Formats content to be aligned as part of a vertical group. */
  textAlign?: SemanticTEXTALIGNMENTS;

  /** Formats content to be aligned vertically. */
  vertical?: boolean;
}

interface SegmentComponent extends React.StatelessComponent<SegmentProps> {
  Group: typeof SegmentGroup;
}

export const Segment: SegmentComponent;

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
  size?: SEGMENT_SIZES;

  /** Formatted to show it contains multiple pages. */
  stacked?: boolean;
}

export const SegmentGroup: React.StatelessComponent<SegmentGroupProps>;
