import React, { useState } from 'react'
import Editor from 'for-editor'
import style from './writeArticle.module.scss'
import logo from '../../assets/img/blogger.png'
import { useNavigate } from 'react-router-dom'
import { createBlog } from "../../api/blog";
import Button from "../../components/Button/Button";
import messge from '../../components/Message/msg'
export default function WriteArticle () {
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')
  const navigate = useNavigate()
  const handleInput = (value) => { setTitle(value.target.value) }
  const handleChange = (value) => { setContent(value) }
  const publish = async () => {
    try {
      await createBlog({ title, content })
      messge.success({ message: '发布成功'})
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className={style['write-article']}>
      <div className={style['write-article-header']}>
        <img src={logo} onClick={() => navigate('/')} alt='logo' className={style['write-article-header-logo']}/>
        <input value={title} placeholder='请输入标题' onInput={handleInput} className={style['write-article-header-title']}/>
        <Button onClick={publish}>发布</Button>
      </div>
      <Editor value={content} onChange={(value) => handleChange(value)} height="100%" />
    </div>
  )
}
