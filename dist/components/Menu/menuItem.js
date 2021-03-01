import React, { useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';
var MenuItem = function (props) {
    var className = props.className, style = props.style, index = props.index, disabled = props.disabled, children = props.children;
    var context = useContext(MenuContext);
    var classes = classNames('omg-menu-item', className, {
        'is-disabled': disabled,
        'is-active': context.index === index
    });
    var handleClick = function () {
        if (context.onSelect && !disabled && (typeof index === 'string')) {
            context.onSelect(index !== null && index !== void 0 ? index : "0");
        }
    };
    return (React.createElement("li", { className: classes, style: style, onClick: handleClick }, children));
};
MenuItem.displayName = "MenuItem";
export default MenuItem;
