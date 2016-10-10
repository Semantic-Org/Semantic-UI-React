import _ from 'lodash'
import { numberToWordMap } from './numberToWord'

export const COLORS = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
]
export const FLOATS = ['left', 'right']
export const SIZES = ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']
export const TEXT_ALIGNMENTS = ['left', 'center', 'right', 'justified']
export const VERTICAL_ALIGNMENTS = ['bottom', 'middle', 'top']

export const WIDTHS = [
  ..._.keys(numberToWordMap),
  ..._.keys(numberToWordMap).map(Number),
  ..._.values(numberToWordMap),
]

export const ICONS = [
  // Web Content Icons
  'add to calendar', 'alarm outline', 'alarm mute outline', 'alarm mute', 'alarm', 'at', 'browser', 'bug',
  'calendar outline', 'calendar', 'checked calendar', 'cloud', 'code', 'comment outline', 'comment', 'comments outline',
  'comments', 'copyright', 'creative commons', 'dashboard', 'delete calendar', 'external square', 'external',
  'eyedropper', 'feed', 'find', 'hand pointer', 'hashtag', 'heartbeat', 'history', 'home', 'hourglass empty',
  'hourglass end', 'hourglass full', 'hourglass half', 'hourglass start', 'idea', 'image', 'inbox', 'industry', 'lab',
  'mail outline', 'mail square', 'mail', 'mouse pointer', 'options', 'paint brush', 'payment', 'percent', 'privacy',
  'protect', 'registered', 'remove from calendar', 'search', 'setting', 'settings', 'shop', 'shopping bag',
  'shopping basket', 'signal', 'sitemap', 'tag', 'tags', 'tasks', 'terminal', 'text telephone', 'ticket', 'trademark',
  'trophy', 'wifi',

  // User Actions Icons
  'add to cart', 'add user', 'adjust', 'archive', 'ban', 'bookmark', 'call', 'call square', 'clone', 'cloud download',
  'cloud upload', 'talk', 'talk outline', 'compress', 'configure', 'download', 'edit', 'erase', 'exchange', 'expand',
  'external share', 'filter', 'hide', 'in cart', 'lock', 'mail forward', 'object group', 'object ungroup', 'pin',
  'print', 'random', 'recycle', 'refresh', 'remove bookmark', 'remove user', 'repeat', 'reply all', 'reply', 'retweet',
  'send', 'send outline', 'share alternate', 'share alternate square', 'share', 'share square', 'sign in', 'sign out',
  'theme', 'translate', 'undo', 'unhide', 'unlock alternate', 'unlock', 'upload', 'wait', 'wizard', 'write',
  'write square',

  // Message Icons
  'announcement', 'birthday', 'help circle', 'help', 'info circle', 'info', 'warning circle', 'warning', 'warning sign',

  // User Types Icons
  'child', 'doctor', 'handicap', 'spy', 'student', 'user', 'users',

  // Gender And Sexuality Icons
  'female', 'gay', 'genderless', 'heterosexual', 'intergender', 'lesbian', 'male', 'man', 'neuter',
  'non binary transgender', 'other gender horizontal', 'other gender', 'other gender vertical', 'transgender', 'woman',

  // Layout Adjustment Icons
  'block layout', 'crop', 'grid layout', 'list layout', 'maximize', 'resize horizontal', 'resize vertical', 'zoom',
  'zoom out',

  // Objects Icons
  'anchor', 'bar', 'bomb', 'book', 'bullseye', 'calculator', 'cocktail', 'diamond', 'fax', 'fire extinguisher', 'fire',
  'flag checkered', 'flag', 'flag outline', 'gift', 'hand lizard', 'hand peace', 'hand paper', 'hand rock',
  'hand scissors', 'hand spock', 'law', 'leaf', 'legal', 'lemon', 'life ring', 'lightning', 'magnet', 'money', 'moon',
  'plane', 'puzzle', 'road', 'rocket', 'shipping', 'soccer', 'sticky note', 'sticky note outline', 'suitcase', 'sun',
  'travel', 'treatment', 'umbrella', 'world',

  // Shapes Icons
  'asterisk', 'certificate', 'circle', 'circle notched', 'circle thin', 'crosshairs', 'cube', 'cubes',
  'ellipsis horizontal', 'ellipsis vertical', 'quote left', 'quote right', 'spinner', 'square', 'square outline',

  // Item Selection Icons
  'add circle', 'add square', 'check circle', 'check circle outline', 'check square', 'checkmark box', 'checkmark',
  'minus circle', 'minus', 'minus square', 'minus square outline', 'move', 'plus', 'plus square outline', 'radio',
  'remove circle', 'remove circle outline', 'remove', 'selected radio', 'toggle off', 'toggle on',

  // Media Icons
  'area chart', 'bar chart', 'camera retro', 'film', 'line chart', 'newspaper', 'photo', 'pie chart', 'sound',

  // Pointers Icons
  'angle double down', 'angle double left', 'angle double right', 'angle double up', 'angle down', 'angle left',
  'angle right', 'angle up', 'arrow circle down', 'arrow circle left', 'arrow circle outline down',
  'arrow circle outline left', 'arrow circle outline right', 'arrow circle outline up', 'arrow circle right',
  'arrow circle up', 'arrow down', 'arrow left', 'arrow right', 'arrow up', 'caret down', 'caret left', 'caret right',
  'caret up', 'chevron circle down', 'chevron circle left', 'chevron circle right', 'chevron circle up', 'chevron down',
  'chevron left', 'chevron right', 'chevron up', 'long arrow down', 'long arrow left', 'long arrow right',
  'long arrow up', 'pointing down', 'pointing left', 'pointing right', 'pointing up', 'toggle down', 'toggle left',
  'toggle right', 'toggle up',

  // Mobile Icons
  'mobile', 'tablet', 'battery empty', 'battery full', 'battery low', 'battery medium',

  // Computer Icons
  'desktop', 'disk outline', 'game', 'high battery', 'keyboard', 'laptop', 'plug', 'power',

  // Computer And File System Icons
  'file archive outline', 'file audio outline', 'file code outline', 'file excel outline', 'file', 'file image outline',
  'file outline', 'file pdf outline', 'file powerpoint outline', 'file text', 'file text outline', 'file video outline',
  'file word outline', 'folder', 'folder open', 'folder open outline', 'folder outline', 'level down', 'level up',
  'trash', 'trash outline',

  // Technologies Icons
  'barcode', 'bluetooth alternative', 'bluetooth', 'css3', 'database', 'fork', 'html5', 'openid', 'qrcode', 'rss',
  'rss square', 'server', 'usb',

  // Rating Icons
  'empty heart', 'empty star', 'frown', 'heart', 'meh', 'smile', 'star half empty', 'star half', 'star', 'thumbs down',
  'thumbs outline down', 'thumbs outline up', 'thumbs up',

  // Audio Icons
  'backward', 'closed captioning', 'eject', 'fast backward', 'fast forward', 'forward', 'music', 'mute', 'pause circle',
  'pause circle outline', 'pause', 'play', 'record', 'step backward', 'step forward', 'stop circle',
  'stop circle outline', 'stop', 'unmute', 'video play', 'video play outline', 'volume down', 'volume off', 'volume up',

  // Map Icons
  'bicycle', 'building', 'building outline', 'bus', 'car', 'coffee', 'compass', 'emergency', 'first aid', 'food', 'h',
  'hospital', 'hotel', 'location arrow', 'map', 'map outline', 'map pin', 'map signs', 'marker', 'military',
  'motorcycle', 'paw', 'ship', 'space shuttle', 'spoon', 'street view', 'subway', 'taxi', 'train', 'television', 'tree',
  'university',

  // Tables Icons
  'columns', 'sort alphabet ascending', 'sort alphabet descending', 'sort ascending', 'sort content ascending',
  'sort content descending', 'sort descending', 'sort', 'sort numeric ascending', 'sort numeric descending', 'table',

  // Text Editor Icons
  'align center', 'align justify', 'align left', 'align right', 'attach', 'bold', 'content', 'copy', 'cut', 'font',
  'header', 'indent', 'italic', 'linkify', 'list', 'ordered list', 'outdent', 'paragraph', 'paste', 'save',
  'strikethrough', 'subscript', 'superscript', 'text cursor', 'text height', 'text width', 'underline', 'unlinkify',
  'unordered list',

  // Currency Icons
  'bitcoin', 'dollar', 'euro', 'lira', 'pound', 'ruble', 'rupee', 'shekel', 'won', 'yen',

  // Payment Options Icons
  'american express', 'credit card alternative', 'diners club', 'discover', 'google wallet', 'japan credit bureau',
  'mastercard', 'paypal card', 'paypal', 'stripe', 'visa',

  // Accessibility Icons
  'wheelchair', 'asl interpreting', 'assistive listening systems', 'audio description', 'blind', 'braille', 'deafness',
  'low vision', 'sign language', 'universal access', 'volume control phone',

  // Brands Icons
  '500px', 'adn', 'amazon', 'android', 'angellist', 'apple', 'behance', 'behance square', 'bitbucket',
  'bitbucket square', 'black tie', 'buysellads', 'chrome', 'codepen', 'codiepie', 'connectdevelop', 'contao',
  'dashcube', 'delicious', 'deviantart', 'digg', 'dribbble', 'dropbox', 'drupal', 'empire', 'envira gallery',
  'expeditedssl', 'facebook', 'facebook f', 'facebook square', 'firefox', 'first order', 'flickr', 'font awesome',
  'fonticons', 'fort awesome', 'forumbee', 'foursquare', 'gg', 'gg circle', 'git', 'git square', 'github',
  'github alternate', 'github square', 'gitlab', 'gittip', 'glide', 'glide g', 'google', 'google plus',
  'google plus circle', 'google plus square', 'hacker news', 'houzz', 'instagram', 'internet explorer', 'ioxhost',
  'joomla', 'jsfiddle', 'lastfm', 'lastfm square', 'leanpub', 'linkedin', 'linkedin square', 'linux', 'maxcdn',
  'meanpath', 'medium', 'microsoft edge', 'mixcloud', 'modx', 'odnoklassniki', 'odnoklassniki square', 'opencart',
  'opera', 'optinmonster', 'pagelines', 'pied piper', 'pied piper alternate', 'pied piper hat', 'pinterest',
  'pinterest square', 'pocket', 'product hunt', 'qq', 'rebel', 'reddit', 'reddit alien', 'reddit square', 'renren',
  'safari', 'scribd', 'sellsy', 'shirtsinbulk', 'simplybuilt', 'skyatlas', 'skype', 'slack', 'slideshare', 'snapchat',
  'snapchat ghost', 'snapchat square', 'soundcloud', 'spotify', 'stack exchange', 'stack overflow', 'steam',
  'steam square', 'stumbleupon', 'stumbleupon circle', 'tencent weibo', 'themeisle', 'trello', 'tripadvisor', 'tumblr',
  'tumblr square', 'twitch', 'twitter', 'twitter square', 'viacoin', 'viadeo', 'viadeo square', 'vimeo', 'vimeo square',
  'vine', 'vk', 'wechat', 'weibo', 'whatsapp', 'wikipedia', 'windows', 'wordpress', 'wpbeginner', 'wpforms', 'xing',
  'xing square', 'y combinator', 'yahoo', 'yelp', 'yoast', 'youtube', 'youtube play', 'youtube square',
]
