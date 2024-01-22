import React from 'react'
import dice from '../assets/dices 1.png'
import Buttons from '../components/Buttons'
import { useNavigate, } from "react-router-dom";
import style from "../styles/page1.module.css"


export default function Page1() {
   
    const navigate = useNavigate();

    function handleClick(){
        navigate("/second");
    }
  return (
    <section className={style.container}>
        <img src={dice} alt='dice-img'/>
        <div className='right'>
            <p className={style.heading}>DICE GAME</p>
            <div className={style.button}>
            <Buttons text="Play Now" black={true} onClick={handleClick}/>
            </div>
        </div>
    </section>
  )
}
