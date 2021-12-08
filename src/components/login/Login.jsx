import React from 'react'
import logo from "../../assets/img/blogger.png";
import BlogInput from "../Input/BlogInput";
import Button from "../Button/Button";
import Dialog from "../Dialog/Dialog";
import { login } from "../../api/system";
import message from '../../components/Message/msg'
import {setToken} from "../../utils/auth";
export default class Login extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  handleLogin = async () => {
    if (!this.state.username) {
      message.error({ message: '请输入用户名'})
      return
    }

    if (!this.state.password) {
      message.error({ message: '请输入密码'})
      return
    }

    try {
      const data = await login({ username: this.state.username, password: this.state.password })
      setToken(data.result.token)
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <Dialog>
        <header className='blog_login'>
          <img className='blog_login--logo' src={logo} />
          <p className='blog_login--title'>登录</p>
        </header>
        <BlogInput style={{ marginBottom: '15px'}} value={this.state.username} oninput={(e) => this.setState((state) => ({ username: e }))}/>
        <BlogInput style={{ marginBottom: '15px'}} value={this.state.username} oninput={(e) => this.setState((state) =>({ password: e }))} type='password'/>
        <Button className='width100' onClick={this.handleLogin}>登录</Button>
      </Dialog>
    )
  }
}
