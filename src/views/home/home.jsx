import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BlogHeader from "../../components/BlogHeader/BlogHeader";
import BlogType from '../../components/BlogType/BlogType'
import BlogInfo from "../../components/BlogInfo/BlogInfo";
import style from './home.module.scss'

import png1 from '../../assets/test/1.png'
import png2 from '../../assets/test/2.png'

export default function Home (props){
  const navigate = useNavigate()
  const [types, setTypes] = useState([
    { id: 1, name: 'web', children: [
        {id: 2, name: 'Vue.js'}, {id: 3, name: 'React.js'},
        {id: 4, name: 'Vue.js'}, {id: 7, name: 'React.js'},
        {id: 5, name: 'Vue.js'}, {id: 8, name: 'React.js'},
        {id: 6, name: 'Vue.js'}, {id: 9, name: 'React.js'},
      ]
    }
  ])

  const [blogs, setBlogs] = useState([
    {id: 1, title: '前端可视化', sign: '前端', img: png1, content: '对于我们前端开发来说，尤其是做数据可视化领域的同学，对于echarts的使用可以说是家常便饭，echarts可以帮助我们轻松的将数据用各种图形作展示，助力数据的可读性', createUser: '132', createTime: '昨天'},
    {id: 2, title: '前端可视化', sign: '前端', img: png2, content: '对于我们前端开发来说，尤其是做数据可视化领域的同学，对于echarts的使用可以说是家常便饭，echarts可以帮助我们轻松的将数据用各种图形作展示，助力数据的可读性', createUser: '132', createTime: '昨天'},
    {id: 3, title: '前端可视化', sign: '前端', img: png2, content: '对于我们前端开发来说，尤其是做数据可视化领域的同学，对于echarts的使用可以说是家常便饭，echarts可以帮助我们轻松的将数据用各种图形作展示，助力数据的可读性', createUser: '132', createTime: '昨天'},
    {id: 4, title: '前端可视化', sign: '前端', img: png2, content: '对于我们前端开发来说，尤其是做数据可视化领域的同学，对于echarts的使用可以说是家常便饭，echarts可以帮助我们轻松的将数据用各种图形作展示，助力数据的可读性', createUser: '132', createTime: '昨天'},
    {id: 5, title: '前端可视化', sign: '前端', img: png2, content: '对于我们前端开发来说，尤其是做数据可视化领域的同学，对于echarts的使用可以说是家常便饭，echarts可以帮助我们轻松的将数据用各种图形作展示，助力数据的可读性', createUser: '132', createTime: '昨天'},
    {id: 6, title: '前端可视化', sign: '前端', img: png2, content: '对于我们前端开发来说，尤其是做数据可视化领域的同学，对于echarts的使用可以说是家常便饭，echarts可以帮助我们轻松的将数据用各种图形作展示，助力数据的可读性', createUser: '132', createTime: '昨天'},
    {id: 7, title: '前端可视化', sign: '前端', img: png2, content: '对于我们前端开发来说，尤其是做数据可视化领域的同学，对于echarts的使用可以说是家常便饭，echarts可以帮助我们轻松的将数据用各种图形作展示，助力数据的可读性', createUser: '132', createTime: '昨天'},
    {id: 8, title: '前端可视化', sign: '前端', img: png2, content: '对于我们前端开发来说，尤其是做数据可视化领域的同学，对于echarts的使用可以说是家常便饭，echarts可以帮助我们轻松的将数据用各种图形作展示，助力数据的可读性', createUser: '132', createTime: '昨天'},
    {id: 9, title: '前端可视化', sign: '前端', img: png2, content: '对于我们前端开发来说，尤其是做数据可视化领域的同学，对于echarts的使用可以说是家常便饭，echarts可以帮助我们轻松的将数据用各种图形作展示，助力数据的可读性', createUser: '132', createTime: '昨天'},
    {id: 10, title: '前端可视化', sign: '前端', img: png2, content: '对于我们前端开发来说，尤其是做数据可视化领域的同学，对于echarts的使用可以说是家常便饭，echarts可以帮助我们轻松的将数据用各种图形作展示，助力数据的可读性', createUser: '132', createTime: '昨天'},
    {id: 11, title: '前端可视化', sign: '前端', img: png2, content: '对于我们前端开发来说，尤其是做数据可视化领域的同学，对于echarts的使用可以说是家常便饭，echarts可以帮助我们轻松的将数据用各种图形作展示，助力数据的可读性', createUser: '132', createTime: '昨天'},
    {id: 12, title: '前端可视化', sign: '前端', img: png2, content: '对于我们前端开发来说，尤其是做数据可视化领域的同学，对于echarts的使用可以说是家常便饭，echarts可以帮助我们轻松的将数据用各种图形作展示，助力数据的可读性', createUser: '132', createTime: '昨天'},
  ])

  const onClick = (e) => {
    console.log(e)
  }

  const toDetail = (e) => {
    navigate({ pathname: '/detail'})
  }

  return (
    <div className={style.home}>
      <BlogHeader/>
      <BlogType types={types} onClick={onClick}/>
      <div className={style.content}>
        { blogs.map(blog => (
          <BlogInfo onClick={toDetail} key={blog.id} blog={blog}/>
        ))}
      </div>
    </div>
  )
}
