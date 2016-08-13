/*
 * TODO v1: Remove all deprecated components.
 * These are top level component APIs that have been deprecated.
 * Each top level key includes a message and a replacement component.
 */
import { deprecateComponent } from './lib'

//
// Collections
//
import Form from './collections/Form/Form'
export const Field = deprecateComponent('Field', 'Use "Form.Field" instead.', Form.Field)
export const Fields = deprecateComponent('Fields', 'Use "Form.Fields" instead.', Form.Fields)

import Grid from './collections/Grid/Grid'
export const Column = deprecateComponent('Column', 'Use "Grid.Column" instead.', Grid.Column)
export const Row = deprecateComponent('Row', 'Use "Grid.Row" instead.', Grid.Row)

import Menu from './collections/Menu/Menu'
export const MenuItem = deprecateComponent('MenuItem', 'Use "Menu.Item" instead.', Menu.Item)

import Table from './collections/Table/Table'
export const TableColumn = deprecateComponent('TableColumn', 'Use "Table.Column" instead.', Table.Column)

//
// Elements
//
// TODO deprecate Buttons once updated to v1 API
export Buttons from './elements/Button/Buttons'
import List from './elements/List/List'
export const ListItem = deprecateComponent('ListItem', 'Use "List.Item" instead.', List.Item)

//
// Modules
//
import Modal from './modules/Modal/Modal'
export const ModalContent = deprecateComponent('ModalContent', 'Use "Modal.Content" instead.', Modal.Content)
export const ModalHeader = deprecateComponent('ModalHeader', 'Use "Modal.Header" instead.', Modal.Header)
export const ModalFooter = deprecateComponent('ModalFooter', 'Use "Modal.Actions" instead.', Modal.Actions)

//
// Views
//
import Item from './views/Item/Item'
export const Items = deprecateComponent('Items', 'Use "Item.Items" instead.', Item.Items)
