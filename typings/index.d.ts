///<reference types="react"/>
// Source: ../../../../Downloads/semantic-ui-react.d.ts
// import ListItemContent = __ReactMDL.ListItemContent;

import * as React from "react";

// ======================================================
// Enums
// ======================================================

type InputType = 'color' | 'date' | 'datetime' | 'datetime-local' | 'email' | 'number' | 'range' | 'search' | 'select' | 'password' | 'tel' | 'text' | 'time' | 'url' | 'week'

type SemanticCOLORS = 'red' | 'orange' | 'yellow' | 'olive' | 'green' | 'teal' | 'blue' | 'violet' | 'purple' | 'pink' | 'brown' | 'grey' | 'black' | 'twitter' | 'google plus' | 'facebook'
type SemanticSOCIAL = 'facebook' | 'google plus' | 'vk' | 'twitter' | 'linkedin' | 'instagram' | 'youtube'
type SemanticROTATION = 'clockwise' | 'counterclockwise'
type SemanticFLOATS = 'left' | 'right'
type SemanticSIZES = 'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive'
type SemanticTEXTALIGNMENTS = 'left' | 'center' |'right' | 'justified'
type SemanticVERTICALALIGNMENTS = 'top' | 'middle' |'bottom'
type SemanticWIDTHSNUMBER = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15' | '16'
type SemanticWIDTHSSTRING = 'one' | 'two' | 'three' | 'four' | 'five' | 'six' | 'seven' | 'eight' | 'nine' | 'ten' | 'eleven' | 'twelve' | 'thirteen' | 'fourteen' | 'fifteen' | 'sixteen'
type SemanticCOUNTRY = 'ad' | 'andorra' | 'ae' | 'united arab emirates' | 'uae' | 'af' | 'afghanistan' | 'ag' | 'antigua' | 'ai' | 'anguilla' | 'al' | 'albania' | 'am' | 'armenia' | 'an' | 'netherlands antilles' | 'ao' | 'angola' | 'ar' | 'argentina' | 'as' | 'american samoa' | 'at' | 'austria' | 'au' | 'australia' | 'aw' | 'aruba' | 'ax' | 'aland islands' | 'az' | 'azerbaijan' | 'ba' | 'bosnia' | 'bb' | 'barbados' | 'bd' | 'bangladesh' | 'be' | 'belgium' | 'bf' | 'burkina faso' | 'bg' | 'bulgaria' | 'bh' | 'bahrain' | 'bi' | 'burundi' | 'bj' | 'benin' | 'bm' | 'bermuda' | 'bn' | 'brunei' | 'bo' | 'bolivia' | 'br' | 'brazil' | 'bs' | 'bahamas' | 'bt' | 'bhutan' | 'bv' | 'bouvet island' | 'bw' | 'botswana' | 'by' | 'belarus' | 'bz' | 'belize' | 'ca' | 'canada' | 'cc' | 'cocos islands' | 'cd' | 'congo' | 'cf' | 'central african republic' | 'cg' | 'congo brazzaville' | 'ch' | 'switzerland' | 'ci' | 'cote divoire' | 'ck' | 'cook islands' | 'cl' | 'chile' | 'cm' | 'cameroon' | 'cn' | 'china' | 'co' | 'colombia' | 'cr' | 'costa rica' | 'cs' | 'serbia' | 'cu' | 'cuba' | 'cv' | 'cape verde' | 'cx' | 'christmas island' | 'cy' | 'cyprus' | 'cz' | 'czech republic' | 'de' | 'germany' | 'dj' | 'djibouti' | 'dk' | 'denmark' | 'dm' | 'dominica' | 'do' | 'dominican republic' | 'dz' | 'algeria' | 'ec' | 'ecuador' | 'ee' | 'estonia' | 'eg' | 'egypt' | 'eh' | 'western sahara' | 'er' | 'eritrea' | 'es' | 'spain' | 'et' | 'ethiopia' | 'eu' | 'european union' | 'fi' | 'finland' | 'fj' | 'fiji' | 'fk' | 'falkland islands' | 'fm' | 'micronesia' | 'fo' | 'faroe islands' | 'fr' | 'france' | 'ga' | 'gabon' | 'gb' | 'united kingdom' | 'gd' | 'grenada' | 'ge' | 'georgia' | 'gf' | 'french guiana' | 'gh' | 'ghana' | 'gi' | 'gibraltar' | 'gl' | 'greenland' | 'gm' | 'gambia' | 'gn' | 'guinea' | 'gp' | 'guadeloupe' | 'gq' | 'equatorial guinea' | 'gr' | 'greece' | 'gs' | 'sandwich islands' | 'gt' | 'guatemala' | 'gu' | 'guam' | 'gw' | 'guinea-bissau' | 'gy' | 'guyana' | 'hk' | 'hong kong' | 'hm' | 'heard island' | 'hn' | 'honduras' | 'hr' | 'croatia' | 'ht' | 'haiti' | 'hu' | 'hungary' | 'id' | 'indonesia' | 'ie' | 'ireland' | 'il' | 'israel' | 'in' | 'india' | 'io' | 'indian ocean territory' | 'iq' | 'iraq' | 'ir' | 'iran' | 'is' | 'iceland' | 'it' | 'italy' | 'jm' | 'jamaica' | 'jo' | 'jordan' | 'jp' | 'japan' | 'ke' | 'kenya' | 'kg' | 'kyrgyzstan' | 'kh' | 'cambodia' | 'ki' | 'kiribati' | 'km' | 'comoros' | 'kn' | 'saint kitts and nevis' | 'kp' | 'north korea' | 'kr' | 'south korea' | 'kw' | 'kuwait' | 'ky' | 'cayman islands' | 'kz' | 'kazakhstan' | 'la' | 'laos' | 'lb' | 'lebanon' | 'lc' | 'saint lucia' | 'li' | 'liechtenstein' | 'lk' | 'sri lanka' | 'lr' | 'liberia' | 'ls' | 'lesotho' | 'lt' | 'lithuania' | 'lu' | 'luxembourg' | 'lv' | 'latvia' | 'ly' | 'libya' | 'ma' | 'morocco' | 'mc' | 'monaco' | 'md' | 'moldova' | 'me' | 'montenegro' | 'mg' | 'madagascar' | 'mh' | 'marshall islands' | 'mk' | 'macedonia' | 'ml' | 'mali' | 'mm' | 'myanmar' | 'burma' | 'mn' | 'mongolia' | 'mo' | 'macau' | 'mp' | 'northern mariana islands' | 'mq' | 'martinique' | 'mr' | 'mauritania' | 'ms' | 'montserrat' | 'mt' | 'malta' | 'mu' | 'mauritius' | 'mv' | 'maldives' | 'mw' | 'malawi' | 'mx' | 'mexico' | 'my' | 'malaysia' | 'mz' | 'mozambique' | 'na' | 'namibia' | 'nc' | 'new caledonia' | 'ne' | 'niger' | 'nf' | 'norfolk island' | 'ng' | 'nigeria' | 'ni' | 'nicaragua' | 'nl' | 'netherlands' | 'no' | 'norway' | 'np' | 'nepal' | 'nr' | 'nauru' | 'nu' | 'niue' | 'nz' | 'new zealand' | 'om' | 'oman' | 'pa' | 'panama' | 'pe' | 'peru' | 'pf' | 'french polynesia' | 'pg' | 'new guinea' | 'ph' | 'philippines' | 'pk' | 'pakistan' | 'pl' | 'poland' | 'pm' | 'saint pierre' | 'pn' | 'pitcairn islands' | 'pr' | 'puerto rico' | 'ps' | 'palestine' | 'pt' | 'portugal' | 'pw' | 'palau' | 'py' | 'paraguay' | 'qa' | 'qatar' | 're' | 'reunion' | 'ro' | 'romania' | 'rs' | 'serbia' | 'ru' | 'russia' | 'rw' | 'rwanda' | 'sa' | 'saudi arabia' | 'sb' | 'solomon islands' | 'sc' | 'seychelles' | 'gb sct' | 'scotland' | 'sd' | 'sudan' | 'se' | 'sweden' | 'sg' | 'singapore' | 'sh' | 'saint helena' | 'si' | 'slovenia' | 'sj' | 'svalbard' | 'jan mayen' | 'sk' | 'slovakia' | 'sl' | 'sierra leone' | 'sm' | 'san marino' | 'sn' | 'senegal' | 'so' | 'somalia' | 'sr' | 'suriname' | 'st' | 'sao tome' | 'sv' | 'el salvador' | 'sy' | 'syria' | 'sz' | 'swaziland' | 'tc' | 'caicos islands' | 'td' | 'chad' | 'tf' | 'french territories' | 'tg' | 'togo' | 'th' | 'thailand' | 'tj' | 'tajikistan' | 'tk' | 'tokelau' | 'tl' | 'timorleste' | 'tm' | 'turkmenistan' | 'tn' | 'tunisia' | 'to' | 'tonga' | 'tr' | 'turkey' | 'tt' | 'trinidad' | 'tv' | 'tuvalu' | 'tw' | 'taiwan' | 'tz' | 'tanzania' | 'ua' | 'ukraine' | 'ug' | 'uganda' | 'um' | 'us minor islands' | 'us' | 'america' | 'united states' | 'uy' | 'uruguay' | 'uz' | 'uzbekistan' | 'va' | 'vatican city' | 'vc' | 'saint vincent' | 've' | 'venezuela' | 'vg' | 'british virgin islands' | 'vi' | 'us virgin islands' | 'vn' | 'vietnam' | 'vu' | 'vanuatu' | 'gb wls' | 'wales' | 'wf' | 'wallis and futuna' | 'ws' | 'samoa' | 'ye' | 'yemen' | 'yt' | 'mayotte' | 'za' | 'south africa' | 'zm' | 'zambia' | 'zw' | 'zimbabwe'
type SemanticPOSITIONING = 'top left'|'top right'|'bottom right'|'bottom left'|'right center'|'left center'|'top center'|'bottom center';

type SemanticGenericOnClick = (event: any, value: any)=>void;
type SemanticFormOnClick = (event: any, object: Object)=>void;
type SemanticSearchOnClick = (event: any, value: any, text: string)=>void;  // TODO - not sure if this is correct.

// ======================================================
// Events
// ======================================================

