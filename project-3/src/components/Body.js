import React,{ useState } from 'react'
import style from '../styles/body.module.css'
import Buttons from './Buttons'
import d1 from "../assets/1.png"
import d2 from "../assets/2.png"
import d3 from "../assets/3.png"
import d4 from "../assets/4.png"
import d5 from "../assets/5.png"
import d6 from "../assets/6.png"

export default function Body({setScore,number,setNumber,setAlert,selected}) {

    let arr=[d1,d2,d3,d4,d5,d6];
    const [display, setDisplay] = useState(false);
    function handleClick1(){
        setScore(0);
    }

    function handleClick2(){
        setDisplay(prev=>!prev);
    }

    function handleClick3(){
        // console.log("clicked");
        if(selected==0)
        {
            setAlert(true);
            return;
        }
        setAlert(false);
        let a=Math.floor(Math.random() * 6)+1;
        setNumber(a);
    }
  return (
    <>
    <section className={style.center}>
        <div className={style.top}>
            {(number==0) && <img src={d4} alt="4" key={0} onClick={handleClick3} className={style.image}/>}
            {
                arr.map((ele,i)=>{
                    return ( (number==i+1) && <img src={ele} alt={i+1} key={i+1} onClick={handleClick3} className={style.image}/>)
                })
            }
            <p>Click on Dice to roll</p>
        </div>
        <div className={style.bottom}>
            <Buttons text="Reset Score" black={false} onClick={handleClick1}/>
            <Buttons text="Show Rules" black={true} onClick={handleClick2}/>
        </div>

    </section>

    { display && <section className={style.alert1}>
        <p className={style.heading}>
        How to play dice game
        </p>
        <p>Click on dice image</p>
        <p>after click on dice if selected number is equal to dice number you will get same point as dice</p>
        <p>if you get wrong guess then 2 point will be dedcuted</p>
    </section>}
    </>
  )
}
