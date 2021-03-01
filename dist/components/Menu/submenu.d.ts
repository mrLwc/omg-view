import React from 'react';
export interface ISubMenuProps {
    index?: string;
    className?: string;
    title: string;
    style?: React.CSSProperties;
}
declare const SubMenu: React.FC<ISubMenuProps>;
export default SubMenu;
