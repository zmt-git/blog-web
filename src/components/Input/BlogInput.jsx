import React, { useState } from 'react'
import style from './Input.module.scss'

export default function BlogInput (props) {
  const [value, setValue] = useState('')

  const [focus, setFocus] = useState(false)

  const oninput = (e) => {
    setValue(e.target.value)
    props.oninput(value, e)
  }

  const onfocus = (e) => {
    setFocus(true)
    props.onfocus && props.onfocus(e)
  }
  const onblur = (e) => {
    setFocus(false)
    props.onblur && props.onblur(e)
  }

  return (
    <div className={`${style.blogInput} ${focus ? style.blogInputFocus : ''} `} style={props.style}>
      { props.perfix ? <span
        className={`iconfont ${props.perfix} ${style.blogInputIcon}`}
        onClick={props.onPerfixClick}
      /> : null}
      <input
        type={props.type ? props.type : 'text'}
        placeholder={props.placeholder}
        className={style.blogInputInner}
        value={value}
        onInput={oninput}
        onFocus={onfocus}
        onBlur={onblur}
        onClick={props.onClick}
        onChange={props.onChange}
      />
      { props.suffix ? <span
        className={`iconfont ${props.suffix} ${style.blogInputIcon}`}
        onClick={props.onSuffixClick}
      /> : null}
    </div>
  )
}
