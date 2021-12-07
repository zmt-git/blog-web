import React, { useState } from 'react'
import style from './BlogHeader.module.scss'
import Button from "../Button/Button";
import BlogInput from '../Input/BlogInput'
import logo from '../../assets/img/blogger.png'
import { Link, useNavigate } from "react-router-dom";

export default function BlogHeader (props) {
  const navigate = useNavigate()
  const [searchValue, setSearchValue ] = useState('')

  const [showBtn, setShowBtn] = useState(true)

  const titleList = [
    { id: 1, title: '首页', path: '/' },
  ]

  const oninput = (value, e) => {
    setSearchValue(value)
  }

  const onfocus = () => { setShowBtn(false) }
  const onblur = () => { setShowBtn(true) }

  const onSearch = () => {}

  const onClick = () => {
    navigate({ pathname: '/writeArticle' })
  }
  return (
    <div className='border-bottom bg-white'>
      <div className={`${style.header}`}>
        <Link to='/'><img alt='logo' src={logo} className={style.logo} /></Link>
        <div className={style.content}>
          {titleList.map(title => (
            <Link key={title.id} className={style.contentItem} to={title.path}>{title.title}</Link>
          ))}
        </div>
        <div className={style.search}>
          <BlogInput
            onfocus={onfocus}
            onblur={onblur}
            value={searchValue}
            oninput={oninput}
            suffix='blog-web-search'
            onSuffixClick={onSearch}/>
          {showBtn ? <Button className={style.btn}  onClick={onClick}>写文章</Button> : null}
        </div>
        {/*<Button onClick={signIn} plain>登录</Button>*/}
      </div>
    </div>
  )
}
