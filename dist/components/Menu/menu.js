import React, { createContext, useState } from 'react';
import classNames from 'classnames';
export var MenuContext = createContext({ index: "0" });
var Menu = function (props) {
    var className = props.className, style = props.style, mode = props.mode, defaultIndex = props.defaultIndex, children = props.children, onSelect = props.onSelect, defaultOpenMenus = props.defaultOpenMenus;
    var classes = classNames('omg-menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode !== 'vertical'
    });
    var _a = useState(defaultIndex), currentIndex = _a[0], setCurrent = _a[1];
    var passedContext = {
        index: currentIndex !== null && currentIndex !== void 0 ? currentIndex : "0",
        onSelect: function (index) {
            setCurrent(index);
            if (onSelect) {
                onSelect(index);
            }
        },
        mode: mode,
        defaultOpenMenus: defaultOpenMenus
    };
    var renderChildren = function () {
        // 此方法会过滤掉不满足条件的元素
        return React.Children.map(children, function (child, index) {
            var elementChild = child;
            var displayName = elementChild.type.displayName;
            if (displayName === "MenuItem" || displayName === "SubMenu") {
                var cloneChild = React.cloneElement(elementChild, { index: index.toString() });
                return cloneChild;
            }
            else {
                console.log('Error: has child not MenuItem component');
            }
        });
    };
    return (React.createElement(MenuContext.Provider, { value: passedContext },
        React.createElement("ul", { className: classes, style: style, "data-testid": "test-menu" }, renderChildren())));
};
Menu.defaultProps = {
    mode: 'vertical',
    defaultIndex: "0",
    defaultOpenMenus: []
};
export default Menu;
