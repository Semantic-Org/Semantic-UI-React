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
  active?: boolean;
  animated?: 'fade'|'vertical';
  as?: any;
  attached?: 'left' | 'right' | 'top' | 'bottom';
  basic?: boolean;
  children?: React.ReactNode;
  circular?: boolean;
  className?: string;
  color?: SemanticCOLORS | SemanticSOCIAL;
  compact?: boolean;
  content?: any;
  disabled?: boolean;
  floated?: SemanticFLOATS;
  fluid?: boolean;
  icon?: any;
  inverted?: boolean;
  label?: any;
  labelPosition?: SemanticButtonLABELPOSITIONS;
  loading?: boolean;
  negative?: boolean;
  positive?: boolean;
  primary?: boolean;
  secondary?: boolean;
  size?: SemanticSIZES;
  toggle?: boolean;
  type?: string;
}

interface ButtonClass extends React.ComponentClass<ButtonProps> {
  Content: typeof ButtonContent;
  Group: typeof ButtonGroup;
  Or: typeof ButtonOr;
}

export const Button: ButtonClass;

interface ContentProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  hidden?: boolean;
  visible?: boolean;
}

export const ButtonContent: React.ComponentClass<ContentProps>;

interface GroupProps {
  as?: any;
  attached?: string;
  basic?: boolean;
  children?: React.ReactNode;
  className?: string;
  color?: SemanticCOLORS | SemanticSOCIAL;
  icon?: any;
  labeled?: boolean;
  size?: SemanticSIZES;
  widths?: number | SemanticWIDTHSSTRING | SemanticWIDTHSNUMBER;
}

export const ButtonGroup: React.ComponentClass<GroupProps>;

interface OrProps {
  as?: any;
  className?: string;
}

export const ButtonOr: React.ComponentClass<OrProps>;

// Container
// ----------------------------------
interface ContainerProps {
  as?: any;
  children?: React.ReactNode,
  className?: string;
  fluid?: boolean,
  text?: boolean,
  /** Describes how the text inside this component should be aligned. */
  textAlign?: SemanticTEXTALIGNMENTS,
}
export class Container extends React.Component<ContainerProps, void> {
}

// Divider
// ----------------------------------
interface DividerProps {
  as?: any;
  children?: React.ReactNode,
  className?: string;
  clearing?: boolean,
  fitted?: boolean,
  hidden?: boolean,
  horizontal?: boolean,
  inverted?: boolean,
  section?: boolean,
  vertical?: boolean,
}
export class Divider extends React.Component<DividerProps, void> {
}

// Flag
// ----------------------------------
interface FlagProps extends ReactMouseEvents<any> {
  as?: any;
  className?: string;
  name: SemanticCOUNTRY,
}
export class Flag extends React.Component<FlagProps, void> {
}

// Header
// ----------------------------------
interface HeaderProps {
  as?: any;
  attached?: 'top'|'bottom';
  block?: boolean;
  children?: React.ReactNode;
  className?: string;
  color?: SemanticCOLORS;
  content?: any;
  disabled?: boolean;
  dividing?: boolean;
  floated?: SemanticFLOATS;
  icon?: any;
  image?: any;
  inverted?: boolean;
  size?: SemanticSIZES;
  sub?: boolean;
  subheader?: any;
  textAlign?: SemanticTEXTALIGNMENTS;
}

interface HeaderClass extends React.ComponentClass<HeaderProps> {
  Content: typeof HeaderContent;
  Subheader: typeof HeaderSubHeader;
}

export const Header: HeaderClass;

interface HeaderContentProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
}

export const HeaderContent: React.ComponentClass<HeaderContentProps>;

interface HeaderSubHeaderProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  content?: any;
}

export const HeaderSubHeader: React.ComponentClass<HeaderSubHeaderProps>;

// Icon
// ----------------------------------
interface IconProps extends ReactMouseEvents<any> {
  as?: any;
  bordered?: boolean,
  circular?: boolean,
  className?: string;
  color?: SemanticCOLORS,
  corner?: boolean,
  disabled?: boolean;
  fitted?: boolean,
  flipped?: 'horizontally' | 'vertically'
  inverted?: boolean,
  link?: boolean,
  loading?: boolean,
  name?: string,
  rotated?: SemanticROTATION,
  size?: SemanticSIZES,
}

interface IconClass extends React.ComponentClass<IconProps> {
  Content: typeof IconGroup;
}
export const Icon: IconClass;

interface IconGroupProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  size?: SemanticSIZES;
}

export const IconGroup: React.ComponentClass<IconGroupProps>;

// Image
// ----------------------------------
interface ImageProps extends ReactMouseEvents<any> {
  alt?: string;
  as?: any;
  avatar?: boolean;
  bordered?: boolean;
  centered?: boolean;
  className?: string;
  disabled?: boolean;
  floated?: SemanticFLOATS;
  fluid?: boolean;
  height?: string|number;
  href?: string;
  inline?: boolean;
  label?: LabelProps;
  shape?: boolean |'rounded'|'circular';
  size?: SemanticSIZES;
  spaced?: boolean|'left'|'right';
  src?: string;
  ui?: boolean;
  verticalAlign?: SemanticVERTICALALIGNMENTS;
  width?: number|SemanticWIDTHSSTRING| SemanticWIDTHSNUMBER;
  wrapped?: any;
}

