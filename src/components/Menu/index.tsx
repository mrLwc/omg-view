import {FC} from 'react';

import Menu,{MenuProps} from './menu'
import MenuItem,{baseMenuItemProps} from './menuItem'
import SubMenu,{ISubMenuProps} from './submenu'


export type IMenuComponent = FC<MenuProps> & {
  Item:FC<baseMenuItemProps>,
  SubMenu:FC<ISubMenuProps>
}

const TransMenu = Menu  as IMenuComponent;

TransMenu.Item = MenuItem;
TransMenu.SubMenu = SubMenu;

export default TransMenu;