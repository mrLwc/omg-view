import { FC } from 'react';
import { MenuProps } from './menu';
import { baseMenuItemProps } from './menuItem';
import { ISubMenuProps } from './submenu';
export declare type IMenuComponent = FC<MenuProps> & {
    Item: FC<baseMenuItemProps>;
    SubMenu: FC<ISubMenuProps>;
};
declare const TransMenu: IMenuComponent;
export default TransMenu;
