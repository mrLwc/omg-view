import React,{useContext,useState} from 'react'
import classNames from 'classnames'
import {baseMenuItemProps} from './menuItem'
import {MenuContext} from './menu'
export interface ISubMenuProps {
  index?:string,
  className?:string,
  title:string,
  style?:React.CSSProperties,
}


const SubMenu:React.FC<ISubMenuProps> = (props)=>{

  const {index,title,className,style,children} = props;

  const context = useContext(MenuContext);

  const openMenus = context.defaultOpenMenus as Array<string>
  const isOpen = index!==undefined && context.mode === 'vertical' ? openMenus.includes(index):false;

  const [menuOpen,setMenuOpen] = useState(isOpen);

  const classes = classNames('omg-menu-item','omg-submenu-item',className,{
    'is-active':context.index === index
  });

  const classesSub = classNames('omg-submenu',{
    'menu-opened':menuOpen
  })


  // 处理下拉部分元素
  const renderChildren = ()=>{
    const childrenComponent = React.Children.map(children,(child,i)=>{
      const elementChild = child as React.FunctionComponentElement<baseMenuItemProps>
      const {displayName} = elementChild.type;
      if (displayName==="MenuItem") {
        const cloneChild = React.cloneElement(elementChild,{index:`${index}_${i}`})
        return cloneChild;
      } else {
        console.log('Error: has child not MenuItem component');
      }
    })
    return (
      <ul className={classesSub}>
        {childrenComponent}
      </ul>
    )
  }

  const handleClick = (e:React.MouseEvent)=>{
    setMenuOpen(!menuOpen)
  }

  let timer: any
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setMenuOpen(toggle)
    }, 300)
  }

  const clickEvents = context.mode === 'vertical' ? {
    onClick: handleClick
  } : {}

  const hoverEvents = context.mode !== 'vertical' ? {
    onMouseEnter: (e: React.MouseEvent) => { handleMouse(e, true)},
    onMouseLeave: (e: React.MouseEvent) => { handleMouse(e, false)}
  } : {}

  return (
    <li style={style} className={classes} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents}>
        {title}
      </div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = "SubMenu";


export default SubMenu;