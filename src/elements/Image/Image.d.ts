import * as React from 'react';

import {
  SemanticFLOATS,
  SemanticSIZES,
  SemanticVERTICALALIGNMENTS,
  SemanticWIDTHS
} from '../..';
import { LabelProps } from '../Label';
import ImageGroup from './ImageGroup';

export interface ImageProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Alternate text for the image specified. */
  alt?: string;

  /** An image may be formatted to appear inline with text as an avatar. */
  avatar?: boolean;

  /** An image may include a border to emphasize the edges of white or transparent content. */
  bordered?: boolean;

  /** An image can appear centered in a content block. */
  centered?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** An image can show that it is disabled and cannot be selected. */
  disabled?: boolean;

  /** Shorthand for Dimmer. */
  dimmer?: any;

  /** An image can sit to the left or right of other content. */
  floated?: SemanticFLOATS;

  /** An image can take up the width of its container. */
  fluid?: boolean;

  /** The img element height attribute. */
  height?: string | number;

  /** An image can be hidden. */
  hidden?: boolean;

  /** Renders the Image as an <a> tag with this href. */
  href?: string;

  /** An image may appear inline. */
  inline?: boolean;

  /** Shorthand for Label. */
  label?: any | LabelProps;

  /** An image may appear rounded or circular. */
  shape?: 'rounded'|'circular';

  /** An image may appear at different sizes. */
  size?: SemanticSIZES;

  /** An image can specify that it needs an additional spacing to separate it from nearby content. */
  spaced?: boolean|'left'|'right';

  /** Specifies the URL of the image. */
  src?: string;

  /** Whether or not to add the ui className. */
  ui?: boolean;

  /** An image can specify its vertical alignment. */
  verticalAlign?: SemanticVERTICALALIGNMENTS;

  /** The img element width attribute. */
  width?: SemanticWIDTHS;

  /** An image can render wrapped in a `div.ui.image` as alternative HTML markup. */
  wrapped?: boolean;
}

interface ImageComponent extends React.StatelessComponent<ImageProps> {
  Group: typeof ImageGroup;
}

declare const Image: ImageComponent;

export default Image;
