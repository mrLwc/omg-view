import React from 'react';
import Button,{ButtonSize, ButtonType} from './components/Button/button'
import "./App.css"
function App() {
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
    </div>
  );
}
export default App;