import React,{useState} from 'react';
import Icon from '../Icon/icon';
// import classNames from 'classnames';
import Input, { InputProps } from '../Input/input'

interface DataSourceObject {
  value:string
}

export type DataSourceType<T = {}> = T & DataSourceObject;

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  value?:string,
  fetchSuggestions:(str:string)=>DataSourceType[] | Promise<DataSourceType[]>,
  onSelect?:(item:DataSourceType)=>void,
  renderOption?:(item:DataSourceType) => React.ReactElement
}

export const AutoComplete:React.FC<AutoCompleteProps> = (props) =>{
  const {
    fetchSuggestions,
    renderOption,
    onSelect,
    value,
    ...restProps
  } = props;

  const [ inputValue, setInputValue ] = useState(value as string);
  const [ suggestions, setSugestions ] = useState<DataSourceType[]>([])
  const [loading,setLoading] = useState(false)

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const value = e.target.value.trim()
    setInputValue(value);
    if (value) {
      setLoading(true)
      let result = fetchSuggestions(value);
      if (result instanceof Promise) {
        result.then(data=>{
          setSugestions(data);
          setLoading(false)
        })
      } else {
        setSugestions(result)
      }
    } else {
      setSugestions([])
    }
    
  }

  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value
  }

  const generateDropdown = ()=>{
    return (<ul className="omg-suggestion-list">
      {
        suggestions.map((suggest,index)=>{
          return <li key={index}>{renderTemplate(suggest)}</li>
        })
      }
    </ul>)
  }

  return (
    <div className="omg-auto-complete">
      <Input
        value={inputValue}
        onChange={handleChange}
        {...restProps}
      ></Input>
      {loading && <ul><Icon icon="spinner" spin/></ul>}
      {generateDropdown()}
    </div>
  )
}


export default AutoComplete;