interface ImageClass extends React.ComponentClass<ImageProps> {
  Group: typeof ImageGroup;
}

export const Image: ImageClass;

interface ImageGroupProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  size?: SemanticSIZES;
}
export const ImageGroup: React.ComponentClass<ImageGroupProps>;

// Input
// ----------------------------------
interface InputProps extends ReactFocusEvents<HTMLInputElement>, ReactFormEvents<HTMLInputElement> {
  action?: any;
  actionPosition?: 'left'
  as?: any;
  autocomplete?: string; // Used by chrome https://developers.google.com/web/updates/2015/06/checkout-faster-with-autofill
  children?: React.ReactNode;
  className?: string;
  defaultValue?: string;
  disabled?: boolean;
  error?: boolean;
  fluid?: boolean;
  focus?: boolean;
  icon?: any;
  iconPosition?: 'left';
  input?: any;
  inverted?: boolean;
  label?: any;
  labelPosition?: SemanticButtonLABELPOSITIONS;
  loading?: boolean;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  step?: number;
  size?: SemanticSIZES;
  transparent?: boolean;
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
  as?: any;
  attached?: LabelPropAttached;
  basic?: boolean;
  children?: React.ReactNode;
  circular?: boolean;
  className?: string;
  color?: SemanticCOLORS;
  content?: any;
  corner?: boolean | LabelPropCorner;
  detail?: any;
  empty?: any;
  floating?: boolean;
  horizontal?: boolean;
  icon?: any;
  image?: any;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onRemove?: React.FormEventHandler<HTMLDivElement>;
  pointing?: boolean | LabelPropPointing;
  removable?: boolean;
  ribbon?: boolean | 'right';
  size?: SemanticSIZES;
  tag?: boolean;
}

interface LabelClass extends React.ComponentClass<LabelProps> {
  Detail: typeof LabelDetail;
  Group: typeof LabelGroup;
}

export const Label: LabelClass;

interface LabelDetailProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  content?: any;
}

export const LabelDetail: React.ComponentClass<LabelDetailProps>;

interface LabelGroupProps {
  as?: any;
  children?: React.ReactNode;
  circular: boolean;
  className?: string;
  color?: SemanticCOLORS;
  size?: SemanticSIZES;
  tag?: boolean;
}

export const LabelGroup: React.ComponentClass<LabelGroupProps>;

// ListItem
// ----------------------------------
interface ListProps extends ReactMouseEvents<any> {
  animated?: boolean;
  as?: any;
  bulleted?: boolean;
  celled?: boolean;
  children?: React.ReactNode;
  className?: string;
  divided?: boolean;
  floated?: SemanticFLOATS;
  horizontal?: boolean;
  inverted?: boolean;
  items?: any;
  link?: boolean;
  ordered?: boolean;
  relaxed?: boolean | 'very';
  selection?: boolean;
  size?: SemanticSIZES;
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
  as?: any;
  children?: React.ReactNode;
  className?: string;
  content?: any;
  description?: any;
  floated?: SemanticFLOATS;
  header?: any;
  verticalAlign?: SemanticVERTICALALIGNMENTS;
}

export const ListContent: React.ComponentClass<ListContentProps>;

interface ListDescriptionProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  content?: any;
}

export const ListDescription: React.ComponentClass<ListDescriptionProps>;

interface ListHeaderProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  content?: any;
}

export const ListHeader: React.ComponentClass<ListHeaderProps>;

interface ListIconProps extends ReactMouseEvents<any> {
  className?: string;
  name?: string;
  verticalAlign?: SemanticVERTICALALIGNMENTS;
}

export const ListIcon: React.ComponentClass<ListIconProps>;

interface ListItemProps extends ReactMouseEvents<any> {
  active?: boolean;
  as?: any;
  children?: React.ReactNode;
  className?: string;
  content?: any;
  description?: any;
  disabled?: boolean;
  header?: any;
  icon?: any;
  image?: any;
  value?: string;
}

export const ListItem: React.ComponentClass<ListItemProps>;

interface ListListProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
}

export const ListList: React.ComponentClass<ListListProps>;

// Loader
// ----------------------------------
interface LoaderProps {
  as?: any;
  active?: boolean;
  children?: React.ReactNode;
  className?: string;
  content?: any;
  disabled?: boolean;
  indeterminate?: boolean;
  inline?: boolean | 'centered';
  inverted?: boolean;
  size?: SemanticSIZES;
}
export class Loader extends React.Component<LoaderProps, void> {
}

// Rail
// ----------------------------------
interface RailProps {
  as?: any;
  attached?: boolean;
  children?: React.ReactNode;
  className?: string;
  close?: boolean | 'very';
  dividing?: boolean;
  internal?: boolean;
  position: SemanticFLOATS;
  // TODO(zuko): this should not support 'medium' from SemanticSize
  size?: SemanticSIZES,
}
export class Rail extends React.Component<RailProps, void> {
}

