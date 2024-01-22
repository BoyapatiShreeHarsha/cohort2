import React,{ useState, useEffect } from 'react'
import Header from '../components/Header'
import Body from '../components/Body';

export default function Page2() {
    const [score, setScore] = useState(0);
    const [selected, setSelected] = useState(0);
    const [number, setNumber] = useState(0);
    const [alert, setAlert] = useState(false);

    useEffect(() => {
      if(number==selected)
      {
        setScore(prev=>prev+number)
      }
      else
      {
        setScore(prev=>prev-2);
      }
      
    setSelected(0);
    }, [number])
    
  return (
    <>
    <Header score={score} selected={selected} setSelected={setSelected} alert={alert}/>
    <Body setScore={setScore} number={number} setNumber={setNumber} setAlert={setAlert} selected={selected}/>
    </>
  )
}
