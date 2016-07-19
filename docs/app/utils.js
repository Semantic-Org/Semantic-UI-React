import {
  webContentIcons,
  userActionsIcons,
  messageIcons,
  userTypeIcons,
  genderAndSexualityIcons,
  layoutAdjustmentsIcons,
  objectsIcons,
  shapesIcons,
  itemSelectionIcons,
  mediaIcons,
  pointersIcons,
  mobileIcons,
  computerIcons,
  computerAndFileSystemIcons,
  technologiesIcons,
  ratingsIcons,
  audioIcons,
  mapIcons,
  tablesIcons,
  textEditorIcons,
  currencyIcons,
  paymentOptionsIcons,
  accessibilityIcons,
  brandsIcons,
} from 'src/utils/semanticUtils'

export const typeOrder = [
  'element',
  'collection',
  'view',
  'module',
  'addon',
]

/**
 * Get the Webpack Context for all doc site examples.
 */
export const exampleContext = require.context('docs/app/Examples/', true, /\.js$/)

export const iconsByCategory = [{
  name: 'Web Content',
  description: 'Icons can represent types of content found on websites',
  icons: webContentIcons,
}, {
  name: 'User Actions',
  description: 'Icons can represent common actions a user can take',
  icons: userActionsIcons,
}, {
  name: 'Message',
  description: 'Icons can alert users to the type of message being displayed',
  icons: messageIcons,
}, {
  name: 'User Types',
  description: 'Icons can represent types of people',
  icons: userTypeIcons,
}, {
  name: 'Gender & Sexuality',
  description: 'Icons can represent genders or types of sexuality',
  icons: genderAndSexualityIcons,
}, {
  name: 'Layout Adjustment',
  description: 'Icons can alert users to common ways to adjust page layouts',
  icons: layoutAdjustmentsIcons,
}, {
  name: 'Objects',
  description: 'Icons can be used to represent common objects',
  icons: objectsIcons,
}, {
  name: 'Shapes',
  description: 'Icons can be used to create shapes',
  icons: shapesIcons,
}, {
  name: 'Item Selection',
  description: 'Icons can show whether an item is included in a set',
  icons: itemSelectionIcons,
}, {
  name: 'Media',
  description: 'Icons can represent common media types',
  icons: mediaIcons,
}, {
  name: 'Pointers',
  description: 'Icons can be used to indicate a direction',
  icons: pointersIcons,
}, {
  name: 'Mobile',
  description: 'Icons can represent mobile devices, types of content found on mobile devices.',
  icons: mobileIcons,
}, {
  name: 'Computer',
  description: 'Icons can represent computing devices, or types of content found on a computer.',
  icons: computerIcons,
}, {
  name: 'Computer and File System',
  description: 'Icons can represent elements of a computer and its file system',
  icons: computerAndFileSystemIcons,
}, {
  name: 'Technologies',
  description: 'Icons can represent common technologies',
  icons: technologiesIcons,
}, {
  name: 'Rating',
  description: 'Icons can be used to represent users attitude towards content',
  icons: ratingsIcons,
}, {
  name: 'Audio',
  description: 'Icons can be used to represent common ways to interact with audio',
  icons: audioIcons,
}, {
  name: 'Map',
  description: 'Icons can be used to represent elements on a map',
  icons: mapIcons,
}, {
  name: 'Tables',
  description: 'Icons can be used to represent common actions inside a table',
  icons: tablesIcons,
}, {
  name: 'Text Editor',
  description: 'Icons can represent common actions when editing text',
  icons: textEditorIcons,
}, {
  name: 'Currency',
  description: 'Icons can represent units of currency',
  icons: currencyIcons,
}, {
  name: 'Payment Options',
  description: 'Icons can represent common forms of payment',
  icons: paymentOptionsIcons,
}, {
  name: 'Accessibility',
  description: 'Icons can represent accessibility standards',
  icons: accessibilityIcons,
}, {
  name: 'Brands',
  description: '',
  icons: brandsIcons,
}]