// Segment
// ----------------------------------
interface SegmentProps {
  as?: any;
  attached?: any;
  basic?: boolean;
  children?: React.ReactNode;
  circular?: boolean;
  className?: string;
  clearing?: boolean;
  color?: SemanticCOLORS | SemanticSOCIAL;
  compact?: boolean;
  disabled?: boolean;
  floated?: SemanticFLOATS;
  inverted?: boolean;
  loading?: boolean;
  padded?: boolean;
  piled?: boolean;
  raised?: boolean;
  secondary?: boolean;
  size?: SemanticSIZES;
  stacked?: boolean;
  tertiary?: boolean;
  textAlign?: SemanticTEXTALIGNMENTS;
  vertical?: SemanticVERTICALALIGNMENTS;
}

interface SegmentClass extends React.ComponentClass<SegmentProps> {
  Group: typeof SegmentGroup;
}

export const Segment: SegmentClass;

interface SegmentGroupProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  compact?: boolean;
  horizontal?: boolean;
  piled?: boolean;
  raised?: boolean;
  size?: SemanticSIZES;
  stacked?: boolean;
}

export const SegmentGroup: React.ComponentClass<SegmentGroupProps>;

// Step
// ----------------------------------
interface StepProps extends ReactMouseEvents<any> {
  active?: boolean;
  as?: any;
  children?: React.ReactNode;
  className?: string;
  completed?: boolean;
  description?: any;
  disabled?: boolean;
  href?: string;
  icon?: any;
  link?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  ordered?: boolean;
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
  as?: any;
  children?: React.ReactNode;
  className?: string;
  description?: any;
  title?: any;
}

export const StepContent: React.ComponentClass<StepContentProps>;

interface StepDescriptionProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  description?: any;
}

export const StepDescription: React.ComponentClass<StepDescriptionProps>;

interface StepGroupProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  fluid?: boolean;
  items?: any;
  ordered?: boolean;
  size?: SemanticSIZES;
  stackable?: boolean;
  vertical?: SemanticVERTICALALIGNMENTS;
}

export const StepGroup: React.ComponentClass<StepGroupProps>;

interface StepTitleProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  title?: any;
}

export const StepTitle: React.ComponentClass<StepTitleProps>;

// ======================================================
// Collections
// ======================================================

// Breadcrumb
// ----------------------------------
interface BreadcrumbProps extends ReactMouseEvents<HTMLElement> {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  divider?: any;
  icon?: any;
  sections?: Array<any>;
  size?: SemanticSIZES;
}

interface BreadcrumbClass extends React.ComponentClass<BreadcrumbProps> {
  Divider: typeof BreadcrumbDivider;
  Section: typeof BreadcrumbSection;
}

export const Breadcrumb: BreadcrumbClass;

interface BreadcrumbDividerProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  icon?: any;
}

export const BreadcrumbDivider: React.ComponentClass<BreadcrumbDividerProps>;

interface BreadcrumbSectionProps {
  active?: boolean;
  as?: any;
  children?: React.ReactNode;
  className?: string;
  href?: string;
  link?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export const BreadcrumbSection: React.ComponentClass<BreadcrumbSectionProps>;

// Form
// ----------------------------------
interface FormProps {
  method?: 'get' | 'post'
  as?: any;
  children?: React.ReactNode;
  className?: string;
  error?: boolean;
  loading?: boolean;
  onSubmit?: SemanticFormOnClick;
  reply?: boolean;
  serializer?: ()=>void;  // TODO, check;
  size?: string;
  success?: boolean;
  warning?: boolean;
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
  as?: any;
  children?: React.ReactNode;
  className?: string;
  control?: any;
  disabled?: any;
  error?: boolean;
  inline?: boolean;
  label?: string;
  required?: any;
  type?: string;
  width?: SemanticWIDTHSSTRING | SemanticWIDTHSNUMBER | number;
}

export const FormField: React.ComponentClass<FormFieldProps>;

interface FormButtonProps extends ButtonProps {
  width: number;
}

export const FormButton: React.ComponentClass<FormButtonProps>;

interface FormCheckboxProps {
  as?: any;
  control?: any;
  label?: string;
  name?: string;
  placeholder?: string;
  value?: string|number|Array<string>|Array<number>;
}

export const FormCheckbox: React.ComponentClass<FormCheckboxProps>;

interface FormDropdownProps extends DropdownProps {
  as?: any;
  control?: any;
  label?: string;
  name?: string;
  placeholder?: string;
}

export const FormDropdown: React.ComponentClass<FormDropdownProps>;

interface FormGroupProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  grouped?: boolean;
  inline?: boolean;
  widths?: SemanticWIDTHSSTRING | SemanticWIDTHSNUMBER | number | 'equal';
}

export const FormGroup: React.ComponentClass<FormGroupProps>;

interface FormInputProps extends InputProps, ReactFormEvents<HTMLInputElement>, ReactFocusEvents<HTMLInputElement> {
}

