import React from 'react'
import ReactDOM from 'react-dom'
import Button from "../Button/Button";
import './Dialog.scss'
import { CSSTransition } from "react-transition-group";

export default class Dialog extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return ReactDOM.createPortal((
      <CSSTransition classNames='fade' timeout={150}>
        <div className='blog_dialog'>
          <div className='blog_dialog_inner' style={{ width: `${this.props.width ? this.props.width + 'px' : '30%'}` }}>
            {
              this.props.title ?
                <header className='blog_dialog_inner--header'>{this.props.title}</header> :
                null
            }
            <section className='blog_dialog_inner--section'>{this.props.children}</section>
            {
              this.props.footer ?
                <footer className='blog_dialog_inner--footer'>
                  <Button>确认</Button>
                  <Button>取消</Button>
                </footer> :
                null
            }
          </div>
        </div>
      </CSSTransition>
    ), document.body)
  }
}
