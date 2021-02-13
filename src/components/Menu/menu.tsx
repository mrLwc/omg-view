import React,{createContext,useState} from 'react'
import classNames from 'classnames'
import {baseMenuItemProps} from './menuItem'


export type MenuMode = "vertical" | "horizontal"
type Select = (selectIndex:string)=>void;


export interface baseMenuProps {
  className:string,
  style:React.CSSProperties,
  mode:MenuMode,
  defaultIndex:string,
  onSelect:Select,
  children:React.ReactNode,
  defaultOpenMenus?:Array<string>
}

interface IMenuContext {
  index:string,
  onSelect?:Select,
  mode?: MenuMode;
  defaultOpenMenus?:string[]
}

export type MenuProps = Partial<baseMenuProps>;

export const MenuContext = createContext<IMenuContext>({index:"0"})

const Menu:React.FC<MenuProps> = (props)=>{
  const {className,style,mode,defaultIndex,children,onSelect,defaultOpenMenus} = props;
  const classes = classNames('omg-menu',className,{
    'menu-vertical':mode === 'vertical',
    'menu-horizontal':mode !== 'vertical'
  })
  const [currentIndex,setCurrent] = useState(defaultIndex);

  const passedContext:IMenuContext = {
    index:currentIndex??"0",
    onSelect:(index)=>{
      setCurrent(index)
      if (onSelect) {
        onSelect(index)
      }
    },
    mode:mode,
    defaultOpenMenus
  }

  const renderChildren = ()=>{
    // 此方法会过滤掉不满足条件的元素
    return  React.Children.map(children,(child,index)=>{
      const elementChild = child as React.FunctionComponentElement<baseMenuItemProps>
      const {displayName} = elementChild.type
      if (displayName==="MenuItem"||displayName==="SubMenu") {
        const cloneChild = React.cloneElement(elementChild,{index:index.toString()})
        return cloneChild
      } else {
        console.log('Error: has child not MenuItem component');
        
      }
    })
  }


  return (
    <MenuContext.Provider value={passedContext}>
      <ul className={classes} style={style} data-testid="test-menu">
        {renderChildren()}
      </ul>
    </MenuContext.Provider>
  )
}

Menu.defaultProps = {
  mode:'vertical',
  defaultIndex:"0",
  defaultOpenMenus:[]
}

export default Menu;