export const FormInput: React.ComponentClass<FormInputProps>;

interface FormRadioProps {
  as?: any;
  checked?: boolean;
  control?: any;
  label?: string;
  name?: string;
  onChange?: SemanticGenericOnClick;
  placeholder?: string;
  value?: string|number|Array<string>|Array<number>;
}

export const FormRadio: React.ComponentClass<FormRadioProps>;

interface FormSelectProps extends ReactFormEvents<HTMLSelectElement>, ReactFocusEvents<HTMLSelectElement> {
  as?: any;
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
  as?: any;
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
  as?: any;
  celled?: boolean|'internally';
  centered?: boolean;
  children?: React.ReactNode;
  className?: string;
  columns?: number | SemanticWIDTHSNUMBER | SemanticWIDTHSSTRING | number | 'equal';
  divided?: boolean | 'vertically';
  doubling?: boolean;
  padded?: boolean | 'horizontally' | 'vertically';
  relaxed?: boolean | 'very';
  reversed?: GridPropReversed;
  stackable?: boolean;
  stretched?: boolean;
  textAlign?: SemanticTEXTALIGNMENTS;
  verticalAlign?: SemanticVERTICALALIGNMENTS;
}

interface GridClass extends React.ComponentClass<GridProps> {
  Column: typeof GridColumn;
  Row: typeof GridRow;
}

export const Grid: GridClass;

type GridPropOnly = 'computer' | 'large screen' | 'mobile' | 'tablet mobile' | 'tablet' | 'widescreen'
interface GridColumnProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  color?: SemanticCOLORS;
  computer?: SemanticWIDTHSNUMBER | SemanticWIDTHSSTRING | number;
  floated?: SemanticFLOATS;
  largeScreen?: SemanticWIDTHSNUMBER | SemanticWIDTHSSTRING| number;
  mobile?: SemanticWIDTHSNUMBER | SemanticWIDTHSSTRING| number;
  only?: GridPropOnly;
  stretched?: boolean;
  tablet?: SemanticWIDTHSNUMBER | SemanticWIDTHSSTRING| number;
  textAlign?: SemanticTEXTALIGNMENTS;
  verticalAlign?: SemanticVERTICALALIGNMENTS;
  widescreen?: number | SemanticWIDTHSSTRING| number;
  width?: SemanticWIDTHSNUMBER | SemanticWIDTHSSTRING| number;
}

export const GridColumn: React.ComponentClass<GridColumnProps>

interface GridRowProps {
  as?: any;
  centered?: boolean;
  children?: React.ReactNode;
  className?: string;
  color?: SemanticCOLORS;
  columns?: SemanticWIDTHSNUMBER | SemanticWIDTHSSTRING| number | 'equal';
  divided?: boolean;
  only?: GridPropOnly;
  reversed?: GridPropReversed;
  stretched?: boolean;
  textAlign?: SemanticTEXTALIGNMENTS;
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
  as?: any;
  attached?: boolean | MenuPropsAttached;
  borderless?: boolean;
  children?: React.ReactNode;
  className?: string;
  color?: SemanticCOLORS;
  compact?: boolean;
  defaultActiveIndex?: number;
  fixed?: MenuPropsFixed;
  floated?: boolean | SemanticFLOATS;
  fluid?: boolean;
  icon?: boolean | MenuPropsIcon;
  inverted?: boolean;
  items?: any;  // TODO - check type;
  onItemClick?: React.MouseEventHandler<HTMLDivElement>;
  pagination?: boolean;
  pointing?: boolean;
  secondary?: boolean;
  size?: SemanticSIZES;  // TODO - remove medium and big.
  stackable?: boolean;
  tabular?: boolean | MenuPropsTabular;
  text?: boolean;
  vertical?: boolean;
  widths?: number|SemanticWIDTHSSTRING | SemanticWIDTHSNUMBER| number;
}

interface MenuClass extends React.ComponentClass<MenuProps> {
  Header: typeof MenuHeader;
  Item: typeof MenuItem;
  Menu: typeof MenuMenuItem;
}

export const Menu: MenuClass;

interface HeaderProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  content?: any;
}
export const MenuHeader: React.ComponentClass<HeaderProps>;

interface MenuItemProps extends ReactMouseEvents<HTMLElement> {
  active?: boolean;
  as?: any;
  children?: React.ReactNode;
  className?: string;
  color?: SemanticCOLORS;
  content?: string;
  fitted?: boolean | 'horizontally' | 'vertically';
  header?: boolean;
  icon?: any; // TODO - check type.
  index?: number;
  link?: boolean;
  name?: string;
  position?: 'right';
}
export const MenuItem: React.ComponentClass<MenuItemProps>;

interface MenuMenuProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  position?: 'right';
}
export const MenuMenuItem: React.ComponentClass<MenuMenuProps>;

