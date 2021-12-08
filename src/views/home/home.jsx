import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import BlogHeader from "../../components/BlogHeader/BlogHeader";
import BlogType from '../../components/BlogType/BlogType'
import BlogInfo from "../../components/BlogInfo/BlogInfo";
import style from './home.module.scss'
import { getAllCategory } from '../../api/category'
import { pageBlog } from "../../api/blog";
import {arrayToTree} from "../../utils";
import formatter from "../../fomatter/formatter";
export default function Home (props){
  const navigate = useNavigate()

  const [categories, setCategories] = useState([])

  const [blogs, setBlogs] = useState([])

  const getCategories = async () => {
    try {
      const data = await getAllCategory()

      const categories = arrayToTree(data.result)

      formatter.setCategories(categories)

      setCategories(categories)
    } catch (e) {
      console.log(e)
    }
  }

  const pageBlogs = async () => {
    try {
      const data = await pageBlog({ pageSize: 20, current: 1 })

      const b = [...data.result.data]

      setBlogs(b)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    async function fetchData() {
      await formatter.getUsers()
      await getCategories()
      await pageBlogs()
    }
    fetchData()
  }, [])

  const onClick = (e) => {
    if (e.children.length > 0) return

    console.log(e)
  }

  const toDetail = (e) => {
    navigate({ pathname: `/detail?id=${e.id}`})
  }

  return (
    <div className={style.home}>
      <BlogHeader/>
      <BlogType types={categories} onClick={onClick}/>
      <div className={style.content}>
        { blogs.map(blog => (
          <BlogInfo onClick={toDetail} key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  )
}
