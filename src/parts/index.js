/**
 * This file exports every component part with support for className and children.
 *
 * The top level API is made of components.(i.e. Button, Card, etc.)
 * Sub components are used to distinguish parts of components from components.
 * See "ui" class here http://semantic-ui.com/introduction/glossary.html#project-terminology.
 *
 * Example, a List is a component and a List.Item is a component part.
 * The List.Item is not in anyway related to the Item component.
 * They do not share capabilities. They only share the same name.
 */

import createPartFactory from './createPartFactory'

// ----------------------------------------
// Factories
// Every create*Part factory is a function that accepts defaultProps
// ----------------------------------------
export const createActionsPart = createPartFactory('actions')
export const createAvatarPart = createPartFactory('avatar')
export const createBarPart = createPartFactory('bar')
export const createContentPart = createPartFactory('content')
export const createDatePart = createPartFactory('date')
export const createDescriptionPart = createPartFactory('description')
export const createDividerPart = createPartFactory('divider')
export const createEventPart = createPartFactory('event')
export const createExtraPart = createPartFactory('extra')
export const createExtraContent = createPartFactory('extra content')
export const createExtraImages = createPartFactory('extra images')
export const createHeaderPart = createPartFactory('Header')
export const createImageContent = createPartFactory('image content')
export const createItemPart = createPartFactory('item')
export const createMenuPart = createPartFactory('menu')
export const createMetaPart = createPartFactory('meta')
export const createLabelPart = createPartFactory('label')
export const createSummaryPart = createPartFactory('summary')
export const createTitlePart = createPartFactory('title')
export const createUserPart = createPartFactory('user')
export const createValuePart = createPartFactory('value')

// ----------------------------------------
// Parts
// Default component parts
// ----------------------------------------
export const ActionsPart = createActionsPart('actions')
export const AvatarPart = createAvatarPart('avatar')
export const BarPart = createBarPart('bar')
export const ContentPart = createContentPart('content')
export const DatePart = createDatePart('date')
export const DescriptionPart = createDescriptionPart('description')
export const DividerPart = createDividerPart('divider')
export const EventPart = createEventPart('event')
export const ExtraPart = createExtraPart('extra')
export const ExtraContent = createExtraContent('extra content')
export const ExtraImages = createExtraImages('extra images')
export const HeaderPart = createHeaderPart('Header')
export const ImageContent = createImageContent('image content')
export const ItemPart = createItemPart('item')
export const MenuPart = createMenuPart('menu')
export const MetaPart = createMetaPart('meta')
export const LabelPart = createLabelPart('label')
export const SummaryPart = createSummaryPart('summary')
export const TitlePart = createTitlePart('title')
export const UserPart = createUserPart('user')
export const ValuePart = createValuePart('value')