// Message
// ----------------------------------
interface MessageProps {
  as?: any;
  attached?: boolean | 'bottom';
  children?: React.ReactNode;
  className?: string;
  color?: SemanticCOLORS;
  compact?: boolean;
  content?: any;
  error?: boolean;
  floating?: boolean;
  header?: any;
  hidden?: boolean;
  icon?: any;
  info?: boolean;
  list?: any;
  negative?: boolean;
  onDismiss?: React.MouseEventHandler<HTMLDivElement>;
  positive?: boolean;
  size?: SemanticSIZES;
  success?: boolean;
  visible?: boolean;
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
  as?: any;
  children?: React.ReactNode;
  className?: string;
}

export const MessageContent: React.ComponentClass<MessageContentProps>;

interface MessageHeaderProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
}

export const MessageHeader: React.ComponentClass<MessageHeaderProps>;

interface MessageListProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  items?: Array<any>;
}

export const MessageList: React.ComponentClass<MessageListProps>;

interface MessageItemProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
}

export const MessageItem: React.ComponentClass<MessageItemProps>;

// Table
// ----------------------------------
interface TableProps {
  as?: any;
  attached?: boolean | 'top' | 'bottom';
  basic?: boolean | 'very';
  celled?: boolean|'internally';
  children?: React.ReactNode;
  className?: string;
  collapsing?: boolean;
  color?: SemanticCOLORS;
  columns?: SemanticWIDTHSNUMBER | SemanticWIDTHSSTRING | number;
  compact?: boolean | 'very';
  definition?: boolean;
  fixed?: boolean;
  footerRow?: any;
  headerRow?: any;
  inverted?: boolean;
  padded?: boolean | 'very';
  renderBodyRow?: ()=>void;  // TODO - check;
  selectable?: boolean;
  singleLine?: boolean;
  size?: SemanticSIZES;
  stackable?: boolean;
  striped?: boolean;
  structured?: boolean;
  tableData?: any;
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
  as?: any;
  children?: React.ReactNode;
  className?: string;
}

export const TableBody: React.ComponentClass<TableBodyProps>;

interface TableCellProps {
  active?: boolean;
  as ?: any;
  children ?: React.ReactNode;
  className?: string;
  collapsing ?: boolean;
  content ?: any;
  disabled ?: boolean;
  error ?: boolean;
  icon ?: any;
  negative ?: boolean;
  positive ?: boolean;
  singleLine ?: boolean;
  textAlign?: SemanticTEXTALIGNMENTS;
  verticalAlign?: SemanticVERTICALALIGNMENTS;
  warning?: boolean;
  width?: number | SemanticWIDTHSSTRING | SemanticWIDTHSNUMBER;
}

export const TableCell: React.ComponentClass<TableCellProps>;

interface TableFooterProps {
  as?: any;
}

export const TableFooter: React.ComponentClass<TableFooterProps>;

interface TableHeaderProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export const TableHeader: React.ComponentClass<TableHeaderProps>;

interface TableHeaderCellProps {
  as?: any;
}

export const TableHeaderCell: React.ComponentClass<TableHeaderCellProps>;

interface TableRowProps {
  active?: boolean;
  as ?: any;
  cellAs?: any;
  cells?: any;
  children ?: React.ReactNode;
  className?: string;
  disabled ?: boolean;
  error ?: boolean;
  negative ?: boolean;
  positive ?: boolean;
  textAlign?: SemanticTEXTALIGNMENTS;
  verticalAlign?: SemanticVERTICALALIGNMENTS;
  warning?: boolean;
}

export const TableRow: React.ComponentClass<TableRowProps>;

// ======================================================
// Modules
// ======================================================

// Accordion
// ----------------------------------
interface AccordionProps {
  activeIndex?: number | number[];
  as?: any;
  children?: React.ReactNode;
  className?: string;
  defaultActiveIndex?: number | number[];
  exclusive?: boolean;
  fluid?: boolean;
  inverted?: string;
  onTitleClick?: React.MouseEventHandler<HTMLDivElement>;
  panels?: any;
  styled?: boolean;
}

interface AccordionClass extends React.ComponentClass<AccordionProps> {
  Content: typeof AccordionContent;
  Title: typeof AccordionTitle;
}

export const Accordion: AccordionClass;

interface AccordionContentProps {
  active?: boolean;
  as?: any;
  children?: React.ReactNode;
  className?: string;
}

export const AccordionContent: React.ComponentClass<AccordionContentProps>;

interface AccordionTitleProps extends ReactMouseEvents<HTMLElement> {
  active?: boolean;
  as?: any;
  children?: React.ReactNode;
  className?: string;
}

export const AccordionTitle: React.ComponentClass<AccordionTitleProps>;

// Checkbox
// ----------------------------------
interface CheckboxProps {
  as?: any;
  checked?: boolean;
  className?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  fitted?: boolean;
  label?: string;
  name?: string;
  onChange?: React.FormEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  radio?: any;
  readOnly?: boolean;
  slider?: any;
  toggle?: any;
  type?: 'checkbox'|'radio';
  value?: string;
}

export class Checkbox extends React.Component<CheckboxProps, {}> {
}

