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

type SemanticDIRECTIONALTRANSITIONS = 'scale' | 'fade' | 'fade up' | 'fade down' | 'fade left' | 'fade right' |
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

// ======================================================
// Icon Names
// ======================================================

export type SemanticICONS = 'search' | 'mail outline' | 'signal' | 'setting' | 'home' | 'inbox' | 'browser' |
  'tag' | 'tags' | 'image' | 'calendar' | 'comment' | 'shop' | 'comments' | 'external' | 'privacy' | 'settings' |
  'trophy' | 'payment' | 'feed' | 'alarm outline' | 'tasks' | 'cloud' | 'lab' | 'mail' | 'dashboard' | 'comment outline' |
  'comments outline' | 'sitemap' | 'idea' | 'alarm' | 'terminal' | 'code' | 'protect' | 'calendar outline' | 'ticket' |
  'external square' | 'bug' | 'mail square' | 'history' | 'options' | 'text telephone' | 'find' | 'wifi' | 'alarm mute' |
  'alarm mute outline' | 'copyright' | 'at' | 'eyedropper' | 'paint brush' | 'heartbeat' | 'mouse pointer' |
  'hourglass empty' | 'hourglass start' | 'hourglass half' | 'hourglass end' | 'hourglass full' | 'hand pointer' |
  'trademark' | 'registered' | 'creative commons' | 'add to calendar' | 'remove from calendar' | 'delete calendar' |
  'checked calendar' | 'industry' | 'shopping bag' | 'shopping basket' | 'hashtag' | 'percent' | 'address book' |
  'address book outline' | 'address card' | 'address card outline' | 'id badge' | 'id card' | 'id card outline' |
  'podcast' | 'window close' | 'window close outline' | 'window maximize' | 'window minimize' | 'window restore' |
  'wait' | 'download' | 'repeat' | 'refresh' | 'lock' | 'bookmark' | 'print' | 'write' | 'adjust' | 'theme' | 'edit' |
  'external share' | 'ban' | 'mail forward' | 'share' | 'expand' | 'compress' | 'unhide' | 'hide' | 'random' | 'retweet' |
  'sign out' | 'pin' | 'sign in' | 'upload' | 'call' | 'remove bookmark' | 'call square' | 'unlock' | 'configure' |
  'filter' | 'wizard' | 'undo' | 'exchange' | 'cloud download' | 'cloud upload' | 'reply' | 'reply all' |
  'erase' | 'unlock alternate' | 'write square' | 'share square' | 'archive' | 'translate' | 'recycle' | 'send' |
  'send outline' | 'share alternate' | 'share alternate square' | 'add to cart' | 'in cart' | 'add user' | 'remove user' |
  'object group' | 'object ungroup' | 'clone' | 'talk' | 'talk outline' | 'help circle' | 'info circle' |
  'warning circle' | 'warning sign' | 'announcement' | 'help' | 'info' | 'warning' | 'birthday' | 'help circle outline' |
  'user' | 'users' | 'doctor' | 'handicap' | 'student' | 'child' | 'spy' | 'user circle' | 'user circle outline' |
  'user outline' | 'female' | 'male' | 'woman' | 'man' | 'non binary transgender' | 'intergender' | 'transgender' |
  'lesbian' | 'gay' | 'heterosexual' | 'other gender' | 'other gender vertical' | 'other gender horizontal' |
  'neuter' | 'genderless' | 'universal access' | 'wheelchair' | 'blind' | 'audio description' | 'volume control phone' |
  'braille' | 'asl' | 'assistive listening systems' | 'deafness' | 'sign language' | 'low vision' |
  'block layout' | 'grid layout' | 'list layout' | 'zoom' | 'zoom out' | 'resize vertical' | 'resize horizontal' |
  'maximize' | 'crop' | 'cocktail' | 'road' | 'flag' | 'book' | 'gift' | 'leaf' | 'fire' | 'plane' | 'magnet' | 'lemon' |
  'world' | 'travel' | 'shipping' | 'money' | 'legal' | 'lightning' | 'umbrella' | 'treatment' | 'suitcase' | 'bar' |
  'flag outline' | 'flag checkered' | 'puzzle' | 'fire extinguisher' | 'rocket' | 'anchor' | 'bullseye' | 'sun' | 'moon' |
  'fax' | 'life ring' | 'bomb' | 'soccer' | 'calculator' | 'diamond' | 'sticky note' | 'sticky note outline' | 'law' |
  'hand peace' | 'hand rock' | 'hand paper' | 'hand scissors' | 'hand lizard' | 'hand spock' |
  'tv' | 'thermometer empty' | 'thermometer full' | 'thermometer half' | 'thermometer quarter' |
  'thermometer three quarters' | 'bath' | 'snowflake outline' | 'crosshairs' | 'asterisk' | 'square outline' |
  'certificate' | 'square' | 'quote left' | 'quote right' | 'spinner' | 'circle' | 'ellipsis horizontal' |
  'ellipsis vertical' | 'cube' | 'cubes' | 'circle notched' | 'circle thin' | 'checkmark' | 'remove' | 'checkmark box' |
  'move' | 'add circle' | 'minus circle' | 'remove circle' | 'check circle' | 'remove circle outline' |
  'check circle outline' | 'plus' | 'minus' | 'add square' | 'radio' | 'minus square' | 'minus square outline' |
  'check square' | 'selected radio' | 'plus square outline' | 'toggle off' | 'toggle on' | 'film' |
  'sound' | 'photo' | 'bar chart' | 'camera retro' | 'newspaper' | 'area chart' | 'pie chart' | 'line chart' |
  'arrow circle outline down' | 'arrow circle outline up' | 'chevron left' | 'chevron right' | 'arrow left' |
  'arrow right' | 'arrow up' | 'arrow down' | 'chevron up' | 'chevron down' | 'pointing right' | 'pointing left' |
  'pointing up' | 'pointing down' | 'arrow circle left' | 'arrow circle right' | 'arrow circle up' | 'arrow circle down' |
  'caret down' | 'caret up' | 'caret left' | 'caret right' | 'angle double left' | 'angle double right' | 'angle double up' |
  'angle double down' | 'angle left' | 'angle right' | 'angle up' | 'angle down' | 'chevron circle left' |
  'chevron circle right' | 'chevron circle up' | 'chevron circle down' | 'toggle down' | 'toggle up' |
  'toggle right' | 'long arrow down' | 'long arrow up' | 'long arrow left' | 'long arrow right' |
  'arrow circle outline right' | 'arrow circle outline left' | 'toggle left' | 'tablet' | 'mobile' | 'battery full' |
  'battery high' | 'battery medium' | 'battery low' | 'battery empty' | 'power' | 'trash outline' | 'disk outline' |
  'desktop' | 'laptop' | 'game' | 'keyboard' | 'plug' | 'trash' | 'file outline' | 'folder' | 'folder open' |
  'file text outline' | 'folder outline' | 'folder open outline' | 'level up' | 'level down' | 'file' |
  'file text' | 'file pdf outline' | 'file word outline' | 'file excel outline' | 'file powerpoint outline' |
  'file image outline' | 'file archive outline' | 'file audio outline' | 'file video outline' | 'file code outline' |
  'qrcode' | 'barcode' | 'rss' | 'fork' | 'html5' | 'css3' | 'rss square' | 'openid' | 'database' |
  'server' | 'usb' | 'bluetooth' | 'bluetooth alternative' | 'microchip' | 'heart' | 'star' | 'empty star' |
  'thumbs outline up' | 'thumbs outline down' | 'star half' | 'empty heart' | 'smile' | 'frown' | 'meh' |
  'star half empty' | 'thumbs up' | 'thumbs down' | 'music' | 'video play outline' | 'volume off' | 'volume down' |
  'volume up' | 'record' | 'step backward' | 'fast backward' | 'backward' | 'play' | 'pause' | 'stop' | 'forward' |
  'fast forward' | 'step forward' | 'eject' | 'unmute' | 'mute' | 'video play' | 'closed captioning' | 'pause circle' |
  'pause circle outline' | 'stop circle' | 'stop circle outline' | 'marker' | 'coffee' | 'food' | 'building outline' |
  'hospital' | 'emergency' | 'first aid' | 'military' | 'h' | 'location arrow' | 'compass' | 'space shuttle' |
  'university' | 'building' | 'paw' | 'spoon' | 'car' | 'taxi' | 'tree' | 'bicycle' | 'bus' | 'ship' | 'motorcycle' |
  'street view' | 'hotel' | 'train' | 'subway' | 'map pin' | 'map signs' | 'map outline' | 'map' | 'table' | 'columns' |
  'sort' | 'sort descending' | 'sort ascending' | 'sort alphabet ascending' | 'sort alphabet descending' |
  'sort content ascending' | 'sort content descending' | 'sort numeric ascending' | 'sort numeric descending' |
  'font' | 'bold' | 'italic' | 'text height' | 'text width' | 'align left' | 'align center' | 'align right' |
  'align justify' | 'list' | 'outdent' | 'indent' | 'linkify' | 'cut' | 'copy' | 'attach' | 'save' | 'content' |
  'unordered list' | 'ordered list' | 'strikethrough' | 'underline' | 'paste' | 'unlinkify' | 'superscript' |
  'subscript' | 'header' | 'paragraph' | 'text cursor' | 'euro' | 'pound' | 'dollar' | 'rupee' | 'yen' | 'ruble' |
  'won' | 'bitcoin' | 'lira' | 'shekel' | 'paypal' | 'google wallet' | 'visa' | 'mastercard' | 'discover' |
  'american express' | 'paypal card' | 'stripe' | 'japan credit bureau' | 'diners club' |
  'credit card alternative' | 'twitter square' | 'facebook square' | 'linkedin square' | 'github square' |
  'twitter' | 'facebook f' | 'github' | 'pinterest' | 'pinterest square' | 'google plus square' | 'google plus' |
  'linkedin' | 'github alternate' | 'maxcdn' | 'youtube square' | 'youtube' | 'xing' | 'xing square' | 'youtube play' |
  'dropbox' | 'stack overflow' | 'instagram' | 'flickr' | 'adn' | 'bitbucket' | 'bitbucket square' | 'tumblr' |
  'tumblr square' | 'apple' | 'windows' | 'android' | 'linux' | 'dribble' | 'skype' | 'foursquare' | 'trello' |
  'gittip' | 'vk' | 'weibo' | 'renren' | 'pagelines' | 'stack exchange' | 'vimeo square' | 'slack' | 'wordpress' |
  'yahoo' | 'google' | 'reddit' | 'reddit square' | 'stumbleupon circle' | 'stumbleupon' | 'delicious' |
  'digg' | 'pied piper' | 'pied piper alternate' | 'drupal' | 'joomla' | 'behance' | 'behance square' | 'steam' |
  'steam square' | 'spotify' | 'deviantart' | 'soundcloud' | 'vine' | 'codepen' | 'jsfiddle' | 'rebel' | 'empire' |
  'git square' | 'git' | 'hacker news' | 'tencent weibo' | 'qq' | 'wechat' | 'slideshare' | 'twitch' | 'yelp' |
  'lastfm' | 'lastfm square' | 'ioxhost' | 'angellist' | 'meanpath' | 'buysellads' | 'connectdevelop' | 'dashcube' |
  'forumbee' | 'leanpub' | 'sellsy' | 'shirtsinbulk' | 'simplybuilt' | 'skyatlas' | 'facebook' | 'whatsapp' | 'viacoin' |
  'medium' | 'y combinator' | 'optinmonster' | 'opencart' | 'expeditedssl' | 'gg' | 'gg circle' | 'tripadvisor' |
  'odnoklassniki' | 'odnoklassniki square' | 'pocket' | 'wikipedia' | 'safari' | 'chrome' | 'firefox' |
  'opera' | 'internet explorer' | 'contao' | '500px' | 'amazon' | 'houzz' | 'vimeo' | 'black tie' | 'fonticons' |
  'reddit alien' | 'microsoft edge' | 'codiepie' | 'modx' | 'fort awesome' | 'product hunt' | 'mixcloud' | 'scribd' |
  'gitlab' | 'wpbeginner' | 'wpforms' | 'envira gallery' | 'glide' | 'glide g' | 'viadeo' | 'viadeo square' |
  'snapchat' | 'snapchat ghost' | 'snapchat square' | 'pied piper hat' | 'first order' | 'yoast' | 'themeisle' |
  'google plus circle' | 'font awesome' | 'bandcamp' | 'eercast' | 'etsy' | 'free code camp' | 'grav' | 'imdb' |
  'linode' | 'meetup' | 'quora' | 'ravelry' | 'superpowers' | 'telegram' | 'wpexplorer' | 'like' | 'favorite' |
  'video' | 'check' | 'close' | 'cancel' | 'delete' | 'x' | 'zoom in' | 'magnify' | 'shutdown' | 'clock' | 'time' |
  'play circle outline' | 'headphone' | 'camera' | 'video camera' | 'picture' | 'pencil' | 'compose' | 'point' |
  'tint' | 'signup' | 'plus circle' | 'question circle' | 'dont' | 'minimize' | 'add' | 'exclamation circle' |
  'attention' | 'eye' | 'exclamation triangle' | 'shuffle' | 'chat' | 'cart' | 'shopping cart' | 'bar graph' |
  'key' | 'cogs' | 'discussions' | 'like outline' | 'dislike outline' | 'heart outline' | 'log out' | 'thumb tack' |
  'winner' | 'phone' | 'bookmark outline' | 'phone square' | 'credit card' | 'hdd outline' | 'bullhorn' |
  'bell outline' | 'hand outline right' | 'hand outline left' | 'hand outline up' | 'hand outline down' |
  'globe' | 'wrench' | 'briefcase' | 'group' | 'chain' | 'flask' | 'sidebar' | 'bars' | 'list ul' | 'list ol' |
  'numbered list' | 'magic' | 'truck' | 'currency' | 'triangle down' | 'dropdown' | 'triangle up' | 'triangle left' |
  'triangle right' | 'envelope' | 'conversation' | 'rain' | 'clipboard' | 'lightbulb' | 'bell' | 'ambulance' |
  'medkit' | 'fighter jet' | 'beer' | 'plus square' | 'computer' | 'circle outline' | 'gamepad' | 'star half full' |
  'broken chain' | 'question' | 'exclamation' | 'eraser' | 'microphone' | 'microphone slash' | 'shield' | 'target' |
  'play circle' | 'pencil square' | 'eur' | 'gbp' | 'usd' | 'inr' | 'cny' | 'rmb' | 'jpy' | 'rouble' | 'rub' |
  'krw' | 'btc' | 'gratipay' | 'zip' | 'dot circle outline' | 'try' | 'graduation' | 'sliders' | 'weixin' | 'tty' |
  'teletype' | 'binoculars' | 'power cord' | 'visa card' | 'mastercard card' | 'discover card' | 'amex' |
  'american express card' | 'stripe card' | 'bell slash' | 'bell slash outline' | 'area graph' | 'pie graph' |
  'line graph' | 'cc' | 'sheqel' | 'ils' | 'plus cart' | 'arrow down cart' | 'detective' | 'venus' | 'mars' |
  'mercury' | 'intersex' | 'venus double' | 'female homosexual' | 'mars double' | 'male homosexual' | 'venus mars' |
  'mars stroke' | 'mars alternate' | 'mars vertical' | 'mars stroke vertical' | 'mars horizontal' |
  'mars stroke horizontal' | 'asexual' | 'facebook official' | 'user plus' | 'user times' | 'user close' |
  'user cancel' | 'user delete' | 'user x' | 'bed' | 'yc' | 'ycombinator' | 'battery four' | 'battery three' |
  'battery three quarters' | 'battery two' | 'battery half' | 'battery one' | 'battery quarter' | 'battery zero' |
  'i cursor' | 'jcb' | 'japan credit bureau card' | 'diners club card' | 'balance' | 'hourglass outline' |
  'hourglass zero' | 'hourglass one' | 'hourglass two' | 'hourglass three' | 'hourglass four' | 'grab' |
  'hand victory' | 'tm' | 'r circle' | 'television' | 'five hundred pixels' | 'calendar plus' | 'calendar minus' |
  'calendar times' | 'calendar check' | 'factory' | 'commenting' | 'commenting outline' | 'edge' | 'ms edge' |
  'wordpress beginner' | 'wordpress forms' | 'envira' | 'question circle outline' | 'assistive listening devices' |
  'als' | 'ald' | 'asl interpreting' | 'deaf' | 'american sign language interpreting' | 'hard of hearing' |
  'signing' | 'new pied piper' | 'theme isle' | 'google plus official' | 'fa' | 'bathtub' | 'drivers license' |
  'drivers license outline' | 's15' | 'thermometer' | 'times rectangle' | 'times rectangle outline' | 'vcard' |
  'vcard outline' | 'left dropdown';
