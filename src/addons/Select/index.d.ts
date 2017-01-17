import * as React from 'react';
import {
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  DropdownMenu,
  DropdownProps
} from '../../modules/Dropdown';

interface SelectProps extends DropdownProps {
  selection: true;
}

interface SelectComponent extends React.StatelessComponent<SelectProps> {
  Divider: typeof DropdownDivider;
  Header: typeof DropdownHeader;
  Item: typeof DropdownItem;
  Menu: typeof DropdownMenu;
}

export const Select: SelectComponent;
