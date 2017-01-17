import { SemanticPOSITIONING, SemanticSIZES } from '../..';
import { PortalProps } from '../../addons/Portal';

export type PopupPropOn = 'hover' | 'click' | 'focus';

interface PopupProps extends PortalProps {

  /** Display the popup without the pointing arrow */
  basic?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Shorthand for primary content. */
  content?: any;

  /** A Flowing popup have no maximum width and continue to flow to fit its content */
  flowing?: boolean;

  /** Header displayed above the content in bold */
  header?: string;

  /** The node where the popup should mount.. */
  hideOnScroll?: boolean;

  /** Whether the popup should not close on hover */
  hoverable?: boolean;

  /** Invert the colors of the popup */
  inverted?: boolean;

  /** Horizontal offset in pixels to be applied to the popup */
  offset?: number;

  /** Event triggering the popup */
  on?: PopupPropOn;

  /** Positioning for the popover */
  positioning?: SemanticPOSITIONING;

  /** Popup size */
  size?: SemanticSIZES;

  /** custom popup style */
  style?: Object;

  /** Popup width */
  wide?: boolean | 'very';
}

interface PopupClass extends React.ComponentClass<PopupProps> {
  Content: typeof PopupContent;
  Header: typeof PopupHeader;
}

export const Popup: PopupClass;

interface PopupContentProps {

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const PopupContent: React.ComponentClass<PopupContentProps>;

interface PopupHeaderProps {

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const PopupHeader: React.ComponentClass<PopupHeaderProps>;
