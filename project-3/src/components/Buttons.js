import React from 'react'
import styles from '../styles/buttons.module.css'

export default function Buttons({text,black,...rest}) {
  return (
    <button {...rest} className={black?`${styles.button_black}`:`${styles.button_white}`}>{text}</button>
  )
}