interface ReactMouseEvents<T> {
  // MouseEvents

  /**
 * Called after user's click.
 * @param {SyntheticEvent} event - React's original SyntheticEvent.
 * @param {object} data - All props.
 */
  onClick?: React.MouseEventHandler<T>;
  onContextMenu?: React.MouseEventHandler<T>;
  onDoubleClick?: React.MouseEventHandler<T>;
  onDrag?: React.DragEventHandler<T>;
  onDragEnd?: React.DragEventHandler<T>;
  onDragEnter?: React.DragEventHandler<T>;
  onDragExit?: React.DragEventHandler<T>;
  onDragLeave?: React.DragEventHandler<T>;
  onDragOver?: React.DragEventHandler<T>;
  onDragStart?: React.DragEventHandler<T>;
  onDrop?: React.DragEventHandler<T>;
  onMouseDown?: React.MouseEventHandler<T>;
  onMouseEnter?: React.MouseEventHandler<T>;
  onMouseLeave?: React.MouseEventHandler<T>;
  onMouseMove?: React.MouseEventHandler<T>;
  onMouseOut?: React.MouseEventHandler<T>;
  onMouseOver?: React.MouseEventHandler<T>;
  onMouseUp?: React.MouseEventHandler<T>;
}

// Focus Events
interface ReactFocusEvents<T> {
  onFocus?: React.FocusEventHandler<T>;
  onBlur?: React.FocusEventHandler<T>;
}

interface FormEventHandler<E> {
  (event: E, ...params: any[]): void;
}

// Form Events
interface ReactFormEvents<T> {
  onChange?: FormEventHandler<React.FormEvent<T>>;
  onInput?: FormEventHandler<React.FormEvent<T>>;
  onSubmit?: FormEventHandler<React.FormEvent<T>>;
}

// ======================================================
// Elements
// ======================================================

// Button
// ----------------------------------
type SemanticButtonLABELPOSITIONS = 'right' | 'left';

interface ButtonProps extends ReactMouseEvents<HTMLButtonElement> {
  
  /** A button can show it is currently the active user selection */
  active?: boolean;

  /** A button can animate to show hidden content */
  animated?: 'fade'|'vertical';

  /** An element type to render as (string or function). */
  as?: any;

  /** A button can be attached to the top or bottom of other content */
  attached?: 'left' | 'right' | 'top' | 'bottom';

  /** A basic button is less pronounced */
  basic?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** A button can be circular */
  circular?: boolean;

  /** Additional classes. */
  className?: string;

  /** A button can have different colors */
  color?: SemanticCOLORS | SemanticSOCIAL;

  /** A button can reduce its padding to fit into tighter spaces */
  compact?: boolean;
  
  /** Shorthand for primary content. */
  content?: any;

  /** A button can show it is currently unable to be interacted with */
  disabled?: boolean;

  /** A button can be aligned to the left or right of its container */
  floated?: SemanticFLOATS;

  /** A button can take the width of its container */
  fluid?: boolean;

  /** Add an Icon by name, props object, or pass an <Icon /> */
  icon?: any;

  /** A button can be formatted to appear on dark backgrounds */
  inverted?: boolean;

  /** Add a Label by text, props object, or pass a <Label /> */
  label?: any;

  /** A labeled button can format a Label or Icon to appear on the left or right */
  labelPosition?: SemanticButtonLABELPOSITIONS;
  
  /** A button can show a loading indicator */
  loading?: boolean;
  
  /** A button can hint towards a negative consequence */
  negative?: boolean;

  /** A button can hint towards a positive consequence */
  positive?: boolean;

  /** A button can be formatted to show different levels of emphasis */
  primary?: boolean;

  /** A button can be formatted to show different levels of emphasis */
  secondary?: boolean;

  /** A button can have different sizes */
  size?: SemanticSIZES;

  /** A button can be formatted to toggle on and off */
  toggle?: boolean;

  //TODO why not in list?
  type?: string;
}

interface ButtonClass extends React.ComponentClass<ButtonProps> {
  Content: typeof ButtonContent;
  Group: typeof ButtonGroup;
  Or: typeof ButtonOr;
}

export const Button: ButtonClass;

interface ContentProps {

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Initially hidden, visible on hover */
  hidden?: boolean;

  /** Initially visible, hidden on hover */
  visible?: boolean;
}

export const ButtonContent: React.ComponentClass<ContentProps>;

interface GroupProps {

  /** An element type to render as (string or function). */
  as?: any;

  /** A button can be attached to the top or bottom of other content */
  attached?: string;

  /** Groups can be less pronounced */
  basic?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Groups can have a shared color */
  color?: SemanticCOLORS | SemanticSOCIAL;

  /** Groups can be formatted as icons */
  icon?: any;
  
  /** Groups can be formatted as labeled icon buttons */
  labeled?: boolean;
  
  /** Groups can have different sizes */
  size?: SemanticSIZES;
  
  /** Groups can have their widths divided evenly */
  widths?: number | SemanticWIDTHSSTRING | SemanticWIDTHSNUMBER;
}

export const ButtonGroup: React.ComponentClass<GroupProps>;

interface OrProps {

  /** An element type to render as (string or function). */
  as?: any;

  /** Additional classes. */
  className?: string;
}

export const ButtonOr: React.ComponentClass<OrProps>;

// Container
// ----------------------------------
interface ContainerProps {

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode,

  /** Additional classes. */
  className?: string;

  /** Container has no maximum with */
  fluid?: boolean,

  /** Reduce maximum width to more naturally accommodate text */
  text?: boolean,

  /** Describes how the text inside this component should be aligned. */
  textAlign?: SemanticTEXTALIGNMENTS,
}
export class Container extends React.Component<ContainerProps, void> {
}

// Divider
// ----------------------------------
interface DividerProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */   
  children?: React.ReactNode,

  /** Additional classes. */
  className?: string;

  /** Divider can clear the content above it */
  clearing?: boolean,

  /** Divider can be fitted without any space above or below it */
  fitted?: boolean,

  /** Divider can divide content without creating a dividing line */
  hidden?: boolean,

  /** Divider can segment content horizontally */
  horizontal?: boolean,

  /** Divider can have it's colours inverted */
  inverted?: boolean,
  
  /** Divider can provide greater margins to divide sections of content */
  section?: boolean,

  /** Divider can segment content vertically */
  vertical?: boolean,
}
export class Divider extends React.Component<DividerProps, void> {
}

// Flag
// ----------------------------------
interface FlagProps extends ReactMouseEvents<any> {

  /** An element type to render as (string or function). */
  as?: any;

  /** Additional classes. */
  className?: string;

  /** Flag name, can use the two digit country code, the full name, or a common alias */
  name: SemanticCOUNTRY,
}
export class Flag extends React.Component<FlagProps, void> {
}

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

// Icon
// ----------------------------------
interface IconProps extends ReactMouseEvents<any> {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Formatted to appear bordered */
  bordered?: boolean,

  /** Icon can formatted to appear circular */
  circular?: boolean,

  /** Additional classes. */
  className?: string;

  /** Color of the icon. */
  color?: SemanticCOLORS,

  /** Icons can display a smaller corner icon */
  corner?: boolean,

  /** Show that the icon is inactive */
  disabled?: boolean;

  /** Fitted, without space to left or right of Icon. */
  fitted?: boolean,

  /** Icon can flipped */
  flipped?: 'horizontally' | 'vertically'

  /** Formatted to have its colors inverted for contrast */
  inverted?: boolean,

  /** Icon can be formatted as a link */
  link?: boolean,

  /** Icon can be used as a simple loader */
  loading?: boolean,

  /** Name of the icon */
  name?: string,

  /** Icon can rotated */
  rotated?: SemanticROTATION,

  /** Size of the icon. */
  size?: SemanticSIZES,
}

interface IconClass extends React.ComponentClass<IconProps> {
  Content: typeof IconGroup;
}
export const Icon: IconClass;

interface IconGroupProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Size of the icon group. */
  size?: SemanticSIZES;
}

export const IconGroup: React.ComponentClass<IconGroupProps>;

// Image
// ----------------------------------
interface ImageProps extends ReactMouseEvents<any> {

  /** Alternate text for the image specified. */
  alt?: string;

  /** An element type to render as (string or function). */
  as?: any;

  /** An image may be formatted to appear inline with text as an avatar. */
  avatar?: boolean;

  /** An image may include a border to emphasize the edges of white or transparent content. */
  bordered?: boolean;

  /** An image can appear centered in a content block. */
  centered?: boolean;

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
  height?: string|number;
  
  /** Renders the Image as an <a> tag with this href. */
  href?: string;

  /** An image may appear inline. */
  inline?: boolean;

  /** Shorthand for Label. */
  label?: LabelProps;

  /** An image may appear rounded or circular. */
  shape?: boolean |'rounded'|'circular';

  /** An image may appear at different sizes. */
  size?: SemanticSIZES;

  /** An image can specify that it needs an additional spacing to separate it from nearby content. */
  spaced?: boolean|'left'|'right';
  
  /** Specifies the URL of the image. */
  src?: string;

  /** Whether or not to add the ui className. */
  ui?: boolean;

  /** An image can specify its vertical alignment */
  verticalAlign?: SemanticVERTICALALIGNMENTS;
  
  /** The img element width attribute */
  width?: number|SemanticWIDTHSSTRING| SemanticWIDTHSNUMBER;
  
  /** An image can render wrapped in a `div.ui.image` as alternative HTML markup */
  wrapped?: any;
}

interface ImageClass extends React.ComponentClass<ImageProps> {
  Group: typeof ImageGroup;
}

export const Image: ImageClass;

interface ImageGroupProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A group of images can be formatted to have the same size. */
  size?: SemanticSIZES;
}
export const ImageGroup: React.ComponentClass<ImageGroupProps>;

// Input
// ----------------------------------
interface InputProps extends ReactFocusEvents<HTMLInputElement>, ReactFormEvents<HTMLInputElement> {
  
  /** An Input can be formatted to alert the user to an action they may perform */
  action?: any;

  /** An action can appear along side an Input on the left or right */
  actionPosition?: 'left'

  /** An element type to render as (string or function). */
  as?: any;

