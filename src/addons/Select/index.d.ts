import { DropdownDivider, DropdownHeader, DropdownItem, DropdownMenu, DropdownProps } from '../../modules/Dropdown';
import { Divider } from '../../elements/Divider';
import { Header } from '../../elements/Header';
import { Menu } from '../../collections/Menu';
import * as React from 'react';

interface SelectProps extends DropdownProps {
  selection: true;
}

interface SelectClass extends React.ComponentClass<SelectProps> {
  Divider: typeof DropdownDivider;
  Header: typeof DropdownHeader;
  Item: typeof DropdownItem;
  Menu: typeof DropdownMenu;
}

export const Select: SelectClass;
