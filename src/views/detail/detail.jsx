import React, { useState, useEffect } from 'react'
import BlogHeader from "../../components/BlogHeader/BlogHeader"
import ReactMarkdown from 'react-markdown'
import style from './detail.module.scss'
import hljs from 'highlight.js'
import moment from "moment";
import Avatar from '../../components/Avatar/Avatar'
import Button from "../../components/Button/Button"
import formatter from "../../fomatter/formatter";
import { useLocation } from 'react-router-dom'
import { getQuery } from "../../utils";
import { getInfoBlog } from '../../api/blog'
import { readBlog } from '../../api/blog'

export default function Detail (props) {
  const png = ''
  const [blog, setBlog] = useState({})

  const highlightCallBack = () => {
    document.querySelectorAll("pre, code").forEach(block => {
      try{hljs.highlightBlock(block);}
      catch(e){console.log(e);}
    });
  };

  const location = useLocation()

  const read = async () => {
    try {
      await readBlog({ id: getQuery(location).get('id')})
    } catch (e) {
      console.log(e)
    }
  }

  const getDetail = async () => {
    try {
      const data = await getInfoBlog({ id: getQuery(location).get('id')})
      setBlog(data.result)
    } catch (e) {
      // TODO 错误处理
      console.log(e)
    }
  }

  useEffect(() => {
    async function fetchData () {
      await getDetail()
      await read()
      highlightCallBack()
    }
    fetchData()
  }, [])

  return (
    <div className={`${style.detail}`}>
      <BlogHeader/>
      <div className={style.detailContent}>
        <div className={style.detailContentUser}>
          <Avatar img={png}/>
          <div className={style.detailContentUserCenter}>
            <p className={style['user-des']}>
              <span className={style['user-des-name']}>{formatter.userFormatter(blog.authorId)}</span>
            </p>
            <p className={style['article-des']}>
              <span className={style['article-des-time']}>{moment(blog.createTime).format('YYYY[年]MM[年]DD[日]')}</span>
              <span>阅读 {blog.read}</span>
            </p>
          </div>
          <Button plain>关注</Button>
        </div>

        {
          blog.img ? <div className={style['img']}>
            <img src={blog.img} alt='图片' />
          </div> : null
        }

        <h1 className={style.title}>{blog.title}</h1>

        <article className={`${style.detailContentArticle} markdown-body`}>
          <ReactMarkdown children={blog.content} />
        </article>
      </div>
    </div>
  )
}
