import React from 'react'

export default function Cards({name,des,interest,linkedIn,twitter}) {
  
  return (
    <div className='card'>
      <h3 className="name">{name}</h3>
      <div className="des">{des}</div>
      <h3 className="interest">Interest</h3>
      {
        interest.map((ele,i)=>{
          return <p className='interest child' key={i}>{ele}</p>
        })
      }
      <div className="last">
        <a href={linkedIn} >linkedIn</a>
        <a href={twitter}>twitter</a>
      </div>
    </div>

  )
}
