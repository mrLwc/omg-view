import React from 'react'
import {render,RenderResult,fireEvent, cleanup} from '@testing-library/react';
import Menu,{MenuProps} from './menu'
import MenuItem from './menuItem'




function generateMenu(props:MenuProps){
  return  (
    <Menu {...props}>
      <MenuItem index={0}>active</MenuItem>
      <MenuItem index={1} disabled>disabled</MenuItem>
      <MenuItem index={2}>xyz</MenuItem>
    </Menu>
  )
}

const testProps:MenuProps = {
  defaultIndex:0,
  onSelect: jest.fn(),
  className: 'test'
}

const modeProps:MenuProps = {
  mode:'vertical'
}

let wrapper: RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement



describe('测试menu组件',()=>{
  beforeEach(()=>{
    wrapper = render(generateMenu(testProps));
    menuElement= wrapper.getByTestId('test-menu')
    activeElement = wrapper.getByText('active')
    disabledElement = wrapper.getByText('disabled')
  })
  it('测试默认渲染',()=>{
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass('omg-menu test');
    expect(disabledElement).toHaveClass('omg-menu-item is-disabled');
  })
  it('测试其他属性',()=>{
    const thirdItem = wrapper.getByText('xyz')
    fireEvent.click(thirdItem)
    expect(thirdItem).toHaveClass('is-active')
    expect(activeElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).toHaveBeenCalledWith("2")
    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).not.toHaveBeenCalledWith("1")
  })
  it('测试mode',()=>{
    cleanup()
    wrapper = render(generateMenu(modeProps));
    menuElement= wrapper.getByTestId('test-menu')
    expect(menuElement).toHaveClass('menu-vertical')
  })

})