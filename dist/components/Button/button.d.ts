import React from 'react';
export declare enum ButtonSize {
    Large = "large",
    Small = "small"
}
export declare enum ButtonType {
    Primary = "primary",
    Info = "info",
    Default = "default",
    Danger = "danger",
    Success = "success",
    Warning = "warning",
    Link = "link"
}
export interface baseButtonProps {
    /** 设置 Button 类名 */
    className: string;
    /** 设置 Button 类型 */
    btnType: ButtonType;
    /** 设置 Button 禁用状态 */
    disabled: boolean;
    /** 设置 Button 大小 */
    size: ButtonSize;
    /** 设置 Button link类型地址 */
    href: string;
    children: React.ReactNode;
}
declare type NativeButtonProps = baseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
declare type AnchorButtonProps = baseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
export declare type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
export declare const Button: React.FC<ButtonProps>;
export default Button;
