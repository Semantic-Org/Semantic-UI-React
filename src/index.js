import './utils/jquery'
import { deprecateComponent } from './utils/deprecate'

// ----------------------------------------
// Addons
// ----------------------------------------
export Confirm from './addons/Confirm/Confirm'
export Radio from './addons/Radio/Radio'
export Select from './addons/Select/Select'
export Textarea from './addons/Textarea/Textarea'

// ----------------------------------------
// Collections
// ----------------------------------------

export Breadcrumb from './collections/Breadcrumb/Breadcrumb'

import _Form from './collections/Form/Form'
export { _Form as Form }
export const Field = deprecateComponent('Field', 'Use "Form.Field" instead.', _Form.Field)
export const Fields = deprecateComponent('Fields', 'Use "Form.Fields" instead.', _Form.Fields)

import _Grid from './collections/Grid/Grid'
export { _Grid as Grid }
export const Column = deprecateComponent('Column', 'Use "Grid.Column" instead.', _Grid.Column)
export const Row = deprecateComponent('Row', 'Use "Grid.Row" instead.', _Grid.Row)

import _Menu from './collections/Menu/Menu'
export { _Menu as Menu }
export const MenuItem = deprecateComponent('MenuItem', 'Use "Menu.Item" instead.', _Menu.Item)
export Message from './collections/Message/Message'

import _Table from './collections/Table/Table'
export { _Table as Table }
export const TableColumn = deprecateComponent('TableColumn', 'Use "Table.Column" instead.', _Table.Column)

// ----------------------------------------
// Elements
// ----------------------------------------
export Button from './elements/Button/Button'
export Buttons from './elements/Button/Buttons'
export Container from './elements/Container/Container'
export Divider from './elements/Divider/Divider'
export Flag from './elements/Flag/Flag'
export Header from './elements/Header/Header'
export Icon from './elements/Icon/Icon'
export Image from './elements/Image/Image'
export Input from './elements/Input/Input'
export Label from './elements/Label/Label'
export Loader from './elements/Loader/Loader'

import _List from './elements/List/List'
export { _List as List }
export const ListItem = deprecateComponent('ListItem', 'Use "List.Item" instead.', _List.Item)

export Segment from './elements/Segment/Segment'
export Segments from './elements/Segment/SegmentSegments'
export Rail from './elements/Rail/Rail'

// ----------------------------------------
// Modules
// ----------------------------------------
export Accordion from './modules/Accordion/Accordion'
export Checkbox from './modules/Checkbox/Checkbox'
export Dropdown from './modules/Dropdown/Dropdown'

import _Modal from './modules/Modal/Modal'
export { _Modal as Modal }
export const ModalContent = deprecateComponent('ModalContent', 'Use "Modal.Content" instead.', _Modal.Content)
export const ModalFooter = deprecateComponent('ModalFooter', 'Use "Modal.Footer" instead.', _Modal.Footer)
export const ModalHeader = deprecateComponent('ModalHeader', 'Use "Modal.Header" instead.', _Modal.Header)

export Progress from './modules/Progress/Progress'
export Rating from './modules/Rating/Rating'

// ----------------------------------------
// Views
// ----------------------------------------

import _Item from './views/Item/Item'
export { _Item as Item }
export const Items = deprecateComponent('Items', 'Use "Item.Items" instead.', _Item.Items)
export Statistic from './views/Statistic/Statistic'
