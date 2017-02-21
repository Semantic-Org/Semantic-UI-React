// ======================================================
// Alignments
// ======================================================

export type SemanticFLOATS = 'left' | 'right';
export type SemanticTEXTALIGNMENTS = 'left' | 'center' | 'right' | 'justified';
export type SemanticVERTICALALIGNMENTS = 'top' | 'middle' | 'bottom';

// ======================================================
// Styling
// ======================================================

export type SemanticCOLORS = 'red' | 'orange' | 'yellow' | 'olive' |'green' | 'teal' | 'blue' | 'violet' | 'purple' |
  'pink' | 'brown' | 'grey' | 'black';
export type SemanticSIZES = 'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive';

// ======================================================
// Widths
// ======================================================

type SemanticWIDTHSNUMBER = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;
type SemanticWIDTHSSTRING = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' |
  '9' | '10' | '11' | '12' | '13' | '14' | '15' | '16' |
  'one' | 'two' | 'three' | 'four' | 'five' | 'six' | 'seven' | 'eight' |
  'nine' | 'ten' | 'eleven' | 'twelve' | 'thirteen' | 'fourteen' | 'fifteen' | 'sixteen';

export type SemanticWIDTHS = SemanticWIDTHSNUMBER | SemanticWIDTHSSTRING;