  autocomplete?: string; // Used by chrome https://developers.google.com/web/updates/2015/06/checkout-faster-with-autofill

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  defaultValue?: string;

  /** An Input field can show that it is disabled */
  disabled?: boolean;

  /** An Input field can show the data contains errors */
  error?: boolean;
  fluid?: boolean;
  focus?: boolean;

  /** Optional Icon to display inside the Input */
  icon?: any;

  /** An Icon can appear inside an Input on the left */
  iconPosition?: 'left';

  /** Shorthand for creating the HTML Input */
  input?: any;

  /** Format to appear on dark backgrounds */
  inverted?: boolean;

  /** Optional Label to display along side the Input */
  label?: any;

  /** A Label can appear outside an Input on the left or right */
  labelPosition?: SemanticButtonLABELPOSITIONS;

  /** An Icon Input field can show that it is currently loading data */
  loading?: boolean;

  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  step?: number;

  /** An Input can vary in size */
  size?: SemanticSIZES;

  /** Transparent Input has no background */
  transparent?: boolean;

  /** The HTML input type */
  type?: string;

  value?: string | number;
  width?: number;
}
export class Input extends React.Component<InputProps, void> {
}

// Label
// ----------------------------------
type LabelPropAttached = 'top' | 'bottom' | 'top right' | 'top left' | 'bottom left' | 'bottom right';
type LabelPropPointing = 'above' | 'below' | 'left' | 'right';
type LabelPropCorner = 'left' | 'right';
interface LabelProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** A label can be active. */
  active?:boolean;

  /** A label can attach to a content segment. */
  attached?: LabelPropAttached;

  /** A label can reduce its complexity. */
  basic?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** A label can be circular. */
  circular?: boolean;

  /** Additional classes. */
  className?: string;

  /** Color of the label. */
  color?: SemanticCOLORS;

  /** Shorthand for primary content. */
  content?: any;

  /** A label can position itself in the corner of an element. */
  corner?: boolean | LabelPropCorner;

  /** Shorthand for LabelDetail. */
  detail?: any;

  /** Formats the label as a dot. */
  empty?: any;

  /** Float above another element in the upper right corner. */
  floating?: boolean;

  /** A horizontal label is formatted to label content along-side it horizontally. */
  horizontal?: boolean;

  /** Add an icon by icon name or pass an <Icon /.> */
  icon?: any;

  /** A label can be formatted to emphasize an image or prop can be used as shorthand for Image. */
  image?: any;

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick?: React.MouseEventHandler<HTMLDivElement>;

  /**
   * Adds an "x" icon, called when "x" is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onRemove?: React.FormEventHandler<HTMLDivElement>;

  /** A label can point to content next to it. */
  pointing?: boolean | LabelPropPointing;

  /** Shorthand for Icon to appear as the last child and trigger onRemove. */
  removeIcon?:any;

  /** A label can appear as a ribbon attaching itself to an element. */
  ribbon?: boolean | 'right';

  /** A label can have different sizes. */
  size?: SemanticSIZES;

  /** A label can appear as a tag. */
  tag?: boolean;
}

interface LabelClass extends React.ComponentClass<LabelProps> {
  Detail: typeof LabelDetail;
  Group: typeof LabelGroup;
}

export const Label: LabelClass;

interface LabelDetailProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;
}

export const LabelDetail: React.ComponentClass<LabelDetailProps>;

interface LabelGroupProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Labels can share shapes. */
  circular: boolean;

  /** Additional classes. */
  className?: string;

  /** Label group can share colors together. */
  color?: SemanticCOLORS;

  /** Label group can share sizes together. */
  size?: SemanticSIZES;

  /** Label group can share tag formatting. */
  tag?: boolean;
}

export const LabelGroup: React.ComponentClass<LabelGroupProps>;

// ListItem
// ----------------------------------
interface ListProps extends ReactMouseEvents<any> {
  animated?: boolean;
  
  /** An element type to render as (string or function). */
  as?: any;

  /** A list can mark items with a bullet. */
  bulleted?: boolean;

  /** A list can divide its items into cells. */
  celled?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A list can show divisions between content. */
  divided?: boolean;

  /** An list can be floated left or right. */
  floated?: SemanticFLOATS;

  /** A list can be formatted to have items appear horizontally. */
  horizontal?: boolean;

  /** A list can be inverted to appear on a dark background. */
  inverted?: boolean;

  /** Shorthand array of props for ListItem. */
  items?: any;

  /** A list can be specially formatted for navigation links. */
  link?: boolean;

  /** A list can be ordered numerically. */
  ordered?: boolean;

  /** A list can relax its padding to provide more negative space. */
  relaxed?: boolean | 'very';

  /** A selection list formats list items as possible choices. */
  selection?: boolean;

  /** A list can vary in size. */
  size?: SemanticSIZES;

  /** An element inside a list can be vertically aligned. */
  verticalAlign?: SemanticVERTICALALIGNMENTS;
}

interface ListClass extends React.ComponentClass<ListProps> {
  Content: typeof ListContent;
  Description: typeof ListDescription;
  Header: typeof ListHeader;
  Icon: typeof ListIcon;
  Item: typeof ListItem;
  List: typeof ListList;
}

export const List: ListClass;

interface ListContentProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;

  /** Shorthand for ListDescription. */
  description?: any;

  /** An list content can be floated left or right. */
  floated?: SemanticFLOATS;

  /** Shorthand for ListHeader. */
  header?: any;

  /** An element inside a list can be vertically aligned. */
  verticalAlign?: SemanticVERTICALALIGNMENTS;
}

export const ListContent: React.ComponentClass<ListContentProps>;

interface ListDescriptionProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;
}

export const ListDescription: React.ComponentClass<ListDescriptionProps>;

interface ListHeaderProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;
}

export const ListHeader: React.ComponentClass<ListHeaderProps>;

interface ListIconProps extends ReactMouseEvents<any> {
  
  /** Additional classes. */
  className?: string;

  /** An element inside a list can be vertically aligned. */
  name?: string;
  verticalAlign?: SemanticVERTICALALIGNMENTS;
}

export const ListIcon: React.ComponentClass<ListIconProps>;

interface ListItemProps extends ReactMouseEvents<any> {
  active?: boolean;
  
  /** An element type to render as (string or function). */
  as?: any;
  
  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;

  /** Shorthand for ListDescription. */
  description?: any;

  /** A list item can disabled. */
  disabled?: boolean;

  /** Shorthand for ListHeader. */
  header?: any;

  /** Shorthand for ListIcon. */
  icon?: any;

  /** Shorthand for Image. */
  image?: any;

  /** A value for an ordered list. */
  value?: string;
}

export const ListItem: React.ComponentClass<ListItemProps>;

interface ListListProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const ListList: React.ComponentClass<ListListProps>;

// Loader
// ----------------------------------
interface LoaderProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** A loader can be active or visible. */
  active?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;

  /** A loader can be disabled or hidden. */
  disabled?: boolean;

  /** A loader can show it's unsure of how long a task will take. */
  indeterminate?: boolean;

  /** Loaders can appear inline with content. */
  inline?: boolean | 'centered';

  /** Loaders can have their colors inverted. */
  inverted?: boolean;

  /** Loaders can have different sizes. */
  size?: SemanticSIZES;
}
export class Loader extends React.Component<LoaderProps, void> {
}

// Rail
// ----------------------------------
interface RailProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** A rail can appear attached to the main viewport. */
  attached?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A rail can appear closer to the main viewport. */
  close?: boolean | 'very';

  /** A rail can create a division between itself and a container. */
  dividing?: boolean;

  /** A rail can attach itself to the inside of a container. */
  internal?: boolean;

  /** A rail can be presented on the left or right side of a container. */
  position: SemanticFLOATS;

  // TODO(zuko): this should not support 'medium' from SemanticSize
  /** A rail can have different sizes. */
  size?: SemanticSIZES,
}
export class Rail extends React.Component<RailProps, void> {
}

// Segment
// ----------------------------------
interface SegmentProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Attach segment to other content, like a header */
  attached?: any;

  /** A basic segment has no special formatting */
  basic?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** A segment can be circular */
  circular?: boolean;

  /** Additional classes. */
  className?: string;

  /** A segment can clear floated content */
  clearing?: boolean;

  /** Segment can be colored */
  color?: SemanticCOLORS | SemanticSOCIAL;

  /** A segment may take up only as much space as is necessary */
  compact?: boolean;

  /** A segment may show its content is disabled */
  disabled?: boolean;

  /** Segment content can be floated to the left or right */
  floated?: SemanticFLOATS;

  /** A segment can have its colors inverted for contrast */
  inverted?: boolean;

  /** A segment may show its content is being loaded */
  loading?: boolean;

  /** A segment can increase its padding */
  padded?: boolean;

  /** Formatted to look like a pile of pages. */
  piled?: boolean;

  /** A segment may be formatted to raise above the page. */
  raised?: boolean;

  /** A segment can be formatted to appear less noticeable */
  secondary?: boolean;

  /** A segment can have different sizes. */
  size?: SemanticSIZES;

  /** Formatted to show it contains multiple pages. */
  stacked?: boolean;

  /** A segment can be formatted to appear even less noticeable */
  tertiary?: boolean;

  /** Formats content to be aligned as part of a vertical group. */
  textAlign?: SemanticTEXTALIGNMENTS;

  /** Formats content to be aligned vertically */
  vertical?: boolean;
}

interface SegmentClass extends React.ComponentClass<SegmentProps> {
  Group: typeof SegmentGroup;
}

export const Segment: SegmentClass;

interface SegmentGroupProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A segment may take up only as much space as is necessary */
  compact?: boolean;

  /** Formats content to be aligned horizontally */
  horizontal?: boolean;

  /** Formatted to look like a pile of pages. */
  piled?: boolean;

  /** A segment group may be formatted to raise above the page. */
  raised?: boolean;

  /** A segment group can have different sizes. */
  size?: SemanticSIZES;

  /** Formatted to show it contains multiple pages. */
  stacked?: boolean;
}

export const SegmentGroup: React.ComponentClass<SegmentGroupProps>;

// Step
// ----------------------------------
interface StepProps extends ReactMouseEvents<any> {
  
  /** A step can be highlighted as active. */
  active?: boolean;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A step can show that a user has completed it. */
  completed?: boolean;

