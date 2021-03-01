import React from 'react';
export interface baseMenuItemProps {
    className?: string;
    style?: React.CSSProperties;
    index?: string;
    disabled?: boolean;
    children?: React.ReactNode;
}
declare const MenuItem: React.FC<baseMenuItemProps>;
export default MenuItem;
