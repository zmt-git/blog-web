import React from 'react'
import style from './BlogInfo.module.scss'
import moment from "moment";
import formatter from '../../fomatter/formatter'

export default function BlogInfo (props) {
  return (
    <div className={`${style.blogInfo}`} onClick={() => props.onClick(props.blog)}>
      <div className={style.blogInfoUser}>
        <p>{formatter.userFormatter(props.blog.authorId)}</p>
        <span>{moment(props.blog.createTime).startOf('day').fromNow()}</span>
        <p>{formatter.categoryFormatter(props.blog.categoryId)}</p>
      </div>

      <div className={`${style.blogInfoContent}  border-bottom`}>
        <div className={style.blogInfoText}>
          <h3 className={`${style.blogInfoTitle} ellipsis1`}>{props.blog.title}</h3>
          <p className={`${style.blogInfoDes} ellipsis1`}>{props.blog.content}</p>
          <ul className={style.blogInfoAction}>
            <li className={style.blogInfoActionItem}>
              <span className={` ${style.blogInfoActionItemIcon} iconfont blog-web-chakan`} />
              <span className={style.blogInfoActionItemValue}>{props.blog.readNum}</span>
            </li>
            <li className={style.blogInfoActionItem}>
              <span className={` ${style.blogInfoActionItemIcon} iconfont blog-web-dianzan`} />
              <span className={style.blogInfoActionItemValue}>{props.blog.like}</span>
            </li>
            <li className={style.blogInfoActionItem}>
              <span className={` ${style.blogInfoActionItemIcon} iconfont blog-web-xiaoxi`} />
              <span className={style.blogInfoActionItemValue}>{props.blog.commentNum}</span>
            </li>
          </ul>
        </div>
        {
          props.blog.img ?
            <div className={style.blogInfoImg}>
              <img src={props.blog.img} alt={props.blog.title} />
            </div>
            : null
        }
      </div>
    </div>
  )
}