  /** Shorthand for StepDescription. */
  description?: any;

  /** Show that the Loader is inactive. */
  disabled?: boolean;

  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href?: string;

  /** Shorthand for Icon. */
  icon?: any;

  /** A step can be link. */
  link?: boolean;

  /**
   * Called on click. When passed, the component will render as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick?: React.MouseEventHandler<HTMLDivElement>;

  /** A step can show a ordered sequence of steps. Passed from StepGroup. */
  ordered?: boolean;

  /** Shorthand for StepTitle. */
  title?: any;
}

interface StepClass extends React.ComponentClass<StepProps> {
  Content: typeof StepContent;
  Description: typeof StepDescription;
  Group: typeof StepGroup;
  Title: typeof StepTitle;
}

export const Step: StepClass;

interface StepContentProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for StepDescription. */
  description?: any;

  /** Shorthand for StepTitle. */
  title?: any;
}

export const StepContent: React.ComponentClass<StepContentProps>;

interface StepDescriptionProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  description?: any;
}

export const StepDescription: React.ComponentClass<StepDescriptionProps>;

interface StepGroupProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A fluid step takes up the width of its container. */
  fluid?: boolean;

  /** Shorthand array of props for Step. */
  items?: any;

  /** A step can show a ordered sequence of steps. */
  ordered?: boolean;

  /** Steps can have different sizes. */
  size?: SemanticSIZES;

  /** A step can stack vertically only on smaller screens. */
  stackable?: boolean;

  /** A step can be displayed stacked vertically. */
  vertical?: SemanticVERTICALALIGNMENTS;
}

export const StepGroup: React.ComponentClass<StepGroupProps>;

interface StepTitleProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  title?: any;
}

export const StepTitle: React.ComponentClass<StepTitleProps>;

// ======================================================
// Collections
// ======================================================

// Breadcrumb
// ----------------------------------
interface BreadcrumbProps extends ReactMouseEvents<HTMLElement> {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content of the Breadcrumb.Divider. */
  divider?: any;

  /** For use with the sections prop. Render as an `Icon` component with `divider` class instead of a `div` in
   *  Breadcrumb.Divider. */
  icon?: any;

  /** Shorthand array of props for Breadcrumb.Section. */
  sections?: Array<any>;

  /** Size of Breadcrumb */
  size?: SemanticSIZES;
}

interface BreadcrumbClass extends React.ComponentClass<BreadcrumbProps> {
  Divider: typeof BreadcrumbDivider;
  Section: typeof BreadcrumbSection;
}

export const Breadcrumb: BreadcrumbClass;

interface BreadcrumbDividerProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Render as an `Icon` component with `divider` class instead of a `div`. */
  icon?: any;
}

export const BreadcrumbDivider: React.ComponentClass<BreadcrumbDividerProps>;

interface BreadcrumbSectionProps {
  
  /** Style as the currently active section. */
  active?: boolean;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href?: string;

  /** Render as an `a` tag instead of a `div`. */
  link?: boolean;

  /**
   * Called on click. When passed, the component will render as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export const BreadcrumbSection: React.ComponentClass<BreadcrumbSectionProps>;

// Form
// ----------------------------------
interface FormProps {
  method?: 'get' | 'post'

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Automatically show any error Message children */
  error?: boolean;

  /** Automatically show a loading indicator */
  loading?: boolean;

  /**
   * Called on submit
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and the form's serialized values.
   */
  onSubmit?: SemanticFormOnClick;

  /** A comment can contain a form to reply to a comment. This may have arbitrary content. */
  reply?: boolean;

  /** Called onSubmit with the form node that returns the serialized form object */
  serializer?: ()=>void;  // TODO, check;

  /** A form can vary in size */
  size?: string;

  /** Automatically show any success Message children */
  success?: boolean;

  /** Automatically show any warning Message children */
  warning?: boolean;

  /** Forms can automatically divide fields to be equal width */
  widths?: SemanticWIDTHSSTRING | SemanticWIDTHSNUMBER | number | 'equal';
}

interface FormClass extends React.ComponentClass<FormProps> {
  Field: typeof FormField;
  Button: typeof FormButton;
  Checkbox: typeof FormCheckbox;
  Dropdown: typeof FormDropdown;
  Group: typeof FormGroup;
  Input: typeof FormInput;
  Radio: typeof FormRadio;
  Select: typeof FormSelect;
  TextArea: typeof FormTextArea;
}

export const Form: FormClass;

interface FormFieldProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /**
   * A form control component (i.e. Dropdown) or HTML tagName (i.e. 'input').
   * Extra FormField props are passed to the control component.
   * Mutually exclusive with children.
   */
  control?: any;

  /** Individual fields may be disabled */
  disabled?: any;

  /** Individual fields may display an error state */
  error?: boolean;

  /** A field can have its label next to instead of above it */
  inline?: boolean;

  // Heads Up!
  // Do not disallow children with `label` shorthand
  // The `control` might accept a `label` prop and `children`
  /** Mutually exclusive with children. */
  label?: string;

  /** A field can show that input is mandatory.  Requires a label. */
  required?: any;

  /** Passed to the control component (i.e. <input type='password' />) */
  type?: string;

  /** A field can specify its width in grid columns */
  width?: SemanticWIDTHSSTRING | SemanticWIDTHSNUMBER | number;
}

export const FormField: React.ComponentClass<FormFieldProps>;

interface FormButtonProps extends ButtonProps {

  /** An element type to render as (string or function). */
  as?: any;

  control?: any;
  width?: number;
}

export const FormButton: React.ComponentClass<FormButtonProps>;

interface FormCheckboxProps {
  
  /** An element type to render as (string or function). */
  as?: any;
  control?: any;
  label?: string;
  name?: string;
  placeholder?: string;
  value?: string|number|Array<string>|Array<number>;
}

export const FormCheckbox: React.ComponentClass<FormCheckboxProps>;

interface FormDropdownProps extends DropdownProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** A FormField control prop */
  control?: any;
  label?: string;
  name?: string;
  placeholder?: string;
}

export const FormDropdown: React.ComponentClass<FormDropdownProps>;

interface FormGroupProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Fields can show related choices */
  grouped?: boolean;

  /** Multiple fields may be inline in a row */
  inline?: boolean;

  /** Fields Groups can specify their width in grid columns or automatically divide fields to be equal width */
  widths?: SemanticWIDTHSSTRING | SemanticWIDTHSNUMBER | number | 'equal';
}

export const FormGroup: React.ComponentClass<FormGroupProps>;

interface FormInputProps extends InputProps, ReactFormEvents<HTMLInputElement>, ReactFocusEvents<HTMLInputElement> {
}

export const FormInput: React.ComponentClass<FormInputProps>;

interface FormRadioProps {
  
  /** An element type to render as (string or function). */
  as?: any;
  checked?: boolean;

  /** A FormField control prop */
  control?: any;
  label?: string;
  name?: string;
  onChange?: SemanticGenericOnClick;
  placeholder?: string;
  value?: string|number|Array<string>|Array<number>;
}

export const FormRadio: React.ComponentClass<FormRadioProps>;

interface FormSelectProps extends ReactFormEvents<HTMLSelectElement>, ReactFocusEvents<HTMLSelectElement> {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** A FormField control prop */
  control?: any;
  label?: string;
  multiple?: boolean;
  name?: string;
  options?: any;
  placeholder?: string;
  search?: boolean;
  width?: number;
  compact?: boolean;
}

export const FormSelect: React.ComponentClass<FormSelectProps>;

interface FormTextAreaProps extends ReactFormEvents<HTMLTextAreaElement>, ReactFocusEvents<HTMLTextAreaElement> {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** A FormField control prop */
  control?: any;
  label?: string;
  name?: string;
  options?: any;
  placeholder?: string;
  rows?: string|number;
  width?: number;
}

export const FormTextArea: React.ComponentClass<FormTextAreaProps>;

// Grid
// ----------------------------------
type GridPropReversed = 'computer' | 'computer vertically' | 'mobile' | 'mobile vertically' | 'tablet' | 'tablet vertically'
interface GridProps {
  
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

// Menu
// ----------------------------------
type MenuPropsIcon = 'labeled';
type MenuPropsTabular = 'right';
type MenuPropsFixed = 'left'| 'right'| 'bottom'| 'top';
type MenuPropsAttached = 'bottom' | 'top';

interface MenuProps {
  activeIndex?: number;
  
  /** An element type to render as (string or function). */
  as?: any;

  /** A menu may be attached to other content segments. */
  attached?: boolean | MenuPropsAttached;

  /** A menu item or menu can have no borders. */
  borderless?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Additional colors can be specified. */
  color?: SemanticCOLORS;

  /** A menu can take up only the space necessary to fit its content. */
  compact?: boolean;

  /** Initial activeIndex value. */
  defaultActiveIndex?: number;

  /** A menu can be fixed to a side of its context. */
  fixed?: MenuPropsFixed;

  /** A menu can be floated. */
  floated?: boolean | SemanticFLOATS;

  /** A vertical menu may take the size of its container. */
  fluid?: boolean;

  /** A menu may have labeled icons. */
  icon?: boolean | MenuPropsIcon;

  /** A menu may have its colors inverted to show greater contrast. */
  inverted?: boolean;

  /** Shorthand array of props for Menu. */
  items?: any;  // TODO - check type;

  /**
   * onClick handler for MenuItem. Mutually exclusive with children.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All item props.
   */
  onItemClick?: React.MouseEventHandler<HTMLDivElement>;
  
  /** A pagination menu is specially formatted to present links to pages of content. */
  pagination?: boolean;

  /** A menu can point to show its relationship to nearby content. */
  pointing?: boolean;

  /** A menu can adjust its appearance to de-emphasize its contents. */
  secondary?: boolean;

  /** A menu can vary in size. */
  size?: SemanticSIZES;  // TODO - remove medium and big.
  
  /** A menu can stack at mobile resolutions. */
  stackable?: boolean;

  /** A menu can be formatted to show tabs of information. */
  tabular?: boolean | MenuPropsTabular;

  /** A menu can be formatted for text content. */
  text?: boolean;

  /** A vertical menu displays elements vertically. */
  vertical?: boolean;

