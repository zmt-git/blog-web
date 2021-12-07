import React, { useState } from 'react'
import style from './BlogType.module.scss'
export default function BlogTypeItem (props) {
  const [show, setShow] = useState(false)

  const showSub = () => {
    setShow(true)
  }

  const hidden = () => {
    setShow(false)
  }

  return (
    <div
      className={props.className}
      onMouseEnter={showSub}
      onMouseLeave={hidden}
    >
      <span onClick={() => props.onClick(props.parent)} className={style.blogTypeItemInnerName}>{props.parent.name}</span>
      {props.children ?
        show ?
          <ul className={style.blogTypeItemInner}>{
            props.children.map(child => (
              <li className={style.blogTypeItemInnerItem} key={child.id} onClick={() => props.onClick(child)}>{child.name}</li>
            ))
          } </ul> : null
      : null}
    </div>
  )
}