// Dropdown
// ----------------------------------
type DropdownPropPointing = 'left' | 'right' | 'top' | 'top left' | 'top right' | 'bottom' | 'bottom left' | 'bottom right'
type DropdownPropAdditionPosition = 'top' | 'bottom';

interface DropdownProps extends ReactMouseEvents<HTMLElement>, ReactFocusEvents<HTMLElement>, ReactFormEvents<HTMLElement> {
  additionLabel?: string;
  additionPosition?: DropdownPropAdditionPosition;
  allowAdditions?: any;
  as?: any;
  basic?: boolean;
  button?: boolean;
  children?: React.ReactNode;
  className?: string;
  compact?: boolean;
  defaultOpen?: boolean;
  defaultValue?: string|number|Array<string>|Array<number>;
  error?: boolean;
  floating?: boolean;
  fluid?: boolean;
  header?: React.ReactNode;
  icon?: any;
  inline?: boolean;
  labeled?: boolean;
  loading?: boolean;
  multiple?: boolean;
  noResultsMessage?: string;
  onAddItem?: React.MouseEventHandler<HTMLSelectElement>;
  onSearchChange?: React.FormEventHandler<HTMLSelectElement>;
  open?: boolean;
  options?: Array<DropdownItemProps>;
  placeholder?: string;
  pointing?: boolean | DropdownPropPointing;
  scrolling?: boolean;
  search?: boolean // TODO -add search function;
  selectOnBlur?: boolean;
  selection?: any;
  simple?: boolean;
  text?: string|React.ReactNode;
  trigger?: any;
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
  as?: any;
}

export const DropdownDivider: React.ComponentClass<DropdownDividerProps>;

interface DropdownHeaderProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  content?: any;
  icon?: any;
}

export const DropdownHeader: React.ComponentClass<DropdownHeaderProps>;

interface DropdownItemProps extends ReactMouseEvents<HTMLElement>, ReactFocusEvents<HTMLElement>, ReactFormEvents<HTMLElement> {
  active?: boolean;
  as?: any;
  children?: React.ReactNode;
  className?: string;
  description?: any;
  disabled?: boolean;
  icon?: any;
  selected?: boolean;
  text?: any;
  value?: number|string;
}

export const DropdownItem: React.ComponentClass<DropdownItemProps>;

interface DropdownMenuProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
}

export const DropdownMenu: React.ComponentClass<DropdownMenuProps>;

// Modal
// ----------------------------------
interface ModalProps {
  as?: any;
  basic?: boolean;
  children?: React.ReactNode;
  className?: string;
  dimmer?: boolean | 'blurring' | 'inverted';
  mountnode?: any;
  size?: SemanticSIZES;
  trigger?: React.ReactNode;
  open?: boolean;
  onClose: Function;
}

interface ModalClass extends React.ComponentClass<ModalProps> {
  Header: typeof ModalHeader;
  Content: typeof ModalContent;
  Description: typeof ModalDescription;
  Actions: typeof ModalActions;
}

export const Modal: ModalClass;

interface ModalHeaderProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
}

export const ModalHeader: React.ComponentClass<ModalHeaderProps>;

interface ModalContentProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  image?: boolean;
}

export const ModalContent: React.ComponentClass<ModalContentProps>;

interface ModalDescriptionProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
}

export const ModalDescription: React.ComponentClass<ModalDescriptionProps>;

interface ModalActionsProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
}

export const ModalActions: React.ComponentClass<ModalActionsProps>;

// Progress
// ----------------------------------
interface ProgressProps {
  active?: boolean;
  as?: any;
  attached?: 'top' | 'bottom';
  autoSuccess?: boolean;
  children?: React.ReactNode;
  className?: string;
  color?: SemanticCOLORS;
  disabled?: boolean;
  error?: boolean;
  indicating?: boolean;
  inverted?: string;
  label?: any;
  percent?: any;
  precision?: number;
  progress?: boolean;
  size?: SemanticSIZES;
  success?: boolean;
  total?: any;
  value?: any;
  warning?: boolean;
}

export class Progress extends React.Component<ProgressProps, void> {
}

// Rating
// ----------------------------------
interface RatingProps {
  as?: any;
  className?: string;
  clearable?: boolean | 'auto';
  defaultRating?: string|number;
  icon?: 'star'|'heart';
  maxRating?: string|number;
  onRate?: React.MouseEventHandler<HTMLDivElement>;
  rating?: string|number;
  size?: SemanticSIZES;
}

interface RatingClass extends React.ComponentClass<RatingProps> {
  Icon: typeof RatingIcon;
}

export const Rating: RatingClass;

interface RatingIconProps extends ReactMouseEvents<HTMLElement> {
  active?: boolean;
  className?: string;
  index?: number;
  selected?: boolean;
}

export const RatingIcon: React.ComponentClass<RatingIconProps>;

// Popup
// ----------------------------------
type PopupPropOn = 'hover'|'click'|'focus';