  /** A menu can have its items divided evenly. */
  widths?: number|SemanticWIDTHSSTRING | SemanticWIDTHSNUMBER| number;
}

interface MenuClass extends React.ComponentClass<MenuProps> {
  Header: typeof MenuHeader;
  Item: typeof MenuItem;
  Menu: typeof MenuMenuItem;
}

export const Menu: MenuClass;

interface HeaderProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;
}
export const MenuHeader: React.ComponentClass<HeaderProps>;

interface MenuItemProps extends ReactMouseEvents<HTMLElement> {
  /** A menu item can be active. */
  active?: boolean;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Additional colors can be specified. */
  color?: SemanticCOLORS;

  /** Shorthand for primary content. */
  content?: string;

  /** A menu item or menu can remove element padding, vertically or horizontally. */
  fitted?: boolean | 'horizontally' | 'vertically';

  /** A menu item may include a header or may itself be a header. */
  header?: boolean;

  /** Add an icon by icon name or pass an <Icon /.> */
  icon?: any; // TODO - check type.

  /** MenuItem index inside Menu. */
  index?: number;

  /** A menu item can be link. */
  link?: boolean;

  /** Internal name of the MenuItem. */
  name?: string;

  /** A menu item can take right position. */
  position?: 'right';
}
export const MenuItem: React.ComponentClass<MenuItemProps>;

interface MenuMenuProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A sub menu can take right position. */
  position?: 'right';
}
export const MenuMenuItem: React.ComponentClass<MenuMenuProps>;

// Message
// ----------------------------------
interface MessageProps {
  
	/** An element type to render as (string or function). */
  as?: any;

  /** A message can be formatted to attach itself to other content. */
  attached?: boolean | 'bottom';

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A message can be formatted to be different colors. */
  color?: SemanticCOLORS;

  /** A message can only take up the width of its content. */
  compact?: boolean;

  /** Shorthand for primary content. */
  content?: any;

  /** A message may be formatted to display a negative message. Same as `negative`. */
  error?: boolean;

  /** A message can float above content that it is related to. */
  floating?: boolean;

  /** Shorthand for MessageHeader. */
  header?: any;

  /** A message can be hidden. */
  hidden?: boolean;

  /** Add an icon by icon name or pass an <Icon /.> */
  icon?: any;

  /** A message may be formatted to display information. */
  info?: boolean;

  /** Array shorthand items for the MessageList. Mutually exclusive with children. */
  list?: any;

  /** A message may be formatted to display a negative message. Same as `error`. */
  negative?: boolean;

  /**
   * A message that the user can choose to hide.
   * Called when the user clicks the "x" icon. This also adds the "x" icon.
   */
  onDismiss?: React.MouseEventHandler<HTMLDivElement>;
  
  /** A message may be formatted to display a positive message.  Same as `success`. */
  positive?: boolean;

  /** A message can have different sizes. */
  size?: SemanticSIZES;

  /** A message may be formatted to display a positive message.  Same as `positive`. */
  success?: boolean;

  /** A message can be set to visible to force itself to be shown. */
  visible?: boolean;

  /** A message may be formatted to display warning messages. */
  warning?: boolean;
}

interface MessageClass extends React.ComponentClass<MessageProps> {
  Content: typeof MessageContent;
  Header: typeof MessageHeader;
  List: typeof MessageList;
  Item: typeof MessageItem;
}

export const Message: MessageClass;

interface MessageContentProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const MessageContent: React.ComponentClass<MessageContentProps>;

interface MessageHeaderProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const MessageHeader: React.ComponentClass<MessageHeaderProps>;

interface MessageListProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand Message.Items. */
  items?: Array<any>;
}

export const MessageList: React.ComponentClass<MessageListProps>;

interface MessageItemProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const MessageItem: React.ComponentClass<MessageItemProps>;

// Table
// ----------------------------------
interface TableProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Attach table to other content */
  attached?: boolean | 'top' | 'bottom';

  /** A table can reduce its complexity to increase readability. */
  basic?: boolean | 'very';

  /** A table may be divided each row into separate cells. */
  celled?: boolean|'internally';

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A table can be collapsing, taking up only as much space as its rows. */
  collapsing?: boolean;

  /** A table can be given a color to distinguish it from other tables. */
  color?: SemanticCOLORS;
  
  /** A table can specify its column count to divide its content evenly. */
  columns?: SemanticWIDTHSNUMBER | SemanticWIDTHSSTRING | number;
  
  /** A table may sometimes need to be more compact to make more rows visible at a time. */
  compact?: boolean | 'very';
  
  /** A table may be formatted to emphasize a first column that defines a rows content. */
  definition?: boolean;

  /**
   * A table can use fixed a special faster form of table rendering that does not resize table cells based on content
   */
  fixed?: boolean;

  /** Shorthand for a TableRow to be placed within Table.Footer. */
  footerRow?: any;

  /** Shorthand for a TableRow to be placed within Table.Header. */
  headerRow?: any;

  /** A table's colors can be inverted. */
  inverted?: boolean;

  /** A table may sometimes need to be more padded for legibility. */
  padded?: boolean | 'very';

  /**
   * A function that takes (data, index) and returns shorthand for a TableRow
   * to be placed within Table.Body.
   */
  renderBodyRow?: ()=>void;  // TODO - check;
  
  /** A table can have its rows appear selectable. */
  selectable?: boolean;
  
  /** A table can specify that its cell contents should remain on a single line and not wrap. */
  singleLine?: boolean;
  
  /** A table can also be small or large. */
  size?: SemanticSIZES;
  
  /** A table can specify how it stacks table content responsively. */
  stackable?: boolean;

  /** A table can stripe alternate rows of content with a darker color to increase contrast. */
  striped?: boolean;
  
  /** A table can be formatted to display complex structured data. */
  structured?: boolean;

  /** Data to be passed to the renderBodyRow function. */
  tableData?: any;

  /** A table can specify how it stacks table content responsively. */
  unstackable?: boolean;
}

interface TableClass extends React.ComponentClass<TableProps> {
  Body: typeof TableBody;
  Cell: typeof TableCell;
  Footer: typeof TableFooter;
  Header: typeof TableHeader;
  HeaderCell: typeof TableHeaderCell;
  Row: typeof TableRow;
}

export const Table: TableClass;

interface TableBodyProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const TableBody: React.ComponentClass<TableBodyProps>;

interface TableCellProps {

  /** A cell can be active or selected by a user. */
  active?: boolean;

  /** An element type to render as (string or function). */
  as ?: any;

  /** Primary content. */
  children ?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A table can be collapsing, taking up only as much space as its rows. */
  collapsing ?: boolean;

  /** Shorthand for primary content. */
  content ?: any;

  /** A cell can be disabled. */
  disabled ?: boolean;

  /** A cell may call attention to an error or a negative value. */
  error ?: boolean;

  /** Add an Icon by name, props object, or pass an <Icon /> */
  icon ?: any;

  /** A cell may let a user know whether a value is bad. */
  negative ?: boolean;

  /** A cell may let a user know whether a value is good. */
  positive ?: boolean;
  
  /** A cell can be selectable. */
  selectable?: boolean;
  
  /** A cell can specify that its contents should remain on a single line and not wrap. */
  singleLine ?: boolean;

  /** A table cell can adjust its text alignment. */
  textAlign?: SemanticTEXTALIGNMENTS;

  /** A table cell can adjust its text alignment. */
  verticalAlign?: SemanticVERTICALALIGNMENTS;

  /** A cell may warn a user. */
  warning?: boolean;

  /** A table can specify the width of individual columns independently. */
  width?: number | SemanticWIDTHSSTRING | SemanticWIDTHSNUMBER;
}

export const TableCell: React.ComponentClass<TableCellProps>;

interface TableFooterProps {
  
  /** An element type to render as (string or function). */
  as?: any;
}

export const TableFooter: React.ComponentClass<TableFooterProps>;

interface TableHeaderProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A definition table can have a full width header or footer, filling in the gap left by the first column. */
  fullWidth?: boolean;
}

export const TableHeader: React.ComponentClass<TableHeaderProps>;

interface TableHeaderCellProps {
  
  /** An element type to render as (string or function). */
  as?: any;
}

export const TableHeaderCell: React.ComponentClass<TableHeaderCellProps>;

interface TableRowProps {

  /** A row can be active or selected by a user. */
  active?: boolean;

  /** An element type to render as (string or function). */
  as ?: any;

  /** An element type to render as (string or function). */
  cellAs?: any;

  /** Shorthand array of props for TableCell. */
  cells?: any;

  /** Primary content. */
  children ?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A row can be disabled. */
  disabled ?: boolean;

  /** A row may call attention to an error or a negative value. */
  error ?: boolean;

  /** A row may let a user know whether a value is bad. */
  negative ?: boolean;

  /** A row may let a user know whether a value is good. */
  positive ?: boolean;

  /** A table row can adjust its text alignment. */
  textAlign?: SemanticTEXTALIGNMENTS;

  /** A table row can adjust its vertical alignment. */
  verticalAlign?: SemanticVERTICALALIGNMENTS;

  /** A row may warn a user. */
  warning?: boolean;
}

export const TableRow: React.ComponentClass<TableRowProps>;

// ======================================================
// Modules
// ======================================================

// Accordion
// ----------------------------------
interface AccordionProps {

  /** Index of the currently active panel. */
  activeIndex?: number | number[];

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Initial activeIndex value. */
  defaultActiveIndex?: number | number[];

  /** Only allow one panel open at a time */
  exclusive?: boolean;

  /** Format to take up the width of it's container. */
  fluid?: boolean;

  /** Format for dark backgrounds. */
  inverted?: string;

  /** Called with (event, index) when a panel title is clicked. */
  onTitleClick?: React.MouseEventHandler<HTMLDivElement>;
  
  /**
   * Create simple accordion panels from an array of { text: <string>, content: <custom> } objects.
   * Object can optionally define an `active` key to open/close the panel.
   * Mutually exclusive with children.
   * TODO: AccordionPanel should be a sub-component
   */
  panels?: any;

  /** Adds some basic styling to accordion panels. */
  styled?: boolean;
}

interface AccordionClass extends React.ComponentClass<AccordionProps> {
  Content: typeof AccordionContent;
  Title: typeof AccordionTitle;
}

export const Accordion: AccordionClass;

