import {
    SemanticCOLORS,
    SemanticFLOATS,
    SemanticTEXTALIGNMENTS,
    SemanticVERTICALALIGNMENTS,
    SemanticWIDTHSNUMBER,
    SemanticWIDTHSSTRING
} from '../..';
import * as React from 'react';

export type GridPropReversed = 'computer' | 'computer vertically' | 'mobile' | 'mobile vertically' | 'tablet' | 'tablet vertically'
export interface GridProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** A grid can have rows divided into cells. */
  celled?: boolean|'internally';

  /** A grid can have its columns centered. */
  centered?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Represents column count per row in Grid. */
  columns?: number | SemanticWIDTHSNUMBER | SemanticWIDTHSSTRING | number | 'equal';

  /** A grid can have dividers between its columns. */
  divided?: boolean | 'vertically';

  /** A grid can double its column width on tablet and mobile sizes. */
  doubling?: boolean;

  /** A grid can preserve its vertical and horizontal gutters on first and last columns. */
  padded?: boolean | 'horizontally' | 'vertically';

  /** A grid can increase its gutters to allow for more negative space. */
  relaxed?: boolean | 'very';

  /** A grid can specify that its columns should reverse order at different device sizes. */
  reversed?: GridPropReversed;
  
  /** A grid can have its columns stack on-top of each other after reaching mobile breakpoints. */
  stackable?: boolean;

  /** An can stretch its contents to take up the entire grid height. */
  stretched?: boolean;

  /** A grid can specify its text alignment. */
  textAlign?: SemanticTEXTALIGNMENTS;

  /** A grid can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign?: SemanticVERTICALALIGNMENTS;
}

interface GridClass extends React.ComponentClass<GridProps> {
  Column: typeof GridColumn;
  Row: typeof GridRow;
}

export const Grid: GridClass;

type GridPropOnly = 'computer' | 'large screen' | 'mobile' | 'tablet mobile' | 'tablet' | 'widescreen'
interface GridColumnProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A grid column can be colored. */
  color?: SemanticCOLORS;

  /** A column can specify a width for a computer. */
  computer?: SemanticWIDTHSNUMBER | SemanticWIDTHSSTRING | number;

  /** A column can sit flush against the left or right edge of a row. */
  floated?: SemanticFLOATS;

  /** A column can specify a width for a large screen device. */
  largeScreen?: SemanticWIDTHSNUMBER | SemanticWIDTHSSTRING| number;

  /** A column can specify a width for a mobile device. */
  mobile?: SemanticWIDTHSNUMBER | SemanticWIDTHSSTRING| number;

  /** A column can appear only for a specific device, or screen sizes. */
  only?: GridPropOnly;

  /** An can stretch its contents to take up the entire grid or row height. */
  stretched?: boolean;

  /** A column can specify a width for a tablet device. */
  tablet?: SemanticWIDTHSNUMBER | SemanticWIDTHSSTRING| number;
  
  /** A row can specify its text alignment. */
  textAlign?: SemanticTEXTALIGNMENTS;

  /** A column can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign?: SemanticVERTICALALIGNMENTS;

  /** A column can specify a width for a wide screen device. */
  widescreen?: number | SemanticWIDTHSSTRING| number;

  /** Represents width of column. */
  width?: SemanticWIDTHSNUMBER | SemanticWIDTHSSTRING| number;
}

export const GridColumn: React.ComponentClass<GridColumnProps>

interface GridRowProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** A row can have its columns centered. */
  centered?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A grid row can be colored. */
  color?: SemanticCOLORS;

  /** Represents column count per line in Row. */
  columns?: SemanticWIDTHSNUMBER | SemanticWIDTHSSTRING| number | 'equal';

  /** A row can have dividers between its columns. */
  divided?: boolean;

  /** A row can appear only for a specific device, or screen sizes. */
  only?: GridPropOnly;

  /** A  row can specify that its columns should reverse order at different device sizes. */
  reversed?: GridPropReversed;

  /** An can stretch its contents to take up the entire column height. */
  stretched?: boolean;

  /** A row can specify its text alignment. */
  textAlign?: SemanticTEXTALIGNMENTS;

  /** A row can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign?: SemanticVERTICALALIGNMENTS;
}

export const GridRow: React.ComponentClass<GridRowProps>;
