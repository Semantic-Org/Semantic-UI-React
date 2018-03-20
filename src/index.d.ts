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

export type SemanticCOLORS = 'red' | 'orange' | 'yellow' | 'olive' | 'green' | 'teal' | 'blue' | 'violet' | 'purple' |
  'pink' | 'brown' | 'grey' | 'black';
export type SemanticSIZES = 'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive';

// ======================================================
// Transitions
// ======================================================

type SemanticDIRECTIONALTRANSITIONS = 'browse' | 'browse right' |
  'drop' |
  'fade' | 'fade up' | 'fade down' | 'fade left' | 'fade right' |
  'fly up' | 'fly down' | 'fly left' | 'fly right' |
  'horizontal flip' | 'vertical flip' |
  'scale' |
  'slide up' | 'slide down' | 'slide left' | 'slide right' |
  'swing up' | 'swing down' | 'swing left' | 'swing right' |
  'zoom';
type SemanticSTATICTRANSITIONS = 'jiggle' | 'flash' | 'shake' | 'pulse' | 'tada' | 'bounce' | 'glow';

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

// ======================================================
// Icon Names
// ======================================================

export type SemanticICONS = 'american sign language interpreting' | 'assistive listening systems' | 'audio description'
  | 'blind' | 'braille' | 'closed captioning outline' | 'closed captioning' | 'deaf' | 'low vision' | 'phone volume'
  | 'question circle outline' | 'question circle' | 'sign language' | 'tty' | 'universal access' | 'wheelchair'
  | 'angle double down' | 'angle double left' | 'angle double right' | 'angle double up' | 'angle down' | 'angle left'
  | 'angle right' | 'angle up' | 'arrow alternate circle down outline' | 'arrow alternate circle down'
  | 'arrow alternate circle left outline' | 'arrow alternate circle left' | 'arrow alternate circle right outline'
  | 'arrow alternate circle right' | 'arrow alternate circle up outline' | 'arrow alternate circle up'
  | 'arrow circle down' | 'arrow circle left' | 'arrow circle right' | 'arrow circle up' | 'arrow down' | 'arrow left'
  | 'arrow right' | 'arrow up' | 'arrows alternate horizontal' | 'arrows alternate vertical' | 'arrows alternate'
  | 'caret down' | 'caret left' | 'caret right' | 'caret square down outline' | 'caret square down'
  | 'caret square left outline' | 'caret square left' | 'caret square right outline' | 'caret square right'
  | 'caret square up outline' | 'caret square up' | 'caret up' | 'cart arrow down' | 'chart line'
  | 'chevron circle down' | 'chevron circle left' | 'chevron circle right' | 'chevron circle up' | 'chevron down'
  | 'chevron left' | 'chevron right' | 'chevron up' | 'cloud download alternate' | 'cloud upload alternate'
  | 'download' | 'exchange alternate' | 'expand arrows alternate' | 'external link alternate'
  | 'external link square alternate' | 'hand point down outline' | 'hand point down' | 'hand point left outline'
  | 'hand point left' | 'hand point right outline' | 'hand point right' | 'hand point up outline' | 'hand point up'
  | 'hand pointer outline' | 'hand pointer' | 'history' | 'level down alternate' | 'level up alternate'
  | 'location arrow' | 'long arrow alternate down' | 'long arrow alternate left' | 'long arrow alternate right'
  | 'long arrow alternate up' | 'mouse pointer' | 'play' | 'random' | 'recycle' | 'redo alternate' | 'redo'
  | 'reply all' | 'reply' | 'retweet' | 'share square outline' | 'share square' | 'share' | 'sign in alternate'
  | 'sign out alternate' | 'sort alphabet down' | 'sort alphabet up' | 'sort amount down' | 'sort amount up'
  | 'sort down' | 'sort numeric down' | 'sort numeric up' | 'sort up' | 'sort' | 'sync alternate' | 'sync'
  | 'text height' | 'text width' | 'undo alternate' | 'undo' | 'upload' | 'backward' | 'circle outline' | 'circle'
  | 'compress' | 'eject' | 'expand' | 'fast backward' | 'fast forward' | 'file audio outline' | 'file audio'
  | 'file video outline' | 'file video' | 'film' | 'forward' | 'headphones' | 'microphone slash' | 'microphone'
  | 'music' | 'pause circle outline' | 'pause circle' | 'pause' | 'play circle outline' | 'play circle' | 'podcast'
  | 'rss square' | 'rss' | 'step backward' | 'step forward' | 'stop circle outline' | 'stop circle' | 'stop' | 'video'
  | 'volume down' | 'volume off' | 'volume up' | 'address book outline' | 'address book' | 'address card outline'
  | 'address card' | 'archive' | 'balance scale' | 'birthday cake' | 'book' | 'briefcase' | 'building outline'
  | 'building' | 'bullhorn' | 'calculator' | 'calendar alternate outline' | 'calendar alternate' | 'calendar outline'
  | 'calendar' | 'certificate' | 'chart area' | 'chart bar outline' | 'chart bar' | 'chart pie' | 'clipboard outline'
  | 'clipboard' | 'coffee' | 'columns' | 'compass outline' | 'compass' | 'copy outline' | 'copy' | 'copyright outline'
  | 'copyright' | 'cut' | 'edit outline' | 'edit' | 'envelope open outline' | 'envelope open' | 'envelope outline'
  | 'envelope square' | 'envelope' | 'eraser' | 'fax' | 'file alternate outline' | 'file alternate' | 'file outline'
  | 'file' | 'folder open outline' | 'folder open' | 'folder outline' | 'folder' | 'globe' | 'industry' | 'paperclip'
  | 'paste' | 'pen square' | 'pencil alternate' | 'percent' | 'phone square' | 'phone' | 'registered outline'
  | 'registered' | 'save outline' | 'save' | 'sitemap' | 'sticky note outline' | 'sticky note' | 'suitcase' | 'table'
  | 'tag' | 'tags' | 'tasks' | 'thumbtack' | 'trademark' | 'chess' | 'chess bishop' | 'chess board' | 'chess king'
  | 'chess knight' | 'chess pawn' | 'chess queen' | 'chess rock' | 'square full' | 'barcode' | 'bath' | 'bug' | 'code'
  | 'code branch' | 'file code outline' | 'file code' | 'filter' | 'fire extinguisher' | 'keyboard outline'
  | 'keyboard' | 'microchip' | 'qrcode' | 'shield alternate' | 'terminal' | 'user secret' | 'window close outline'
  | 'window close' | 'window maximize outline' | 'window maximize' | 'window minimize outline' | 'window minimize'
  | 'window restore outline' | 'window restore' | 'at' | 'bell outline' | 'bell slash outline' | 'bell slash' | 'bell'
  | 'comment alternate outline' | 'comment alternate' | 'comment outline' | 'comment' | 'comments outline' | 'comments'
  | 'inbox' | 'language' | 'mobile alternate' | 'mobile' | 'paper plane outline' | 'paper plane' | 'wifi' | 'desktop'
  | 'hdd outline' | 'hdd' | 'laptop' | 'plug' | 'power off' | 'print' | 'server' | 'tablet alternate' | 'tablet'
  | 'tv' | 'dollar sign' | 'euro sign' | 'lira sign' | 'money bill alternate outline' | 'money bill alternate'
  | 'pound sign' | 'ruble sign' | 'rupee sign' | 'shekel sign' | 'won sign' | 'yen sign' | 'calendar check outline'
  | 'calendar check' | 'calendar minus outline' | 'calendar minus' | 'calendar plus outline' | 'calendar plus'
  | 'calendar times outline' | 'calendar times' | 'clock outline' | 'clock' | 'hourglass end' | 'hourglass half'
  | 'hourglass outline' | 'hourglass start' | 'hourglass' | 'stopwatch' | 'adjust' | 'clone outline' | 'clone'
  | 'crop' | 'crosshairs' | 'eye dropper' | 'eye slash outline' | 'eye slash' | 'eye' | 'object group outline'
  | 'object group' | 'object ungroup outline' | 'object ungroup' | 'paint brush' | 'tint' | 'align center'
  | 'align justify' | 'align left' | 'align right' | 'bold' | 'font' | 'heading' | 'cursor' | 'indent' | 'italic'
  | 'link' | 'list alternate outline' | 'list alternate' | 'ordered list' | 'unordered list' | 'list' | 'outdent'
  | 'paragraph' | 'quote left' | 'quote right' | 'strikethrough' | 'subscript' | 'superscript' | 'th large' | 'th list'
  | 'th' | 'trash alternate outline' | 'trash alternate' | 'trash' | 'underline' | 'unlink' | 'file archive outline'
  | 'file archive' | 'file excel outline' | 'file excel' | 'file image outline' | 'file image' | 'file pdf outline'
  | 'file pdf' | 'file powerpoint outline' | 'file powerpoint' | 'file word outline' | 'file word' | 'genderless'
  | 'mars double' | 'mars stroke horizontal' | 'mars stroke vertical' | 'mars stroke' | 'mars' | 'mercury' | 'neuter'
  | 'transgender alternate' | 'transgender' | 'venus double' | 'venus mars' | 'venus' | 'hand lizard outline'
  | 'hand lizard' | 'hand paper outline' | 'hand paper' | 'hand peace outline' | 'hand peace' | 'hand rock outline'
  | 'hand rock' | 'hand scissors outline' | 'hand scissors' | 'hand spock outline' | 'hand spock' | 'handshake outline'
  | 'handshake' | 'thumbs down outline' | 'thumbs down' | 'thumbs up outline' | 'thumbs up' | 'ambulance' | 'h square'
  | 'heart outline' | 'heart' | 'heartbeat' | 'hospital outline' | 'hospital' | 'medkit' | 'plus square outline'
  | 'plus square' | 'stethoscope' | 'user doctor' | 'bolt' | 'camera retro' | 'camera' | 'id badge outline' | 'id badge'
  | 'id card outline' | 'id card' | 'image outline' | 'image' | 'images outline' | 'images' | 'sliders horizontal'
  | 'ban' | 'bars' | 'beer' | 'bullseye' | 'check circle outline' | 'check circle' | 'check square outline'
  | 'check square' | 'check' | 'cloud' | 'cog' | 'cogs' | 'database' | 'dot circle outline' | 'dot circle'
  | 'ellipsis horizontal' | 'ellipsis vertical' | 'exclamation circle' | 'exclamation triangle' | 'exclamation'
  | 'flag checkered' | 'flag outline' | 'flag' | 'frown outline' | 'frown' | 'hashtag' | 'home' | 'info circle'
  | 'info' | 'magic' | 'meh outline' | 'meh' | 'minus circle' | 'minus square outline' | 'minus square' | 'minus'
  | 'plus circle' | 'plus' | 'question' | 'search minus' | 'search plus' | 'search' | 'share alternate square'
  | 'share alternate' | 'shield' | 'signal' | 'smile outline' | 'smile' | 'star half outline' | 'star half'
  | 'star outline' | 'star' | 'times circle outline' | 'times circle' | 'times' | 'toggle off' | 'toggle on' | 'trophy'
  | 'user circle outline' | 'user circle' | 'user outline' | 'user' | 'anchor' | 'bed' | 'bicycle' | 'binoculars'
  | 'bomb' | 'bookmark outline' | 'bookmark' | 'car' | 'fighter jet' | 'fire' | 'flask' | 'gamepad' | 'gavel' | 'gift'
  | 'glass martini' | 'graduation cap' | 'key' | 'leaf' | 'lemon outline' | 'lemon' | 'life ring outline' | 'life ring'
  | 'lightbulb outline' | 'lightbulb' | 'magnet' | 'male' | 'map marker alternate' | 'map marker' | 'map outline'
  | 'map pin' | 'map signs' | 'map' | 'motorcycle' | 'newspaper outline' | 'newspaper' | 'paw' | 'plane' | 'road'
  | 'rocket' | 'ship' | 'shopping bag' | 'shopping basket' | 'shopping cart' | 'shower' | 'street view' | 'subway'
  | 'taxi' | 'ticket alternate' | 'train' | 'tree' | 'truck' | 'umbrella' | 'university' | 'utensil spoon' | 'utensils'
  | 'wrench' | 'bus' | 'cube' | 'cubes' | 'futbol outline' | 'futbol' | 'gem outline' | 'gem' | 'lock open' | 'lock'
  | 'moon outline' | 'moon' | 'puzzle' | 'snowflake outline' | 'snowflake' | 'space shuttle' | 'sun outline' | 'sun'
  | 'tachometer alternate' | 'unlock alternate' | 'unlock' | 'cart plus' | 'credit card outline' | 'credit card'
  | 'square outline' | 'square' | 'asterisk' | 'circle notch' | 'spinner' | 'baseball ball' | 'basketball ball'
  | 'bowling ball' | 'football ball' | 'golf ball' | 'hockey puck' | 'quidditch' | 'table tennis' | 'volleyball ball'
  | 'battery empty' | 'battery full' | 'battery half' | 'battery quarter' | 'battery three quarters'
  | 'thermometer empty' | 'thermometer full' | 'thermometer half' | 'thermometer quarter' | 'thermometer three quarters'
  | 'child' | 'female' | 'user circle outline' | 'user plus' | 'user times' | 'users' | '500px' | 'accessible icon'
  | 'accusoft' | 'adn' | 'adversal' | 'affiliatetheme' | 'algolia' | 'amazon pay' | 'amazon' | 'amilia' | 'android'
  | 'angellist' | 'angrycreative' | 'angular' | 'app store ios' | 'app store' | 'apper' | 'apple pay' | 'apple'
  | 'asymmetrik' | 'audible' | 'autoprefixer' | 'avianex' | 'aviato' | 'aws' | 'bandcamp' | 'behance square'
  | 'behance' | 'bimobject' | 'bitbucket' | 'bitcoin' | 'bity' | 'black tie' | 'blackberry' | 'blogger b' | 'blogger'
  | 'bluetooth b' | 'bluetooth' | 'btc' | 'buromobelexperte' | 'buysellads' | 'credit card amazon pay'
  | 'credit card american express' | 'credit card apple pay' | 'credit card diners club' | 'credit card discover'
  | 'credit card jcb' | 'credit card mastercard' | 'credit card paypal' | 'credit card stripe' | 'credit card visa'
  | 'centercode' | 'chrome' | 'cloudscale' | 'cloudsmith' | 'cloudversify' | 'codepen'  | 'codiepie' | 'connectdevelop'
  | 'contao' | 'cpanel' | 'creative commons' | 'css3 alternate' | 'css3' | 'cuttlefish' | 'd and d' | 'dashcube'
  | 'delicious' | 'deploydog' | 'deskpro' | 'deviantart' | 'digg' | 'digital ocean' | 'discord' | 'discourse' | 'dochub'
  | 'docker' | 'draft2digital' | 'dribbble square' | 'dribbble' | 'dropbox' | 'drupal' | 'dyalog' | 'earlybirds'
  | 'edge' | 'elementor' | 'ember' | 'empire' | 'envira' | 'erlang' | 'ethereum' | 'etsy' | 'expeditedssl'
  | 'facebook f' | 'facebook messenger' | 'facebook square' | 'facebook' | 'firefox' | 'first order' | 'firstdraft'
  | 'flickr' | 'flipboard' | 'fly' | 'font awesome alternate' | 'font awesome flag' | 'font awesome' | 'fonticons fi'
  | 'fonticons' | 'fort awesome alternate' | 'fort awesome' | 'forumbee' | 'foursquare' | 'free code camp' | 'freebsd'
  | 'get pocket' | 'gg circle' | 'gg' | 'git square' | 'git' | 'github alternate' | 'github square' | 'github'
  | 'gitkraken' | 'gitlab' | 'gitter' | 'glide g' | 'glide' | 'gofore' | 'goodreads g' | 'goodreads' | 'google drive'
  | 'google play' | 'google plus g' | 'google plus square' | 'google plus' | 'google wallet' | 'google' | 'gratipay'
  | 'grav' | 'gripfire' | 'grunt' | 'gulp' | 'hacker news square' | 'hacker news' | 'hips' | 'hire a helper' | 'hooli'
  | 'hotjar' | 'houzz' | 'html5' | 'hubspot' | 'imdb' | 'instagram' | 'internet explorer' | 'ioxhost' | 'itunes note'
  | 'itunes' | 'jenkins' | 'joget' | 'joomla' | 'js square' | 'js' | 'jsfiddle' | 'keycdn' | 'kickstarter k'
  | 'kickstarter' | 'korvue' | 'laravel' | 'lastfm square' | 'lastfm' | 'leanpub' | 'less' | 'line' | 'linkedin in'
  | 'linkedin' | 'linode' | 'linux' | 'lyft' | 'magento' | 'maxcdn' | 'medapps' | 'medium m' | 'medium' | 'medrt'
  | 'meetup' | 'microsoft' | 'mix' | 'mixcloud' | 'mizuni' | 'modx' | 'monero' | 'napster' | 'nintendo switch'
  | 'node js' | 'node' | 'npm' | 'ns8' | 'nutritionix' | 'odnoklassniksquare' | 'odnoklassniki' | 'opencart' | 'openid'
  | 'opera' | 'optin monster' | 'osi' | 'page4' | 'pagelines' | 'palfed' | 'patreon' | 'paypal' | 'periscope'
  | 'phabricator' | 'phoenix framework' | 'php' | 'pied piper alternate' | 'pied piper pp' | 'pied piper'
  | 'pinterest p' | 'pinterest square' | 'pinterest' | 'playstation' | 'product hunt' | 'pushed' | 'python' | 'qq'
  | 'quinscape' | 'quora' | 'ravelry' | 'react' | 'rebel' | 'redriver' | 'reddit alien' | 'reddit square' | 'reddit'
  | 'rendact' | 'renren' | 'replyd' | 'resolving' | 'rocketchat' | 'rockrms' | 'safari' | 'sass' | 'schlix' | 'scribd'
  | 'searchengin' | 'sellcast' | 'sellsy' | 'servicestack' | 'shirtsinbulk' | 'simplybuilt' | 'sistrix' | 'skyatlas'
  | 'skype' | 'slack hash' | 'slack' | 'slideshare' | 'snapchat ghost' | 'snapchat square' | 'snapchat' | 'soundcloud'
  | 'speakap' | 'spotify' | 'stack exchange' | 'stack overflow' | 'staylinked' | 'steam square' | 'steam symbol'
  | 'steam' | 'sticker mule' | 'strava' | 'stripe s' | 'stripe' | 'studiovinari' | 'stumbleupon circle' | 'stumbleupon'
  | 'superpowers' | 'supple' | 'telegram plane' | 'telegram' | 'tencent weibo' | 'themeisle' | 'trello' | 'tripadvisor'
  | 'tumblr square' | 'tumblr' | 'twitch' | 'twitter square' | 'twitter' | 'typo3' | 'uber' | 'uikit' | 'uniregistry'
  | 'untappd' | 'usb' | 'ussunnah' | 'vaadin' | 'viacoin' | 'viadeo square' | 'viadeo' | 'viber' | 'vimeo square'
  | 'vimeo v' | 'vimeo' | 'vine' | 'vk' | 'vnv' | 'vuejs' | 'weibo' | 'weixin' | 'whatsapp square' | 'whatsapp'
  | 'whmcs' | 'wikipedia w' | 'windows' | 'wordpress simple' | 'wordpress' | 'wpbeginner' | 'wpexplorer' | 'wpforms'
  | 'xbox' | 'xing square' | 'xing' | 'y combinator' | 'yahoo' | 'yandex international' | 'yandex' | 'yelp' | 'yoast'
  | 'youtube square' | 'youtube' | 'add circle' | 'add square' | 'add to calendar' | 'add to cart' | 'add user' | 'add'
  | 'alarm mute' | 'alarm' | 'ald' | 'als' | 'american express card' | 'american express' | 'amex' | 'announcement'
  | 'area chart' | 'area graph' | 'arrow down cart' | 'asexual' | 'asl interpreting' | 'asl'
  | 'assistive listening devices' | 'attach' | 'attention' | 'balance' | 'bar chart' | 'bar graph' | 'bar' | 'bathtub'
  | 'battery four' | 'battery high' | 'battery low' | 'battery medium' | 'battery one' | 'battery three' | 'battery two'
  | 'battery zero' | 'birthday' | 'block layout' | 'bluetooth alternative' | 'broken chain' | 'browser' | 'call square'
  | 'call' | 'cancel' | 'cart' | 'cc' | 'chain' | 'chat' | 'checked calendar' | 'checkmark' | 'circle notched' | 'close'
  | 'cny' | 'cocktail' | 'commenting' | 'computer' | 'configure' | 'content' | 'deafness' | 'delete calendar' | 'delete'
  | 'detective' | 'diners club card' | 'diners club' | 'discover card' | 'discover' | 'discussions' | 'doctor'
  | 'dollar' | 'dont' | 'dribble' | 'drivers license' | 'dropdown' | 'eercast' | 'emergency' | 'envira gallery'
  | 'erase' | 'eur' | 'euro' | 'eyedropper' | 'fa' | 'factory' | 'favorite' | 'feed' | 'female homosexual'
  | 'file text' | 'find' | 'first aid' | 'five hundred pixels' | 'fork' | 'game' | 'gay' | 'gbp' | 'gittip'
  | 'google plus circle' | 'google plus official' | 'grab' | 'graduation' | 'grid layout' | 'group' | 'h'
  | 'hand victory' | 'handicap' | 'hard of hearing' | 'header' | 'help circle' | 'help' | 'heterosexual' | 'hide'
  | 'hotel' | 'hourglass four' | 'hourglass full' | 'hourglass one' | 'hourglass three' | 'hourglass two' | 'idea'
  | 'ils' | 'in cart' | 'inr' | 'intergender' | 'intersex' | 'japan credit bureau card' | 'japan credit bureau' | 'jcb'
  | 'jpy' | 'krw' | 'lab' | 'law' | 'legal' | 'lesbian' | 'lightning' | 'like' | 'line chart' | 'line graph'
  | 'linkedin square' | 'linkify' | 'lira' | 'list layout' | 'magnify' | 'mail forward' | 'mail square' | 'mail'
  | 'male homosexual' | 'man' | 'marker' | 'mars alternate' | 'mars horizontal' | 'mars vertical' | 'mastercard card'
  | 'mastercard' | 'maximize' | 'microsoft edge' | 'military' | 'minimize' | 'ms edge' | 'mute' | 'new pied piper'
  | 'non binary transgender' | 'numbered list' | 'optinmonster' | 'options' | 'other gender horizontal'
  | 'other gender vertical' | 'other gender' | 'payment' | 'paypal card' | 'pencil square' | 'photo' | 'picture'
  | 'pie chart' | 'pie graph' | 'pied piper hat' | 'pin' | 'plus cart' | 'pocket' | 'point' | 'pointing down'
  | 'pointing left' | 'pointing right' | 'pointing up' | 'pound' | 'power cord' | 'power' | 'privacy' | 'r circle'
  | 'rain' | 'record' | 'refresh' | 'remove circle' | 'remove from calendar' | 'remove user' | 'remove' | 'repeat'
  | 'rmb' | 'rouble' | 'rub' | 'ruble' | 'rupee' | 's15' | 'selected radio' | 'send' | 'setting' | 'settings' | 'shekel'
  | 'sheqel' | 'shipping' | 'shop' | 'shuffle' | 'shutdown' | 'sidebar' | 'signing' | 'signup' | 'sliders' | 'soccer'
  | 'sort alphabet ascending' | 'sort alphabet descending' | 'sort ascending' | 'sort content ascending'
  | 'sort content descending' | 'sort descending' | 'sort numeric ascending' | 'sort numeric descending' | 'sound'
  | 'spy' | 'stripe card' | 'student' | 'talk' | 'target' | 'teletype' | 'television' | 'text cursor' | 'text telephone'
  | 'theme isle' | 'theme' | 'thermometer' | 'thumb tack' | 'time' | 'tm' | 'toggle down' | 'toggle left'
  | 'toggle right' | 'toggle up' | 'translate' | 'travel' | 'treatment' | 'triangle down' | 'triangle left'
  | 'triangle right' | 'triangle up' | 'try' | 'unhide' | 'unlinkify' | 'unmute' | 'usd' | 'user cancel' | 'user close'
  | 'user delete' | 'user x' | 'vcard' | 'video camera' | 'video play' | 'visa card' | 'visa' | 'volume control phone'
  | 'wait' | 'warning circle' | 'warning sign' | 'warning' | 'wechat' | 'wi-fi' | 'wikipedia' | 'winner' | 'wizard'
  | 'woman' | 'won' | 'wordpress beginner' | 'wordpress forms' | 'world' | 'write square' | 'x' | 'yc' | 'ycombinator'
  | 'yen' | 'zip' | 'zoom in' | 'zoom out' | 'zoom' | 'bitbucket square' | 'checkmark box' | 'circle thin'
  | 'cloud download' | 'cloud upload' | 'compose' | 'conversation' | 'credit card alternative' | 'currency'
  | 'dashboard' | 'diamond' | 'disk outline' | 'disk' | 'exchange' | 'external share' | 'external square' | 'external'
  | 'facebook official' | 'food' | 'heart empty' | 'hourglass zero' | 'level down' | 'level up' | 'log out' | 'meanpath'
  | 'money' | 'move' | 'pencil' | 'protect' | 'radio' | 'remove bookmark' | 'resize horizontal' | 'resize vertical'
  | 'sign in' | 'sign out' | 'spoon' | 'star empty' | 'star half empty' | 'star half full' | 'ticket'
  | 'times rectangle' | 'write' | 'youtube play';
