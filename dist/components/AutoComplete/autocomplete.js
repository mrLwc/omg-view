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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState } from 'react';
import Icon from '../Icon/icon';
// import classNames from 'classnames';
import Input from '../Input/input';
export var AutoComplete = function (props) {
    var fetchSuggestions = props.fetchSuggestions, renderOption = props.renderOption, onSelect = props.onSelect, value = props.value, restProps = __rest(props, ["fetchSuggestions", "renderOption", "onSelect", "value"]);
    var _a = useState(value), inputValue = _a[0], setInputValue = _a[1];
    var _b = useState([]), suggestions = _b[0], setSugestions = _b[1];
    var _c = useState(false), loading = _c[0], setLoading = _c[1];
    var handleChange = function (e) {
        var value = e.target.value.trim();
        setInputValue(value);
        if (value) {
            setLoading(true);
            var result = fetchSuggestions(value);
            if (result instanceof Promise) {
                result.then(function (data) {
                    setSugestions(data);
                    setLoading(false);
                });
            }
            else {
                setSugestions(result);
            }
        }
        else {
            setSugestions([]);
        }
    };
    var renderTemplate = function (item) {
        return renderOption ? renderOption(item) : item.value;
    };
    var generateDropdown = function () {
        return (React.createElement("ul", { className: "omg-suggestion-list" }, suggestions.map(function (suggest, index) {
            return React.createElement("li", { key: index }, renderTemplate(suggest));
        })));
    };
    return (React.createElement("div", { className: "omg-auto-complete" },
        React.createElement(Input, __assign({ value: inputValue, onChange: handleChange }, restProps)),
        loading && React.createElement("ul", null,
            React.createElement(Icon, { icon: "spinner", spin: true })),
        generateDropdown()));
};
export default AutoComplete;
