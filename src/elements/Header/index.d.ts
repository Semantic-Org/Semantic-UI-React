import { SemanticCOLORS, SemanticFLOATS, SemanticSIZES, SemanticTEXTALIGNMENTS } from '../..';
import * as React from 'react';

// Header
// ----------------------------------
interface HeaderProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Attach header  to other content, like a segment */
  attached?: 'top'|'bottom';

  /** Format header to appear inside a content block */
  block?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Color of the header. */
  color?: SemanticCOLORS;

  /** Shorthand for primary content. */
  content?: any;

  /** Show that the header is inactive */
  disabled?: boolean;

  /** Divide header from the content below it */
  dividing?: boolean;

  /** Header can sit to the left or right of other content */
  floated?: SemanticFLOATS;

  /** Add an icon by icon name or pass an <Icon /.> */
  icon?: any;

  //** Add an image by img src or pass an <Image />. */
  image?: any;

  /** Inverts the color of the header for dark backgrounds */
  inverted?: boolean;

  /** Content headings are sized with em and are based on the font-size of their container. */
  size?: SemanticSIZES;

  /** Headers may be formatted to label smaller or de-emphasized content */
  sub?: boolean;

  /** Shorthand for Header.Subheader. */
  subheader?: any;

  /** Align header content */
  textAlign?: SemanticTEXTALIGNMENTS;
}

interface HeaderClass extends React.ComponentClass<HeaderProps> {
  Content: typeof HeaderContent;
  Subheader: typeof HeaderSubHeader;
}

export const Header: HeaderClass;

interface HeaderContentProps {

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const HeaderContent: React.ComponentClass<HeaderContentProps>;

interface HeaderSubHeaderProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;
}

export const HeaderSubHeader: React.ComponentClass<HeaderSubHeaderProps>;