interface PopupProps {
  basic?: boolean;
  children?: React.ReactNode;
  className?: string;
  content?: any;
  flowing?: boolean;
  header?: string;
  hideOnScroll?: boolean;
  hoverable?: boolean;
  inverted?: string;
  offset?: number;
  on?: PopupPropOn;
  positioning?: SemanticPOSITIONING;
  size?: SemanticSIZES;
  style?: Object;
  trigger?: React.ReactNode;
  wide?: boolean | 'very';
}

interface PopupClass extends React.ComponentClass<PopupProps> {
  Content: typeof PopupContent;
  Header: typeof PopupHeader;
}

export const Popup: PopupClass;

interface PopupContentProps {
  children?: React.ReactNode;
  className?: string;
}

export const PopupContent: React.ComponentClass<PopupContentProps>;

interface PopupHeaderProps {
  children?: React.ReactNode;
  className?: string;
}

export const PopupHeader: React.ComponentClass<PopupHeaderProps>;

// Search
// ----------------------------------
interface SearchProps extends ReactMouseEvents<HTMLInputElement>, ReactFocusEvents<HTMLInputElement>, ReactFormEvents<HTMLInputElement> {
  aligned?: string;
  as?: any;
  category?: boolean;
  categoryRenderer?: ()=>void;  // TODO : fix;
  className?: string;
  defaultOpen?: boolean;
  defaultValue?: string;
  fluid?: boolean;
  icon?: any;
  loading?: boolean;
  minCharacters?: number;
  noResultsDescription?: string;
  noResultsMessage?: string;
  onResultSelect: (e: React.FormEvent<HTMLInputElement>, result: Array<any>|Object ) => void;
  onSearchChange?: React.FormEventHandler<HTMLInputElement>;
  open?: boolean;
  placeholder?: string;
  resultRenderer?: ()=>void;   // TODO: fix.
  results?: Array<any>|Object;
  selectFirstResult?: boolean;
  showNoResults?: boolean;
  size?: SemanticSIZES;
  value?: string;
}

interface SearchClass extends React.ComponentClass<SearchProps> {
  SearchResult: typeof SearchResult;
  SearchResults: typeof SearchResults;

}

export const Search: SearchClass;

interface SearchResultProps {
  active?: boolean;
  as?: any;
  className?: string;
  description?: string;
  id?: number;
  image?: string;
  onClick?: SemanticSearchOnClick;
  price?: string;
  renderer?: ()=>void; // TODO - fix;
  title?: string;
}

export const SearchResult: React.ComponentClass<SearchResultProps>;

interface SearchResultsProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
}

export const SearchResults: React.ComponentClass<SearchResultsProps>;

interface SearchCategoryProps {
  active?: boolean;
  as?: any;
  children?: React.ReactNode;
  className?: string;
  name?: string;
  renderer?: ()=>void; // TODO - fix;
  results?: Array<typeof SearchResult>;
}

export const SearchCategory: React.ComponentClass<SearchCategoryProps>;

// Sidebar
// ----------------------------------

interface SidebarPushableProps { 
  as?: any;
  className?: string;
}

export const SidebarPushable: React.ComponentClass<SidebarPushableProps>;

interface SidebarPusherProps {
  as?: any;
  className?: string;
  dimmed?: boolean;
}

export const SidebarPusher: React.ComponentClass<SidebarPusherProps>;

interface SidebarProps {
  animation?: 'overlay' | 'push' | 'scale down' | 'uncover' | 'slide out' | 'slide along';
  as?: any;
  className?: string;
  defaultVisible?: boolean;
  direction?: 'top' | 'right' | 'bottom' | 'left';
  visible?: boolean;
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
  as?: any;
  centered?: boolean;
  children?: React.ReactNode;
  className?: string;
  color?: SemanticCOLORS;
  description?: any;
  extra?: any;
  fluid?: boolean;
  header?: any;
  href?: string;
  image?: any;
  meta?: any;
  onClick?: React.MouseEventHandler<any>;
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
  as?: any;
  children?: React.ReactNode;
  className?: string;
  description?: string;
  extra?: boolean;
  header?: any;
  meta?: any;
}

export const CardContent: React.ComponentClass<CardContentProps>;

interface CardDescriptionProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  content?: any;
}

export const CardDescription: React.ComponentClass<CardDescriptionProps>;

interface CardGroupProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  doubling?: boolean;
  items?: Array<any>;
  itemsPerRow?: SemanticWIDTHSNUMBER | SemanticWIDTHSSTRING | number;
  stackable?: boolean;
}

export const CardGroup: React.ComponentClass<CardGroupProps>;

interface CardHeaderProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  content?: any;
}

export const CardHeader: React.ComponentClass<CardHeaderProps>;

interface CardMetaProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  content?: any;
}

export const CardMeta: React.ComponentClass<CardMetaProps>;

// Comment
// ----------------------------------
interface CommentProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
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
  as?: any;
  children?: React.ReactNode;
  className?: string;
}

export const CommentAuthor: React.ComponentClass<CommentAuthorProps>;

interface CommentActionProps {
  active?: boolean;
  as?: any;
  children?: React.ReactNode;
  className?: string;
}

export const CommentAction: React.ComponentClass<CommentActionProps>;