interface AccordionContentProps {
  /** Whether or not the content is visible. */
  active?: boolean;
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const AccordionContent: React.ComponentClass<AccordionContentProps>;

interface AccordionTitleProps extends ReactMouseEvents<HTMLElement> {
  
  /** Whether or not the title is in the open state. */
  active?: boolean;
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const AccordionTitle: React.ComponentClass<AccordionTitleProps>;

// Checkbox
// ----------------------------------
interface CheckboxProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Whether or not checkbox is checked. */
  checked?: boolean;

  /** Additional classes. */
  className?: string;

  /** The initial value of checked. */
  defaultChecked?: boolean;

  /** Whether or not checkbox is indeterminate. */
  defaultIndeterminate?:boolean;

  /** A checkbox can appear disabled and be unable to change states */
  disabled?: boolean;

  /** Removes padding for a label. Auto applied when there is no label. */
  fitted?: boolean;
  
  /** Whether or not checkbox is indeterminate. */
  indeterminate?:boolean;

  /** The text of the associated label element. */
  label?: string;

  /** The HTML input name. */
  name?: string;

  /**
   * Called when the user attempts to change the checked state.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed checked/indeterminate state.
   */
  onChange?: React.FormEventHandler<HTMLInputElement>;

  /**
   * Called when the checkbox or label is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and current checked/indeterminate state.
   */
  onClick?: React.MouseEventHandler<HTMLInputElement>;

  /** Format as a radio element. This means it is an exclusive option.*/
  radio?: any;

  /** A checkbox can be read-only and unable to change states */
  readOnly?: boolean;

  /** Format to emphasize the current selection state */
  slider?: any;

  /** Format to show an on or off choice */
  toggle?: any;

  /** HTML input type, either checkbox or radio. */
  type?: 'checkbox'|'radio';

  /** The HTML input value. */
  value?: string;
}

export class Checkbox extends React.Component<CheckboxProps, {}> {
}

// Dimmer
// ----------------------------------
interface DimmerProps {

  /** An active dimmer will dim its parent container. */
  active?: boolean;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;

  /** A disabled dimmer cannot be activated */
  disabled?: boolean;

  /**
   * Called when the dimmer is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick?: React.MouseEventHandler<HTMLDivElement>;

  /**
   * Handles click outside Dimmer's content, but inside Dimmer area.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClickOutside?: React.MouseEventHandler<HTMLDivElement>;

  /** A dimmer can be formatted to have its colors inverted. */
  inverted?: boolean;

  /** A dimmer can be formatted to be fixed to the page. */
  page?: boolean;

  /** A dimmer can be controlled with simple prop. */
  simple?: boolean;
  
}

interface DimmerClass extends React.ComponentClass<DimmerProps> {
  Dimmable: typeof DimmerDimmable;
}

export const Dimmer: DimmerClass;

interface DimmerDimmableProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** A dimmable element can blur its contents. */
  blurring?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Controls whether or not the dim is displayed. */
  dimmed?: boolean;
}

export const DimmerDimmable: React.ComponentClass<DimmerDimmableProps>;

// Dropdown
// ----------------------------------
type DropdownPropPointing = 'left' | 'right' | 'top' | 'top left' | 'top right' | 'bottom' | 'bottom left' | 'bottom right'
type DropdownPropAdditionPosition = 'top' | 'bottom';

interface DropdownProps extends ReactMouseEvents<HTMLElement>, ReactFocusEvents<HTMLElement>, ReactFormEvents<HTMLElement> {
  
  /** Label prefixed to an option added by a user. */
  additionLabel?: string;
  
  /** Position of the `Add: ...` option in the dropdown list ('top' or 'bottom'). */
  additionPosition?: DropdownPropAdditionPosition;
  
  /**
   * Allow user additions to the list of options (boolean).
   * Requires the use of `selection`, `options` and `search`.
   */
  allowAdditions?: any;
  
  /** An element type to render as (string or function). */
  as?: any;

  /** A Dropdown can reduce its complexity */
  basic?: boolean;

  /** Format the Dropdown to appear as a button. */
  button?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A compact dropdown has no minimum width. */
  compact?: boolean;

  /** Initial value of open. */
  defaultOpen?: boolean;
  
  /** Currently selected label in multi-select. */
  defaultSelectedLabel?:any;

  /** Initial value or value array if multiple. */
  defaultValue?: string|number|Array<string>|Array<number>;
  
  /** A disabled dropdown menu or item does not allow user interaction. */
  disabled?:boolean;

  /** An errored dropdown can alert a user to a problem. */
  error?: boolean;

  /** A dropdown menu can contain floated content. */
  floating?: boolean;

  /** A dropdown can take the full width of its parent */
  fluid?: boolean;

  /** A dropdown menu can contain a header. */
  header?: React.ReactNode;
  
  /** Shorthand for Icon. */
  icon?: any;

  /** A dropdown can be formatted to appear inline in other content. */
  inline?: boolean;

  /** A dropdown can be labeled. */
  labeled?: boolean;

  /** A dropdown can show that it is currently loading data. */
  loading?: boolean;

  /** A selection dropdown can allow multiple selections. */
  multiple?: boolean;

  /** Name of the hidden input which holds the value. */
  name?:string;

  /** Message to display when there are no results. */
  noResultsMessage?: string;

  /**
   * Called when a user adds a new item. Use this to update the options list.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and the new item's value.
   */
  onAddItem?: React.MouseEventHandler<HTMLSelectElement>;

  /**
   * Called on search input change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {string} value - Current value of search input.
   */
  onSearchChange?: React.FormEventHandler<HTMLSelectElement>;
  
  /** Controls whether or not the dropdown menu is displayed. */
  open?: boolean;

  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options?: Array<DropdownItemProps>;
  
  /** Placeholder text. */
  placeholder?: string;

  /** A dropdown can be formatted so that its menu is pointing. */
  pointing?: boolean | DropdownPropPointing;
  
  /**
   * A function that takes (data, index, defaultLabelProps) and returns
   * shorthand for Label .
   */
  renderLabel?:any;
  
  /** A dropdown can have its menu scroll. */
  scrolling?: boolean;

  /**
   * A selection dropdown can allow a user to search through a large list of choices.
   * Pass a function here to replace the default search.
   */
  search?: ((filteredOptions:any, searchQuery:any) => void) | boolean; // TODO -add search function;
  
  /** Define whether the highlighted item should be selected on blur. */
  selectOnBlur?: boolean;

  /** A dropdown can be used to select between choices in a form. */
  selection?: any;

  /** A simple dropdown can open without Javascript. */
  simple?: boolean;

  /** A dropdown can receive focus. */
  tabIndex?:string;

  /** The text displayed in the dropdown, usually for the active item. */
  text?: string|React.ReactNode;

  /** Custom element to trigger the menu to become visible. Takes place of 'text'. */
  trigger?: any;

  /** Current value or value array if multiple. Creates a controlled component. */
  value?: string|number|Array<string>|Array<number>;
}

interface DropdownClass extends React.ComponentClass<DropdownProps> {
  Divider: typeof DropdownDivider;
  Header: typeof DropdownHeader;
  Item: typeof DropdownItem;
  Menu: typeof DropdownMenu;
}

export const Dropdown: DropdownClass;

interface DropdownDividerProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Additional classes. */
  className?:string;
}

export const DropdownDivider: React.ComponentClass<DropdownDividerProps>;

interface DropdownHeaderProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;

  /** Shorthand for Icon. */
  icon?: any;
}

export const DropdownHeader: React.ComponentClass<DropdownHeaderProps>;

interface DropdownItemProps extends ReactMouseEvents<HTMLElement>, ReactFocusEvents<HTMLElement>, ReactFormEvents<HTMLElement> {
  
  /** Style as the currently chosen item. */
  active?: boolean;
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Additional text with less emphasis. */
  description?: any;

  /** A dropdown item can be disabled. */
  disabled?: boolean;

  /** Shorthand for Flag. */
  flag?:any;

  /** Shorthand for Icon. */
  icon?: any;

  /** Shorthand for Image. */
  image?:any;

  /** Shorthand for Label. */
  label?:any;

  /**
   * The item currently selected by keyboard shortcut.
   * This is not the active item.
   */
  selected?: boolean;

  /** Display text. */
  text?: any;

  /** Stored value */
  value?: number|string;
}

export const DropdownItem: React.ComponentClass<DropdownItemProps>;

interface DropdownMenuProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A dropdown menu can scroll. */
  scrolling?:boolean;
}

export const DropdownMenu: React.ComponentClass<DropdownMenuProps>;

// Modal
// ----------------------------------
interface ModalProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** A modal can reduce its complexity */
  basic?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Icon */
  closeIcon?:any;

  /** Initial value of open. */
  defaultOpen?:boolean;

  /** A modal can appear in a dimmer */
  dimmer?: boolean | 'blurring' | 'inverted';

  /**
   * Called when a close event happens
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose?: Function;

  /**
   * Called when the portal is mounted on the DOM
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
   * Called when the dropdown is unmounted from the DOM
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount?: Function;

  open?: boolean;

  /** The node where the modal should mount.. */
  mountnode?: any;

  /** A modal can vary in size */
  size?: SemanticSIZES;

}

interface ModalClass extends React.ComponentClass<ModalProps> {
  Header: typeof ModalHeader;
  Content: typeof ModalContent;
  Description: typeof ModalDescription;
  Actions: typeof ModalActions;
}

export const Modal: ModalClass;

interface ModalHeaderProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const ModalHeader: React.ComponentClass<ModalHeaderProps>;

interface ModalContentProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A modal can contain image content */
  image?: boolean;
}

export const ModalContent: React.ComponentClass<ModalContentProps>;

interface ModalDescriptionProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const ModalDescription: React.ComponentClass<ModalDescriptionProps>;

interface ModalActionsProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const ModalActions: React.ComponentClass<ModalActionsProps>;

// Progress
// ----------------------------------
interface ProgressProps {
  
  /** A progress bar can show activity. */
  active?: boolean;

  /** An element type to render as (string or function). */
  as?: any;

  /** A progress bar can attach to and show the progress of an element (i.e. Card or Segment). */
  attached?: 'top' | 'bottom';

