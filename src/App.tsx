import React from 'react';
import Button,{ButtonSize, ButtonType} from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/submenu';
import "./App.css"
function App() {
  const handleSelect = (index:string)=>{
    console.log(index);
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={()=>{alert(1)}}>Default</Button>
        <Button btnType={ButtonType.Primary}>Primary</Button>
        <Button btnType={ButtonType.Danger}>Danger</Button>
        <Button btnType={ButtonType.Warning}>Warning</Button>
        <Button btnType={ButtonType.Success}>Success</Button>
        <Button size={ButtonSize.Large}>world</Button>
        <Button size={ButtonSize.Small}>world</Button>
        <Button size={ButtonSize.Small} disabled>Disabled</Button>
        <Button size={ButtonSize.Small} btnType={ButtonType.Link} href="https://www.baidu.com" target="_blank">Link type</Button>
        <Button size={ButtonSize.Small} btnType={ButtonType.Link} disabled>Link disabled</Button>
      </header>
      <div>
        <Menu onSelect={handleSelect} mode="vertical" defaultOpenMenus ={["1"]}>
          <MenuItem>item 1</MenuItem>
          <SubMenu title="sub">
          <MenuItem>item 1-1</MenuItem>
          <MenuItem>item 1-2</MenuItem>
          </SubMenu>
          <MenuItem disabled>item 2</MenuItem>
          <MenuItem>item 3</MenuItem>
        </Menu>
      </div>
    </div>
  );
}
export default App;