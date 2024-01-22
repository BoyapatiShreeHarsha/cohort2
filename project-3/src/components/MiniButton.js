import React from 'react'
import style from '../styles/miniButton.module.css'

export default function MiniButton({text,selected,setSelected}) {
    function handleClick(){
        setSelected(text);
    }
  return (
    <div>
      <button onClick={handleClick} className={selected==text?style.button_black:style.button_white}>{text}</button>
    </div>
  )
}
