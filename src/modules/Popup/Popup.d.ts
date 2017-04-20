import * as React from 'react';

import { PortalProps } from '../../addons/Portal';
import { default as PopupContent } from './PopupContent';
import { default as PopupHeader } from './PopupHeader';

export interface PopupProps extends PortalProps {
  [key: string]: any;

  /** Display the popup without the pointing arrow */
  basic?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Simple text content for the popover. */
  content?: React.ReactNode;

  /** A Flowing popup have no maximum width and continue to flow to fit its content. */
  flowing?: boolean;

  /** Header displayed above the content in bold. */
  header?: any;

  /** The node where the popup should mount. */
  hideOnScroll?: boolean;

  /** Whether the popup should not close on hover. */
  hoverable?: boolean;

  /** Invert the colors of the popup */
  inverted?: boolean;

  /** Horizontal offset in pixels to be applied to the popup. */
  offset?: number;

  /** Event triggering the popup. */
  on?: 'hover' | 'click' | 'focus';

  /** Position for the popover. */
  position?: 'top left' | 'top right' |
    'bottom right' | 'bottom left' |
    'right center' | 'left center' |
    'top center' | 'bottom center';

  /** Popup size. */
  size?: 'mini' | 'tiny' | 'small' | 'large' | 'huge';

  /** Custom Popup style. */
  style?: Object;

  /** Popup width. */
  wide?: boolean | 'very';
}

interface PopupComponent extends React.ComponentClass<PopupProps> {
  Content: typeof PopupContent;
  Header: typeof PopupHeader;
}

declare const Popup: PopupComponent;

export default Popup;
