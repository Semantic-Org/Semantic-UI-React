import * as React from 'react';

// ======================================================
// Alignments
// ======================================================

export type SemanticFLOATS = 'left' | 'right';
export type SemanticTEXTALIGNMENTS = 'left' | 'center' | 'right' | 'justified';
export type SemanticVERTICALALIGNMENTS = 'top' | 'middle' | 'bottom';

// ======================================================
// Common element's props
// ======================================================

export interface HtmlLabelProps {
  [key: string]: any;
  children?: React.ReactNode;
}

export interface HtmlIframeProps {
  [key: string]: any;
  src?: string;
}

export interface HtmlImageProps {
  [key: string]: any;
  src?: string;
}

export interface HtmlInputrops {
  [key: string]: any;
  type?: string;
}

export interface HtmlSpanProps {
  [key: string]: any;
  children?: React.ReactNode;
}

// ======================================================
// Types
// ======================================================

export type SemanticShorthandCollection<T> = Array<SemanticShorthandItem<T>>;
export type SemanticShorthandContent = React.ReactNode;
export type SemanticShorthandItem<T> = React.ReactNode | T;

// ======================================================
// Styling
// ======================================================

export type SemanticCOLORS = 'red' | 'orange' | 'yellow' | 'olive' |'green' | 'teal' | 'blue' | 'violet' | 'purple' |
  'pink' | 'brown' | 'grey' | 'black';
export type SemanticSIZES = 'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive';

// ======================================================
// Transitions
// ======================================================

type SemanticDIRECTIONALTRANSITIONS =  'scale' | 'fade' | 'fade up' | 'fade down' | 'fade left' | 'fade right' |
  'horizontal flip' | 'vertical flip' | 'drop' | 'fly left' | 'fly right' | 'fly up' | 'fly down' | 'swing left' |
  'swing right' | 'swing up' | 'swing down' | 'browse' | 'browse right' | 'slide down' | 'slide up' | 'slide right';
type SemanticSTATICTRANSITIONS = 'jiggle' | 'flash' | 'shake' | 'pulse' | 'tada' | 'bounce';

export type SemanticTRANSITIONS = SemanticDIRECTIONALTRANSITIONS | SemanticSTATICTRANSITIONS;

// ======================================================
// Widths
// ======================================================

type SemanticWIDTHSNUMBER = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;
type SemanticWIDTHSSTRING = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' |
  '9' | '10' | '11' | '12' | '13' | '14' | '15' | '16' |
  'one' | 'two' | 'three' | 'four' | 'five' | 'six' | 'seven' | 'eight' |
  'nine' | 'ten' | 'eleven' | 'twelve' | 'thirteen' | 'fourteen' | 'fifteen' | 'sixteen';

export type SemanticWIDTHS = SemanticWIDTHSNUMBER | SemanticWIDTHSSTRING;
