import React from 'react'
import style from './BlogType.module.scss'
import BlogTypeItem from "./BlogTypeItem";
export default function BlogType (props) {
  return (
    <div className='border-bottom bg-white' style={{ position: 'sticky', top: 0, zIndex: 10}}>
      <div className={`${style.blogType}`}>
        {
          props.types.map(type => (
            <BlogTypeItem
              key={type.id}
              className={style.blogTypeItem}
              parent={type}
              children={type.children}
              onClick={props.onClick}
            />
          ))
        }
      </div>
    </div>
  )
}
