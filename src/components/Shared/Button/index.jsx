import React from 'react'
const Button = ({icon, content, color, background, onClick, type}) => {
  return (
    <button
    style={{
        color: color,
        background: background
    }}
    type={type}
    onClick={onClick}
    >
        {icon}
        {content}
    </button>
  )
}

export default Button