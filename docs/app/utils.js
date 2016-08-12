import { META, SUI } from 'src/lib'

export const typeOrder = [
  META.TYPES.ELEMENT,
  META.TYPES.COLLECTION,
  META.TYPES.VIEW,
  META.TYPES.MODULE,
  META.TYPES.ADDON,
]

/**
 * Get the Webpack Context for all doc site examples.
 */
export const exampleContext = require.context('docs/app/Examples/', true, /\.js$/)

export const iconsByCategory = [{
  name: 'Web Content',
  description: 'Icons can represent types of content found on websites',
  icons: SUI.WEB_CONTENT_ICONS,
}, {
  name: 'User Actions',
  description: 'Icons can represent common actions a user can take',
  icons: SUI.USER_ACTIONS_ICONS,
}, {
  name: 'Message',
  description: 'Icons can alert users to the type of message being displayed',
  icons: SUI.MESSAGE_ICONS,
}, {
  name: 'User Types',
  description: 'Icons can represent types of people',
  icons: SUI.USER_TYPE_ICONS,
}, {
  name: 'Gender & Sexuality',
  description: 'Icons can represent genders or types of sexuality',
  icons: SUI.GENDER_AND_SEXUALITY_ICONS,
}, {
  name: 'Layout Adjustment',
  description: 'Icons can alert users to common ways to adjust page layouts',
  icons: SUI.LAYOUT_ADJUSTMENTS_ICONS,
}, {
  name: 'Objects',
  description: 'Icons can be used to represent common objects',
  icons: SUI.OBJECTS_ICONS,
}, {
  name: 'Shapes',
  description: 'Icons can be used to create shapes',
  icons: SUI.SHAPES_ICONS,
}, {
  name: 'Item Selection',
  description: 'Icons can show whether an item is included in a set',
  icons: SUI.ITEM_SELECTION_ICONS,
}, {
  name: 'Media',
  description: 'Icons can represent common media types',
  icons: SUI.MEDIA_ICONS,
}, {
  name: 'Pointers',
  description: 'Icons can be used to indicate a direction',
  icons: SUI.POINTERS_ICONS,
}, {
  name: 'Mobile',
  description: 'Icons can represent mobile devices, types of content found on mobile devices.',
  icons: SUI.MOBILE_ICONS,
}, {
  name: 'Computer',
  description: 'Icons can represent computing devices, or types of content found on a computer.',
  icons: SUI.COMPUTER_ICONS,
}, {
  name: 'Computer and File System',
  description: 'Icons can represent elements of a computer and its file system',
  icons: SUI.COMPUTER_AND_FILE_SYSTEM_ICONS,
}, {
  name: 'Technologies',
  description: 'Icons can represent common technologies',
  icons: SUI.TECHNOLOGIES_ICONS,
}, {
  name: 'Rating',
  description: 'Icons can be used to represent users attitude towards content',
  icons: SUI.RATINGS_ICONS,
}, {
  name: 'Audio',
  description: 'Icons can be used to represent common ways to interact with audio',
  icons: SUI.AUDIO_ICONS,
}, {
  name: 'Map',
  description: 'Icons can be used to represent elements on a map',
  icons: SUI.MAP_ICONS,
}, {
  name: 'Tables',
  description: 'Icons can be used to represent common actions inside a table',
  icons: SUI.TABLES_ICONS,
}, {
  name: 'Text Editor',
  description: 'Icons can represent common actions when editing text',
  icons: SUI.TEXT_EDITOR_ICONS,
}, {
  name: 'Currency',
  description: 'Icons can represent units of currency',
  icons: SUI.CURRENCY_ICONS,
}, {
  name: 'Payment Options',
  description: 'Icons can represent common forms of payment',
  icons: SUI.PAYMENT_OPTIONS_ICONS,
}, {
  name: 'Accessibility',
  description: 'Icons can represent accessibility standards',
  icons: SUI.ACCESSIBILITY_ICONS,
}, {
  name: 'Brands',
  description: '',
  icons: SUI.BRANDS_ICONS,
}]