  /** Whether success state should automatically trigger when progress completes. */
  autoSuccess?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A progress bar can have different colors. */
  color?: SemanticCOLORS;

  /** A progress bar be disabled. */
  disabled?: boolean;

  /** A progress bar can show a error state. */
  error?: boolean;

  /** An indicating progress bar visually indicates the current level of progress of a task. */
  indicating?: boolean;

  /** A progress bar can have its colors inverted. */
  inverted?: string;

  /** Can be set to either to display progress as percent or ratio. */
  label?: any;

  /** Current percent complete. */
  percent?: any;

  /** Decimal point precision for calculated progress. */
  precision?: number;

  /** A progress bar can contain a text value indicating current progress. */
  progress?: boolean;

  /** A progress bar can vary in size. */
  size?: SemanticSIZES;

  /** A progress bar can show a success state. */
  success?: boolean;

  /**
   * For use with value.
   * Together, these will calculate the percent.
   * Mutually excludes percent.
   */
  total?: any;

  /**
   * For use with total. Together, these will calculate the percent. Mutually excludes percent.
   */
  value?: any;

  /** A progress bar can show a warning state. */
  warning?: boolean;
}

export class Progress extends React.Component<ProgressProps, void> {
}

// Rating
// ----------------------------------
interface RatingProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Additional classes. */
  className?: string;

  /**
   * You can clear the rating by clicking on the current start rating.
   * By default a rating will be only clearable if there is 1 icon.
   * Setting to `true`/`false` will allow or disallow a user to clear their rating.
   */
  clearable?: boolean | 'auto';

  /** The initial rating value. */
  defaultRating?: string|number;

  /** You can disable or enable interactive rating.  Makes a read-only rating. */
  disabled?:boolean;

  /** A rating can use a set of star or heart icons. */
  icon?: 'star'|'heart';

  /** The total number of icons. */
  maxRating?: string|number;

  /**
   * Called after user selects a new rating.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed rating.
   */
  onRate?: React.MouseEventHandler<HTMLDivElement>;

  /** The current number of active icons. */
  rating?: string|number;

  /** A progress bar can vary in size. */
  size?: SemanticSIZES;
}

interface RatingClass extends React.ComponentClass<RatingProps> {
  Icon: typeof RatingIcon;
}

export const Rating: RatingClass;

interface RatingIconProps extends ReactMouseEvents<HTMLElement> {
  
  /** Indicates activity of an icon. */
  active?: boolean;

  /** An element type to render as (string or function). */
  as?:any;

  /** Additional classes. */
  className?: string;

  /** An index of icon inside Rating. */
  index?: number;

  /** Indicates selection of an icon. */
  selected?: boolean;
}

export const RatingIcon: React.ComponentClass<RatingIconProps>;

// Popup
// ----------------------------------
type PopupPropOn = 'hover'|'click'|'focus';

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

// Search
// ----------------------------------
interface SearchProps extends ReactMouseEvents<HTMLInputElement>, ReactFocusEvents<HTMLInputElement>, ReactFormEvents<HTMLInputElement> {
  
  /** A search can have its results aligned to its left or right container edge. */
  aligned?: string;
  
  /** An element type to render as (string or function). */
  as?: any;

  /** A search can display results from remote content ordered by categories. */
  category?: boolean;

  /**
   * A function that returns the category contents.
   * Receives all SearchCategory props.
   */
  categoryRenderer?: ()=>void;  // TODO : fix;

  /** Additional classes. */
  className?: string;

  /** Initial value of open. */
  defaultOpen?: boolean;

  /** Initial value. */
  defaultValue?: string;

  /** A search can have its results take up the width of its container. */
  fluid?: boolean;

  /** Shorthand for Icon. */
  icon?: any;

  loading?: boolean;

  /** Minimum characters to query for results */
  minCharacters?: number;

  /** Additional text for "No Results" message with less emphasis. */
  noResultsDescription?: string;

  /** Message to display when there are no results. */
  noResultsMessage?: string;

  /**
   * Called when a result is selected.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onResultSelect: (e: React.FormEvent<HTMLInputElement>, result: Array<any>|Object ) => void;

  /**
   * Called on search input change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {string} value - Current value of search input.
   */
  onSearchChange?: React.FormEventHandler<HTMLInputElement>;
  
  /** Controls whether or not the results menu is displayed. */
  open?: boolean;

  /** Placeholder of the search input. */
  placeholder?: string;

  /**
   * A function that returns the result contents.
   * Receives all SearchResult props.
   */
  resultRenderer?: ()=>void;   // TODO: fix.

  /**
   * One of:
   * - array of Search.Result props e.g. `{ title: '', description: '' }` or
   * - object of categories e.g. `{ name: '', results: [{ title: '', description: '' }]`
   */
  results?: Array<any>|Object;

  /** Whether the search should automatically select the first result after searching */
  selectFirstResult?: boolean;
  
  /** Whether a "no results" message should be shown if no results are found. */
  showNoResults?: boolean;

  /** Search size */
  size?: SemanticSIZES;

  /** Current value of the search input. Creates a controlled component. */
  value?: string;
}

interface SearchClass extends React.ComponentClass<SearchProps> {
  SearchResult: typeof SearchResult;
  SearchResults: typeof SearchResults;

}

export const Search: SearchClass;

interface SearchResultProps {

  /** The item currently selected by keyboard shortcut. */
  active?: boolean;

  /** An element type to render as (string or function). */
  as?: any;

  /** Additional classes. */
  className?: string;

  /** Additional text with less emphasis. */
  description?: string;

  /** A unique identifier. */
  id?: number;

  /** Add an image to the item. */
  image?: string;

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick?: SemanticSearchOnClick;

  /** Customized text for price. */
  price?: string;

  /**
   * A function that returns the result contents.
   * Receives all SearchResult props.
   */
  renderer?: ()=>void; // TODO - fix;

  /** Display title. */
  title?: string;
}

export const SearchResult: React.ComponentClass<SearchResultProps>;

interface SearchResultsProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const SearchResults: React.ComponentClass<SearchResultsProps>;

interface SearchCategoryProps {
  
  /** The item currently selected by keyboard shortcut. */
  active?: boolean;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Display name. */
  name?: string;

  /**
   * A function that returns the category contents.
   * Receives all SearchCategory props.
   */
  renderer?: ()=>void; // TODO - fix;

  /** Array of Search.Result props */
  results?: Array<typeof SearchResult>;
}

export const SearchCategory: React.ComponentClass<SearchCategoryProps>;

// Sidebar
// ----------------------------------

interface SidebarPushableProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

}

export const SidebarPushable: React.ComponentClass<SidebarPushableProps>;

interface SidebarPusherProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Controls whether or not the dim is displayed. */
  dimmed?: boolean;
}

export const SidebarPusher: React.ComponentClass<SidebarPusherProps>;

interface SidebarProps {
  
  /** Animation style. */
  animation?: 'overlay' | 'push' | 'scale down' | 'uncover' | 'slide out' | 'slide along';
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Initial value of visible. */
  defaultVisible?: boolean;

  /** Direction the sidebar should appear on */
  direction?: 'top' | 'right' | 'bottom' | 'left';
  
  /** Controls whether or not the sidebar is visible on the page. */
  visible?: boolean;

  /** Sidebar width */
  width?: 'very thin' | 'thin' | 'wide' | 'very wide';
}

interface SidebarClass extends React.ComponentClass<SidebarProps>{
  Pushable: typeof SidebarPushable;
  Pusher: typeof SidebarPusher;
}

export const Sidebar: SidebarClass;

// ======================================================
// Views
// ======================================================

// Card
// ----------------------------------
interface CardProps extends ReactMouseEvents<HTMLElement> {

  /** An element type to render as (string or function). */
  as?: any;

  /** A Card can center itself inside its container. */
  centered?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A Card can be formatted to display different colors. */
  color?: SemanticCOLORS;

  /** Shorthand for CardDescription. */
  description?: any;

  /** Shorthand for primary content of CardContent. */
  extra?: any;

  /** A Card can be formatted to take up the width of its container. */
  fluid?: boolean;

  /** Shorthand for CardHeader. */
  header?: any;

  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href?: string;

  /** A card can contain an Image component. */
  image?: any;

  /** Shorthand for CardMeta. */
  meta?: any;

  /**
   * Called on click. When passed, the component renders as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick?: React.MouseEventHandler<any>;

  /** A Card can be formatted to raise above the page. */
  raised?: boolean;
}

interface CardClass extends React.ComponentClass<CardProps> {
  Content: typeof CardContent;
  Description: typeof CardDescription;
  Group: typeof CardGroup;
  Header: typeof CardHeader;
  Meta: typeof CardMeta;
}

export const Card: CardClass;

interface CardContentProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for CardDescription. */
  description?: string;

  /** A card can contain extra content meant to be formatted separately from the main content */
  extra?: boolean;
  
  /** Shorthand for CardHeader. */
  header?: any;

  /** Shorthand for CardMeta. */
  meta?: any;
}

export const CardContent: React.ComponentClass<CardContentProps>;

interface CardDescriptionProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;
}

export const CardDescription: React.ComponentClass<CardDescriptionProps>;

interface CardGroupProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A group of cards can double its column width for mobile */
  doubling?: boolean;

  /** Shorthand array of props for Card. */
  items?: Array<any>;

  /** A group of cards can set how many cards should exist in a row */
  itemsPerRow?: SemanticWIDTHSNUMBER | SemanticWIDTHSSTRING | number;
  
  /** A group of cards can automatically stack rows to a single columns on mobile devices */
  stackable?: boolean;
}

export const CardGroup: React.ComponentClass<CardGroupProps>;

interface CardHeaderProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;
}

export const CardHeader: React.ComponentClass<CardHeaderProps>;

interface CardMetaProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;
}

export const CardMeta: React.ComponentClass<CardMetaProps>;

// Comment
// ----------------------------------
interface CommentProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Comment can be collapsed, or hidden from view. */
  collapsed?: boolean;
}

interface CommentClass extends React.ComponentClass<CommentProps> {
  Author: typeof CommentAuthor;
  Action: typeof CommentAction;
  Actions: typeof CommentActions;
  Avatar: typeof CommentAvatar;
  Content: typeof CommentContent;
  Group: typeof CommentGroup;
  Metadata: typeof CommentMetadata;
  Text: typeof CommentText;
}

