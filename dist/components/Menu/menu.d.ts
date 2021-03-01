import React from 'react';
export declare type MenuMode = "vertical" | "horizontal";
declare type Select = (selectIndex: string) => void;
export interface baseMenuProps {
    className: string;
    style: React.CSSProperties;
    mode: MenuMode;
    defaultIndex: string;
    onSelect: Select;
    children: React.ReactNode;
    defaultOpenMenus?: Array<string>;
}
interface IMenuContext {
    index: string;
    onSelect?: Select;
    mode?: MenuMode;
    defaultOpenMenus?: string[];
}
export declare type MenuProps = Partial<baseMenuProps>;
export declare const MenuContext: React.Context<IMenuContext>;
declare const Menu: React.FC<MenuProps>;
export default Menu;
