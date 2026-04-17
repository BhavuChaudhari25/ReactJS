import React from 'react'
import styles from './Button.module.css'

const Button = ({ children, onClick, disabled, variant = 'primary', ...props }) => {
  return (
    <button 
      className={`${styles.btn} ${styles[variant]}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children || 'Click me'}
    </button>
  )
}

export default Button
