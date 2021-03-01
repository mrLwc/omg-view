var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import Transition from '../Transition/transition';
import { MenuContext } from './menu';
import Icon from '../Icon/icon';
var SubMenu = function (props) {
    var index = props.index, title = props.title, className = props.className, style = props.style, children = props.children;
    var context = useContext(MenuContext);
    var openMenus = context.defaultOpenMenus;
    var isOpen = index !== undefined && context.mode === 'vertical' ? openMenus.includes(index) : false;
    var _a = useState(isOpen), menuOpen = _a[0], setMenuOpen = _a[1];
    var classes = classNames('omg-menu-item', 'omg-submenu-item', className, {
        'is-active': context.index === index
    });
    var classesSub = classNames('omg-submenu', {
        'menu-opened': menuOpen
    });
    // 处理下拉部分元素
    var renderChildren = function () {
        var childrenComponent = React.Children.map(children, function (child, i) {
            var elementChild = child;
            var displayName = elementChild.type.displayName;
            if (displayName === "MenuItem") {
                var cloneChild = React.cloneElement(elementChild, { index: index + "_" + i });
                return cloneChild;
            }
            else {
                console.log('Error: has child not MenuItem component');
            }
        });
        return (React.createElement(Transition, { in: menuOpen, timeout: 200, animation: "zoom-in-left" },
            React.createElement("ul", { className: classesSub }, childrenComponent)));
    };
    var handleClick = function (e) {
        setMenuOpen(!menuOpen);
    };
    var timer;
    var handleMouse = function (e, toggle) {
        clearTimeout(timer);
        e.preventDefault();
        timer = setTimeout(function () {
            setMenuOpen(toggle);
        }, 300);
    };
    var clickEvents = context.mode === 'vertical' ? {
        onClick: handleClick
    } : {};
    var hoverEvents = context.mode !== 'vertical' ? {
        onMouseEnter: function (e) { handleMouse(e, true); },
        onMouseLeave: function (e) { handleMouse(e, false); }
    } : {};
    return (React.createElement("li", __assign({ style: style, className: classes }, hoverEvents),
        React.createElement("div", __assign({ className: "submenu-title" }, clickEvents),
            title,
            React.createElement(Icon, { icon: "angle-down", className: "arrow-icon" })),
        renderChildren()));
};
SubMenu.displayName = "SubMenu";
export default SubMenu;
