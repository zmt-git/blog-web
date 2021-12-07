import React from 'react'
import style from './Avatar.module.scss'

export default function Avatar (props) {
  const getSize = () => {
    switch (props.size) {
      case 'default': return style['avatar-default-size']
      case 'lager' : return style['avatar-lager-size']
      default : return style['avatar-default-size']
    }
  }

  return (
    <div onClick={props.onClick} className={`${style.avatar} ${getSize()}`}>
      <img src={props.img} alt='头像'/>
    </div>
  )
}
