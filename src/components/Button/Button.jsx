import React from 'react'
import style from './Button.module.scss'
export default function Button (props) {
  const getClass = () => {
    switch (props.type) {
      case 'primary' : return props.plain ? style.blogBtnPrimaryPlain : style.blogBtnPrimary
      default : return props.plain ? style.blogBtnPrimaryPlain : style.blogBtnPrimary
    }
  }
  return (
    <button
      className={ `${getClass()} ${style.blogBtn} ${props.className ? props.className : ''}` }
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