interface CommentActionsProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
}

export const CommentActions: React.ComponentClass<CommentActionsProps>;

interface CommentAvatarProps {
  as?: any;
  className?: string;
  src?: string;
}

export const CommentAvatar: React.ComponentClass<CommentAvatarProps>;

interface CommentContentProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
}

export const CommentContent: React.ComponentClass<CommentContentProps>;

interface CommentGroupProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  collapsed?: boolean;
  minimal?: boolean;
  threaded?: boolean;
}

export const CommentGroup: React.ComponentClass<CommentGroupProps>;

interface CommentMetadataProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
}

export const CommentMetadata: React.ComponentClass<CommentMetadataProps>;

interface CommentTextProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
}

export const CommentText: React.ComponentClass<CommentTextProps>;

// Item
// ----------------------------------
interface ItemProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  content?: any;
  description?: string;
  extra?: any;
  header?: any;
  image?: any;
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
  as?: any;
  children?: React.ReactNode;
  className?: string;
  content?: any;
  description?: string;
  extra?: any;
  header?: any;
  image?: any;
  meta?: any;
  verticalAlign?: SemanticVERTICALALIGNMENTS;
}

export const ItemContent: React.ComponentClass<ItemContentProps>;

interface ItemDescriptionProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  content?: any;
}

export const ItemDescription: React.ComponentClass<ItemDescriptionProps>;

interface ItemExtraProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  content?: any;
}

export const ItemExtra: React.ComponentClass<ItemExtraProps>;

interface ItemGroupProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  divided?: boolean;
  items?: any;
  link?: boolean;
  relaxed?: boolean|'very';
}

export const ItemGroup: React.ComponentClass<ItemGroupProps>;

interface ItemHeaderProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  content?: any;
}

export const ItemHeader: React.ComponentClass<ItemHeaderProps>;

interface ItemImageProps extends ImageProps {
}

export const ItemImage: React.ComponentClass<ItemImageProps>;

interface ItemMetaProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  content?: any;
}

export const ItemMeta: React.ComponentClass<ItemMetaProps>;

// Feed
// ----------------------------------
interface FeedProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  events?: Array<any>;
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
  as?: any;
  children?: React.ReactNode;
  className?: string;
  content?: any;
  date?: any;
  extraImages?: any;
  extraText?: any;
  meta?: any;
  summary?: any;
}

export const FeedContent: React.ComponentClass<FeedContentProps>;

interface FeedDateProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  content?: any;
}

export const FeedDate: React.ComponentClass<FeedDateProps>;

interface FeedEventProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  content?: any;
  date?: any;
  extraImages?: any;
  extraText?: any;
  icon?: any;
  image?: any;
  meta?: any;
  summary?: any;
}

export const FeedEvent: React.ComponentClass<FeedEventProps>;

interface FeedExtraProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  content?: any;
  images?: any;
  text?: boolean;
}

export const FeedExtra: React.ComponentClass<FeedExtraProps>;

interface FeedLabelProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  content?: any;
  icon?: any;
  image?: any;
}

export const FeedLabel: React.ComponentClass<FeedLabelProps>;

interface FeedLikeProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  content?: any;
  icon?: any;
}

export const FeedLike: React.ComponentClass<FeedLikeProps>;

interface FeedMetaProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  content?: any;
  like?: any;
}

export const FeedMeta: React.ComponentClass<FeedMetaProps>;

interface FeedSummaryProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  content?: any;
  date?: any;
  user?: any;
}

export const FeedSummary: React.ComponentClass<FeedSummaryProps>;

interface FeedUserProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  content?: any;
}

export const FeedUser: React.ComponentClass<FeedUserProps>;

// Statistic
// ----------------------------------
interface StatisticProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  color?: SemanticCOLORS;
  floated?: SemanticFLOATS;
  horizontal?: boolean;
  inverted?: string;
  label?: any;
  size?: SemanticSIZES;
  text?: boolean;
  value?: any;
}

interface StatisticClass extends React.ComponentClass<StatisticProps> {
  Group: typeof StatisticGroup;
  Label: typeof StatisticLabel;
  Value: typeof StatisticValue;
}

export const Statistic: StatisticClass;

interface StatisticGroupProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  horizontal?: boolean;
  items?: any;
  widths?: SemanticWIDTHSSTRING | SemanticWIDTHSNUMBER | number;
}

export const StatisticGroup: React.ComponentClass<StatisticGroupProps>;

interface StatisticLabelProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  label?: any;
}

export const StatisticLabel: React.ComponentClass<StatisticLabelProps>;

interface StatisticValueProps {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  text?: boolean;
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
  cancelButton?: string;
  confirmButton?: string;
  content?: string;
  header?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
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
  as?: any;
  onChange?: (event: React.FormEvent<HTMLTextAreaElement>, value: TextareaOnChangeValue  ) => void;
}

interface TextareaOnChangeValue extends TextareaProps{
  value: any;
}

export const Textarea: React.ComponentClass<TextareaProps>;
