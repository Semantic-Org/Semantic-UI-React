import { SemanticPOSITIONING, SemanticSIZES } from '../..';

export type PopupPropOn = 'hover'|'click'|'focus';

interface PopupProps {

  /** Display the popup without the pointing arrow */
  basic?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

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
  inverted?: string;

  /** Horizontal offset in pixels to be applied to the popup */
  offset?: number;

  /** Event triggering the popup */
  on?: PopupPropOn;

  /**
   * Called when a close event happens
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose?: Function;

  /**
   * Called when the popup is mounted on the DOM
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount?: Function;

  /**
   * Called when an open event happens
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen?:Function;

  /**
   * Called when the popup is unmounted from the DOM
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount?: Function;


  /** Positioning for the popover */
  positioning?: SemanticPOSITIONING;

  /** Popup size */
  size?: SemanticSIZES;

  /** custom popup style */
  style?: Object;

  /** Element to be rendered in-place where the popup is defined. */
  trigger?: React.ReactNode;

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
