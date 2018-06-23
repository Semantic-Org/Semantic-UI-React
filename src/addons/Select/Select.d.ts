import * as React from 'react'

import { DropdownProps } from '../../modules/Dropdown'
import DropdownDivider from '../../modules/Dropdown/DropdownDivider'
import DropdownHeader from '../../modules/Dropdown/DropdownHeader'
import DropdownItem, { DropdownItemProps } from '../../modules/Dropdown/DropdownItem'
import DropdownMenu from '../../modules/Dropdown/DropdownMenu'

export interface SelectProps extends DropdownProps {
  [key: string]: any

  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options: DropdownItemProps[]
}

interface SelectComponent extends React.StatelessComponent<SelectProps> {
  Divider: typeof DropdownDivider
  Header: typeof DropdownHeader
  Item: typeof DropdownItem
  Menu: typeof DropdownMenu
}

declare const Select: SelectComponent

export default Select
