import React from 'react';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Button,{ButtonSize, ButtonType} from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/submenu';
import Icon from './components/Icon/icon';
import Input from './components/Input/input';
import AutoComplete,{DataSourceType} from './components/AutoComplete/autocomplete';
import "./App.css"

// interface LakerPlayerProps {
//   value: string;
//   number: number;
// }
interface GithubUserProps {
  login: string;
  url: string;
  avatar_url: string;
}

library.add(fas)
function App() {
  const handleSelect = (index:string)=>{
    console.log(index);
    
  }
  
  // const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins',
  // 'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando'];
  // const lakersWithNumber = [
  //     {value: 'bradley', number: 11},
  //     {value: 'pope', number: 1},
  //     {value: 'caruso', number: 4},
  //     {value: 'cook', number: 2},
  //     {value: 'cousins', number: 15},
  //     {value: 'james', number: 23},
  //     {value: 'AD', number: 3},
  //     {value: 'green', number: 14},
  //     {value: 'howard', number: 39},
  //     {value: 'kuzma', number: 0},
  //   ]
  const handleFetch = (query:string) =>{
    return fetch(`https://api.github.com/search/users?q=${query}`)
    .then(res => res.json())
    .then(({ items }) => {
      console.log(items)
      return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item}))
    })
    // return lakersWithNumber.filter(item=>item.value.includes(query))
  }
  const renderOption = (item: DataSourceType) => {
    const itemWithGithub = item as DataSourceType<GithubUserProps>
    return (
      <>
        <h2>Name: {itemWithGithub.value}</h2>
        <p>url: {itemWithGithub.url}</p>
      </>
    )
  }

  return (
    <div className="App">
      <Icon icon="arrow-down" size="10x" theme="success"/>
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
        <Menu onSelect={handleSelect} mode="horizontal" defaultOpenMenus ={["1"]}>
          <MenuItem>item 1</MenuItem>
          <SubMenu title="sub">
          <MenuItem>item 1-1</MenuItem>
          <MenuItem>item 1-2</MenuItem>
          </SubMenu>
          <MenuItem disabled>item 2</MenuItem>
          <MenuItem>item 3</MenuItem>
        </Menu>
      </div>

      <div style={{width:'300px'}}> 
        <Input placeholder="place" append=".com"></Input>
      </div>
      <div style={{width:'300px'}}> 
        <AutoComplete fetchSuggestions={handleFetch} renderOption={renderOption}></AutoComplete>
      </div>
    </div>
  );
}
export default App;