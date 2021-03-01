
import React from 'react';
import classNames from 'classnames'


export enum ButtonSize {
  Large = 'large',
  Small = 'small'
}

export enum ButtonType {
  Primary = 'primary',
  Info = 'info',
  Default = 'default',
  Danger = 'danger',
  Success = 'success',
  Warning = 'warning',
  Link = 'link'
}

export interface baseButtonProps {
  /** 设置 Button 类名 */
  className:string, 
  /** 设置 Button 类型 */
  btnType:ButtonType, 
   /** 设置 Button 禁用状态 */
  disabled:boolean,
  /** 设置 Button 大小 */
  size:ButtonSize, 
  /** 设置 Button link类型地址 */
  href:string,
  children:React.ReactNode
}


type NativeButtonProps  = baseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps  = baseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

export const Button:React.FC<ButtonProps> = (props)=>{
  const {
    className,
    btnType,
    disabled,
    size,href,
    children,
    ...restProps} = props;
  const classes = classNames('btn',className,{
    [`btn-${size}`]:size,
    [`btn-${btnType}`]:btnType,
    'disabled':(btnType===ButtonType.Link) && disabled,
  })

  if (btnType===ButtonType.Link && href) {
    return (
      <a href={href} className={classes} {...restProps}>{children}</a>
    )
  } else {
    return <button className={classes} disabled={disabled}  {...restProps}>{children}</button>
  }
}


Button.defaultProps = {
  disabled:false,
  btnType:ButtonType.Default
}

export default Button;