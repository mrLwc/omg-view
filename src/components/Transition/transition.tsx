import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right'


// CSSTransitionProps 使用继承时，报错了，所以使用联合类型
type TransitionProps = CSSTransitionProps & { animation?: AnimationName, wrapper?: boolean }

const Transition: React.FC<TransitionProps> = (props) => {
  const { children, classNames, animation, wrapper, ...restProps } = props
  return (
    <CSSTransition
      classNames = { classNames ? classNames : animation}
      {...restProps}
    >
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  )
}
Transition.defaultProps = {
  unmountOnExit: true,//在移开时卸载dom
  appear: true, //初始加载动画
}

export default Transition