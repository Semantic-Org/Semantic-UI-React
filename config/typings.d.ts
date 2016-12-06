declare module 'semantic-ui-react' {

  type As = 'string' | Function;

  type AttachedNS = 'top' | 'bottom';

  type AttachedNSEW = 'left' | 'right' | 'bottom' | 'top';

  type Colors = 'red' |
    'orange' |
    'yellow' |
    'olive' |
    'green' |
    'teal' |
    'blue' |
    'violet' |
    'purple' |
    'pink' |
    'brown' |
    'grey' |
    'black';

  type ButtonColors = Colors | 'facebook' | 'twitter' | 'google plus' | 'vk' | 'linkedin' |'instagram' | 'youtube';

  type Widths = 'one' | 'two' | 'three' | 'four' | 'five' | 'six' | 'seven' | 'eight' |
    'nine' | 'ten' | 'eleven' | 'twelve' | 'thirteen' | 'fourteen' | 'fifteen' | 'sixteen' | 'equal';

  type Floats = 'left' | 'right';
  type Sizes = 'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive';
  type Alignments = 'left' | 'center' | 'right' | 'justified';
  type VerticalAlignments = 'bottom' | 'middle' | 'top';


  type Icons =
    // Web Content Icons
    'add to calendar' | 'alarm outline' | 'alarm mute outline' | 'alarm mute' | 'alarm' | 'at' | 'browser' | 'bug' |
    'calendar outline' | 'calendar' | 'checked calendar' | 'cloud' | 'code' | 'comment outline' | 'comment' | 'comments outline' |
    'comments' | 'copyright' | 'creative commons' | 'dashboard' | 'delete calendar' | 'external square' | 'external' |
    'eyedropper' | 'feed' | 'find' | 'hand pointer' | 'hashtag' | 'heartbeat' | 'history' | 'home' | 'hourglass empty' |
    'hourglass end' | 'hourglass full' | 'hourglass half' | 'hourglass start' | 'idea' | 'image' | 'inbox' | 'industry' | 'lab' |
    'mail outline' | 'mail square' | 'mail' | 'mouse pointer' | 'options' | 'paint brush' | 'payment' | 'percent' | 'privacy' |
    'protect' | 'registered' | 'remove from calendar' | 'search' | 'setting' | 'settings' | 'shop' | 'shopping bag' |
    'shopping basket' | 'signal' | 'sitemap' | 'tag' | 'tags' | 'tasks' | 'terminal' | 'text telephone' | 'ticket' | 'trademark' |
    'trophy' | 'wifi' |

    // User Actions Icons
    'add to cart' | 'add user' | 'adjust' | 'archive' | 'ban' | 'bookmark' | 'call' | 'call square' | 'clone' | 'cloud download' |
    'cloud upload' | 'talk' | 'talk outline' | 'compress' | 'configure' | 'download' | 'edit' | 'erase' | 'exchange' | 'expand' |
    'external share' | 'filter' | 'hide' | 'in cart' | 'lock' | 'mail forward' | 'object group' | 'object ungroup' | 'pin' |
    'print' | 'random' | 'recycle' | 'refresh' | 'remove bookmark' | 'remove user' | 'repeat' | 'reply all' | 'reply' | 'retweet' |
    'send' | 'send outline' | 'share alternate' | 'share alternate square' | 'share' | 'share square' | 'sign in' | 'sign out' |
    'theme' | 'translate' | 'undo' | 'unhide' | 'unlock alternate' | 'unlock' | 'upload' | 'wait' | 'wizard' | 'write' |
    'write square' |

    // Message Icons
    'announcement' | 'birthday' | 'help circle' | 'help' | 'info circle' | 'info' | 'warning circle' | 'warning' | 'warning sign' |

    // User Types Icons
    'child' | 'doctor' | 'handicap' | 'spy' | 'student' | 'user' | 'users' |

    // Gender And Sexuality Icons
    'female' | 'gay' | 'genderless' | 'heterosexual' | 'intergender' | 'lesbian' | 'male' | 'man' | 'neuter' |
    'non binary transgender' | 'other gender horizontal' | 'other gender' | 'other gender vertical' | 'transgender' | 'woman' |

    // Layout Adjustment Icons
    'block layout' | 'crop' | 'grid layout' | 'list layout' | 'maximize' | 'resize horizontal' | 'resize vertical' | 'zoom' |
    'zoom out' |

    // Objects Icons
    'anchor' | 'bar' | 'bomb' | 'book' | 'bullseye' | 'calculator' | 'cocktail' | 'diamond' | 'fax' | 'fire extinguisher' | 'fire' |
    'flag checkered' | 'flag' | 'flag outline' | 'gift' | 'hand lizard' | 'hand peace' | 'hand paper' | 'hand rock' |
    'hand scissors' | 'hand spock' | 'law' | 'leaf' | 'legal' | 'lemon' | 'life ring' | 'lightning' | 'magnet' | 'money' | 'moon' |
    'plane' | 'puzzle' | 'road' | 'rocket' | 'shipping' | 'soccer' | 'sticky note' | 'sticky note outline' | 'suitcase' | 'sun' |
    'travel' | 'treatment' | 'umbrella' | 'world' |

    // Shapes Icons
    'asterisk' | 'certificate' | 'circle' | 'circle notched' | 'circle thin' | 'crosshairs' | 'cube' | 'cubes' |
    'ellipsis horizontal' | 'ellipsis vertical' | 'quote left' | 'quote right' | 'spinner' | 'square' | 'square outline' |

    // Item Selection Icons
    'add circle' | 'add square' | 'check circle' | 'check circle outline' | 'check square' | 'checkmark box' | 'checkmark' |
    'minus circle' | 'minus' | 'minus square' | 'minus square outline' | 'move' | 'plus' | 'plus square outline' | 'radio' |
    'remove circle' | 'remove circle outline' | 'remove' | 'selected radio' | 'toggle off' | 'toggle on' |

    // Media Icons
    'area chart' | 'bar chart' | 'camera retro' | 'film' | 'line chart' | 'newspaper' | 'photo' | 'pie chart' | 'sound' |

    // Pointers Icons
    'angle double down' | 'angle double left' | 'angle double right' | 'angle double up' | 'angle down' | 'angle left' |
    'angle right' | 'angle up' | 'arrow circle down' | 'arrow circle left' | 'arrow circle outline down' |
    'arrow circle outline left' | 'arrow circle outline right' | 'arrow circle outline up' | 'arrow circle right' |
    'arrow circle up' | 'arrow down' | 'arrow left' | 'arrow right' | 'arrow up' | 'caret down' | 'caret left' | 'caret right' |
    'caret up' | 'chevron circle down' | 'chevron circle left' | 'chevron circle right' | 'chevron circle up' | 'chevron down' |
    'chevron left' | 'chevron right' | 'chevron up' | 'long arrow down' | 'long arrow left' | 'long arrow right' |
    'long arrow up' | 'pointing down' | 'pointing left' | 'pointing right' | 'pointing up' | 'toggle down' | 'toggle left' |
    'toggle right' | 'toggle up' |

    // Mobile Icons
    'mobile' | 'tablet' | 'battery empty' | 'battery full' | 'battery low' | 'battery medium' |

    // Computer Icons
    'desktop' | 'disk outline' | 'game' | 'high battery' | 'keyboard' | 'laptop' | 'plug' | 'power' |

    // Computer And File System Icons
    'file archive outline' | 'file audio outline' | 'file code outline' | 'file excel outline' | 'file' | 'file image outline' |
    'file outline' | 'file pdf outline' | 'file powerpoint outline' | 'file text' | 'file text outline' | 'file video outline' |
    'file word outline' | 'folder' | 'folder open' | 'folder open outline' | 'folder outline' | 'level down' | 'level up' |
    'trash' | 'trash outline' |

    // Technologies Icons
    'barcode' | 'bluetooth alternative' | 'bluetooth' | 'css3' | 'database' | 'fork' | 'html5' | 'openid' | 'qrcode' | 'rss' |
    'rss square' | 'server' | 'usb' |

    // Rating Icons
    'empty heart' | 'empty star' | 'frown' | 'heart' | 'meh' | 'smile' | 'star half empty' | 'star half' | 'star' | 'thumbs down' |
    'thumbs outline down' | 'thumbs outline up' | 'thumbs up' |

    // Audio Icons
    'backward' | 'closed captioning' | 'eject' | 'fast backward' | 'fast forward' | 'forward' | 'music' | 'mute' | 'pause circle' |
    'pause circle outline' | 'pause' | 'play' | 'record' | 'step backward' | 'step forward' | 'stop circle' |
    'stop circle outline' | 'stop' | 'unmute' | 'video play' | 'video play outline' | 'volume down' | 'volume off' | 'volume up' |

    // Map Icons
    'bicycle' | 'building' | 'building outline' | 'bus' | 'car' | 'coffee' | 'compass' | 'emergency' | 'first aid' | 'food' | 'h' |
    'hospital' | 'hotel' | 'location arrow' | 'map' | 'map outline' | 'map pin' | 'map signs' | 'marker' | 'military' |
    'motorcycle' | 'paw' | 'ship' | 'space shuttle' | 'spoon' | 'street view' | 'subway' | 'taxi' | 'train' | 'television' | 'tree' |
    'university' |

    // Tables Icons
    'columns' | 'sort alphabet ascending' | 'sort alphabet descending' | 'sort ascending' | 'sort content ascending' |
    'sort content descending' | 'sort descending' | 'sort' | 'sort numeric ascending' | 'sort numeric descending' | 'table' |

    // Text Editor Icons
    'align center' | 'align justify' | 'align left' | 'align right' | 'attach' | 'bold' | 'content' | 'copy' | 'cut' | 'font' |
    'header' | 'indent' | 'italic' | 'linkify' | 'list' | 'ordered list' | 'outdent' | 'paragraph' | 'paste' | 'save' |
    'strikethrough' | 'subscript' | 'superscript' | 'text cursor' | 'text height' | 'text width' | 'underline' | 'unlinkify' |
    'unordered list' |

    // Currency Icons
    'bitcoin' | 'dollar' | 'euro' | 'lira' | 'pound' | 'ruble' | 'rupee' | 'shekel' | 'won' | 'yen' |

    // Payment Options Icons
    'american express' | 'credit card alternative' | 'diners club' | 'discover' | 'google wallet' | 'japan credit bureau' |
    'mastercard' | 'paypal card' | 'paypal' | 'stripe' | 'visa' |

    // Accessibility Icons
    'wheelchair' | 'asl interpreting' | 'assistive listening systems' | 'audio description' | 'blind' | 'braille' | 'deafness' |
    'low vision' | 'sign language' | 'universal access' | 'volume control phone' |

    // Brands Icons
    '500px' | 'adn' | 'amazon' | 'android' | 'angellist' | 'apple' | 'behance' | 'behance square' | 'bitbucket' |
    'bitbucket square' | 'black tie' | 'buysellads' | 'chrome' | 'codepen' | 'codiepie' | 'connectdevelop' | 'contao' |
    'dashcube' | 'delicious' | 'deviantart' | 'digg' | 'dribbble' | 'dropbox' | 'drupal' | 'empire' | 'envira gallery' |
    'expeditedssl' | 'facebook' | 'facebook f' | 'facebook square' | 'firefox' | 'first order' | 'flickr' | 'font awesome' |
    'fonticons' | 'fort awesome' | 'forumbee' | 'foursquare' | 'gg' | 'gg circle' | 'git' | 'git square' | 'github' |
    'github alternate' | 'github square' | 'gitlab' | 'gittip' | 'glide' | 'glide g' | 'google' | 'google plus' |
    'google plus circle' | 'google plus square' | 'hacker news' | 'houzz' | 'instagram' | 'internet explorer' | 'ioxhost' |
    'joomla' | 'jsfiddle' | 'lastfm' | 'lastfm square' | 'leanpub' | 'linkedin' | 'linkedin square' | 'linux' | 'maxcdn' |
    'meanpath' | 'medium' | 'microsoft edge' | 'mixcloud' | 'modx' | 'odnoklassniki' | 'odnoklassniki square' | 'opencart' |
    'opera' | 'optinmonster' | 'pagelines' | 'pied piper' | 'pied piper alternate' | 'pied piper hat' | 'pinterest' |
    'pinterest square' | 'pocket' | 'product hunt' | 'qq' | 'rebel' | 'reddit' | 'reddit alien' | 'reddit square' | 'renren' |
    'safari' | 'scribd' | 'sellsy' | 'shirtsinbulk' | 'simplybuilt' | 'skyatlas' | 'skype' | 'slack' | 'slideshare' | 'snapchat' |
    'snapchat ghost' | 'snapchat square' | 'soundcloud' | 'spotify' | 'stack exchange' | 'stack overflow' | 'steam' |
    'steam square' | 'stumbleupon' | 'stumbleupon circle' | 'tencent weibo' | 'themeisle' | 'trello' | 'tripadvisor' | 'tumblr' |
    'tumblr square' | 'twitch' | 'twitter' | 'twitter square' | 'viacoin' | 'viadeo' | 'viadeo square' | 'vimeo' | 'vimeo square' |
    'vine' | 'vk' | 'wechat' | 'weibo' | 'whatsapp' | 'wikipedia' | 'windows' | 'wordpress' | 'wpbeginner' | 'wpforms' | 'xing' |
    'xing square' | 'y combinator' | 'yahoo' | 'yelp' | 'yoast' | 'youtube' | 'youtube play' | 'youtube square';

  type Flags = 'ad' | 'andorra' | 'ae' | 'united arab emirates' | 'uae' | 'af' | 'afghanistan' | 'ag' | 'antigua' | 'ai' | 'anguilla' | 'al' |
    'albania' | 'am' | 'armenia' | 'an' | 'netherlands antilles' | 'ao' | 'angola' | 'ar' | 'argentina' | 'as' | 'american samoa' |
    'at' | 'austria' | 'au' | 'australia' | 'aw' | 'aruba' | 'ax' | 'aland islands' | 'az' | 'azerbaijan' | 'ba' | 'bosnia' | 'bb' |
    'barbados' | 'bd' | 'bangladesh' | 'be' | 'belgium' | 'bf' | 'burkina faso' | 'bg' | 'bulgaria' | 'bh' | 'bahrain' | 'bi' |
    'burundi' | 'bj' | 'benin' | 'bm' | 'bermuda' | 'bn' | 'brunei' | 'bo' | 'bolivia' | 'br' | 'brazil' | 'bs' | 'bahamas' | 'bt' |
    'bhutan' | 'bv' | 'bouvet island' | 'bw' | 'botswana' | 'by' | 'belarus' | 'bz' | 'belize' | 'ca' | 'canada' | 'cc' |
    'cocos islands' | 'cd' | 'congo' | 'cf' | 'central african republic' | 'cg' | 'congo brazzaville' | 'ch' | 'switzerland' |
    'ci' | 'cote divoire' | 'ck' | 'cook islands' | 'cl' | 'chile' | 'cm' | 'cameroon' | 'cn' | 'china' | 'co' | 'colombia' | 'cr' |
    'costa rica' | 'cs' | 'cu' | 'cuba' | 'cv' | 'cape verde' | 'cx' | 'christmas island' | 'cy' | 'cyprus' | 'cz' |
    'czech republic' | 'de' | 'germany' | 'dj' | 'djibouti' | 'dk' | 'denmark' | 'dm' | 'dominica' | 'do' | 'dominican republic' |
    'dz' | 'algeria' | 'ec' | 'ecuador' | 'ee' | 'estonia' | 'eg' | 'egypt' | 'eh' | 'western sahara' | 'er' | 'eritrea' | 'es' |
    'spain' | 'et' | 'ethiopia' | 'eu' | 'european union' | 'fi' | 'finland' | 'fj' | 'fiji' | 'fk' | 'falkland islands' | 'fm' |
    'micronesia' | 'fo' | 'faroe islands' | 'fr' | 'france' | 'ga' | 'gabon' | 'gb' | 'united kingdom' | 'gd' | 'grenada' | 'ge' |
    'georgia' | 'gf' | 'french guiana' | 'gh' | 'ghana' | 'gi' | 'gibraltar' | 'gl' | 'greenland' | 'gm' | 'gambia' | 'gn' |
    'guinea' | 'gp' | 'guadeloupe' | 'gq' | 'equatorial guinea' | 'gr' | 'greece' | 'gs' | 'sandwich islands' | 'gt' |
    'guatemala' | 'gu' | 'guam' | 'gw' | 'guinea-bissau' | 'gy' | 'guyana' | 'hk' | 'hong kong' | 'hm' | 'heard island' | 'hn' |
    'honduras' | 'hr' | 'croatia' | 'ht' | 'haiti' | 'hu' | 'hungary' | 'id' | 'indonesia' | 'ie' | 'ireland' | 'il' | 'israel' | 'in' |
    'india' | 'io' | 'indian ocean territory' | 'iq' | 'iraq' | 'ir' | 'iran' | 'is' | 'iceland' | 'it' | 'italy' | 'jm' |
    'jamaica' | 'jo' | 'jordan' | 'jp' | 'japan' | 'ke' | 'kenya' | 'kg' | 'kyrgyzstan' | 'kh' | 'cambodia' | 'ki' | 'kiribati' |
    'km' | 'comoros' | 'kn' | 'saint kitts and nevis' | 'kp' | 'north korea' | 'kr' | 'south korea' | 'kw' | 'kuwait' | 'ky' |
    'cayman islands' | 'kz' | 'kazakhstan' | 'la' | 'laos' | 'lb' | 'lebanon' | 'lc' | 'saint lucia' | 'li' | 'liechtenstein' | 'lk' |
    'sri lanka' | 'lr' | 'liberia' | 'ls' | 'lesotho' | 'lt' | 'lithuania' | 'lu' | 'luxembourg' | 'lv' | 'latvia' | 'ly' | 'libya' |
    'ma' | 'morocco' | 'mc' | 'monaco' | 'md' | 'moldova' | 'me' | 'montenegro' | 'mg' | 'madagascar' | 'mh' | 'marshall islands' |
    'mk' | 'macedonia' | 'ml' | 'mali' | 'mm' | 'myanmar' | 'burma' | 'mn' | 'mongolia' | 'mo' | 'macau' | 'mp' |
    'northern mariana islands' | 'mq' | 'martinique' | 'mr' | 'mauritania' | 'ms' | 'montserrat' | 'mt' | 'malta' | 'mu' |
    'mauritius' | 'mv' | 'maldives' | 'mw' | 'malawi' | 'mx' | 'mexico' | 'my' | 'malaysia' | 'mz' | 'mozambique' | 'na' | 'namibia' |
    'nc' | 'new caledonia' | 'ne' | 'niger' | 'nf' | 'norfolk island' | 'ng' | 'nigeria' | 'ni' | 'nicaragua' | 'nl' | 'netherlands' |
    'no' | 'norway' | 'np' | 'nepal' | 'nr' | 'nauru' | 'nu' | 'niue' | 'nz' | 'new zealand' | 'om' | 'oman' | 'pa' | 'panama' | 'pe' |
    'peru' | 'pf' | 'french polynesia' | 'pg' | 'new guinea' | 'ph' | 'philippines' | 'pk' | 'pakistan' | 'pl' | 'poland' | 'pm' |
    'saint pierre' | 'pn' | 'pitcairn islands' | 'pr' | 'puerto rico' | 'ps' | 'palestine' | 'pt' | 'portugal' | 'pw' | 'palau' |
    'py' | 'paraguay' | 'qa' | 'qatar' | 're' | 'reunion' | 'ro' | 'romania' | 'rs' | 'serbia' | 'ru' | 'russia' | 'rw' | 'rwanda' |
    'sa' | 'saudi arabia' | 'sb' | 'solomon islands' | 'sc' | 'seychelles' | 'gb sct' | 'scotland' | 'sd' | 'sudan' | 'se' |
    'sweden' | 'sg' | 'singapore' | 'sh' | 'saint helena' | 'si' | 'slovenia' | 'sj' | 'svalbard' | 'jan mayen' | 'sk' | 'slovakia' |
    'sl' | 'sierra leone' | 'sm' | 'san marino' | 'sn' | 'senegal' | 'so' | 'somalia' | 'sr' | 'suriname' | 'st' | 'sao tome' | 'sv' |
    'el salvador' | 'sy' | 'syria' | 'sz' | 'swaziland' | 'tc' | 'caicos islands' | 'td' | 'chad' | 'tf' | 'french territories' |
    'tg' | 'togo' | 'th' | 'thailand' | 'tj' | 'tajikistan' | 'tk' | 'tokelau' | 'tl' | 'timorleste' | 'tm' | 'turkmenistan' | 'tn' |
    'tunisia' | 'to' | 'tonga' | 'tr' | 'turkey' | 'tt' | 'trinidad' | 'tv' | 'tuvalu' | 'tw' | 'taiwan' | 'tz' | 'tanzania' | 'ua' |
    'ukraine' | 'ug' | 'uganda' | 'um' | 'us minor islands' | 'us' | 'america' | 'united states' | 'uy' | 'uruguay' | 'uz' |
    'uzbekistan' | 'va' | 'vatican city' | 'vc' | 'saint vincent' | 've' | 'venezuela' | 'vg' | 'british virgin islands' | 'vi' |
    'us virgin islands' | 'vn' | 'vietnam' | 'vu' | 'vanuatu' | 'gb wls' | 'wales' | 'wf' | 'wallis and futuna' | 'ws' | 'samoa' |
    'ye' | 'yemen' | 'yt' | 'mayotte' | 'za' | 'south africa' | 'zm' | 'zambia' | 'zw' | 'zimbabwe';


  // BUTTON

  interface SuiElement {
    /**
    * An element type to render as (string or function).
    */
    as?: string | any;
    /**
    * Additional classes.
    */
    className?: string;
  }

  interface SuiBlockElement extends SuiElement {
    /**
    * Primary content.
    */
    children?: any;
  }

  interface SuiContentElement extends SuiBlockElement {
    content?: any;
  }

  type ButtonAttached = 'left' | 'right' | 'top' | 'bottom';
  type LabelPosition = 'left' | 'right';

  export interface IButtonProps extends SuiElement {
    active?: boolean;
    animated?: boolean | "fade" | "vertical";
    attached?: AttachedNS;
    basic?: boolean;
    children?: any;
    circular?: boolean;
    color?: ButtonColors;
    compact?: boolean;
    content?: any;
    disabled?: boolean;
    floated?: Floats;
    fluid?: boolean;
    icon?: Icons;
    inverted?: boolean;
    label?: any;
    labelPosition?: LabelPosition;
    loading?: boolean;
    negative?: boolean;
    positive?: boolean;
    primary?: boolean;
    secondary?: boolean;
    size?: Sizes;
    toggle?: boolean;
  }

  interface IButtonContent extends SuiBlockElement {
    /**
     * Initially hidden, visible on hover
     * 
     * @type {boolean}
     */
    hidden?: boolean;
    /**
     * Initially hidden, visible on hover
     * 
     * @type {boolean}
     */
    visible?: boolean;
  }

  interface IButtonGroup extends SuiElement {
    attached?: AttachedNS;
    basic?: boolean;
    children?: any;
    className?: string;
    color?: Colors;
    icon?: boolean;
    labeled?: boolean;
    size?: Sizes;
    vertical?: boolean;
    widths?: Widths;
  }

  interface IButtonOr extends SuiElement {
  }

  interface ButtonStatic {
    (props?: IButtonProps): JSX.Element;

    Content?: (props: IButtonContent) => JSX.Element;
    Group?: (props: IButtonGroup) => JSX.Element;
    Or?: (props: IButtonOr) => JSX.Element;
  }

  export const Button: ButtonStatic;



  // CONTAINER

  interface IContainerProps extends SuiBlockElement {
    fluid?: boolean;
    text?: boolean;
    textAlign?: Alignments;
  }

  export const Container: (props?: IContainerProps) => JSX.Element;


  // DIVIDER

  interface IDividerProps extends SuiBlockElement {
    clearing?: boolean;
    fitted?: boolean;
    hidden?: boolean;
    horizontal?: boolean;
    inverted?: boolean;
    section?: boolean;
    vertical?: boolean;
  }

  export const Divider: (props?: IDividerProps) => JSX.Element;

  // Flag

  interface IFlagProps extends SuiBlockElement {
    name?: Flags;
  }

  export const Flag: (props?: IFlagProps) => JSX.Element;

  // Header

  interface IHeaderProps extends SuiBlockElement {
    attached?: AttachedNS | boolean;
    block?: boolean;
    className?: string;
    color?: Colors;
    content?: any;
    disabled?: boolean;
    dividing?: boolean;
    floated?: Floats;
    icon?: Icons;
    image?: any;
    inverted?: boolean;
    size?: Sizes;
    sub?: boolean;
    subheader?: any;
    textAlign?: Alignments;
  }


  interface IHeaderStatic {
    Content?: (props: SuiBlockElement) => JSX.Element;
    SubHeader?: (props: SuiContentElement) => JSX.Element;
    (props?: IHeaderProps): JSX.Element;
  }

  export const Header: IHeaderStatic;


  // Icon
  interface IIconProps extends SuiElement {
    bordered?: boolean;
    circular?: boolean;
    className?: string;
    color?: Colors;
    corner?: boolean;
    disabled?: boolean;
    fitted?: boolean;
    flipped?: 'horizontally' | 'vertically';
    inverted?: boolean;
    link?: boolean;
    loading?: boolean;
    name?: string;
    rotated?: 'clockwise' | 'counterclockwise';
    size?: Sizes;
  }

  interface IIconGroup extends SuiBlockElement {
    size?: Sizes;
  }

  interface IIconStatic {
    Group?: IIconGroup;
    (props?: IIconProps): JSX.Element;
  }

  export const Icon: IIconStatic;

  // Image

  interface IImageProps extends SuiBlockElement {
    alt?: string;
    avatar?: boolean;
    bordered?: boolean;
    centered?: boolean;
    className?: string;
    disabled?: boolean;
    floated?: Floats;
    fluid?: any;
    height?: string | number;
    hidden?: boolean;
    href?: string;
    inline?: boolean;
    label?: any;
    shape?: 'rounded' | 'circular';
    size?: Sizes;
    spaced?: boolean | 'left' | 'right';
    src?: string;
    ui?: boolean;
    verticalAlign?: VerticalAlignments;
    width?: string | number;
    wrapped?: any;
  }

  interface IImageGroup extends SuiBlockElement {
    size?: Sizes;
  }

  interface IImageStatic {
    Group?: (props: IImageGroup) => JSX.Element;
    (props?: IImageProps): JSX.Element;
  }
  export const Image: IImageStatic;

  // Input

  interface IInputProps extends SuiBlockElement {
    action?: boolean | any;
    actionPosition?: 'left';
    children?: any;
    className?: string;
    disabled?: boolean;
    error?: boolean;
    fluid?: boolean;
    focus?: boolean;
    icon?: boolean | Icons;
    iconPosition?: 'left';
    input?: any;
    inverted?: boolean;
    label?: any;
    labelPosition?: 'left' | 'right' | 'left corner' | 'right corner';
    loading?: boolean;
    size?: Sizes;
    transparent?: boolean;
    type?: string;
  }

  export const Input: (props?: IInputProps) => JSX.Element;

  // Label

  interface ILabelProps extends SuiBlockElement {
    attached?: 'top' | 'bottom' | 'top right' | 'top left' | 'bottom left' | 'bottom right';
    basic?: boolean;
    children?: any;
    circular?: boolean;
    className?: string;
    color?: Colors;
    content?: any;
    corner?: boolean | 'left' | 'right';
    detail?: any;
    empty?: any;
    floating?: boolean;
    horizontal?: boolean;
    icon?: Icons;
    image?: boolean | any;
    onClick?: Function;
    onRemove?: Function;
    pointing?: boolean | 'above' | 'below' | 'left' | 'right';
    removable?: boolean;
    ribbon?: boolean | 'right';
    size?: Sizes;
    tag?: boolean;
  }

  interface ILabelGroup extends SuiBlockElement {
    circular?: boolean;
    color?: Colors;
    size?: Sizes;
    tag?: boolean;
  }

  interface ILabelStatic {
    Detail?: (props: SuiContentElement) => JSX.Element;
    Group?: (props: ILabelGroup) => JSX.Element;
    (props?: ILabelProps): JSX.Element;
  }

  export const Label: ILabelStatic;

  // List

  interface IListProps extends SuiBlockElement {
    animated?: boolean;
    bulleted?: boolean;
    celled?: boolean;
    divided?: boolean;
    floated?: Floats;
    horizontal?: boolean;
    inverted?: boolean;
    items?: any;
    link?: boolean;
    ordered?: boolean;
    relaxed?: boolean | 'very';
    selection?: boolean;
    size?: Sizes;
    verticalAlign?: VerticalAlignments;
  }

  interface IListContent extends SuiContentElement {
    description?: any;
    floated?: Floats;
    header?: any;
    verticalAlign?: VerticalAlignments;
    (props?: ILabelProps): JSX.Element;
  }

  interface IListIcon {
    icon?: Icons;
    classname?: string;
    verticalAlign?: VerticalAlignments;
    (props?: ILabelProps): JSX.Element;
  }

  interface IListItem extends SuiBlockElement {
    active?: boolean;
    (props?: ILabelProps): JSX.Element;
  }

  interface IListStatic {
    Content?: (props: IListContent) => JSX.Element;
    Description?: (props: SuiContentElement) => JSX.Element;
    Header?: (props: SuiContentElement) => JSX.Element;
    Icon?: (props?: IListIcon) => JSX.Element;
    Item?: (props: IListItem) => JSX.Element;
    List?: (props: SuiBlockElement) => JSX.Element;
    (props?: IListProps): JSX.Element;
  }
  export const List: IListStatic;

  // Loader

  interface ILoaderProps extends SuiBlockElement {
    active?: boolean;
    disabled?: boolean;
    indeterminate?: boolean;
    inline?: boolean | 'cenetered';
    inverted?: boolean;
    size?: Sizes;
    text?: any;
  }

  export const Loader: (props?: ILoaderProps) => JSX.Element;

  // Rail

  interface IRailProps extends SuiBlockElement {
    attached?: boolean;
    close?: boolean | 'very';
    dividing?: boolean;
    internal?: boolean;
    position?: Floats;
    size?: Sizes;
  }

  export const Rail: (props?: IRailProps) => JSX.Element;

  // Segment

  interface ISegmentProps extends SuiBlockElement {
    attached?: AttachedNS;
    basic?: boolean;
    circular?: boolean;
    clearing?: boolean;
    color?: Colors;
    compact?: boolean;
    disabled?: boolean;
    floated?: Floats;
    inverted?: boolean;
    loading?: boolean;
    padded?: boolean | 'very';
    piled?: boolean;
    raised?: boolean;
    secondary?: boolean;
    size?: Sizes;
    stacked?: boolean;
    tertiary?: boolean;
    textAlign?: Alignments;
    vertical?: boolean;
  }

  interface ISegmentGroup {
    compact?: boolean;
    horizontal?: boolean;
    piled?: boolean;
    raised?: boolean;
    size?: Sizes;
    stacked?: boolean;
  }

  interface ISegmentStatic {
    Group?: (props: ISegmentGroup) => JSX.Element;
    (props?: ISegmentProps): JSX.Element;
  }
  export const Segment: ISegmentStatic;


  // Step

  interface IStepProps extends SuiBlockElement {
    active?: boolean;
    className?: string;
    completed?: boolean;
    description?: any;
    disabled?: boolean;
    href?: string;
    icon?: Icons;
    link?: boolean;
    onClick?: Function;
    ordered?: boolean;
    title?: any;
  }

  interface IStepContent extends SuiBlockElement {
    description?: any;
    title?: any;
  }

  interface IStepDescription extends SuiBlockElement {
    description?: any;
  }

  interface IStepGroup extends SuiBlockElement {
    fluid?: boolean;
    items?: any;
    ordered?: boolean;
    size?: Sizes;
    stackable?: 'tablet';
    vertical?: boolean;
  }

  interface IStepTitle extends SuiBlockElement {
    title?: any;
  }

  interface IStepStatic {
    Content?: (props: IStepContent) => JSX.Element;
    Description?: (props: IStepDescription) => JSX.Element;
    Group?: (props: IStepGroup) => JSX.Element;
    Title?: (props: IStepTitle) => JSX.Element;
    (props?: IStepProps): JSX.Element;
  }
  export const Step: IStepStatic;

  // BreadCrumb

  interface IBreadCrumbProps extends SuiBlockElement {
    divider?: any;
    icon?: Icons;
    sections?: any;
    size?: Sizes;
  }

  interface IBreadcrumbSection extends SuiBlockElement {
    active?: boolean;
    href?: any;
    link?: any;
    onClick?: Function;
  }

  interface IBreadcrumbDivider extends SuiBlockElement {
    icon?: Icons | any;
  }

  interface IBreadCrumbStatic {
    Section?: (props: IBreadcrumbSection) => JSX.Element;
    Divider?: (props: IBreadcrumbDivider) => JSX.Element;
    (props?: IBreadCrumbProps): JSX.Element;
  }
  export const BreadCrumb: IBreadCrumbStatic;

  // Form

  // Form

  interface IFormProps extends SuiBlockElement {
    error?: boolean;
    loading?: boolean;
    onSubmit?: Function;
    reply?: boolean;
    serializer?: Function;
    size?: Sizes;
    success?: boolean;
    warning?: boolean;
    widths?: Widths;
  }

  interface IFormFieldProps extends SuiBlockElement {
    control?: 'button' | 'input' | 'select' | 'textarea';
    disabled?: boolean;
    error?: boolean;
    inline?: boolean;
    label?: string;
    required?: any;
    type?: string;
    width?: Widths;
  }

  interface IFormControlProps extends SuiElement {
    control: any;
  }

  interface IFormGroupProps extends SuiBlockElement {
    grouped: 'grouped';
    inline: 'inline'
    widths?: Widths;
  }


  interface IFormStatic {
    Field: (props: IFormFieldProps) => JSX.Element;
    Button: (props: IFormControlProps) => JSX.Element;
    Checkbox: (props: IFormControlProps) => JSX.Element;
    Dropdown: (props: IFormControlProps) => JSX.Element;
    Group: (props: IFormGroupProps) => JSX.Element;
    Input: (props: IFormControlProps) => JSX.Element;
    Radio: (props: IFormControlProps) => JSX.Element;
    Select: (props: IFormControlProps) => JSX.Element;
    Textarea: (props: IFormControlProps) => JSX.Element;
    (props: IFormProps): JSX.Element;
  }

  /**
   * A Form displays a set of related user input fields in a structured way.
   */
  export const Form: IFormStatic;


  // Grid

  interface IGridProps extends SuiBlockElement {
    celled?: boolean | 'internally';
    centered?: boolean;
    children?: any;
    className?: string;
    columns?: Widths;
    divided?: boolean | 'vertically';
    doubling?: boolean;
    padded?: boolean | 'horizontally' | 'vertically';
    relaxed?: boolean | 'very';
    reversed?: 'computer' | 'computer vertically' | 'mobile' | 'mobile vertically' | 'tablet' | 'tablet vertically';
    stackable?: boolean;
    stretched?: boolean;
    textAlign?: Alignments;
    verticalAlign?: VerticalAlignments;
  }

  type GridVisibility = 'computer' | 'large screen' | 'mobile' | 'tablet mobile' | 'tablet' | 'widescreen';

  interface IColumnProps extends SuiBlockElement {
    color?: Colors;
    computer?: Widths;
    floated?: Floats;
    largeScreen?: Widths;
    mobile?: Widths;
    only?: GridVisibility;
    stretched?: boolean;
    tablet?: Widths;
    textAlign?: Alignments;
    verticalAlign?: VerticalAlignments;
    widescreen?: Widths;
    width?: Widths;
  }

  interface IRowProps extends SuiBlockElement {
    centered?: boolean;
    children?: any;
    className?: string;
    color?: Colors;
    columns?: Widths;
    divided?: boolean;
    only?: GridVisibility;
    reversed?: 'computer' | 'computer vertically' | 'mobile' | 'mobile vertically' | 'tablet' | 'tablet vertically';
    stretched?: boolean;
    textAlign?: Alignments;
    verticalAlign?: VerticalAlignments;
  }

  interface IGridStatic {
    Column: (props: IColumnProps) => JSX.Element;
    Row: (props: IRowProps) => JSX.Element;
    (props: IGridProps): JSX.Element;
  }
  export const Grid: IGridStatic;


  // Menu

  interface IMenuProps extends SuiBlockElement {
    activeIndex?: number;
    attached?: boolean | AttachedNS;
    borderless?: boolean;
    className?: string;
    color?: Colors;
    compact?: boolean;
    defaultActiveIndex?: number;
    fixed?: AttachedNSEW;
    floated?: boolean | 'right';
    fluid?: boolean;
    icon?: boolean | any;
    inverted?: boolean;
    items?: any;
    onItemClick?: Function;
    pagination?: boolean;
    pointing?: boolean;
    secondary?: boolean;
    size?: Sizes;
    stackable?: boolean;
    tabular?: boolean | 'right';
    text?: boolean;
    vertical?: boolean;
    widths?: Widths;
  }

  interface IMenuItemProps extends SuiContentElement {
    active?: boolean;
    color?: Colors;
    fitted?: boolean | 'horizontally' | 'vertically';
    header?: boolean;
    icon?: boolean;
    index?: number;
    link?: boolean;
    name?: string;
    onClick?: Function;
    position?: 'right';
  }

  interface IMenuMenuProps extends SuiBlockElement {
    position: 'right'
  }


  interface IMenuStatic {
    Header: SuiContentElement;
    Item: (props: IMenuItemProps) => JSX.Element;
    Menu: (props: IMenuMenuProps) => JSX.Element;

    (props: IMenuProps): JSX.Element;
  }
  export const Menu: IMenuStatic;

  // Message

  interface IMessageProps extends SuiContentElement {
    attached?: boolean | 'bottom';
    color?: Colors;
    compact?: boolean;
    error?: boolean;
    floating?: boolean;
    header?: any;
    hidden?: boolean;
    icon?: boolean | any;
    info?: boolean;
    list?: any;
    negative?: boolean;
    onDismiss?: Function;
    positive?: boolean;
    size?: Sizes;
    success?: boolean;
    visible?: boolean;
    warning?: boolean;
  }

  interface IMessageList extends SuiBlockElement {
    items: SuiBlockElement[];
  }

  interface IMessageStatic {
    Content: (props: SuiBlockElement) => JSX.Element;
    Header: (props: SuiBlockElement) => JSX.Element;
    List: (props: IMessageList) => JSX.Element;
    Item: (props: SuiBlockElement) => JSX.Element;
    (props: IMessageProps): JSX.Element;
  }
  export const Message: IMessageStatic;

  // Table

  interface ITableProps extends SuiBlockElement {
    attached?: boolean | AttachedNS;
    basic?: boolean | 'very';
    celled?: boolean;
    children?: any;
    collapsing?: boolean;
    color?: Colors;
    columns?: Widths;
    compact?: boolean | 'very';
    definition?: boolean;
    fixed?: boolean;
    footerRow?: any;
    headerRow?: any;
    inverted?: boolean;
    padded?: boolean | 'very';
    renderBodyRow?: any;
    selectable?: boolean;
    singleLine?: boolean;
    size?: Sizes;
    stackable?: boolean;
    striped?: boolean;
    structured?: boolean;
    tableData?: any;
    unstackable?: boolean;
  }

  interface ITableCell extends SuiContentElement {
    active?: boolean;
    collapsing?: boolean;
    disabled?: boolean;
    error?: boolean;
    icon?: any;
    negative?: boolean;
    positive?: boolean;
    singleLine?: boolean;
    textAlign?: Alignments;
    verticalAlign?: VerticalAlignments;
    warning?: boolean;
    width?: Widths;
  }

  interface ITableHeader extends SuiBlockElement {
    fullWidth: boolean;
  }

  interface ITableRow extends SuiBlockElement {
    active?: boolean;
    cellAs?: any;
    cells?: any;
    disabled?: boolean;
    error?: boolean;
    negative?: boolean;
    positive?: boolean;
    textAlign?: Alignments;
    verticalAlign?: VerticalAlignments;
    warning?: boolean;
  }

  interface ITableStatic {
    Body: (props: SuiBlockElement) => JSX.Element;
    Cell: (props: ITableCell) => JSX.Element;
    Footer: (props: SuiElement) => JSX.Element;
    Header: (props: ITableHeader) => JSX.Element;
    HeaderCell: (props: SuiElement) => JSX.Element;
    Row: (props: ITableRow) => JSX.Element;
    (props: ITableProps): JSX.Element;
  }
  export const Table: ITableStatic;

  // Card

  interface ICardProps extends SuiBlockElement {
    /**
    * A Card can center itself inside its container.
    */
    centered?: boolean;
    /**
    * A Card can be formatted to display different colors.
    */
    color?: Colors;
    /**
    * Shorthand for CardDescription.
    */
    description?: any;
    /**
    * Shorthand for primary content of CardContent.
    */
    extra?: any;
    /**
    * A Card can be formatted to take up the width of its container.
    */
    fluid?: boolean;
    /**
    * Shorthand for CardHeader.
    */
    header?: any;
    /**
    * Render as an `a` tag instead of a `div` and adds the href attribute.
    */
    href?: string;
    /**
    * A card can contain an Image component.
    */
    image?: any;
    /**
    * Shorthand for CardMeta.
    */
    meta?: any;
    /**
    * Render as an `a` tag instead of a `div` and called with event on Card click.
    */
    onClick?: Function;
    /**
    * A Card can be formatted to raise above the page.
    */
    raised?: boolean;

  }

  interface ICardContent extends SuiBlockElement {
    /**
    * Shorthand for CardDescription.
    */
    description?: any;
    /**
    * A card can contain extra content meant to be formatted separately from the main content
    */
    extra?: boolean;
    /**
    * Shorthand for CardHeader.
    */
    header?: any;
    /**
    * Shorthand for CardMeta.
    */
    meta?: any;

  }

  interface ICardGroup extends SuiBlockElement {
    /**
    * A group of cards can double its column width for mobile
    */
    doubling?: boolean;
    /**
    * Shorthand array of props for Card.
    */
    items?: any;
    /**
    * A group of cards can set how many cards should exist in a row
    */
    itemsPerRow?: Widths;
    /**
    * A group of cards can automatically stack rows to a single columns on mobile devices
    */
    stackable?: boolean;
  }

  interface ICardStatic {
    Content: (props: ICardContent) => JSX.Element;
    Description: (props: SuiContentElement) => JSX.Element;
    Group: (props: ICardGroup) => JSX.Element;
    Header: (props: SuiContentElement) => JSX.Element;
    Meta: (props: SuiContentElement) => JSX.Element;
    (props: ICardProps): JSX.Element;
  }
  export const Card: ICardStatic;


  // Comment

  interface ICommentProps extends SuiBlockElement {
    collapsed: boolean;
  }

  interface ICommentActionProps extends SuiBlockElement {
    active: boolean;
  }

  interface ICommentAvatarProps extends SuiElement {
    src: string;
  }

  interface ICommentGroupProps extends SuiElement {
    collapsed: boolean;
    minimal: boolean;
    threaded: boolean;
  }

  interface ICommentStatic {
    Author: (props: SuiBlockElement) => JSX.Element;
    Action: (props: ICommentActionProps) => JSX.Element;
    Actions: (props: SuiBlockElement) => JSX.Element;
    Avatar: (props: ICommentAvatarProps) => JSX.Element;
    Content: (props: SuiBlockElement) => JSX.Element;
    Group: (props: ICommentGroupProps) => JSX.Element;
    Metadata: (props: SuiBlockElement) => JSX.Element;
    Text: (props: SuiBlockElement) => JSX.Element;
    (props: ICommentProps): JSX.Element;
  }
  export const Comment: ICommentStatic;

  // Feed

  interface IFeedProps extends SuiBlockElement {
    events: any;
    size: Sizes;
  }

  interface IFeedContent extends SuiContentElement {
    date?: any;
    extraImages?: any;
    extraText?: any;
    meta?: any;
    summary?: any;
  }

  interface IFeedEvent extends SuiContentElement {
    date?: any;
    extraImages?: any;
    extraText?: any;
    icon?: any;
    image?: any;
    meta?: any;
    summary?: any;
  }

  interface IFeedExtra extends SuiContentElement {
    images: any;
    text: boolean;
  }

  interface IFeedIcon extends SuiContentElement {
    icon: any;
    image: any;
  }

  interface IFeedLike extends SuiContentElement {
    icon: any;
  }

  interface IFeedMeta extends SuiContentElement {
    like: any;
  }

  interface IFeedSummary extends SuiContentElement {
    date: any;
    user: any;
  }

  interface IFeedStatic {
    Content: (props: IFeedContent) => JSX.Element;
    Date: (props: SuiContentElement) => JSX.Element;
    Event: (props: IFeedEvent) => JSX.Element;
    Extra: (props: IFeedExtra) => JSX.Element;
    Label: (props: IFeedIcon) => JSX.Element;
    Like: (props: IFeedLike) => JSX.Element;
    Meta: (props: IFeedMeta) => JSX.Element;
    Summary: (props: IFeedSummary) => JSX.Element;
    User: (props: SuiContentElement) => JSX.Element;
    (props: IFeedProps): JSX.Element;
  }
  export const Feed: IFeedStatic;

  // Item

  interface IItemProps extends SuiContentElement {
    /**
     * Shorthand for ItemDescription component.
     */
    description?: any;
    /**
    * Shorthand for ItemExtra component.
    */
    extra?: any;
    /**
    * Shorthand for ItemHeader component.
    */
    header?: any;
    /**
    * Shorthand for ItemMeta component.
    */
    meta?: any;
    /**
    * Content can specify its vertical alignment
    */
    verticalAlign?: VerticalAlignments;
  }

  interface IItemGroup extends SuiContentElement {
    /**
      * Items can be divided to better distinguish between grouped content.
      */
    divided?: boolean;
    /**
    * Shorthand array of props for Item.
    */
    items?: any;
    /**
    * An item can be formatted so that the entire contents link to another page.
    */
    link?: boolean;
    /**
    * A group of items can relax its padding to provide more negative space.
    */
    relaxed?: boolean | 'very';

  }

  interface IItemStatic {
    Content: (props: IItemProps) => JSX.Element;
    Description: (props: SuiContentElement) => JSX.Element;
    Extra: (props: SuiContentElement) => JSX.Element;
    Group: (props: IItemGroup) => JSX.Element;
    Header: (props: SuiContentElement) => JSX.Element;
    Image: (props: SuiContentElement) => JSX.Element;
    Meta: (props: SuiContentElement) => JSX.Element;
    (props: IItemProps): JSX.Element;
  }
  export const Item: IItemStatic;

  // Statistic

  interface IStatisticProps extends SuiBlockElement {
    /**
      * A statistic can be formatted to be different colors.
      */
    color?: Colors;
    /**
    * A statistic can sit to the left or right of other content.
    */
    floated?: Floats;
    /**
    * A statistic can present its measurement horizontally.
    */
    horizontal?: boolean;
    /**
    * A statistic can be formatted to fit on a dark background.
    */
    inverted?: boolean;
    /**
    * Label content of the Statistic.
    */
    label?: any;
    /**
    * A statistic can vary in size.
    */
    size?: Sizes;
    /**
    * Format the StatisticValue with smaller font size to fit nicely beside number values.
    */
    text?: boolean;
    /**
    * Value content of the Statistic.
    */
    value?: any;
  }

  interface IStatisticGroup extends SuiBlockElement {
    /**
      * A statistic can present its measurement horizontally.
      */
    horizontal?: boolean;
    /**
    * Array of props for Statistic.
    */
    items?: any;
    /**
    * A statistic group can have its items divided evenly.
    */
    widths?: Widths;
  }

  interface IStatisticLabel extends SuiBlockElement {
    /**
      * Shorthand for primary content.
      */
    label?: any;
  }

  interface IStatisticValue extends SuiBlockElement {
    /**
      * Format the value with smaller font size to fit nicely beside number values.
      */
    text?: boolean;
    /**
    * Primary content of the StatisticValue. Mutually exclusive with the children prop.
    */
    value?: any;

  }

  interface IStatisticStatic {
    Group: (props: IStatisticGroup) => JSX.Element;
    Label: (props: IStatisticLabel) => JSX.Element;
    Value: (props: IStatisticValue) => JSX.Element;
    (props: IStatisticProps): JSX.Element;
  }
  export const Statistic: IStatisticStatic;

  // Accordion

  interface IAccordionProps extends SuiBlockElement {
    /**
      * Index of the currently active panel.
      */
    activeIndex?: number;
    /**
    * Initial activeIndex value.
    */
    defaultActiveIndex?: number;
    /**
    * Format to take up the width of it's container.
    */
    fluid?: boolean;
    /**
    * Format for dark backgrounds.
    */
    inverted?: boolean;
    /**
    * Called with (event, index) when a panel title is clicked.
    */
    onTitleClick?: Function;
    /**
    * Create simple accordion panels from an array of ? : text: <string>, content: <string> ; objects. Object can optionally define an `active` key to open/close the panel. Mutually exclusive with children.
    */
    panels?: any;
    /**
    * Adds some basic styling to accordion panels.
    */
    styled?: boolean;

  }

  interface IAccordionContent extends SuiBlockElement {
    /**
      * Whether or not the content is visible.
      */
    active?: boolean;
  }

  interface IAccordionTitle extends SuiBlockElement {
    /**
      * Whether or not the title is in the open state.
      */
    active?: boolean;
    /**
   * Called with (event, index) on title click.
   */
    onClick?: Function;
  }

  interface IAccordionStatic {
    Content: (props: IAccordionContent) => JSX.Element;
    Title: (props: IAccordionTitle) => JSX.Element;
    (props: IAccordionProps): JSX.Element;
  }
  export const Accordion: IAccordionStatic;

  // Checkbox

  interface ICheckboxProps extends SuiBlockElement {
    /**
    * Whether or not checkbox is checked.
    */
    checked?: boolean;
    /**
    * The initial value of checked.
    */
    defaultChecked?: boolean;
    /**
    * A checkbox can appear disabled and be unable to change states
    */
    disabled?: boolean;
    /**
    * Removes padding for a label. Auto applied when there is no label.
    */
    fitted?: boolean;
    /**
    * The text of the associated label element.
    */
    label?: string;
    /**
    * The HTML input name.
    */
    name?: string;
    /**
    * Called with (event, ? : name, value, checked ;) when the user attempts to change the value.
    */
    onChange?: Function;
    /**
    * Called with (event, ? : name, value, checked ;) when the checkbox or label is clicked.
    */
    onClick?: Function;
    /**
    * Format as a radio element. This means it is an exclusive option.
    */
    radio?: boolean;
    /**
    * A checkbox can be read-only and unable to change states
    */
    readOnly?: boolean;
    /**
    * Format to emphasize the current selection state
    */
    slider?: boolean;
    /**
    * Format to show an on or off choice
    */
    toggle?: boolean;
    /**
    * HTML input type, either checkbox or radio.
    */
    type?: 'checkbox' | 'radio';
    /**
    * The HTML input value.
    */
    value?: string;

  }

  export const Checkbox: (props: ICheckboxProps) => JSX.Element;
  export const Radio: (props: ICheckboxProps) => JSX.Element;

  // Dropdown

  interface IDropdownProps extends SuiBlockElement {
    /**
      * Label prefixed to an option added by a user.
      */
    additionLabel?: string;
    /**
    * Position of the `Add: ...` option in the dropdown list ('top' or 'bottom').
    */
    additionPosition?: AttachedNS;
    /**
    * Allow user additions to the list of options (booleanean). Requires the use of `selection`, `options` and `search`.
    */
    allowAdditions?: any;
    /**
    * A Dropdown can reduce its complexity
    */
    basic?: boolean;
    /**
    * Format the Dropdown to appear as a button.
    */
    button?: boolean;
    /**
    * Additional classes.
    */
    className?: string;
    /**
    * Format the dropdown to only take up as much width as needed.
    */
    compact?: boolean;
    /**
    * Initial value of open.
    */
    defaultOpen?: boolean;
    /**
    * Initial value or value array if multiple.
    */
    defaultValue?: string | number | any;
    /**
    *  
    */
    disabled?: boolean;
    /**
    *  
    */
    error?: boolean;
    /**
    * Display the menu as detached from the Dropdown.
    */
    floating?: boolean;
    /**
    * Format the dropdown to only take up as much width as possible.
    */
    fluid?: boolean;
    /**
    * A dropdown menu can contain a header.
    */
    header?: any;
    /**
    * Add an icon by name or as a component.
    */
    icon?: any | string;
    /**
    *  
    */
    inline?: boolean;
    /**
    *  
    */
    labeled?: boolean;
    /**
    *  
    */
    loading?: boolean;
    /**
    * Allow selecting multiple options.
    */
    multiple?: boolean;
    /**
    * Name of the hidden input which holds the value.
    */
    name?: string;
    /**
    * Message to display when there are no results.
    */
    noResultsMessage?: string;
    /**
    * Called with the name and new value added by the user. Use this to update the options list.
    */
    onAddItem?: Function;
    /**
    * Called with the React Synthetic Event on Dropdown blur.
    */
    onBlur?: Function;
    /**
    * Called with the React Synthetic Event and ? : name, value ; on change.
    */
    onChange?: Function;
    /**
    * Called with the React Synthetic Event on Dropdown click.
    */
    onClick?: Function;
    /**
    * Called with the React Synthetic Event on Dropdown focus.
    */
    onFocus?: Function;
    /**
    * Called with the React Synthetic Event on Dropdown mouse down.
    */
    onMouseDown?: Function;
    /**
    * Called with the React Synthetic Event and current value on search input change.
    */
    onSearchChange?: Function;
    /**
    * Controls whether or not the dropdown menu is displayed.
    */
    open?: boolean;
    /**
    * Array of Dropdown.Item props e.g. `? : text: '', value: '' ;`
    */
    options?: any;
    /**
    * Placeholder text.
    */
    placeholder?: string;
    /**
    * Use a detached menu that is pointing to the Dropdown.
    */
    pointing?: boolean | 'left' | 'right' | 'top' | 'top left' | 'top right' | 'bottom' | 'bottom left' | 'bottom right';
    /**
    *  
    */
    scrolling?: boolean;
    /**
    * Make the dropdown options searchable by substring matching (default) or with a custom search function.
    */
    search?: boolean | Function;
    /**
    * Define whether the highlighted item should be selected on blur.
    */
    selectOnBlur?: boolean;
    /**
    * Behave as an html select.
    */
    selection?: any;
    /**
    *  
    */
    simple?: boolean;
    /**
    * The text displayed in the dropdown, usually for the active item.
    */
    text?: string;
    /**
    * Custom element to trigger the menu to become visible. Takes place of 'text'.
    */
    trigger?: any;
    /**
    * Current value or value array if multiple. Creates a controlled component.
    */
    value?: string | number | any;

  }

  interface IDropdownHeader extends SuiContentElement {
    /**
      * Shorthand for Icon.
      */
    icon?: any;
  }

  interface IDropdownItem extends SuiBlockElement {
    /**
      * Style as the currently chosen item.
      */
    active?: boolean;
    /**
    * Additional text with less emphasis.
    */
    description?: any;
    /**
    * A dropdown item can be disabled.
    */
    disabled?: boolean;
    /**
    * Add an icon to the item.
    */
    icon?: string;
    /**
    * Called on click with (event, value, text).
    */
    onClick?: Function;
    /**
    * The item currently selected by keyboard shortcut. This is not the active item.
    */
    selected?: boolean;
    /**
    * Display text.
    */
    text?: any;
    /**
    * Stored value
    */
    value?: number | string;
  }

  interface IDropdownStatic {
    Divider: (props: SuiElement) => JSX.Element;
    Header: (props: IDropdownHeader) => JSX.Element;
    Item: (props: IDropdownItem) => JSX.Element;
    Menu: (props: SuiContentElement) => JSX.Element;
    (props: IDropdownProps): JSX.Element;
  }
  export const Dropdown: IDropdownStatic;
  export const Select: IDropdownStatic;

  // Modal

  interface IModalProps extends SuiBlockElement {
    /**
    * A modal can reduce its complexity
    */
    basic?: boolean;
    /**
    * A modal can appear in a dimmer
    */
    dimmer?: boolean | 'inverted' | 'blurring';
    /**
    * The node where the modal should mount..
    */
    mountNode?: any;
    /**
    * A modal can vary in size
    */
    size?: 'fullscreen' | 'large' | 'small';

  }

  interface IModalContentProps extends SuiBlockElement {
    /**
      * A modal can contain image content
      */
    image?: boolean;

  }

  interface IModalStatic {
    Header: (props: SuiBlockElement) => JSX.Element;
    Content: (props: IModalContentProps) => JSX.Element;
    Description: (props: SuiBlockElement) => JSX.Element;
    Actions: (props: SuiBlockElement) => JSX.Element;
    (props: IModalProps): JSX.Element;
  }
  export const Modal: IModalStatic;

  // Popup

  interface IPopupProps extends SuiContentElement {
    /**
    * Display the popup without the pointing arrow
    */
    basic?: boolean;
    /**
    * A Flowing popup have no maximum width and continue to flow to fit its content
    */
    flowing?: boolean;
    /**
    * Header displayed above the content in bold
    */
    header?: string;
    /**
    * The node where the popup should mount..
    */
    hideOnScroll?: boolean;
    /**
    * Whether the popup should not close on hover
    */
    hoverable?: boolean;
    /**
    * Invert the colors of the popup
    */
    inverted?: boolean;
    /**
    * Horizontal offset in pixels to be applied to the popup
    */
    offset?: number;
    /**
    * Event triggering the popup
    */
    on?: 'hover' | 'click' | 'focus';
    /**
    * Positioning for the popover
    */
    positioning?: 'top left' |
    'top right' |
    'bottom right' |
    'bottom left' |
    'right center' |
    'left center' |
    'top center' |
    'bottom center';
    /**
    * Popup size
    */
    size?: Sizes;
    /**
    * custom popup style
    */
    style?: any;
    /**
    * Element to be rendered in-place where the popup is defined.
    */
    trigger?: any;
    /**
    * Popup width
    */
    wide?: true | false | 'very';

  }

  interface IPopupStatic {
    Content: (props: SuiBlockElement) => JSX.Element;
    Header: (props: SuiBlockElement) => JSX.Element;
    (props: IPopupProps): JSX.Element;
  }
  export const Popup: IPopupStatic;

  // Progress

  interface IProgressProps extends SuiBlockElement {
    /**
    * A progress bar can show activity.
    */
    active?: boolean;
    /**
    * A progress bar can attach to and show the progress of an element (i.e. Card or Segment).
    */
    attached?: AttachedNS;
    /**
    * Whether success state should automatically trigger when progress completes.
    */
    autoSuccess?: boolean;
    /**
    * A progress bar can have different colors.
    */
    color?: Colors;
    /**
    * A progress bar be disabled.
    */
    disabled?: boolean;
    /**
    * A progress bar can show a error state.
    */
    error?: boolean;
    /**
    * An indicating progress bar visually indicates the current level of progress of a task.
    */
    indicating?: boolean;
    /**
    * A progress bar can have its colors inverted.
    */
    inverted?: boolean;
    /**
    * Can be set to either to display progress as percent or ratio.
    */
    label?: any;
    /**
    * Current percent complete.
    */
    percent?: any;
    /**
    * Decimal point precision for calculated progress.
    */
    precision?: number;
    /**
    * A progress bar can contain a text value indicating current progress.
    */
    progress?: boolean;
    /**
    * A progress bar can vary in size.
    */
    size?: Sizes;
    /**
    * A progress bar can show a success state.
    */
    success?: boolean;
    /**
    * For use with value. Together, these will calculate the percent. Mutually excludes percent.
    */
    total?: any;
    /**
    * For use with total. Together, these will calculate the percent. Mutually excludes percent.
    */
    value?: any;
    /**
    * A progress bar can show a warning state.
    */
    warning?: boolean;
  }

  export const Progress: (props: IProgressProps) => JSX.Element;

  // Rating

  interface IRatingProps extends SuiBlockElement {
    /**
    * You can clear the rating by clicking on the current start rating. By default a rating will be only clearable if there is 1 icon. Setting to `true`/`false` will allow or disallow a user to clear their rating.
    */
    clearable?: 'auto' | boolean;
    /**
    * The initial rating value.
    */
    defaultRating?: string | number;
    /**
    * You can disable or enable interactive rating. Makes a read-only rating.
    */
    disabled?: boolean;
    /**
    * A rating can use a set of star or heart icons.
    */
    icon?: 'star' | 'heart';
    /**
    * The total number of icons.
    */
    maxRating?: string | number;
    /**
    * Called with (event, ? : rating, maxRating ;) after user selects a new rating.
    */
    onRate?: Function;
    /**
    * The current number of active icons.
    */
    rating?: string | number;
    /**
    * A progress bar can vary in size.
    */
    size?: Sizes;

  }

  export const Rating: (props: IRatingProps) => JSX.Element;

  // Search

  interface ISearchProps extends SuiBlockElement {
    /**
    * A search can have its results aligned to its left or right container edge.
    */
    aligned?: string;
    /**
    * A search can display results from remote content ordered by categories.
    */
    category?: boolean;
    /**
    * A function that returns the category contents. Receives all SearchCategory props.
    */
    categoryRenderer?: Function;
    /**
    * Initial value of open.
    */
    defaultOpen?: boolean;
    /**
    * Initial value.
    */
    defaultValue?: string;
    /**
    * A search can have its results take up the width of its container.
    */
    fluid?: boolean;
    /**
    * Add an icon by name or as a component.
    */
    icon?: any | Icons;
    /**
    * 
    */
    loading?: boolean;
    /**
    * Minimum characters to query for results
    */
    minCharacters?: number;
    /**
    * Additional text for "No Results" message with less emphasis.
    */
    noResultsDescription?: string;
    /**
    * Message to display when there are no results.
    */
    noResultsMessage?: string;
    /**
    * Called with the React Synthetic Event on Search blur.
    */
    onBlur?: Function;
    /**
    * Called with the React Synthetic Event, the selected result.
    */
    onChange?: Function;
    /**
    * Called with the React Synthetic Event on Search focus.
    */
    onFocus?: Function;
    /**
    * Called with the React Synthetic Event on Dropdown mouse down.
    */
    onMouseDown?: Function;
    /**
    * Called with the React Synthetic Event and current value on search input change.
    */
    onSearchChange?: Function;
    /**
    * Controls whether or not the results menu is displayed.
    */
    open?: boolean;
    /**
    * Placeholder of the search input.
    */
    placeholder?: string;
    /**
    * A function that returns the result contents. Receives all SearchResult props.
    */
    resultRenderer?: Function;
    /**
    * One of (i) array of Search.Result props e.g. `? : title: '', description: '' ;` or (ii) object of categories e.g. `? : name: '', results: [? : title: '', description: '' ;]`
    */
    results?: any | Object;
    /**
    * Whether the search should automatically select the first result after searching
    */
    selectFirstResult?: boolean;
    /**
    * Whether a "no results" message should be shown if no results are found.
    */
    showNoResults?: boolean;
    /**
    * 
    */
    size?: Sizes;
    /**
    * Current value of the search input. Creates a controlled component.
    */
    value?: string;

  }

  interface ISearchResult extends SuiBlockElement {
    /**
* The item currently selected by keyboard shortcut.
*/
    active?: boolean;
    /**
    * Additional text with less emphasis.
    */
    description?: string;
    /**
    * A unique identifier.
    */
    id?: number;
    /**
    * Add an image to the item.
    */
    image?: string;
    /**
    * Called on click with (event, value, text).
    */
    onClick?: Function;
    /**
    * Customized text for price.
    */
    price?: string;
    /**
    * A function that returns the result contents. Receives all SearchResult props.
    */
    renderer?: Function;
    /**
    * Display title.
    */
    title?: string;

  }

  interface ISearchCategory extends SuiBlockElement {
    /**
* The item currently selected by keyboard shortcut.
*/
    active?: boolean;
    /**
    * Additional classes.
    */
    className?: string;
    /**
    * Display name.
    */
    name?: string;
    /**
    * A function that returns the category contents. Receives all SearchCategory props.
    */
    renderer?: Function;
    /**
    * Array of Search.Result props
    */
    results?: any[];
  }

  interface ISearchStatic {
    Result: (props: ISearchResult) => JSX.Element;
    Results: (props: SuiBlockElement) => JSX.Element;
    Category: (props: ISearchCategory) => JSX.Element;
    (props: ISearchProps): JSX.Element;
  }
  export const Search: ISearchStatic;

  // Confirm

  interface IConfirmProps extends SuiBlockElement {
    /**
* The cancel button text
*/
    cancelButton?: string;
    /**
    * The OK button text
    */
    confirmButton?: string;
    /**
    * The ModalContent text.
    */
    content?: string;
    /**
    * The ModalHeader text
    */
    header?: string;
    /**
    * Called when the Cancel button is clicked
    */
    onCancel?: Function;
    /**
    * Called when the OK button is clicked
    */
    onConfirm?: Function;
    /**
    * Whether or not the modal is visible
    */
    open?: boolean;

  }

  export const Confirm: (props: IConfirmProps) => JSX.Element;
}