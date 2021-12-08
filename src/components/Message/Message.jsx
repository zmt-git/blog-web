import React from 'react'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './Message.scss'
export default class Message extends React.Component {
  constructor(props) {
    super(props)
    this.id = 1
    this.state = {
      id: 0,
      messages: []
    }
  }

  getIcon (type) {
    switch (type) {
      case 'success' : return 'blog-web-msg--success'
      case 'error' : return 'blog-web-msg--error'
      case 'warning' : return 'blog-web-msg--warning'
      case 'primary' : return 'blog-web-msg--primary'
      case 'loading' : return 'blog-web-msg--loading'
      default : return 'blog-web-msg--primary'
    }
  }

  remove(message) {
    clearTimeout(message.timer)

    const m = this.state.messages.filter(item => item.id !== message.id)

    this.setState({ messages: m })
  }

  add (message) {

    message.id = this.id++

    message.timer = setTimeout(() => {
      this.remove(message)
    }, message.duration ? message.duration : 2500)

    this.state.messages.push(message)

    this.setState({ messages: this.state.messages })
  }

  render() {
    return (
      <ul className='blog_message_box'>
        <TransitionGroup>
          {
            this.state.messages.map(message =>
              <CSSTransition timeout={150} classNames="fade-top" key={message.id}>
                <li className='blog_message'>
                  <span className={`iconfont ${this.getIcon(message.type)}`} />
                  <span className='blog_title'>{message.message}</span>
                  {
                    message.close ? <span onClick={this.remove(message)} className='iconfont blog-web-close'/> : null
                  }
                </li>
              </CSSTransition>
            )
          }
        </TransitionGroup>
      </ul>
    )
  }
}
