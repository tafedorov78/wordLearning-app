import React from 'react'
import classes from './MenuToggle.module.css'

const MenuToggle = props => {

  const cls = [
    classes.MenuToggle,
    'fa'
  ]

  if(props.isMenuOpened) {
    cls.push('fas fa-times')
    cls.push(classes.open)
  } else {
    cls.push('fas fa-bars')

  }

  return (
    <i className={cls.join(' ')}
    onClick={props.onClick}
    ></i>
  )
}

export  default MenuToggle