export const Comment: CommentClass;

interface CommentAuthorProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const CommentAuthor: React.ComponentClass<CommentAuthorProps>;

interface CommentActionProps {
  
  /** Style as the currently active action. */
  active?: boolean;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const CommentAction: React.ComponentClass<CommentActionProps>;

interface CommentActionsProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const CommentActions: React.ComponentClass<CommentActionsProps>;

interface CommentAvatarProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Additional classes. */
  className?: string;

  /** Specifies the URL of the image. */
  src?: string;
}

export const CommentAvatar: React.ComponentClass<CommentAvatarProps>;

interface CommentContentProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const CommentContent: React.ComponentClass<CommentContentProps>;

interface CommentGroupProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Comments can be collapsed, or hidden from view. */
  collapsed?: boolean;

  /** Comments can hide extra information unless a user shows intent to interact with a comment */
  minimal?: boolean;

  /** A comment list can be threaded to showing the relationship between conversations */
  threaded?: boolean;
}

export const CommentGroup: React.ComponentClass<CommentGroupProps>;

interface CommentMetadataProps {

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const CommentMetadata: React.ComponentClass<CommentMetadataProps>;

interface CommentTextProps {

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const CommentText: React.ComponentClass<CommentTextProps>;

// Item
// ----------------------------------
interface ItemProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;

  /** Shorthand for ItemDescription component. */
  description?: string;

  /** Shorthand for ItemExtra component. */
  extra?: any;

  /** Shorthand for ItemHeader component. */
  header?: any;

  /** Shorthand for ItemImage component. */
  image?: any;

  /** Shorthand for ItemMeta component. */
  meta?: any;
}

interface ItemClass extends React.ComponentClass<ItemProps> {
  Content: typeof ItemContent;
  Description: typeof ItemDescription;
  Extra: typeof ItemExtra;
  Group: typeof ItemGroup;
  Header: typeof ItemHeader;
  Image: typeof ItemImage;
  Meta: typeof ItemMeta;
}

export const Item: ItemClass;

interface ItemContentProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;

  /** Shorthand for ItemDescription component. */
  description?: string;

  /** Shorthand for ItemExtra component. */
  extra?: any;

  /** Shorthand for ItemHeader component. */
  header?: any;

  /** Shorthand for ItemMeta component. */
  meta?: any;

  /** Content can specify its vertical alignment */
  verticalAlign?: SemanticVERTICALALIGNMENTS;
}

export const ItemContent: React.ComponentClass<ItemContentProps>;

interface ItemDescriptionProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;
}

export const ItemDescription: React.ComponentClass<ItemDescriptionProps>;

interface ItemExtraProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;
}

export const ItemExtra: React.ComponentClass<ItemExtraProps>;

interface ItemGroupProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Items can be divided to better distinguish between grouped content. */
  divided?: boolean;

  /** Shorthand array of props for Item. */
  items?: any;

  /** An item can be formatted so that the entire contents link to another page. */
  link?: boolean;

  /** A group of items can relax its padding to provide more negative space. */
  relaxed?: boolean|'very';
}

export const ItemGroup: React.ComponentClass<ItemGroupProps>;

interface ItemHeaderProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;
}

export const ItemHeader: React.ComponentClass<ItemHeaderProps>;

interface ItemImageProps extends ImageProps {
}

export const ItemImage: React.ComponentClass<ItemImageProps>;

interface ItemMetaProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;
}

export const ItemMeta: React.ComponentClass<ItemMetaProps>;

// Feed
// ----------------------------------
interface FeedProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand array of props for FeedEvent. */
  events?: Array<any>;

  /** A feed can have different sizes. */
  size?: SemanticSIZES;
}

interface FeedClass extends React.ComponentClass<FeedProps> {
  Content: typeof FeedContent;
  Date: typeof FeedDate;
  Event: typeof FeedEvent;
  Extra: typeof FeedExtra;
  Label: typeof FeedLabel;
  Meta: typeof FeedMeta;
  Like: typeof FeedLike;
  Summary: typeof FeedSummary;
  User: typeof FeedUser;

}

export const Feed: FeedClass;

interface FeedContentProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;

  /** An event can contain a date. */
  date?: any;

  /** Shorthand for FeedExtra with images. */
  extraImages?: any;

  /** Shorthand for FeedExtra with text. */
  extraText?: any;

  /** Shorthand for FeedMeta. */
  meta?: any;

  /** Shorthand for FeedSummary. */
  summary?: any;
}

export const FeedContent: React.ComponentClass<FeedContentProps>;

interface FeedDateProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;
}

export const FeedDate: React.ComponentClass<FeedDateProps>;

interface FeedEventProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;

  /** Shorthand for FeedDate. */
  date?: any;

  /** Shorthand for FeedExtra with images. */
  extraImages?: any;

  /** Shorthand for FeedExtra with content. */
  extraText?: any;

  /** An event can contain icon label. */
  icon?: any;

  /** An event can contain image label. */
  image?: any;

  /** Shorthand for FeedMeta. */
  meta?: any;

  /** Shorthand for FeedSummary. */
  summary?: any;
}

export const FeedEvent: React.ComponentClass<FeedEventProps>;

interface FeedExtraProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;

  /** An event can contain additional information like a set of images. */
  images?: any;

  /** An event can contain additional text information. */
  text?: boolean;
}

export const FeedExtra: React.ComponentClass<FeedExtraProps>;

interface FeedLabelProps {
  
	/** An element type to render as (string or function). */
	as?: any;
  
	/** Primary content. */
	children?: React.ReactNode;
  
	/** Additional classes. */
	className?: string;
  
	/** Shorthand for primary content. */
	content?: any;
  
	/** An event can contain icon label. */
	icon?: any;
  
	/** An event can contain image label. */
	image?: any;
}

export const FeedLabel: React.ComponentClass<FeedLabelProps>;

interface FeedLikeProps {

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;

  /** Shorthand for icon. Mutually exclusive with children. */
  icon?: any;
}

export const FeedLike: React.ComponentClass<FeedLikeProps>;

interface FeedMetaProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;

  /** Shorthand for FeedLike. */
  like?: any;
}

export const FeedMeta: React.ComponentClass<FeedMetaProps>;

interface FeedSummaryProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;

  /** Shorthand for FeedDate. */
  date?: any;

  /** Shorthand for FeedUser. */
  user?: any;
}

export const FeedSummary: React.ComponentClass<FeedSummaryProps>;

interface FeedUserProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;
}

export const FeedUser: React.ComponentClass<FeedUserProps>;

// Statistic
// ----------------------------------
interface StatisticProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A statistic can be formatted to be different colors. */
  color?: SemanticCOLORS;

  /** A statistic can sit to the left or right of other content. */
  floated?: SemanticFLOATS;

  /** A statistic can present its measurement horizontally. */
  horizontal?: boolean;

  /** A statistic can be formatted to fit on a dark background. */
  inverted?: string;

  /** Label content of the Statistic. */
  label?: any;

  /** A statistic can vary in size. */
  size?: SemanticSIZES;

  /** Format the StatisticValue with smaller font size to fit nicely beside number values. */
  text?: boolean;

  /** Value content of the Statistic. */
  value?: any;
}

interface StatisticClass extends React.ComponentClass<StatisticProps> {
  Group: typeof StatisticGroup;
  Label: typeof StatisticLabel;
  Value: typeof StatisticValue;
}

export const Statistic: StatisticClass;

interface StatisticGroupProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A statistic group can be formatted to be different colors. */
  color?: SemanticCOLORS;

  /** A statistic group can present its measurement horizontally. */
  horizontal?: boolean;

  /** A statistic group can present its measurement horizontally. */
  inverted?:boolean;

  /** Array of props for Statistic. */
  items?: any;

  /** A statistic group can vary in size. */
  size?: SemanticSIZES;

  /** A statistic group can have its items divided evenly. */
  widths?: SemanticWIDTHSSTRING | SemanticWIDTHSNUMBER | number;
}

export const StatisticGroup: React.ComponentClass<StatisticGroupProps>;

interface StatisticLabelProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  label?: any;
}

export const StatisticLabel: React.ComponentClass<StatisticLabelProps>;

interface StatisticValueProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Format the value with smaller font size to fit nicely beside number values. */
  text?: boolean;

  /** Primary content of the StatisticValue. Mutually exclusive with the children prop. */
  value?: any;
}

export const StatisticValue: React.ComponentClass<StatisticValueProps>;

// ======================================================
// Addons
// ======================================================
// NOTE(zuko): This category breaks alphabetical ordering because it relies
// on components defined in other categories
// ======================================================

// Confirm
// ----------------------------------
interface ConfirmProps {

  /** The cancel button text */
  cancelButton?: string;

  /** The OK button text */
  confirmButton?: string;

  /** The ModalContent text. */
  content?: string;

  /** The ModalHeader text */
  header?: string;

  /** Called when the Cancel button is clicked */
  onCancel?: () => void;

  /** Called when the OK button is clicked */
  onConfirm?: () => void;

  /** Whether or not the modal is visible */
  open?: boolean;
}

export const Confirm: React.ComponentClass<ConfirmProps>

// Radio
// ----------------------------------
export const Radio: React.ComponentClass<CheckboxProps>;

// Select
// ----------------------------------
interface SelectProps extends DropdownProps {
  selection: true;
}

interface SelectClass extends React.ComponentClass<SelectProps> {
  Divider: typeof DropdownDivider;
  Header: typeof DropdownHeader;
  Item: typeof DropdownItem;
  Menu: typeof DropdownMenu;
}

export const Select: SelectClass;

// Textarea
// ----------------------------------
export interface TextareaProps extends FormTextAreaProps{
  
  /** An element type to render as (string or function). */
  as?: any;

  /**
   * Called on change.
   * @param {SyntheticEvent} event - The React SyntheticEvent object
   * @param {object} data - All props and the event value.
   */
  onChange?: (event: React.FormEvent<HTMLTextAreaElement>, value: TextareaOnChangeValue  ) => void;
}

interface TextareaOnChangeValue extends TextareaProps{
  value: any;
}

export const Textarea: React.ComponentClass<TextareaProps>;
