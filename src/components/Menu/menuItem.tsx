import React,{useContext} from 'react'
import classNames from 'classnames'
import {MenuContext} from './menu'

export interface baseMenuItemProps {
  className?:string,
  style?:React.CSSProperties,
  index?:string,
  disabled?:boolean,
  children?:React.ReactNode
}


const MenuItem:React.FC<baseMenuItemProps> = (props)=>{
  const {className,style,index,disabled,children} = props;
  const context = useContext(MenuContext)

  const classes = classNames('omg-menu-item',className,{
    'is-disabled':disabled, 
    'is-active':context.index === index
  })

  
  const handleClick = ()=>{
    if (context.onSelect && !disabled && (typeof index === 'string')) {
      context.onSelect(index??"0")
    }
  }

  return (
    <li className={classes} style={style} onClick={handleClick}>{children}</li>
  )
}

MenuItem.displayName = "MenuItem";

export default MenuItem;