import React from 'react'
import ReactDOM from 'react-dom'
import Message from "./Message";

class Msg {
  static instance

  constructor() {
    if (new.target !== Msg) {
      throw new Error('Message is not a function, you should be use new keyword')
    }

    if (Msg.instance) return Msg.instance

    this.ref = this.createDom()
  }

  createDom () {
    const ref = React.createRef()

    const msgDOMContainer = document.createElement('div')

    msgDOMContainer.classList.add('blog-msg-container')

    document.body.append(msgDOMContainer)

    ReactDOM.render(<Message ref={ref} />, msgDOMContainer)

    return ref
  }

  add (options, type) {
    this.ref.current.add({...options, type })
  }

  success (options) {
    this.add(options, 'success')
  }

  error (options) {
    this.add(options, 'error')
  }

  warning (options) {
    this.add(options, 'warning')
  }

  primary (options) {
    this.add(options, 'primary')
  }

  loading (options) {
    this.add(options, 'loading')
  }
}

export default new Msg()
