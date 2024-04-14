import React from 'react'
import './Button.css';

const Button = ({text, type, onClick}) => {

    // 버튼 타입 : 등록, 삭제, 수정
  return (
    <button 
    className={`btn btn_${type}`}
    onClick={onClick}>
    {text}</button>
  )
}

export default Button