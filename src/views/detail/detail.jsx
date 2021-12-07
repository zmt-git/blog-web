import React, { useState, useEffect } from 'react'
import BlogHeader from "../../components/BlogHeader/BlogHeader"
import ReactMarkdown from 'react-markdown'
import style from './detail.module.scss'
import hljs from 'highlight.js';
import Avatar from '../../components/Avatar/Avatar'
import Button from "../../components/Button/Button";


import png from '../../assets/test/1.png'
export default function Detail (props) {
  const [blog, setBlog] = useState({
    title: '测试标题',
    content: "```@import '~highlight.js/styles/github.css';```",
    createUser: 'zmt',
    createTime: '2021年12月3日',
    read: 1690
  })

  const highlightCallBack = () => {
    document.querySelectorAll("pre, code").forEach(block => {
      try{hljs.highlightBlock(block);}
      catch(e){console.log(e);}
    });
  };

  useEffect(highlightCallBack)

  return (
    <div className={`${style.detail}`}>
      <BlogHeader/>
      <div className={style.detailContent}>
        <div className={style.detailContentUser}>
          <Avatar img={png}/>
          <div className={style.detailContentUserCenter}>
            <p className={style['user-des']}>
              <span className={style['user-des-name']}>{blog.createUser}</span>
            </p>
            <p className={style['article-des']}>
              <span className={style['article-des-time']}>{blog.createTime}</span>
              <span>阅读 {blog.read}</span>
            </p>
          </div>
          <Button plain>关注</Button>
        </div>

        <div className={style['img']}>
          <img src={png} alt='test' />
        </div>

        <h1 className={style.title}>{blog.title}</h1>

        <article className={`${style.detailContentArticle} markdown-body`}>
          <ReactMarkdown children={blog.content} />
        </article>
      </div>
    </div>
  )
}
