import React from 'react'
import style from './BlogInfo.module.scss'

export default function BlogInfo (props) {
  return (
    <div className={`${style.blogInfo}`} onClick={() => props.onClick(props.blog)}>
      <div className={style.blogInfoUser}>
        <p>{props.blog.createUser}</p>
        <span>{props.blog.createTime}</span>
        <p>{props.blog.sign}</p>
      </div>

      <div className={`${style.blogInfoContent}  border-bottom`}>
        <div className={style.blogInfoText}>
          <h3 className={`${style.blogInfoTitle} ellipsis1`}>{props.blog.title}</h3>
          <p className={`${style.blogInfoDes} ellipsis1`}>{props.blog.content}</p>
          <ul className={style.blogInfoAction}>
            <li className={style.blogInfoActionItem}>
              <span className={` ${style.blogInfoActionItemIcon} iconfont blog-web-chakan`} />
              <span className={style.blogInfoActionItemValue}>12</span>
            </li>
            <li className={style.blogInfoActionItem}>
              <span className={` ${style.blogInfoActionItemIcon} iconfont blog-web-dianzan`} />
              <span className={style.blogInfoActionItemValue}>12</span>
            </li>
            <li className={style.blogInfoActionItem}>
              <span className={` ${style.blogInfoActionItemIcon} iconfont blog-web-xiaoxi`} />
              <span className={style.blogInfoActionItemValue}>12</span>
            </li>
          </ul>
        </div>
        <div className={style.blogInfoImg}>
          <img src={props.blog.img} alt={props.blog.title} />
        </div>
      </div>
    </div>
  )
}
